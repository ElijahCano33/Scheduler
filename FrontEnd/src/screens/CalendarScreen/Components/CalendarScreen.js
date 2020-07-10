import React, {Component} from 'react';
import { Alert, StatusBar, TextInput, View, TouchableHighlight, TouchableWithoutFeedback, Keyboard, FlatList, Text, Image, Modal, TouchableOpacity, ImageBackground} from 'react-native';
import styles from '../Styles/CalendarScreenStyles.js';
import {createAppContainer} from 'react-navigation';
import {createStackNavigator} from 'react-navigation-stack';
import {createBottomTabNavigator } from "react-navigation-tabs";
import SearchScreen from '../../Search/Components/SearchScreen.js';
import AddScreen from '../../Add/Components/AddScreen.js';
import FriendsScreen from '../../Friends/Components/FriendsScreen.js';
import NotificationsScreen from '../../Notifications/Components/NotificationsScreen.js';
import FriendsCalendarScreen from '../../FriendsCalendar/Components/FriendsCalendarScreen.js';
import Ionicons from 'react-native-vector-icons/Ionicons';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import TabBar from './TabBar.js';
import UpcomingEventBox from './UpcomingEventBox.js';
import {CalendarList} from 'react-native-calendars';
import axios from "axios";

class CalendarScreen extends Component{
  mounted = false;
  
  constructor(props) {
    super(props)

    this.state = {
      modalVisible: false,
      userId: 0,
      friend: '',
      singleDayEvent: false,
      hideEvent: false,
      eventStartDate: '',
      eventEndDate: '',
      eventDescription: '',
      eventAlert: '',
      currentYearUserEvents: [],
      currentMonthUserEvents: [],
      upcomingUserEvents: [], 
      markedEvents: {},
      tempAnnualEvents: []
    }

    this.willFocusListener = this.props.navigation.addListener('willFocus', () => {
      this.componentWillFocus();
    });
    this.didBlurListener = this.props.navigation.addListener('didBlur', () => {
      this.componentDidBlur();
    });

  }

  componentWillFocus() {
    console.log(this.props);
    if(this.props.navigation.state.params !== undefined){
      let userId = this.state.userId;
      let today = new Date();
      let year = today.getFullYear().toString();
      let month = (today.getMonth()+1).toString();

      if (month < 10) month = "0" + month;
      
      this.fetchMonthEvents(userId, month, year);
      this.fetchAnnualEvents(userId, year);
    }else{
      console.log("Did not come from the create event screen and create event!")
    }
    
  }

  componentDidBlur() {
    console.log("Screen No Longer In Focus!");
  }

  fetchUserId(usrId, m, y){
    axios({
      method: 'post',
      url: 'http://192.168.68.1:5000/api/userId',
    })
    .then((response) => {
      this.setState({userId: response['data']['user_id']});
      usrId = this.state.userId;
      this.fetchMonthEvents(usrId, m, y);
      this.fetchAnnualEvents(usrId, y);
    }, (error) => {
          
      console.log(error);
    });
  }

  fetchMonthEvents(usrId, m, y){
    axios({
      method: 'post',
      url: 'http://192.168.68.1:5000/api/event/read',
      data: {user_id: usrId, request_type: "month", month: m, year: y, fetch_friend_events: false}
    })
    .then((response) => {
      this.setState({currentMonthUserEvents: response['data']['events']});
      this.filterMonthEvents();
    }, (error) => {
        console.log(error);
    });
  }

  fetchAnnualEvents(usrId, y){
    axios({
      method: 'post',
      url: 'http://192.168.68.1:5000/api/event/read',
      data: {user_id: usrId, request_type: "year", year: y, fetch_friend_events: false}
    })
    .then((response) => {
      this.setState({currentYearUserEvents: response['data']['events']});
      this.markCalendarWithSingleEvents();
    },(error) => {
      console.log(error);
    });
  }

  componentDidMount(){
    this.mounted = true;

    let userId = 0;
    let today = new Date();
    let year = today.getFullYear().toString();
    let month = (today.getMonth()+1).toString();
    if (month < 10) month = "0" + month;
    this.fetchUserId(userId, month, year);
    
  }

  componentWillUnmount() {
    this.mounted = false;
  }

  onToggle(event) {
    console.log("Changed to " + event);
  }

  markCalendarWithMultiEvents(events){
    let sameDayEvents = {};
    let repeatingDays = [];

    for(var key in events){
      if(key.includes('_')){
        let repeatedDay = key;
        repeatingDays.push(repeatedDay);
        let originalDay = key.substring(0, 10);

        if(originalDay in sameDayEvents){
          sameDayEvents[originalDay].push(events[repeatedDay]);
        }else{
          sameDayEvents[originalDay] = [];
          sameDayEvents[originalDay].push(events[repeatedDay]);
          
          if (!(originalDay in repeatingDays)){
            sameDayEvents[originalDay].push(events[originalDay]);
            repeatingDays.push(originalDay);
          }
        }
      } 
    }

    for(var i =0; i < repeatingDays.length; i++){
      delete events[repeatingDays[i]];
    }

    for(var day in sameDayEvents){
      for(var i =0; i < sameDayEvents[day].length; i++){
        i === 0 ? events[day] = sameDayEvents[day][0] : events[day]['dots'].push(sameDayEvents[day][i]['dots'][0]);
      }
    }
    this.setState({markedEvents: events});
  }

  markCalendarWithSingleEvents(){
    let events = this.state.currentYearUserEvents;
    let eventTitle = '';
    let eventDay = '';
    let randomColor = ''
    let markedDay = {};
    let markedEvents = {};
    let daysCounter = {};
    let today = new Date();
    let month = today.getMonth() + 1;
    let day = today.getDate();

    if (month < 10) month = '0' + month.toString();
    if (day < 10) day = '0' + day.toString();


    today = today.getFullYear().toString() + "-" + month + "-" + day;

    for(var i = 0; i < events.length; i++){
      randomColor = this.generateRandomColor();
      for(var eventInfo in events[i]){
        if (eventInfo === 'title') eventTitle = events[i][eventInfo];
        if (eventInfo === 'startDate') eventDay = events[i][eventInfo];
      }

      eventDay in daysCounter ? daysCounter[eventDay] += 1 : daysCounter[eventDay] = 1;
      markedDay = {key: eventTitle, color: randomColor};

      if (eventDay in markedEvents){
        let repeatingNumber = '_' + daysCounter[eventDay].toString(); 
        eventDay += repeatingNumber;
        markedEvents[eventDay] = {dots: [markedDay], selected: true, marked: true, selectedColor: 'black'};
      }else{
        markedEvents[eventDay] = {dots: [markedDay], selected: true, marked: true, selectedColor: 'black'};
      }
      
    }

    this.markCalendarWithMultiEvents(markedEvents);
  }

  generateRandomColor(){
    color = "hsl(" + Math.random() * 360 + ", 100%, 75%)";
    return color;
  }


  filterMonthEvents(){
    let today = new Date();
    let year = today.getFullYear().toString();
    let month = (today.getMonth()+1).toString();
    let day = today.getDate();
    let hours = today.getHours();
    let minutes = today.getMinutes();
    let seconds = today.getSeconds();
    let upcomingEvents = [];
    let monthEvents = this.state.currentMonthUserEvents;

    if (month < 10) month = "0" + month;
    if (day < 10 ) day = "0" + day;
    if (hours < 10) hours = "0" + hours;
    if (minutes < 10) minutes = "0" + minutes;
    if (seconds < 10) seconds = "0" + seconds;

    let currentDay = year + "-" + month + "-" + day + " ";
    let currentTime = hours + ":" + minutes + ":" + seconds;
    let currentDate = currentDay + currentTime;

    for(var i = 0; i < monthEvents.length; i++){
      let event = monthEvents[i]['endDate'] + " " + monthEvents[i]['endTIme'];
      if(event >= currentDate) upcomingEvents.push(monthEvents[i]);
    }

    this.setState({upcomingUserEvents: upcomingEvents});

  }

  navigateToEventSscreen(day){
    let annualEvents = this.state.currentYearUserEvents;
    annualEvents.push(day);

    this.setState({tempAnnualEvents: annualEvents}, function() {
      this.props.navigation.navigate('EventScreen', {data: this.state.tempAnnualEvents});
      this.setState({tempAnnualEvents: []});
    });
  }

  navigateToCreateEventsScreen(){
    this.props.navigation.navigate('CreateEventScreen', {data: this.state.userId});
  }

  render() {
    return (
      <ImageBackground source={require('../../../../pics/fade.jpg')} style={styles.fadeBackground}>

        <StatusBar hidden/>

        <Image
          style={styles.logo}
          source={require('../../../../pics/scriptscheduler.png')}
        />
  
        <View style={styles.calendarList}>
          <CalendarList
            theme={{
              calendarBackground: 'transparent',
              textSectionTitleColor: 'black',
              selectedDayBackgroundColor: 'black',
              selectedDayTextColor: 'white',
              todayTextColor: 'white',
              dayTextColor: 'white',
              textDisabledColor: 'white',
              dotColor: 'red',
              selectedDotColor: 'orange',
              arrowColor: 'black',
              monthTextColor: 'white',
              indicatorColor: 'blue',
              textDayFontFamily: 'sans-serif-thin',
              textMonthFontFamily: 'sans-serif-thin',
              textDayHeaderFontFamily: 'sans-serif-thin',
              textDayFontWeight: 'bold',
              textMonthFontWeight: 'bold',
              textDayHeaderFontWeight: 'bold',
              textDayFontSize: 15,
              textMonthFontSize: 30,
              textDayHeaderFontSize: 15,
              textMonthFontWeight: 'bold',
              textDayFontWeight: 'bold', 
            }}
            pastScrollRange={5}
            futureScrollRange={5}
            scrollEnabled={false}
            hideArrows={false}
            horizontal={true}
            onDayPress={(day) => this.navigateToEventSscreen(day)}
            pagingEnabled={true}
            calendarWidth={395}
            calendarHeight={380}
            markedDates={this.state.markedEvents}
            markingType={'multi-dot'}
          />
        </View>
        

        <TouchableOpacity style={styles.createEventsButton} onPress={() => this.navigateToCreateEventsScreen()}>
          <MaterialIcons name="add" color='#FF1DCE' size={50} style={styles.additionIcon} />
        </TouchableOpacity>
      
        {this.state.upcomingUserEvents.length !== 0 ? 

          <View style={styles.upcomingEventsView}>
            <Text style={styles.upcomingEventsText}>Upcoming Events</Text>

            <View style={styles.upcomingEventsList}>
              <FlatList
                  data={this.state.upcomingUserEvents}
                  horizontal={true}
                  keyExtractor={item => item.ID}
                  renderItem={({ item }) => (<UpcomingEventBox title={item.title} description={item.description} startDay={item.startDate} startTime={item.startTime} endDay={item.endDate} endTime={item.endTIme}/>)}
              />
            </View> 
          </View>

          : 

          <Text style={styles.noUpcomingEventsText}>No Upcoming Events</Text>

        }             
      </ImageBackground>  
      );
    }
}

const FriendNavigator = createStackNavigator(
  {
    FriendsScreen: FriendsScreen,
    FriendsCalendarScreen: FriendsCalendarScreen
  }, 
  {
    initialRouteName: 'FriendsScreen',
    headerMode: 'none',
  }
);

const TabNavigator = createBottomTabNavigator(
  {
    Calendar: {
      screen: CalendarScreen,
      navigationOptions: {
        tabBarLabel:() => {return null},
        tabBarIcon: ({ tintColor }) => <FontAwesome name="calendar" color={tintColor} size={25} style={styles.tabNavigatorIcon}/>
      },
    },
    Search: {
      screen: SearchScreen,
      navigationOptions: {
        tabBarLabel:() => {return null},
        tabBarIcon: ({ tintColor }) => <FontAwesome name="search" color={tintColor} size={25} style={styles.tabNavigatorIcon}/>
      }
    },
    Add: {
      screen: AddScreen,
      navigationOptions: {
        tabBarLabel:() => {return null},
        tabBarIcon: ({ tintColor }) => <MaterialIcons name="add" color={tintColor} size={35} style={styles.tabNavigatorIcon}/>
      }
    },
    Friends: {
      screen: FriendNavigator,
      navigationOptions: {
        tabBarLabel:() => {return null},
        tabBarIcon: ({ tintColor }) => <FontAwesome5 name="user-friends" color={tintColor} size={25} style={styles.tabNavigatorIcon}/>
      }
    },
    Notifications: {
      screen: NotificationsScreen,
      navigationOptions: {
        tabBarLabel:() => {return null},
        tabBarIcon: ({ tintColor }) => <Ionicons name="ios-notifications" color={tintColor} size={35} style={styles.tabNavigatorIcon}/>
      }
    }
  },
  {
    tabBarComponent: TabBar,
    tabBarOptions: {
      activeTintColor: '#4F4F4F', 
      showIcon: true

    }
  },
);

export default createAppContainer(TabNavigator);
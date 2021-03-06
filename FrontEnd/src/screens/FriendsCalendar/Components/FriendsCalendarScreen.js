import React, {Component} from 'react';
import { Alert, StatusBar, TextInput, View, TouchableHighlight, TouchableWithoutFeedback, Keyboard, FlatList, Text, Image, Modal, TouchableOpacity, ImageBackground} from 'react-native';
import styles from '../Styles/FriendsCalendarScreenStyles.js';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import UpcomingEventBox from './UpcomingEventBox.js';
import {CalendarList} from 'react-native-calendars';
import axios from "axios";
import ToggleSwitch from 'toggle-switch-react-native';
import {API_URL} from "@env";
import Feather from 'react-native-vector-icons/Feather';

export default class FriendsCalendarScreen extends Component{
  constructor(props) {
    super(props)

    this.state = {
      modalVisible: false,
      friendId: 0,
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
    if(this.props.navigation.state.params !== undefined && this.state.friendId !== undefined){
      let friendId = this.state.friendId;
      let today = new Date();
      let year = today.getFullYear().toString();
      let month = (today.getMonth()+1).toString();

      if (month < 10) month = "0" + month;
      
      this.fetchMonthEvents(friendId, month, year);
      this.fetchAnnualEvents(friendId, year);
    }else{
      console.log("Did not come from the create event screen!")
    }
    
  }

  componentDidBlur() {
    console.log("Screen No Longer In Focus!");
  }

  fetchFriendId(friendId, m, y){
    let friendEmail = this.props['navigation']['state']['params']['email'];
    let url = API_URL + 'api/friendId';
    
    axios({
      method: 'post',
      url: url,
      data: {friend: friendEmail}
    })
    .then((response) => {
      this.setState({friendId: response['data']['friend_id']});
      friendId = this.state.friendId;
      this.fetchMonthEvents(friendId, m, y);
      this.fetchAnnualEvents(friendId, y);
    }, (error) => {
          
      console.log(error);
    });
  }

  fetchMonthEvents(friendId, m, y){
    let url = API_URL + 'api/event/read';
    axios({
      method: 'post',
      url: url,
      data: {user_id: friendId, request_type: "month", month: m, year: y}
    })
    .then((response) => {
      this.setState({currentMonthUserEvents: response['data']['events']});
      this.filterMonthEvents();
    }, (error) => {
        console.log(error);
    });
  }

  fetchAnnualEvents(friendId, y){
    let url = API_URL + 'api/event/read';
    axios({
      method: 'post',
      url: url,
      data: {user_id: friendId, request_type: "year", year: y}
    })
    .then((response) => {
      this.setState({currentYearUserEvents: response['data']['events']});
      this.markCalendarWithSingleEvents();
    },(error) => {
      console.log(error);
    });
  }

  componentDidMount(){
    let friendId = 0;
    let today = new Date();
    let year = today.getFullYear().toString();
    let month = (today.getMonth()+1).toString();
    if (month < 10) month = "0" + month;
    this.fetchFriendId(friendId, month, year);
    
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

    for(var i = 0; i < repeatingDays.length; i++){
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
        eventDay.substring(0, 10) === today ? markedEvents[eventDay] = { dots: [markedDay], selected: true, color: 'black', marked: true} : markedEvents[eventDay] = {dots: [markedDay], marked: true};
      }else{
        eventDay === today ? markedEvents[today] = { dots: [markedDay], selected: true, color: 'black', marked: true} : markedEvents[eventDay] = {dots: [markedDay], marked: true};
      }
      
    }
    
    if (markedEvents[today] === undefined) markedEvents[today] = {selected: true, color: 'black', marked: true};

    this.markCalendarWithMultiEvents(markedEvents);
    
  }

  generateRandomColor(){
    return 'hsla(' + Math.floor(Math.random()*360) + ', 100%, 70%, 1)';
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
    this.props.navigation.navigate('CreateEventScreen', {data: this.state.userId, friendId: this.state.friendId, friendName: this.props['navigation']['state']['params']['firstName']});
  }

  render() {
    let today = new Date();
    let month = today.getMonth() + 1;
    let day = today.getDate();
    let noMarkedEvents = {};

    if (month < 10) month = '0' + month.toString();
    if (day < 10) day = '0' + day.toString();
    
    today = today.getFullYear().toString() + "-" + month + "-" + day;
    noMarkedEvents[today] = {selected: true, marked: true, color: 'black'};
    
    return (
      <ImageBackground source={require('../../../../pics/fade.jpg')} style={styles.fadeBackground}>

        <StatusBar hidden/>

        <Image style={styles.logo} source={require('../../../../pics/scriptscheduler.png')}/>

        <TouchableOpacity style={styles.xIcon} onPress={()=> {this.props.navigation.navigate('FriendsScreen')}}>
          <Feather name="x" color={'black'} size={30}/>
        </TouchableOpacity>

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
            markedDates={Object.keys(this.state.markedEvents).length === 0 ? noMarkedEvents : this.state.markedEvents}
            markingType={'multi-dot'}
          />
        </View>
        

        <TouchableOpacity style={styles.createEventsButton} onPress={() => this.navigateToCreateEventsScreen()}>
          <MaterialIcons name="add" color='#FF1DCE' size={50} style={styles.additionIcon} />
        </TouchableOpacity>
      
        {this.state.upcomingUserEvents.length !== 0 
          ? 

          <View style={styles.upcomingEventsView}>
            <Text style={styles.upcomingEventsText}>{this.props['navigation']['state']['params']['firstName']}'s Upcoming Events</Text>

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

          <Text style={styles.noUpcomingEventsText}>{this.props['navigation']['state']['params']['firstName']} Has No Upcoming Events</Text>

        }             
      </ImageBackground>  
      );
    }   
}
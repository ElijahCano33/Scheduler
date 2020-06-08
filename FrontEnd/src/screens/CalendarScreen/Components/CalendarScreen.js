import React, {Component} from 'react';
import { Alert, StatusBar, TextInput, StyleSheet, View, TouchableHighlight, TouchableWithoutFeedback, Keyboard, SafeAreaView, FlatList, Text, Image, Modal, TouchableOpacity, ImageBackground} from 'react-native';
import styles from '../Styles/CalendarScreenStyles.js';
import { createAppContainer} from 'react-navigation';
import {createBottomTabNavigator } from "react-navigation-tabs";
import SearchScreen from '../../Search/Components/SearchScreen.js';
import AddScreen from '../../Add/Components/AddScreen.js';
import FriendsScreen from '../../Friends/Components/FriendsScreen.js';
import NotificationsScreen from '../../NotificationsScreen/Components/NotificationsScreen.js';
import Icon from './Icon.js';
import Ionicons from 'react-native-vector-icons/Ionicons';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import TabBar, {tabBar} from './TabBar.js';
import UpcomingEventBox from './UpcomingEventBox.js';
import {Calendar, CalendarList, Agenda} from 'react-native-calendars';
import Arrow from './Arrow.js';
import axios from "axios";
import ToggleSwitch from 'toggle-switch-react-native';

const EVENTS = [
  {
    id: 1,
    day: 'June 5th, 2020',
    time: '3:00-5:00pm',
    event: 'Birthday',
  },
  {
    id: 2,
    day: 'June 5th, 2020',
    time: '3:00-5:00pm',
    event: 'Anniversary'
  },
  {
    id: 3,
    day: 'June 5th, 2020',
    time: '3:00-5:00pm',
    event: 'Wedding',
  },
  {
    id: 4,
    day: 'June 5th, 2020',
    time: '3:00-5:00pm',
    event: 'Interview'
  },
  {
    id: 5,
    day: 'June 5th, 2020',
    time: '3:00-5:00pm',
    event: 'Picnic'
  },
  {
    id: 6,
    day: 'June 5th, 2020',
    time: '3:00-5:00pm',
    event: 'Business',
  },
  {
    id: 7,
    day: 'June 5th, 2020',
    time: '3:00-5:00pm',
    event: 'Dinner'
  }
]

class CalendarScreen extends Component{
  constructor(props) {
    super(props)

    this.state = {
        calendarIconPressed: false,
        searchBarIconPressed: false,
        addIconPressed: false,
        friendsIconPressed: false,
        notificationsIconPressed: false,
        modalVisible: false,
        userId: 0,
        friend: '',
        singleDayEvent: false,
        eventStartDate: '',
        eventEndDate: '',
        eventDescription: '',
        eventAlert: '',
        userEvents: [],
        markedEvents: {}
    }
  }

  componentDidMount(){
    axios({
        method: 'post',
        
        url: 'http://192.168.68.1:5000/api/userId',
    })
    .then((response) => {
        this.setState({userId: response['data']['user_id']});
        console.log("this is the user's id: " + this.state.userId);

        let userId = this.state.userId;
        let today = new Date();
        let year = today.getFullYear().toString();

        axios({
          method: 'post',
          
          url: 'http://192.168.68.1:5000/api/event/read',
          data: {
            user_id: userId,
            request_type: "year",
            year: year
          }
        })
        .then((response) => {
          this.setState({userEvents: response['data']['events']});
          this.markCalendarWithUserEvents();
    
        }, (error) => {
          
            console.log(error);
        });
        
    }, (error) => {
        console.log(error);
    });
    
}

  changeCalendarIconState(){
    this.setState({calendarIconPressed: !calendarIconPressed});
  }

  onToggle(singleDayEvent) {
    console.log("Changed to " + singleDayEvent);
  }

  markCalendarWithUserEvents(){
    let events = this.state.userEvents;
    let eventTitle = '';
    let eventDay = '';
    let randomColor = ''
    let markedDay = {};
    let markedEvents = {};

    for(var i = 0; i < events.length; i++){
      randomColor = this.randColor();
      for(var eventInfo in events[i]){
        if (eventInfo === 'title') eventTitle = events[i][eventInfo];
        if (eventInfo === 'startDate') eventDay = events[i][eventInfo];

        markedDay = {key: eventTitle, color: randomColor};

      }
      markedEvents[eventDay] = {dots: [markedDay]};
    }

    this.setState({markedEvents: markedEvents});
  }

  randColor() {
    for (var i=0, col=''; i<6; i++) {
        col += (Math.random()*16|0).toString(16);
    }
    return '#'+col;
}


  createEvent() {
    let userId = this.state.userId;
    let eventTitle = this.state.eventTitle;
    let description = this.state.eventDescription;
    let location = 'Hunter College';
    let startDate = this.state.eventStartDate.toString().substring(0, 10);
    let endDate = this.state.eventEndDate.toString().substring(0, 10);
    let startTime = this.state.eventStartDate.toString().substring(11, 19);
    let endTime = this.state.eventEndDate.toString().substring(11, 19);

    axios({
      method: 'post',
      
      url: 'http://192.168.68.1:5000/api/event',

      data: {
        user_id: userId,
        event_title: eventTitle,
        description: description,
        location: location,
        starting_date: startDate,
        ending_day: endDate,
        starting_time: startTime,
        ending_time: endTime
      }
    })
    .then((response) => {
      this.setState({eventAlert: response['data']['status_info']});
      Alert.alert(this.state.eventAlert);
        
    }, (error) => {
        console.log(error);
    });
  }

  render() {
    const today = new Date();
    const currentYear = today.getFullYear();
    let currentMonth = today.getMonth()+1;
    let currentDay = today.getDay();
    if (currentMonth < 10) currentMonth = '0' + currentMonth;
    if (currentDay < 10) currentDay = '0' + currentDay;
    const todayISOFormat = currentYear + "-"  + currentMonth + "-" + currentDay;
    let markedDay = {};

    const vacation = {key:'vacation', color: 'red', selectedDotColor: 'red'};
    const massage = {key:'massage', color: 'blue', selectedDotColor: 'orange'};
    const workout = {key:'workout', color: 'green'};

    markedDay[todayISOFormat] = {dots: [vacation, massage, workout], selected: true, selectedColor: 'black'};
    markedDay['2020-06-10'] = {dots: [vacation, massage, workout]};
    markedDay['2020-06-12'] = {dots: [vacation, massage, workout]};
    markedDay['2020-06-15'] = {dots: [vacation, massage, workout]};
    markedDay['2020-06-18'] = {dots: [vacation, massage, workout]};
    markedDay['2020-06-21'] = {dots: [vacation, massage, workout]};
    markedDay['2020-06-24'] = {dots: [vacation, massage, workout]};
    markedDay['2020-06-26'] = {dots: [workout]};
    markedDay['2020-06-30'] = {dots: [vacation, massage]};
    
    var EVENTO = JSON.stringify(markedDay);
    console.log("this is the evento: " + EVENTO);

    return (
      <ImageBackground source={require('../../../../pics/fade.jpg')} style={styles.fadeBackgroundStyles}>
        <StatusBar hidden/>
        <Image
            style={styles.logo}
            source={require('../../../../pics/scriptscheduler.png')}
        />
  
        <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
          <Modal
              animationType="fade"
              transparent={true}
              visible={this.state.modalVisible}
              onRequestClose={() => {
              Alert.alert("Modal has been closed.");
              }}
            >
              <View style={styles.centeredView}>
                  <View style={styles.modalView}>
                      <Text style={{fontWeight: 'bold', fontSize: 20, color: 'black', top: '3%', position: 'absolute', fontFamily: 'sans-serif-thin'}}>Create A New Event</Text>
                  
                  <TextInput
                      placeholder="Event Title: "
                      placeholderTextColor='grey'
                      style={styles.input2}
                      onChangeText={(eventTitle) => this.setState({eventTitle})}
                  />

                  <TextInput
                    placeholder="Event Description: "
                    placeholderTextColor='grey'
                    style={styles.eventDescriptionInput}
                    onChangeText={(eventDescription) => this.setState({eventDescription})}
                  />

                  <View style={{position: 'absolute', top: '60%', left: '8%'}}>
                    <ToggleSwitch
                      isOn={this.state.singleDayEvent}
                      onColor="green"
                      offColor="grey"
                      label="Single Day Event"
                      labelStyle={{ color: "grey", fontWeight: "bold", fontFamily: 'sans-serif-thin', fontSize: 14 }}
                      size="small"
                      onToggle={singleDayEvent => {
                        this.setState({ singleDayEvent });
                        this.onToggle(singleDayEvent);
                      }}
                    />
                  </View>

                  <TextInput
                    placeholder="Start Date: 'YYYY-MM-DD HH:MM:SS' "
                    placeholderTextColor='grey'
                    style={styles.startDateInput}
                    onChangeText={(eventStartDate) => this.setState({eventStartDate})}
                  />

                  <TextInput
                    placeholder="End Date: 'YYYY-MM-DD HH:MM:SS' "
                    placeholderTextColor='grey'
                    style={styles.endDateInput}
                    onChangeText={(eventEndDate) => this.setState({eventEndDate})}
                  />

                  <TouchableHighlight
                      style={{ ...styles.openButton, backgroundColor: "red" }}
                      onPress={() => {
                        this.setState({modalVisible: false}, this.createEvent())
                      }}
                  >
                  
                      <Text style={styles.textStyle2}>Submit</Text>
                  </TouchableHighlight>

                  <TouchableHighlight
                      style={{ ...styles.closeButton, backgroundColor: "grey" }}
                      onPress={() => {
                      this.setState({modalVisible: false})
                      }}
                  >
                  
                      <Text style={styles.textStyle1}>Cancel</Text>
                  </TouchableHighlight>

                  </View>
              </View>
          </Modal>
        </TouchableWithoutFeedback>  

        <View  style={{height: '100%', position: 'absolute', top: '14.8%', left: '0%'}}>
          <CalendarList
            theme={{
              calendarBackground: 'transparent',
              textSectionTitleColor: 'black',
              selectedDayBackgroundColor: 'black',
              selectedDayTextColor: 'white',
              todayTextColor: 'white',
              dayTextColor: 'white',
              textDisabledColor: 'white',
              dotColor: 'orange',
              selectedDotColor: 'orange',
              arrowColor: 'black',
              monthTextColor: 'white',
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
            pastScrollRange={1}
            futureScrollRange={1}
            scrollEnabled={false}
            hideArrows={false}
            // Replace default arrows with custom ones (direction can be 'left' or 'right')
            //renderArrow={(<Arrow name="left"/>)}
            horizontal={true}
            onDayPress={(day) => {console.log('selected day', day)}}
            pagingEnabled={true}
            calendarWidth={395}
            calendarHeight={380}

            markedDates={this.state.markedEvents}
            markingType={'multi-dot'}
          />
        </View>
        

        <TouchableOpacity style={styles.createEventsButton} onPress={() => { this.setState({modalVisible: true})}}>
          <MaterialIcons name="add" color="white" size={50} style={{top: '5%', left: '7%', position: 'absolute'}} />
        </TouchableOpacity>
      

        <Text style={styles.upcomingEventsText}>Upcoming Events</Text>

        <View style={{top: '75%', marginTop: 0, bottom: 50, width: '100%',  height: 100, backgroundColor: 'transparent', position: 'absolute'}}>
          <FlatList
              data={EVENTS}
              horizontal={true}
              keyExtractor={item => item.id}
              renderItem={({ item }) => (<UpcomingEventBox day={item.day} time={item.time} event={item.event}/>)}
          />
        </View>               
      </ImageBackground>  
      );
    }   
}

const TabNavigator = createBottomTabNavigator(
  {
    Calendar: {
      screen: CalendarScreen,
      navigationOptions: {
        tabBarLabel:() => {return null},
        tabBarIcon: ({ tintColor }) => <FontAwesome name="calendar" color={tintColor} size={25}style={{top: '15%'}} />
      },
    },
    Search: {
      screen: SearchScreen,
      navigationOptions: {
        tabBarLabel:() => {return null},
        tabBarIcon: ({ tintColor }) => <FontAwesome name="search" color={tintColor} size={25} style={{top: '15%'}} />
      }
    },
    Add: {
      screen: AddScreen,
      navigationOptions: {
        tabBarLabel:() => {return null},
        tabBarIcon: ({ tintColor }) => <MaterialIcons name="add" color={tintColor} size={35} style={{top: '15%'}} />
      }
    },
    Friends: {
      screen: FriendsScreen,
      navigationOptions: {
        tabBarLabel:() => {return null},
        tabBarIcon: ({ tintColor }) => <FontAwesome5 name="user-friends" color={tintColor} size={25} style={{top: '15%'}} />
      }
    },
    Notifications: {
      screen: NotificationsScreen,
      navigationOptions: {
        tabBarLabel:() => {return null},
        tabBarIcon: ({ tintColor }) => <Ionicons name="ios-notifications" color={tintColor} size={35} style={{top: '15%'}} />
      }
    }
  },
  {
    tabBarComponent: TabBar,
    tabBarOptions: {
      activeTintColor: '#4F4F4F', //'#4F4F4F'
      //inactiveTintColor: 'ddd', //ddd
      showIcon: true

    }
  },
);

export default createAppContainer(TabNavigator);

    



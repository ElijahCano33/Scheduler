import React, {Component} from 'react';
import { Alert, StyleSheet, View, TouchableHighlight, SafeAreaView, FlatList, Text, Image, Modal, TouchableOpacity, ImageBackground} from 'react-native';
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
    }
  }

  changeCalendarIconState(){
    this.setState({calendarIconPressed: !calendarIconPressed});
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

    return (
      <ImageBackground source={require('../../../../pics/fade.jpg')} style={styles.fadeBackgroundStyles}>
        <Image
            style={styles.logo}
            source={require('../../../../pics/scriptscheduler.png')}
        />
  
        <Modal
          animationType="slide"
          transparent={true}
          visible={this.state.modalVisible}
          onRequestClose={() => {
            Alert.alert("Modal has been closed.");
          }}>

          <View style={styles.centeredView}>
            <View style={styles.modalView}>
              <Text style={styles.modalText}>Hello World!</Text>

              <TouchableHighlight
                style={{ ...styles.openButton, backgroundColor: "#2196F3" }}
                onPress={() => {
                  this.setState({modalVisible: false})
                }}
              >
                <Text style={styles.textStyle}>Hide Modal</Text>
              </TouchableHighlight>
            </View>
          </View>
        </Modal>

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
            pastScrollRange={12}
            futureScrollRange={60}
            scrollEnabled={false}
            hideArrows={false}
            // Replace default arrows with custom ones (direction can be 'left' or 'right')
            //renderArrow={(<Arrow name="left"/>)}
            horizontal={true}
            onDayPress={(day) => {console.log('selected day', day)}}
            pagingEnabled={true}
            calendarWidth={395}
            calendarHeight={380}

            markedDates={markedDay}
            markingType={'multi-dot'}
          />
        </View>
        

        <TouchableOpacity style={styles.createEventsButton} onPress={() => { this.setState({modalVisible: true})}}>
          <MaterialIcons name="add" color="white" size={50} style={{top: '5%', left: '8.5%', position: 'absolute'}} />
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

    



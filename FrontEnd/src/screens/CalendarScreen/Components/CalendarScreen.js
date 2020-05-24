import React, {Component} from 'react';
import { StyleSheet, View, SafeAreaView, FlatList, Text, Image, TouchableOpacity, ImageBackground} from 'react-native';
import styles from '../Styles/CalendarScreenStyles.js';
import { createAppContainer} from 'react-navigation';
import {createBottomTabNavigator } from "react-navigation-tabs";
import SearchScreen from '../../Search/Components/SearchScreen.js';
import ProfileScreen from '../../Profile/Components/ProfileScreen.js';
import SettingsScreen from '../../Settings/Components/SettingsScreen.js';
import NotificationsScreen from '../../NotificationsScreen/Components/NotificationsScreen.js';
import Icon from './Icon.js';
import Ionicons from 'react-native-vector-icons/Ionicons';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import TabBar, {tabBar} from './TabBar.js';
import UpcomingEventBox from './UpcomingEventBox.js';
import {Calendar, CalendarList, Agenda} from 'react-native-calendars';


const EVENTS = [
  {
    id: 1,
    event: '',
  },
  {
    id: 2,
    event: ''
  },
  {
    id: 3,
    event: '',
  },
  {
    id: 4,
    event: ''
  },
  {
    id: 5,
    event: ''
  },
  {
    id: 6,
    event: '',
  },
  {
    id: 7,
    event: ''
  }
]



class CalendarScreen extends Component{
  constructor(props) {
    super(props)

    //sets up current states of component.
    this.state = {
        calendarIconPressed: false,
        searchBarIconPressed: false,
        addIconPressed: false,
        friendsIconPressed: false,
        notificationsIconPressed: false,
    }
  }

  changeCalendarIconState(){
    this.setState({calendarIconPressed: !calendarIconPressed});
  }

  
    
    render() {
        return (
            <ImageBackground source={require('../../../../pics/fade.jpg')} style={styles.fadeBackgroundStyles}>
              <Image
                  style={styles.logo}
                  source={require('../../../../pics/scriptscheduler.png')}
              />
             


            <CalendarList
              style={{bottom: '-16.5%', height: -100, width: 340, left: 9}}

              theme={{
                backgroundColor: 'transparent',
                calendarBackground: 'transparent',
                textSectionTitleColor: '#c71585',
                selectedDayBackgroundColor: '#00adf5',
                selectedDayTextColor: '#ffffff',
                todayTextColor: 'yellow',
                dayTextColor: '#2d4150',
                textDisabledColor: 'white',
                dotColor: '#00adf5',
                selectedDotColor: '#ffffff',
                arrowColor: 'transparent',
                disabledArrowColor: '#d9e1e8',
                monthTextColor: 'white',
                indicatorColor: 'yellow',
                textDayFontFamily: 'monospace',
                textMonthFontFamily: 'monospace',
                textDayHeaderFontFamily: 'monospace',
                textDayFontWeight: '300',
                textMonthFontWeight: 'bold',
                textDayHeaderFontWeight: '300',
                textDayFontSize: 16,
                textMonthFontSize: 30,
                textDayHeaderFontSize: 17,
                textMonthFontWeight: 'bold',
                textDayFontWeight: 'bold'
              }}
                
              // Callback which gets executed when visible months change in scroll view. Default = undefined
              onVisibleMonthsChange={(months) => {console.log('now these months are visible', months);}}
              // Max amount of months allowed to scroll to the past. Default = 50
              pastScrollRange={50}
              // Max amount of months allowed to scroll to the future. Default = 50
              futureScrollRange={50}
              // Enable or disable scrolling of calendar list
              scrollEnabled={true}
              // Enable or disable vertical scroll indicator. Default = false
              showScrollIndicator={true}

              // Enable horizontal scrolling, default = false
              horizontal={true}
              // Enable paging on horizontal, default = false
              pagingEnabled={false}
              // Set custom calendarWidth.
              calendarWidth={320}
            />
            

              {/*
              <Calendar
                horizontal={true}
                // Specify style for calendar container element. Default = {}
                style={{
                  top: '10%',
                  width: '100%',
                  borderWidth: 1,
                  borderColor: 'transparent',
                  height: 350,
                  position: 'absolute',
                  //borderColor: 'pink',
                  
                }}
                // Specify theme properties to override specific styles for calendar parts. Default = {}
                theme={{
                  backgroundColor: 'transparent',
                  calendarBackground: 'transparent',
                  textSectionTitleColor: '#c71585',
                  selectedDayBackgroundColor: '#00adf5',
                  selectedDayTextColor: '#ffffff',
                  todayTextColor: 'yellow',
                  dayTextColor: '#2d4150',
                  textDisabledColor: 'white',
                  dotColor: '#00adf5',
                  selectedDotColor: '#ffffff',
                  arrowColor: 'transparent',
                  disabledArrowColor: '#d9e1e8',
                  monthTextColor: 'white',
                  indicatorColor: 'yellow',
                  textDayFontFamily: 'monospace',
                  textMonthFontFamily: 'monospace',
                  textDayHeaderFontFamily: 'monospace',
                  textDayFontWeight: '300',
                  textMonthFontWeight: 'bold',
                  textDayHeaderFontWeight: '300',
                  textDayFontSize: 16,
                  textMonthFontSize: 30,
                  textDayHeaderFontSize: 17,
                  textMonthFontWeight: 'bold',
                  textDayFontWeight: 'bold'
                }}
              />
              */}

              <TouchableOpacity style={styles.createEventsButton}>
                <MaterialIcons name="add" color="#c71585" size={35} style={{top: '-6%', left: '5%', position: 'absolute'}} />
                <Text style={styles.createEventsText}>Create Events</Text>
              </TouchableOpacity>
            

             <Text style={styles.upcomingEventsText}>Upcoming Events</Text>

           <View style={{top: '73%', marginTop: 0, bottom: 50, width: '100%',  height: 100, backgroundColor: 'transparent', position: 'absolute'}}>
             <FlatList
                data={EVENTS}
                horizontal={true}
                keyExtractor={item => item.id}
                renderItem={({ item }) => (<UpcomingEventBox event={item.event}/>)}
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
    Profile: {
      screen: ProfileScreen,
      navigationOptions: {
        tabBarLabel:() => {return null},
        tabBarIcon: ({ tintColor }) => <MaterialIcons name="add" color={tintColor} size={35} style={{top: '15%'}} />
      }
    },
    Settings: {
      screen: SettingsScreen,
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
      inactiveTintColor: 'ddd', //ddd
      showIcon: true

    }
  },
);


  
  
  export default createAppContainer(TabNavigator);

    



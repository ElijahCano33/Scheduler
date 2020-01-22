import React, {Component} from 'react';
import { StyleSheet, View, Text, Image, TouchableOpacity, ImageBackground} from 'react-native';
import styles from '../Styles/CalendarScreenStyles.js';
import { createAppContainer} from 'react-navigation';
import {createBottomTabNavigator } from "react-navigation-tabs";
import FriendsScreen from '../../Friends/Components/FriendsScreen.js';
import ProfileScreen from '../../Profile/Components/ProfileScreen.js';
import SettingsScreen from '../../Settings/Components/SettingsScreen.js';
import NotificationsScreen from '../../NotificationsScreen/Components/NotificationsScreen.js';
import Icon from './Icon.js';
import Ionicons from 'react-native-vector-icons/Ionicons';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import TabBar, {tabBar} from './TabBar.js';


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
                  source={require('../../../../pics/PersonalScheduler.png')}
              />
            
              <Text style={{top: '50%', left: '30%', position: 'absolute'}}>This is the Calendar screen</Text>

              <TouchableOpacity style={styles.createEventsButton}>
                <MaterialIcons name="add" color="#c71585" size={35} style={{top: '-6%', left: '5%', position: 'absolute'}} />
                <Text style={styles.createEventsText}>Create Events</Text>
              </TouchableOpacity>
            
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
    Friends: {
      screen: FriendsScreen,
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

    



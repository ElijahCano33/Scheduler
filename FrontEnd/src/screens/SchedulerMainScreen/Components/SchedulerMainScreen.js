import React, {Component} from 'react';
import { StyleSheet, View, Text, Image, ImageBackground} from 'react-native';
import styles from '../Styles/SchedulerMainScreenStyles.js';
import CustomBottomTabNavigator from '../../../components/CustomBottomTabNavigator/router.js';
import { createAppContainer} from 'react-navigation';
import {createBottomTabNavigator } from "react-navigation-tabs";
import FriendsScreen from '../../Friends/FriendsScreen.js';
import ProfileScreen from '../../Profile/ProfileScreen.js';
import SettingsScreen from '../../Settings/SettingsScreen.js';
import Icon from '../../../components/Icon.js';
import TabBar, {tabBar} from '../../../components/TabBar.js';


class SchedulerMainScreen extends Component{
    
    
    render() {
        return (
            <ImageBackground source={require('../../../../pics/fade.jpg')} style={styles.fadeBackgroundStyles}>
                <Image
                    style={styles.logo}
                    source={require('../../../../pics/RedScheduler.png')}
                />
            
            
            <Text>This is the main screen</Text>
            
            </ImageBackground>
            
        );
    }   
}

const TabNavigator = createBottomTabNavigator(
  {
    Calendar: {
      screen: SchedulerMainScreen,
      navigationOptions: {
        tabBarIcon: ({ tintColor }) => <Icon name="home" color={tintColor} />
      },
    },
    Friends: {
      screen: FriendsScreen,
      navigationOptions: {
        tabBarIcon: ({ tintColor }) => <Icon name="search" color={tintColor} />,
      }
    },
    Profile: {
      screen: ProfileScreen,
      navigationOptions: {
        tabBarIcon: ({ tintColor }) => <Icon name="favorites" color={tintColor} />
      }
    },
    Settings: {
      screen: SettingsScreen,
      navigationOptions: {
        tabBarIcon: ({ tintColor }) => <Icon name="profile" color={tintColor} />
      }
    }
  },
  {
    tabBarComponent: TabBar,
    tabBarOptions: {
      showLabel: false,
      showIcon: true,
      activeTintColor: "#4F4F4F",
      inactiveTintColor: "#ddd", 
    }
  },
);
  
  
  export default createAppContainer(TabNavigator);

    



import React, {Component} from 'react';
import { StyleSheet, Text, View,} from 'react-native';
import {createSwitchNavigator, createAppContainer} from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import LoadingScreen from './src/screens/LoadingScreen/Components/LoadingScreen.js';
import LoginScreen from './src/screens/LoginScreen/Components/LoginScreen.js';
import SignUpScreen from './src/screens/SignUpScreen/Components/SignUpScreen.js';
import CalendarScreen from './src/screens/CalendarScreen/Components/CalendarScreen.js';
 

/*
The following establishes a network between 
the different screens within the app, and makes it 
so that only one screen is shown at a time. Sets 
the loading screen as the first screen to be displayed
within the app.
*/
const AppNavigator = createSwitchNavigator(
  {
    CalendarScreen: CalendarScreen,
    SignUpScreen: SignUpScreen,
    LoginScreen: LoginScreen,
    LoadingScreen: LoadingScreen
  }, 
  {
    initialRouteName: 'LoadingScreen',
    headerMode: 'none',
  }
);


/*
Responsible for checking the current state of the app
and linking the navigator to the app environment
*/
export default createAppContainer(AppNavigator);



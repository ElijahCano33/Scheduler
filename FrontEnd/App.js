import React, {Component} from 'react';
import { StyleSheet, Text, View,} from 'react-native';
import {createSwitchNavigator, createAppContainer} from 'react-navigation';
import LoadingScreen from './src/screens/LoadingScreen/Components/LoadingScreen.js';
import LoginScreen from './src/screens/LoginScreen/Components/LoginScreen.js';
import SignUpScreen from './src/screens/SignUpScreen/Components/SignUpScreen.js';
import SchdeulerMainScreen from './src/screens/SchedulerMainScreen/Components/SchedulerMainScreen.js';


/*
The following establishes a network between 
the different screens within the app, and makes it 
so that only one screen is shown at a time. Sets 
the loading screen as the first screen to be displayed
within the app.
*/
const AppNavigator = createSwitchNavigator(
  {
    SchedulerMainScreen: SchdeulerMainScreen,
    SignUpScreen: SignUpScreen,
    LoginScreen: LoginScreen,
    LoadingScreen: LoadingScreen
  }, 
  {
    initialRouteName: 'LoadingScreen'
  }
);


/*
Responsible for checking the current state of the app
and linking the navigator to the app environment
*/
export default createAppContainer(AppNavigator);



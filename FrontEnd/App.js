import React, {Component} from 'react';
import { StyleSheet, Text, View,} from 'react-native';
import {createSwitchNavigator, createAppContainer} from 'react-navigation';
import LoadingScreen from './src/screens/LoadingScreen.js';
import LoginScreen from './src/screens/LoginScreen.js';


/*
This will be an app navigator that will help
connect and navigate the login screen to future 
screens within our app.
*/
const AppNavigator = createSwitchNavigator({
  firstScreen: LoginScreen
});



/*
The root navigator that will send the app into the
loading screen and then navigate to the login screen after
five seconds.
*/
const InitialNavigator = createSwitchNavigator(
    {
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
export default createAppContainer(InitialNavigator);



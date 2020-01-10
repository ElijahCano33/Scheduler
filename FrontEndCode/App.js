import React, {Component} from 'react';
import { StyleSheet, Text, View,} from 'react-native';
import {createSwitchNavigator, createAppContainer} from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import LoadingScreen from './src/screens/LoadingScreen/Components/LoadingScreen.js';
import LoginScreen from './src/screens/LoginScreen/Components/LoginScreen.js';
import SignUpScreen from './src/screens/SignUpScreen/Components/SignUpScreen.js';
import CalendarScreen from './src/screens/CalendarScreen/Components/CalendarScreen.js';
import { fromLeft, fadeIn, zoomIn, zoomOut, flipX } from 'react-navigation-transitions'
 

const handleCustomTransitionAnimations = ({ scenes }) => {
  const prevScene = scenes[scenes.length - 2];
  const nextScene = scenes[scenes.length - 1];
 
  // Custom transitions go there
  if (prevScene
    && prevScene.route.routeName === 'LoginScreen'
    && nextScene.route.routeName === 'SignUpScreen') {
    return fadeOut();
  } else if (prevScene
    && prevScene.route.routeName === 'SignUpScreen'
    && nextScene.route.routeName === 'LoginScreen') {
    return fromLeft();
  }
  return fadeIn();
}

/*
The following establishes a network between 
the different screens within the app, and makes it 
so that only one screen is shown at a time. Sets 
the loading screen as the first screen to be displayed
within the app.
*/
const AppNavigator = createStackNavigator(
  {
    CalendarScreen: CalendarScreen,
    SignUpScreen: SignUpScreen,
    LoginScreen: LoginScreen,
    LoadingScreen: LoadingScreen
  }, 
  {
    initialRouteName: 'LoadingScreen',
    headerMode: 'none',
    transitionConfig: (nav) => handleCustomTransitionAnimations(nav)
  }
);


/*
Responsible for checking the current state of the app
and linking the navigator to the app environment
*/
export default createAppContainer(AppNavigator);




import { createAppContainer} from 'react-navigation';
import {createBottomTabNavigator } from "react-navigation-tabs";

import SchedulerMainScreen from '../../screens/SchedulerMainScreen/Components/SchedulerMainScreen.js';
import SearchScreen from '../../screens/Search/SearchScreen.js';
import ProfileScreen from '../../screens/Profile/ProfileScreen.js';
import SettingsScreen from '../../screens/Settings/SettingsScreen.js';
import LoginScreen from '../../screens/LoginScreen/Components/LoginScreen.js';
import LoadingScreen from '../../screens/LoadingScreen/Components/LoadingScreen.js';


const TabNavigator = createBottomTabNavigator({
  LoadingScreen,
  FriendsScreen,
  ProfileScreen,
  SettingsScreen
});


export default createAppContainer(TabNavigator);


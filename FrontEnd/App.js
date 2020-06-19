import {createSwitchNavigator, createAppContainer} from 'react-navigation';
import LoadingScreen from './src/screens/LoadingScreen/Components/LoadingScreen.js';
import LoginScreen from './src/screens/LoginScreen/Components/LoginScreen.js';
import SignUpScreen from './src/screens/SignUpScreen/Components/SignUpScreen.js';
import CalendarScreen from './src/screens/CalendarScreen/Components/CalendarScreen.js';
import EventScreen from './src/screens/Events/Components/EventScreen.js';
 
const AppNavigator = createSwitchNavigator(
  {
    EventScreen: EventScreen,
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

export default createAppContainer(AppNavigator);



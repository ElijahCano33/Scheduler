import {createSwitchNavigator, createAppContainer} from 'react-navigation';
import EventScreen from '../../Events/Components/EventScreen.js';
import {CalendarScreen} from './CalendarScreen.js';

const EventNavigator = createSwitchNavigator(
  {
    CalendarScreen: CalendarScreen,
    EventScreen: EventScreen
  }, 
  {
    initialRouteName: 'CalendarScreen',
    headerMode: 'none',
  }
);

export default createAppContainer(EventNavigator);
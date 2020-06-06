import React, {Component} from 'react';
import { Alert, StyleSheet, View, TouchableHighlight, SafeAreaView, FlatList, Text, Image, Modal, TouchableOpacity, ImageBackground} from 'react-native';
import styles from '../Styles/CalendarScreenStyles.js';
import { createAppContainer} from 'react-navigation';
import {createBottomTabNavigator } from "react-navigation-tabs";
import SearchScreen from '../../Search/Components/SearchScreen.js';
import AddScreen from '../../Add/Components/AddScreen.js';
import FriendsScreen from '../../Friends/Components/FriendsScreen.js';
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
    event: 'Birthday',
  },
  {
    id: 2,
    event: 'Anniversary'
  },
  {
    id: 3,
    event: 'Wedding',
  },
  {
    id: 4,
    event: 'Interview'
  },
  {
    id: 5,
    event: 'Picnic'
  },
  {
    id: 6,
    event: 'Business',
  },
  {
    id: 7,
    event: 'Dinner'
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
        modalVisible: false,
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
        
        <Modal
          animationType="slide"
          transparent={true}
          visible={this.state.modalVisible}
          onRequestClose={() => {
            Alert.alert("Modal has been closed.");
          }}>

          <View style={styless.centeredView}>
            <View style={styless.modalView}>
              <Text style={styless.modalText}>Hello World!</Text>

              <TouchableHighlight
                style={{ ...styless.openButton, backgroundColor: "#2196F3" }}
                onPress={() => {
                  this.setState({modalVisible: false})
                }}
              >
                <Text style={styless.textStyle}>Hide Modal</Text>
              </TouchableHighlight>
            </View>
          </View>
        </Modal>

        <View  style={{height: '100%', position: 'absolute', top: '14.7%', left: '0%'}}>
          <CalendarList
            theme={{
              calendarBackground: '#0099FF', //'#9BC3E1'
              textSectionTitleColor: 'black',
              selectedDayBackgroundColor: 'red',
              selectedDayTextColor: 'black',
              todayTextColor: 'black',
              dayTextColor: 'white',
              textDisabledColor: 'white',
              dotColor: '#00adf5',
              selectedDotColor: '#ffffff',
              arrowColor: 'black',
              disabledArrowColor: '#d9e1e8',
              monthTextColor: 'white',
              indicatorColor: 'black',
              textDayFontFamily: 'sans-serif-thin',
              textMonthFontFamily: 'sans-serif-thin',
              textDayHeaderFontFamily: 'sans-serif-thin',
              textDayFontWeight: 'bold',
              textMonthFontWeight: 'bold',
              textDayHeaderFontWeight: 'bold',
              textDayFontSize: 15,
              textMonthFontSize: 30,
              textDayHeaderFontSize: 15,
              textMonthFontWeight: 'bold',
              textDayFontWeight: 'bold',
              
            }}
            pastScrollRange={12}
            futureScrollRange={60}
            scrollEnabled={true}
            hideArrows={false}
            horizontal={true}
            pagingEnabled={true}
            calendarWidth={395}
            calendarHeight={380}
          />
        </View>
        

        <TouchableOpacity style={styles.createEventsButton} onPress={() => { this.setState({modalVisible: true})}}>
          <MaterialIcons name="add" color="white" size={50} style={{top: '5%', left: '8.5%', position: 'absolute'}} />
        </TouchableOpacity>
      

        <Text style={styles.upcomingEventsText}>Upcoming Events</Text>

        <View style={{top: '75%', marginTop: 0, bottom: 50, width: '100%',  height: 100, backgroundColor: 'transparent', position: 'absolute'}}>
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
    Add: {
      screen: AddScreen,
      navigationOptions: {
        tabBarLabel:() => {return null},
        tabBarIcon: ({ tintColor }) => <MaterialIcons name="add" color={tintColor} size={35} style={{top: '15%'}} />
      }
    },
    Friends: {
      screen: FriendsScreen,
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


const styless = StyleSheet.create({
  centeredView: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    marginTop: 22
  },
  modalView: {
    margin: 20,
    width: '70%',
    height: '54%',
    backgroundColor: "white",
    borderRadius: 20,
    padding: 35,
    alignItems: "center",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5
  },
  openButton: {
    backgroundColor: "#F194FF",
    borderRadius: 20,
    padding: 10,
    elevation: 2
  },
  textStyle: {
    color: "white",
    fontWeight: "bold",
    textAlign: "center"
  },
  modalText: {
    marginBottom: 15,
    textAlign: "center"
  }
});

export default createAppContainer(TabNavigator);

    



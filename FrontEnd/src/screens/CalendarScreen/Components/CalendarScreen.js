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
    event: '',
  },
  {
    id: 2,
    event: ''
  },
  {
    id: 3,
    event: '',
  },
  {
    id: 4,
    event: ''
  },
  {
    id: 5,
    event: ''
  },
  {
    id: 6,
    event: '',
  },
  {
    id: 7,
    event: ''
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
                }}
              >

            
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

              <CalendarList
                style={{bottom: '-16.5%', height: -100, width: 340, left: 9}}

                theme={{
                  backgroundColor: 'transparent',
                  calendarBackground: 'transparent',
                  textSectionTitleColor: '#c71585',
                  selectedDayBackgroundColor: '#00adf5',
                  selectedDayTextColor: '#ffffff',
                  todayTextColor: 'yellow',
                  dayTextColor: '#2d4150',
                  textDisabledColor: 'white',
                  dotColor: '#00adf5',
                  selectedDotColor: '#ffffff',
                  arrowColor: 'transparent',
                  disabledArrowColor: '#d9e1e8',
                  monthTextColor: 'white',
                  indicatorColor: 'yellow',
                  textDayFontFamily: 'monospace',
                  textMonthFontFamily: 'monospace',
                  textDayHeaderFontFamily: 'monospace',
                  textDayFontWeight: '300',
                  textMonthFontWeight: 'bold',
                  textDayHeaderFontWeight: '300',
                  textDayFontSize: 16,
                  textMonthFontSize: 30,
                  textDayHeaderFontSize: 17,
                  textMonthFontWeight: 'bold',
                  textDayFontWeight: 'bold'
                }}
                  
                // Callback which gets executed when visible months change in scroll view. Default = undefined
                onVisibleMonthsChange={(months) => {console.log('now these months are visible', months);}}
                // Max amount of months allowed to scroll to the past. Default = 50
                pastScrollRange={50}
                // Max amount of months allowed to scroll to the future. Default = 50
                futureScrollRange={50}
                // Enable or disable scrolling of calendar list
                scrollEnabled={true}
                // Enable or disable vertical scroll indicator. Default = false
                showScrollIndicator={true}

                // Enable horizontal scrolling, default = false
                horizontal={true}
                // Enable paging on horizontal, default = false
                pagingEnabled={false}
                // Set custom calendarWidth.
                calendarWidth={320}
              />
              

                {/*
                <Calendar
                  horizontal={true}
                  // Specify style for calendar container element. Default = {}
                  style={{
                    top: '10%',
                    width: '100%',
                    borderWidth: 1,
                    borderColor: 'transparent',
                    height: 350,
                    position: 'absolute',
                    //borderColor: 'pink',
                    
                  }}
                  // Specify theme properties to override specific styles for calendar parts. Default = {}
                  theme={{
                    backgroundColor: 'transparent',
                    calendarBackground: 'transparent',
                    textSectionTitleColor: '#c71585',
                    selectedDayBackgroundColor: '#00adf5',
                    selectedDayTextColor: '#ffffff',
                    todayTextColor: 'yellow',
                    dayTextColor: '#2d4150',
                    textDisabledColor: 'white',
                    dotColor: '#00adf5',
                    selectedDotColor: '#ffffff',
                    arrowColor: 'transparent',
                    disabledArrowColor: '#d9e1e8',
                    monthTextColor: 'white',
                    indicatorColor: 'yellow',
                    textDayFontFamily: 'monospace',
                    textMonthFontFamily: 'monospace',
                    textDayHeaderFontFamily: 'monospace',
                    textDayFontWeight: '300',
                    textMonthFontWeight: 'bold',
                    textDayHeaderFontWeight: '300',
                    textDayFontSize: 16,
                    textMonthFontSize: 30,
                    textDayHeaderFontSize: 17,
                    textMonthFontWeight: 'bold',
                    textDayFontWeight: 'bold'
                  }}
                />
                */}

                <TouchableOpacity style={styles.createEventsButton} onPress={() => { this.setState({modalVisible: true})}}>
                  <MaterialIcons name="add" color="#c71585" size={35} style={{top: '-6%', left: '5%', position: 'absolute'}} />
                  <Text style={styles.createEventsText}>Create Events</Text>
                </TouchableOpacity>
              

              <Text style={styles.upcomingEventsText}>Upcoming Events</Text>

            <View style={{top: '73%', marginTop: 0, bottom: 50, width: '100%',  height: 100, backgroundColor: 'transparent', position: 'absolute'}}>
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

    



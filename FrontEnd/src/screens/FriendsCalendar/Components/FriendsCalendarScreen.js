import React, {Component} from 'react';
import { Alert, StatusBar, TextInput, View, TouchableHighlight, TouchableWithoutFeedback, Keyboard, FlatList, Text, Image, Modal, TouchableOpacity, ImageBackground} from 'react-native';
import styles from '../Styles/FriendsCalendarScreenStyles.js';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import UpcomingEventBox from './UpcomingEventBox.js';
import {CalendarList} from 'react-native-calendars';
import axios from "axios";
import ToggleSwitch from 'toggle-switch-react-native';
import Feather from 'react-native-vector-icons/Feather';

export default class FriendsCalendarScreen extends Component{
  constructor(props) {
    super(props)

    this.state = {
        modalVisible: false,
        friendId: 0,
        friend: '',
        singleDayEvent: false,
        hideEvent: false,
        eventStartDate: '',
        eventEndDate: '',
        eventDescription: '',
        eventAlert: '',
        currentYearUserEvents: [],
        currentMonthUserEvents: [],
        upcomingUserEvents: [], 
        markedEvents: {},
        tempAnnualEvents: []
    }
  }

  fetchFriendId(friendId, m, y){
    let friendEmail = this.props['navigation']['state']['params']['email'];
    
    axios({
      method: 'post',
      url: 'http://192.168.68.1:5000/api/friendId',
      data: {friend: friendEmail}
    })
    .then((response) => {
      this.setState({friendId: response['data']['friend_id']});
      friendId = this.state.friendId;

      this.fetchMonthEvents(friendId, m, y);
      this.fetchAnnualEvents(friendId, y);
    }, (error) => {
          
      console.log(error);
    });
  }

  fetchMonthEvents(friendId, m, y){
    axios({
      method: 'post',
      url: 'http://192.168.68.1:5000/api/event/read',
      data: {user_id: friendId, request_type: "month", month: m, year: y}
    })
    .then((response) => {
      this.setState({currentMonthUserEvents: response['data']['events']});
      this.filterMonthEvents();
    }, (error) => {
        console.log(error);
    });
  }

  fetchAnnualEvents(friendId, y){
    axios({
      method: 'post',
      url: 'http://192.168.68.1:5000/api/event/read',
      data: {user_id: friendId, request_type: "year", year: y}
    })
    .then((response) => {
      this.setState({currentYearUserEvents: response['data']['events']});
      this.markCalendarWithSingleEvents();
    },(error) => {
      console.log(error);
    });
  }

  componentDidMount(){
    let friendId = 0;
    let today = new Date();
    let year = today.getFullYear().toString();
    let month = (today.getMonth()+1).toString();
    if (month < 10) month = "0" + month;
    this.fetchFriendId(friendId, month, year);
    
  }

  onToggle(event) {
    console.log("Changed to " + event);
  }

  markCalendarWithMultiEvents(events){
    let sameDayEvents = {};
    let repeatingDays = [];

    for(var key in events){
      if(key.includes('_')){
        let repeatedDay = key;
        repeatingDays.push(repeatedDay);
        let originalDay = key.substring(0, 10);

        if(originalDay in sameDayEvents){
          sameDayEvents[originalDay].push(events[repeatedDay]);
        }else{
          sameDayEvents[originalDay] = [];
          sameDayEvents[originalDay].push(events[repeatedDay]);
          
          if (!(originalDay in repeatingDays)){
            sameDayEvents[originalDay].push(events[originalDay]);
            repeatingDays.push(originalDay);
          }
        }
      } 
    }

    for(var i = 0; i < repeatingDays.length; i++){
      delete events[repeatingDays[i]];
    }

    for(var day in sameDayEvents){
      for(var i = 0; i < sameDayEvents[day].length; i++){
        i === 0 ? events[day] = sameDayEvents[day][0] : events[day]['dots'].push(sameDayEvents[day][i]['dots'][0]);
      }
    }
    this.setState({markedEvents: events});
  }

  markCalendarWithSingleEvents(){
    let events = this.state.currentYearUserEvents;
    let eventTitle = '';
    let eventDay = '';
    let randomColor = ''
    let markedDay = {};
    let markedEvents = {};
    let daysCounter = {};
    let today = new Date();
    let month = today.getMonth() + 1;
    let day = today.getDate();

    if (month < 10) month = '0' + month.toString();
    if (day < 10) day = '0' + day.toString();


    today = today.getFullYear().toString() + "-" + month + "-" + day;

    for(var i = 0; i < events.length; i++){
      randomColor = this.generateRandomColor();
      for(var eventInfo in events[i]){
        if (eventInfo === 'title') eventTitle = events[i][eventInfo];
        if (eventInfo === 'startDate') eventDay = events[i][eventInfo];
      }

      eventDay in daysCounter ? daysCounter[eventDay] += 1 : daysCounter[eventDay] = 1;
      markedDay = {key: eventTitle, color: randomColor};

      if (eventDay in markedEvents){
        let repeatingNumber = '_' + daysCounter[eventDay].toString(); 
        eventDay += repeatingNumber;
        markedEvents[eventDay] = {dots: [markedDay], selected: true, marked: true, selectedColor: 'black'};
      }else{
        markedEvents[eventDay] = {dots: [markedDay], selected: true, marked: true, selectedColor: 'black'};
      }
      
    }

    this.markCalendarWithMultiEvents(markedEvents);
  }

  generateRandomColor(){
    color = "hsl(" + Math.random() * 360 + ", 100%, 75%)";
    return color;
  }

  createEvent() {
    let userId = this.state.userId;
    let eventTitle = this.state.eventTitle;
    let description = this.state.eventDescription;
    let location = '';
    let startDate = this.state.eventStartDate.toString().substring(0, 10);
    let endDate = this.state.eventEndDate.toString().substring(0, 10);
    let startTime = this.state.eventStartDate.toString().substring(11, 19);
    let endTime = this.state.eventEndDate.toString().substring(11, 19);
    let today = new Date();
    let year = today.getFullYear().toString();
    let month = (today.getMonth()+1).toString();

    if (month < 10) month = "0" + month;

    axios({
      method: 'post',
      url: 'http://192.168.68.1:5000/api/event',
      data: {
        user_id: userId,
        event_title: eventTitle,
        description: description,
        location: location,
        starting_date: startDate,
        ending_day: endDate,
        starting_time: startTime,
        ending_time: endTime
      }
    })
    .then((response) => {
      this.setState({eventAlert: response['data']['status_info']});
      this.fetchMonthEvents(userId, month, year);
      this.fetchAnnualEvents(userId, year);
      Alert.alert(this.state.eventAlert);
    }, (error) => {
        console.log(error);
    });
  }

  filterMonthEvents(){
    let today = new Date();
    let year = today.getFullYear().toString();
    let month = (today.getMonth()+1).toString();
    let day = today.getDate();
    let hours = today.getHours();
    let minutes = today.getMinutes();
    let seconds = today.getSeconds();
    let upcomingEvents = [];
    let monthEvents = this.state.currentMonthUserEvents;

    if (month < 10) month = "0" + month;
    if (day < 10 ) day = "0" + day;
    if (hours < 10) hours = "0" + hours;
    if (minutes < 10) minutes = "0" + minutes;
    if (seconds < 10) seconds = "0" + seconds;

    let currentDay = year + "-" + month + "-" + day + " ";
    let currentTime = hours + ":" + minutes + ":" + seconds;
    let currentDate = currentDay + currentTime;

    for(var i = 0; i < monthEvents.length; i++){
      let event = monthEvents[i]['endDate'] + " " + monthEvents[i]['endTIme'];
      if(event >= currentDate) upcomingEvents.push(monthEvents[i]);
    }

    this.setState({upcomingUserEvents: upcomingEvents});

  }

  navigateToEventSscreen(day){
    let annualEvents = this.state.currentYearUserEvents;
    annualEvents.push(day);

    this.setState({tempAnnualEvents: annualEvents}, function() {
      this.props.navigation.navigate('EventScreen', {data: this.state.tempAnnualEvents});
      this.setState({tempAnnualEvents: []});
    });
  }

  render() {
    
    return (
      <ImageBackground source={require('../../../../pics/fade.jpg')} style={styles.fadeBackground}>

        <StatusBar hidden/>

        <Image style={styles.logo} source={require('../../../../pics/scriptscheduler.png')}/>

        <TouchableOpacity style={styles.xIcon} onPress={()=> {this.props.navigation.navigate('FriendsScreen')}}>
          <Feather name="x" color={'black'} size={30}/>
        </TouchableOpacity>
  
        <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
          <Modal
            animationType="fade"
            transparent={true}
            visible={this.state.modalVisible}
            onRequestClose={() => {Alert.alert("Modal has been closed.")}}
          >
            <View style={styles.centeredView}>
              <View style={styles.modalView}>
                <Text style={styles.creatEventText}>Create A New Event</Text>

                <TextInput
                    placeholder="Event Title: "
                    placeholderTextColor='grey'
                    style={styles.eventTitleInput}
                    onChangeText={(eventTitle) => this.setState({eventTitle})}
                />

                <TextInput
                  placeholder="Event Description: "
                  placeholderTextColor='grey'
                  style={styles.eventDescriptionInput}
                  onChangeText={(eventDescription) => this.setState({eventDescription})}
                />

                <View style={styles.singleDayEventButton}>
                  <ToggleSwitch
                    isOn={this.state.singleDayEvent}
                    onColor="green"
                    offColor="grey"
                    label="Single Day Event"
                    labelStyle={{ color: "grey", fontWeight: "bold", fontFamily: 'sans-serif-thin', fontSize: 12 }}
                    size="small"
                    onToggle={singleDayEvent => {this.setState({ singleDayEvent }); this.onToggle(singleDayEvent);}}
                  />
                </View>

                <View style={styles.hideEventButton}>
                  <ToggleSwitch
                    isOn={this.state.hideEvent}
                    onColor="green"
                    offColor="grey"
                    label="Hide Event"
                    labelStyle={{ color: "grey", fontWeight: "bold", fontFamily: 'sans-serif-thin', fontSize: 12 }}
                    size="small"
                    onToggle={hideEvent => {this.setState({ hideEvent }); this.onToggle(hideEvent);}}
                  />
                </View>

                <TextInput
                  placeholder="Start Date: 'YYYY-MM-DD HH:MM:SS' "
                  placeholderTextColor='grey'
                  style={styles.startDateInput}
                  onChangeText={(eventStartDate) => this.setState({eventStartDate})}
                />

                <TextInput
                  placeholder="End Date: 'YYYY-MM-DD HH:MM:SS' "
                  placeholderTextColor='grey'
                  style={styles.endDateInput}
                  onChangeText={(eventEndDate) => this.setState({eventEndDate})}
                />

                <TouchableHighlight style={{ ...styles.openButton, backgroundColor: "red" }} onPress={() => {this.setState({modalVisible: false}, this.createEvent())}}>
                  <Text style={styles.textStyle2}>Submit</Text>
                </TouchableHighlight>

                <TouchableHighlight style={{ ...styles.closeButton, backgroundColor: "grey" }} onPress={() => {this.setState({modalVisible: false})}}>
                  <Text style={styles.textStyle1}>Cancel</Text>
                </TouchableHighlight>
                </View>
            </View>
          </Modal>
        </TouchableWithoutFeedback>  

        <View style={styles.calendarList}>
          <CalendarList
            theme={{
              calendarBackground: 'transparent',
              textSectionTitleColor: 'black',
              selectedDayBackgroundColor: 'black',
              selectedDayTextColor: 'white',
              todayTextColor: 'white',
              dayTextColor: 'white',
              textDisabledColor: 'white',
              dotColor: 'red',
              selectedDotColor: 'orange',
              arrowColor: 'black',
              monthTextColor: 'white',
              indicatorColor: 'blue',
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
            pastScrollRange={5}
            futureScrollRange={5}
            scrollEnabled={false}
            hideArrows={false}
            horizontal={true}
            onDayPress={(day) => this.navigateToEventSscreen(day)}
            pagingEnabled={true}
            calendarWidth={395}
            calendarHeight={380}
            markedDates={this.state.markedEvents}
            markingType={'multi-dot'}
          />
        </View>
        

        <TouchableOpacity style={styles.createEventsButton} onPress={() => { this.setState({modalVisible: true})}}>
          <MaterialIcons name="add" color='#FF1DCE' size={50} style={styles.additionIcon} />
        </TouchableOpacity>
      
        {this.state.upcomingUserEvents.length !== 0 
          ? 

          <View style={styles.upcomingEventsView}>
            <Text style={styles.upcomingEventsText}>{this.props['navigation']['state']['params']['firstName']}'s Upcoming Events</Text>

            <View style={styles.upcomingEventsList}>
              <FlatList
                  data={this.state.upcomingUserEvents}
                  horizontal={true}
                  keyExtractor={item => item.ID}
                  renderItem={({ item }) => (<UpcomingEventBox title={item.title} description={item.description} startDay={item.startDate} startTime={item.startTime} endDay={item.endDate} endTime={item.endTIme}/>)}
              />
            </View> 
          </View>

          : 

          <Text style={styles.noUpcomingEventsText}>{this.props['navigation']['state']['params']['firstName']} Has No Upcoming Events</Text>

        }             
      </ImageBackground>  
      );
    }   
}
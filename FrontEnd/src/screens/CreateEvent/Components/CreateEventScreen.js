import React, {Component} from 'react';
import { Alert, TextInput, View, Text, Image, TouchableOpacity, ImageBackground} from 'react-native';
import styles from '../Styles/CreateEventScreenStyles.js';
import Feather from 'react-native-vector-icons/Feather';
import {CalendarList} from 'react-native-calendars';
import ToggleSwitch from 'toggle-switch-react-native';
import {TimePicker} from "react-native-wheel-picker-android";
import {API_URL} from "@env";
import axios from "axios";

const HOURS = [
  "01", "02", "03", "04", "05", "06", "07", "08", "09", "10",
  "11", "12"
];

const MINUTES = [
  "00", "01", "02", "03", "04", "05", "06", "07", "08", "09", "10",
  "11", "12", "13", "14", "15", "16", "17", "18", "19", "20", "21",
  "22", "23", "24", "25", "26", "27", "28", "29", "30", "31", "32",
  "33", "34", "35", "36", "37", "38", "39", "40", "41", "42", "43",
  "44", "45", "46", "47", "48", "49", "50", "51", "52", "53", "54",
  "55", "56", "57", "58", "59"
];


export default class CreateEventScreen extends Component{
  constructor(props){
    super(props);

    this.state = {
      eventCreated: false,
      singleDayEvent: false,
      hideEvent: false,
      eventTitle: '',
      eventDescription: '',
      selectStartingDayTextPressed: false,
      selectEndingDayTextPressed: false,
      selectStartingTimeTextPressed: false,
      selectEndingTimeTextPressed: false,
      markedDate: {},
      selectedStartingDate: '',
      selectedStartingYear: '',
      selectedStartingMonth: '',
      selectedStartingDay: '',
      selectedEndingDate: '',
      selectedEndingYear: '',
      selectedEndingMonth: '',
      selectedEndingDay: '',
      selectedStartingTime: '',
      selectedEndingTime: '',
      eventAlert: ''
    }
  }

  onToggle(event) {
    console.log("Changed to " + event);
  }

  onTimeSelected = time => {
    let formattedTime = time.toString().substring(16, 24);
    this.state.selectStartingTimeTextPressed  ? this.setState({selectedStartingTime: formattedTime}) : this.setState({selectedEndingTime: formattedTime});
    
  }

  toggleSelectedStartingDayText = () => {
    if (this.state.selectStartingDayTextPressed){
      this.setState({selectStartingDayTextPressed: false}) 
    }else{
      this.setState({selectStartingDayTextPressed: true});
      this.setMarkedDate();
    }
  }

  toggleSelectedEndingDayText = () => {
    if (this.state.selectEndingDayTextPressed){
      this.setState({selectEndingDayTextPressed: false}) 
    }else{
      this.setState({selectEndingDayTextPressed: true});
      this.setMarkedDate();
    }
  } 

  handleSelectedTime = () => {
    this.state.selectStartingTimeTextPressed ? this.toggleSelectedStartingTimeText() : this.toggleSelectedEndingTimeText();
  }

  toggleSelectedStartingTimeText = () => {
    this.state.selectStartingTimeTextPressed ? this.setState({selectStartingTimeTextPressed: false}) : this.setState({selectStartingTimeTextPressed: true});
  }

  toggleSelectedEndingTimeText = () => {
    this.state.selectEndingTimeTextPressed ? this.setState({selectEndingTimeTextPressed: false}) : this.setState({selectEndingTimeTextPressed: true});
  }

  handleSelectedDay(day){
    let month = day['month'];
    let monthDay = day['day'];
    let monthNumberOfSelectedDay = 0;
    if (month < 10) month = "0" + month;
    if (monthDay < 10) monthDay = "0" + monthDay;

    let monthNames = ["January", "February", "March", "April", "May","June", "July", "August", "September", "October", "November","December"];
    
    month[0] === '0' ? monthNumberOfSelectedDay = parseInt(month[1]) : monthNumberOfSelectedDay = parseInt(month);
    let monthOfSelectedDay = "";

    monthNumberOfSelectedDay === 0 ? monthOfSelectedDay = monthNames[0] : monthOfSelectedDay = monthNames[monthNumberOfSelectedDay-1];

    if (this.state.selectStartingDayTextPressed){
      this.setState({selectedStartingDate: day['dateString']});
      this.setState({selectedStartingYear: day['year']});
      this.setState({selectedStartingDay: monthDay});
      this.setState({selectedStartingMonth: monthOfSelectedDay});
      this.toggleSelectedStartingDayText();
    }else{
      this.setState({selectedEndingDate: day['dateString']});
      this.setState({selectedEndingYear: day['year']});
      this.setState({selectedEndingDay: monthDay});
      this.setState({selectedEndingMonth: monthOfSelectedDay});
      this.toggleSelectedEndingDayText();
    }
  }

  setMarkedDate(){
    let date = new Date();
    let month = date.getMonth() + 1;
    let day = date.getDate();
    let year = date.getFullYear();

    if (month < 10) month = '0' + month;
    if (day < 10) day = '0' + day;

    let formattedCurrentDate = year + "-" + month + "-" + day;
    let markedDate = {};
    markedDate[formattedCurrentDate] = {selected: true, selectedColor: 'pink'};
    this.setState({markedDate: markedDate});
  }

  createEvent() {
    let userId = 0;

    if (Object.keys(this.props.navigation.state.params).length <= 1){
      userId = this.props.navigation.state.params.data;
    }else{
      userId = this.props.navigation.state.params.friendId; 
      console.log("this is the userId created: " + userId);
    }

    let eventTitle = this.state.eventTitle;
    let description = this.state.eventDescription;
    let location = '';
    let startDate = this.state.selectedStartingDate;
    let endDate = this.state.selectedEndingDate;
    let startTime = this.state.selectedStartingTime;
    let endTime = this.state.selectedEndingTime;
    let singleDayEvent = this.state.singleDayEvent;
    let hiddenEvent = this.state.hideEvent;
    let url = API_URL + 'api/event';

    
    axios({
      method: 'post',
      url: url,
      data: {
        user_id: userId,
        event_title: eventTitle,
        description: description,
        location: location,
        starting_date: startDate,
        ending_day: endDate,
        starting_time: startTime,
        ending_time: endTime,
        hidden_event: hiddenEvent
      }
    })
    .then((response) => {
      this.setState({eventAlert: response['data']['status_info']});
      Alert.alert(this.state.eventAlert);
      

      if (Object.keys(this.props.navigation.state.params).length <= 1){
        this.props.navigation.navigate({ routeName: 'Calendar', key: 'Calendar', params: this.props.navigation.state.params.data});
      }else{
        this.props.navigation.navigate('FriendsCalendarScreen');
      }
    }, (error) => {
        console.log(error);
    });
    
  }

  goBack(){
    Object.keys(this.props.navigation.state.params).length <= 1 ? this.props.navigation.navigate('CalendarScreen') : this.props.navigation.navigate('FriendsCalendarScreen');
  }

  render(){
    return(
      <ImageBackground source={require('../../../../pics/fade.jpg')} style={styles.fadeBackground}>

        <Image style={styles.logo} source={require('../../../../pics/scriptscheduler.png')}/>

        <TouchableOpacity style={styles.icon} onPress={() => {this.goBack()}}>
            <Feather name="x" color={'black'} size={30}/>
        </TouchableOpacity>

        {Object.keys(this.props.navigation.state.params).length <= 1 ? 
          <Text style={styles.createEventScreenHeaderText}>Create A New Event</Text> : <Text style={styles.friendCreateEventScreenHeaderText}>Mark An Event On {this.props.navigation.state.params.friendName}'s Calendar</Text>}

        <TextInput
          placeholder="Event Title: "
          placeholderTextColor='grey'
          style={styles.eventTitleInput}
          onChangeText={(eventTitle) => this.setState({eventTitle})}
        />

        <TextInput
          placeholder="Event Description: "
          placeholderTextColor='grey'
          multiline={true}
          textAlignVertical={'top'}
          style={styles.eventDescriptionInput}
          onChangeText={(eventDescription) => this.setState({eventDescription})}
        />

        {this.state.selectStartingDayTextPressed || this.state.selectEndingDayTextPressed ? 
          <View style={styles.calendarList}>
            <CalendarList
              theme={{
                  calendarBackground: 'transparent',
                  textSectionTitleColor: 'white',
                  todayTextColor: 'white',
                  dayTextColor: 'white',
                  arrowColor: 'black',
                  monthTextColor: 'white',
                  textDayFontFamily: 'sans-serif-thin',
                  textMonthFontFamily: 'sans-serif-thin',
                  textDayHeaderFontFamily: 'sans-serif-thin',
                  textDayFontWeight: 'bold',
                  textMonthFontWeight: 'bold',
                  textDayHeaderFontWeight: 'bold',
                  textDayFontSize: 15,
                  textMonthFontSize: 15,
                  textDayHeaderFontSize: 15,
              }}
              pastScrollRange={5}
              futureScrollRange={5}
              scrollEnabled={true}
              onDayPress={(day) => this.handleSelectedDay(day)}
              markedDates={this.state.markedDate}
              hideArrows={false}
              horizontal={true}
              calendarWidth={380}
              calendarHeight={355}
            />

          </View>
          : this.state.selectStartingTimeTextPressed || this.state.selectEndingTimeTextPressed ?
          <View style={styles.timePickerWheel}>
            <Text style={styles.setTimeText}>Set Time </Text>
            <TimePicker hours={HOURS} minutes={MINUTES} onTimeSelected={this.onTimeSelected}/>

            <TouchableOpacity style={styles.selectTimeButton} onPress={() => this.handleSelectedTime()}>
              <Text style={styles.selectTimeButtonText}>Select Time</Text>
            </TouchableOpacity>
          </View>
          :
          
          <View style={styles.noCalendarView}>
            <TouchableOpacity style={styles.selectStartingDayView} onPress={() => this.toggleSelectedStartingDayText()}>
              {this.state.selectedStartingDay === '' ? <Text style={styles.selectDayText}>Select A Starting Day</Text> : <Text style={styles.selectDayText}>Selected {this.state.selectedStartingMonth}{' '}{this.state.selectedStartingDay},{' '}{this.state.selectedStartingYear}</Text>}
            </TouchableOpacity>

            <TouchableOpacity style={styles.selectEndingDayView} onPress={() => this.toggleSelectedEndingDayText()}>
              {this.state.selectedEndingDay === '' ? <Text style={styles.selectDayText}>Select An Ending Day</Text> : <Text style={styles.selectDayText}>Selected {this.state.selectedEndingMonth}{' '}{this.state.selectedEndingDay},{' '}{this.state.selectedEndingYear}</Text>}
            </TouchableOpacity>

            <TouchableOpacity style={styles.selectStartingTimeView} onPress={() => this.toggleSelectedStartingTimeText()}>
            {this.state.selectedStartingTime === '' ? <Text style={styles.selectTimeText}>Select A Starting Time</Text> : <Text style={styles.selectDayText}>Selected {this.state.selectedStartingTime}</Text>}
            </TouchableOpacity>

            <TouchableOpacity style={styles.selectEndingTimeView} onPress={() => this.toggleSelectedEndingTimeText()}>
            {this.state.selectedEndingTime === '' ? <Text style={styles.selectTimeText}>Select An Ending Time</Text> : <Text style={styles.selectDayText}>Selected {this.state.selectedEndingTime}</Text>}
            </TouchableOpacity>

            <View style={styles.singleDayEventButton}>

              <ToggleSwitch
                isOn={this.state.singleDayEvent}
                onColor="green"
                offColor="grey"
                label="Single Day Event"
                labelStyle={{ color: "white", fontWeight: "bold", fontFamily: 'sans-serif-thin', fontSize: 25 }}
                size="medium"
                onToggle={singleDayEvent => {this.setState({ singleDayEvent }); this.onToggle(singleDayEvent);}}
              />

            </View>

            <View style={styles.hideEventButton}>

            <ToggleSwitch
              isOn={this.state.hideEvent}
              onColor="green"
              offColor="grey"
              label="Hide Event From Friends"
              labelStyle={{ color: "white", fontWeight: "bold", fontFamily: 'sans-serif-thin', fontSize: 25 }}
              size="medium"
              onToggle={hideEvent => {this.setState({ hideEvent }); this.onToggle(hideEvent);}}
            />

            </View>

            <TouchableOpacity style={styles.createEventButton} onPress={() => this.createEvent()}>
              <Text style={styles.createEventButtonText}>Create Event</Text>
            </TouchableOpacity>
          </View>
        }
        </ImageBackground>
    )
  }
}

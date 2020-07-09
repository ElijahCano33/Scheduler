import React, {Component} from 'react';
import { TextInput, View, Text, Image, TouchableOpacity, ImageBackground} from 'react-native';
import styles from '../Styles/CreateEventScreenStyles.js';
import Feather from 'react-native-vector-icons/Feather';
import {CalendarList} from 'react-native-calendars';
import ToggleSwitch from 'toggle-switch-react-native';
import {TimePicker} from "react-native-wheel-picker-android";

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
      isBlinking: true,
      singleDayEvent: false,
      hideEvent: false,
      eventTitle: '',
      eventDescription: '',
      selectDayTextPressed: false,
      selectTimeTextPressed: false,
      markedDate: {},
      selectedDate: '',
      selectedYear: '',
      selectedMonth: '',
      selectedDay: '',
      selectedTime: '',
    }
  }

  onToggle(event) {
    console.log("Changed to " + event);
  }

  onTimeSelected = time => {
    let formattedTime = time.toString().substring(16, 24);
    this.setState({selectedTime: formattedTime});
  }

  toggleSelectedDayText = () => {
    if (this.state.selectDayTextPressed){
      this.setState({selectDayTextPressed: false}) 
    }else{
      this.setState({selectDayTextPressed: true});
      this.setMarkedDate();
    }
  }

  toggleSelectedTimeText = () => {
    if (this.state.selectTimeTextPressed){
      this.setState({selectTimeTextPressed: false}) 
    }else{
      this.setState({selectTimeTextPressed: true});
    }
  }

  handleSelectedDay(day){
    console.log(day);
    let month = day['month'];
    let monthDay = day['day'];
    let monthNumberOfSelectedDay = 0;
    if (month < 10) month = "0" + month;
    if (monthDay < 10) monthDay = "0" + monthDay;

    let monthNames = ["January", "February", "March", "April", "May","June", "July", "August", "September", "October", "November","December"];
    
    month[0] === '0' ? monthNumberOfSelectedDay = parseInt(month[1]) : monthNumberOfSelectedDay = parseInt(month);
    let monthOfSelectedDay = monthNames[monthNumberOfSelectedDay];

    this.setState({selectedDate: day['dateString']});
    this.setState({selectedYear: day['year']});
    this.setState({selectedDay: monthDay});
    this.setState({selectedMonth: monthOfSelectedDay});
    this.toggleSelectedDayText();
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
    let userId = this.state.userId;
    let eventTitle = this.state.eventTitle;
    let description = this.state.eventDescription;
    let location = '';
    let startDate = this.state.selectedDate;
    //let endDate = this.state.eventEndDate.toString().substring(0, 10);
    let startTime = this.state.eventStartDate.toString().substring(11, 19);
    //let endTime = this.state.eventEndDate.toString().substring(11, 19);
    //let singleDayEvent = this.state.singleDayEvent;
    let hiddenEvent = this.state.hideEvent;

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
        ending_time: endTime,
        hidden_event: hiddenEvent
      }
    })
    .then((response) => {
      //this.setState({eventAlert: response['data']['status_info']});
      console.log(response);
      //Alert.alert(this.state.eventAlert);
    }, (error) => {
        console.log(error);
    });
  }

  render(){
      return(
        <ImageBackground source={require('../../../../pics/fade.jpg')} style={styles.fadeBackground}>

          <Image style={styles.logo} source={require('../../../../pics/scriptscheduler.png')}/>

          <TouchableOpacity style={styles.icon} onPress={()=> {this.props.navigation.navigate('CalendarScreen')}}>
              <Feather name="x" color={'black'} size={30}/>
          </TouchableOpacity>

          <Text style={styles.createEventScreenHeaderText}>Create A New Event</Text>

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

          {console.log(this.state.selectedDay)}

          {this.state.selectDayTextPressed ? 
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
            : this.state.selectTimeTextPressed ?
            <View style={styles.timePickerWheel}>
              <Text style={styles.setTimeText}>Set Time </Text>
              <TimePicker hours={HOURS} minutes={MINUTES} onTimeSelected={this.onTimeSelected}/>

              <TouchableOpacity style={styles.selectTimeButton} onPress={() => this.toggleSelectedTimeText()}>
                <Text style={styles.selectTimeButtonText}>Select Time</Text>
              </TouchableOpacity>
            </View>
            :
            <View style={styles.noCalendarView}>
              <TouchableOpacity style={styles.selectStartingDayView} onPress={() => this.toggleSelectedDayText()}>
                {this.state.selectedDay === '' ? <Text style={styles.selectDayText}>Select A Starting Day</Text> : <Text style={styles.selectDayText}>Selected {this.state.selectedMonth}{' '}{this.state.selectedDay},{' '}{this.state.selectedYear}</Text>}
              </TouchableOpacity>

              <TouchableOpacity style={styles.selectEndingDayView} onPress={() => this.toggleSelectedDayText()}>
                {this.state.selectedDay === '' ? <Text style={styles.selectDayText}>Select An Ending Day</Text> : <Text style={styles.selectDayText}>Selected {this.state.selectedMonth}{' '}{this.state.selectedDay},{' '}{this.state.selectedYear}</Text>}
              </TouchableOpacity>

              <TouchableOpacity style={styles.selectStartingTimeView} onPress={() => this.toggleSelectedTimeText()}>
              {this.state.selectedTime === '' ? <Text style={styles.selectTimeText}>Select A Starting Time</Text> : <Text style={styles.selectDayText}>Selected {this.state.selectedTime}</Text>}
              </TouchableOpacity>

              <TouchableOpacity style={styles.selectEndingTimeView} onPress={() => this.toggleSelectedTimeText()}>
              {this.state.selectedTime === '' ? <Text style={styles.selectTimeText}>Select An Ending Time</Text> : <Text style={styles.selectDayText}>Selected {this.state.selectedTime}</Text>}
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

              <TouchableOpacity style={styles.createEventButton} >
                <Text style={styles.createEventButtonText}>Create Event</Text>
              </TouchableOpacity>
            </View>
          }
          </ImageBackground>
      )
  }
}

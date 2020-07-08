import React, {Component} from 'react';
import { Alert, Button, TextInput, View, TouchableHighlight, TouchableWithoutFeedback, Keyboard, FlatList, Text, Image, Modal, TouchableOpacity, ImageBackground} from 'react-native';
import styles from '../Styles/CreateEventScreenStyles.js';
import Feather from 'react-native-vector-icons/Feather';
import {CalendarList} from 'react-native-calendars';
import ToggleSwitch from 'toggle-switch-react-native';
import SlidingUpPanel from 'rn-sliding-up-panel';

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
      markedDate: {},
      selectedDate: '',
      selectedYear: '',
      selectedMonth: '',
      selectedDay: ''
    }
  }



  toggleSelectedDayText = () => {
    if (this.state.selectDayTextPressed){
      this.setState({selectDayTextPressed: false}) 
    }else{
      this.setState({selectDayTextPressed: true});
      this.setMarkedDate();
    }

  }

  handleSelectedDay(day){
    console.log(day);
    let month = day['month'];
    let monthDay = day['day'];
    let monthNumberOfSelectedDay = 0;
    if (month < 10) month = "0" + month;
    if (monthDay < 10) monthDay = "0" + monthDay;

    let monthNames = ["January", "February", "March", "April", "May","June",
                        "July", "August", "September", "October", "November","December"];
    
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
            : 
            <View style={styles.noCalendarView}>
              <TouchableOpacity style={styles.selectDayView} onPress={() => this.toggleSelectedDayText()}>
                {this.state.selectedDay === '' ? <Text style={styles.selectDayText}>Select A Day</Text> : <Text style={styles.selectDayText}>Selected {this.state.selectedMonth}{' '}{this.state.selectedDay},{' '}{this.state.selectedYear}</Text>}
              </TouchableOpacity>

              <TouchableOpacity style={styles.selectTimeView} onPress={() => this._panel.show()}>
                <Text style={styles.selectTimeText}>Select A Time</Text>
              </TouchableOpacity>
            </View>
          }

          <SlidingUpPanel ref={c => this._panel = c} friction={0.50}>

            <ImageBackground source={require('../../../../pics/fade.jpg')} style={styles.fadeBackground}>
              <ToggleSwitch
                isOn={this.state.singleDayEvent}
                onColor="green"
                offColor="grey"
                label="Single Day Event"
                labelStyle={{ color: "white", fontWeight: "bold", fontFamily: 'sans-serif-thin', fontSize: 15 }}
                size="small"
                onToggle={singleDayEvent => {this.setState({ singleDayEvent }); this.onToggle(singleDayEvent);}}
              />

              <ToggleSwitch
                isOn={this.state.hideEvent}
                onColor="green"
                offColor="grey"
                label="Hide Event"
                labelStyle={{ color: "white", fontWeight: "bold", fontFamily: 'sans-serif-thin', fontSize: 15 }}
                size="small"
                onToggle={hideEvent => {this.setState({ hideEvent }); this.onToggle(hideEvent);}}
              />

              <TouchableOpacity style={styles.createEventButton} onPress={() => this._panel.hide()} >
                <Text style={styles.createEventButtonText}>Create Event</Text>
              </TouchableOpacity>
            </ImageBackground>

          </SlidingUpPanel>

          </ImageBackground>
      )
  }


}


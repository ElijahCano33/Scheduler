import React, {Component} from 'react';
import { Alert, Button, TextInput, View, TouchableHighlight, TouchableWithoutFeedback, Keyboard, FlatList, Text, Image, Modal, TouchableOpacity, ImageBackground} from 'react-native';
import styles from '../Styles/CreateEventScreenStyles.js';
import Feather from 'react-native-vector-icons/Feather';
import Entypo from 'react-native-vector-icons/Entypo';
import {CalendarList} from 'react-native-calendars';
import ToggleSwitch from 'toggle-switch-react-native';
import BlinkView from 'react-native-blink-view';
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
      selectDayTextPressed: false
    }
  }

  handleSelectedDay(day){
    console.log(this.state.selectDayTextPressed);
    this.setState({selectDayTextPressed: false});
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

          {this.state.selectDayTextPressed ? 
            <View style={styles.calendarList}>
              <CalendarList
                theme={{
                    calendarBackground: 'transparent',
                    textSectionTitleColor: 'white',
                    selectedDayBackgroundColor: 'white',
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
                    textMonthFontSize: 15,
                    textDayHeaderFontSize: 15,
                    textMonthFontWeight: 'bold',
                    textDayFontWeight: 'bold', 
                }}
                pastScrollRange={5}
                futureScrollRange={5}
                scrollEnabled={true}
                onDayPress={(day) => this.handleSelectedDay(day)}
                hideArrows={false}
                horizontal={true}
                calendarWidth={380}
                calendarHeight={355}
                onDayPress={(day) => console.log(day)}
              />

            </View>
            : 
            <View style={styles.noCalendarView}>
              <TouchableOpacity style={styles.selectDayView} onPress={() => {this.setState({selectDayTextPressed: !this.state.selectDayTextPressed})}}>
                <Text style={styles.selectDayText}>Select A Day</Text>
              </TouchableOpacity>

              <TouchableOpacity style={styles.selectTimeView} onPress={() => this._panel.show()}>
                <Text style={styles.selectTimeText}>Select A Time</Text>
              </TouchableOpacity>
            </View>
          }

          {/*<TouchableOpacity style={styles.downArrowIcon} onPress={() => this._panel.show()}>
            <Entypo name="arrow-bold-down" color={'black'} size={30}/>
          </TouchableOpacity>
            */}

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


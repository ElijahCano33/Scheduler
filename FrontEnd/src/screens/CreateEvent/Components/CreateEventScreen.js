import React, {Component} from 'react';
import { Alert, StatusBar, TextInput, View, TouchableHighlight, TouchableWithoutFeedback, Keyboard, FlatList, Text, Image, Modal, TouchableOpacity, ImageBackground} from 'react-native';
import styles from '../Styles/CreateEventScreenStyles.js';
import Feather from 'react-native-vector-icons/Feather';
import {CalendarList} from 'react-native-calendars';
import ToggleSwitch from 'toggle-switch-react-native';

export default class CreateEventScreen extends Component{
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

                <Text style={styles.selectDayInstructionsText}>Select A Day For The Event</Text>

                <View styles={styles.calendarList}>
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
                            textDayFontSize: 5,
                            textMonthFontSize: 5,
                            textDayHeaderFontSize: 5,
                            textMonthFontWeight: 'bold',
                            textDayFontWeight: 'bold', 
                        }}
                        pastScrollRange={5}
                        futureScrollRange={5}
                        scrollEnabled={false}
                        hideArrows={true}
                        horizontal={true}
                        onDayPress={(day) => console.log(day)}
                        />

                </View>

                {/*
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

                
            </View>*/}
            </ImageBackground>
        )
    }


}


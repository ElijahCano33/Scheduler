import React, {Component} from 'react';
import { Text, TouchableOpacity} from 'react-native';
import styles from '../Styles/EventScreenStyles.js';

export default class EventScreen extends Component{

    findSelectedEventDay(){
        console.log("this function will find the selected day!");
    }

    render(){
        const userAnnualEvents = this.props['navigation']['state']['params']['data'];
        const userAnnualEventsLength = userAnnualEvents.length;
        const selectedDay = this.props['navigation']['state']['params']['data'][userAnnualEventsLength-1]['dateString'];
        console.log("selected day hehe: " + selectedDay);
    
        return(
            <TouchableOpacity style={styles.container} onPress={()=> {this.props.navigation.navigate('CalendarScreen')}}>
                <Text> is the event screen!</Text>
            </TouchableOpacity>
        );
    }
}
import React, {Component} from 'react';
import { Text } from "react-native";
import {Calendar, CalendarList, Agenda} from 'react-native-calendars';


months = ["January", "February", "March", "April", 
"May", "June", "July", "August", "September", "October", 
"November", "December"];
 
weekDays = [
    "Sun","Mon","Tue","Wed","Thu","Fri","Sat"
];

numOfDaysInAMonth = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];

export default class Calendar extends Component{
    constructor(props) {
        super(props)
    
        //sets up current states of component.
        this.state = {
            activeDate: new Date()
        }
    }
    


    
    
    render() {
        
        return (
            <View>
                
            </View>
            
        );
    }   
}




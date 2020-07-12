import React, {Component} from 'react';
import { View,Text } from "react-native";
import styles from '../Styles/UpcomingEventBoxStyles.js';
import AntDesign from 'react-native-vector-icons/AntDesign';

export default class UpcomingEventBox extends Component{
    constructor(props){
        super(props);
        this.state ={
            startTime: '',
            endTime: '',
            startDate: '',
            endDate: ''
        }
    }

    componentDidMount(){
        let startTime = this.props.startTime;
        let endTime = this.props.endTime;
        let startDate = this.props.startDay;
        let endDate = this.props.endDay;
        this.convertMilitaryStartTime(startTime);
        this.convertMilitaryEndTime(endTime);
        this.convertStartDateFormat(startDate);
        this.convertEndDateFormat(endDate);
    }

    convertMilitaryStartTime(time){
        time = time.split(':'); 

        let hours = Number(time[0]);
        let minutes = Number(time[1]);
        let seconds = "00";

        let timeValue;

        if (hours > 0 && hours <= 12) {
            timeValue= "" + hours;
        }else if (hours > 12) {
            timeValue= "" + (hours - 12);
        }else if (hours == 0) {
            timeValue= "12";
        }
        
        timeValue += (minutes < 10) ? ":0" + minutes : ":" + minutes;
        timeValue += ":" + seconds;
        timeValue += (hours >= 12) ? " P.M." : " A.M."; 

        this.setState({startTime: timeValue});
    }

    convertMilitaryEndTime(time){
        time = time.split(':'); 

        let hours = Number(time[0]);
        let minutes = Number(time[1]);
        let seconds = "00";

        let timeValue;

        if (hours > 0 && hours <= 12) {
            timeValue= "" + hours;
        }else if (hours > 12) {
            timeValue= "" + (hours - 12);
        }else if (hours == 0) {
            timeValue= "12";
        }
        
        timeValue += (minutes < 10) ? ":0" + minutes : ":" + minutes;
        timeValue += ":" + seconds;
        timeValue += (hours >= 12) ? " P.M." : " A.M."; 

        this.setState({endTime: timeValue});
    }

    convertStartDateFormat(eventDay){
        let year = eventDay.substring(0, 4);
        let monthNumberOfSelectedDay = eventDay.substring(5,7);
        let dayOfMonth = eventDay.substring(8, 10);
        let monthNames = ["January", "February", "March", "April", "May","June",
                        "July", "August", "September", "October", "November","December"];

        monthNumberOfSelectedDay[0] === '0' ? monthNumberOfSelectedDay = parseInt(monthNumberOfSelectedDay[1]) : monthNumberOfSelectedDay = parseInt(monthNumberOfSelectedDay);
        let monthOfSelectedDay = monthNames[monthNumberOfSelectedDay];

        let startDate = monthOfSelectedDay + " " + dayOfMonth + ", " + year;
        this.setState({startDate: startDate});
       
    }


    convertEndDateFormat(eventDay){
        let year = eventDay.substring(0, 4);
        let monthNumberOfSelectedDay = eventDay.substring(5,7);
        let dayOfMonth = eventDay.substring(8, 10);
        let monthNames = ["January", "February", "March", "April", "May","June",
                        "July", "August", "September", "October", "November","December"];

        monthNumberOfSelectedDay[0] === '0' ? monthNumberOfSelectedDay = parseInt(monthNumberOfSelectedDay[1]) : monthNumberOfSelectedDay = parseInt(monthNumberOfSelectedDay);
        let monthOfSelectedDay = monthNames[monthNumberOfSelectedDay];

        let endDate = monthOfSelectedDay + " " + dayOfMonth + ", " + year;
        this.setState({endDate: endDate});
       
    }


    render() {
        return (
            <View style={styles.container}>
                <AntDesign name="pushpin" color={'#FF1DCE'} size={20} style={styles.icon}/>
                <Text style={styles.eventTitle}>{this.props.title}</Text>
                <Text style={styles.eventDescription}>{this.props.description}</Text>
                <Text style={styles.startDate}>Begins {this.state.startDate}{' '}at {this.state.startTime}</Text>
                <Text style={styles.endDate}>Finishes {this.state.endDate}{' '}at {this.state.endTime}</Text>
            </View>
        );
    }   
}




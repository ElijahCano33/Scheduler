import React, {Component} from 'react';
import { View,Text, TouchableOpacity } from "react-native";
import styles from '../Styles/EventInfoStyles.js';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import Entypo from 'react-native-vector-icons/Entypo';

export default class EventInfo extends Component{

    constructor(props){
        super(props);
        this.state ={
            startTime: '',
            endTime: '',
            endDate: ''
        }
    }

    componentDidMount(){
        let startTime = this.props.startTime;
        let endTime = this.props.endTime;
        let endDate = this.props.endDate;
        this.convertMilitaryStartTime(startTime);
        this.convertMilitaryEndTime(endTime);
        this.convertDateFormat(endDate);
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

    convertDateFormat(eventDay){
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
            <View style={styles.eventContainer}>

                <Text style={styles.title}>{this.props.title}</Text>

                <TouchableOpacity style={styles.editIcon}>
                    <MaterialIcons name="edit" color={'#FF1DCE'} size={35}/>
                </TouchableOpacity>

                <TouchableOpacity style={styles.trashIcon}>
                    <Entypo name="trash" color={'#FF1DCE'} size={35}/>
                </TouchableOpacity>

                <Text style={styles.description}>{this.props.description}</Text>
                <Text style={styles.eventTimeInfoText}>Event Time Info </Text>
                <Text style={styles.dates}>Begins At {this.state.startTime}</Text>
                <Text style={styles.dates}>Finishes {' '}{this.state.endDate}{' '}At{' '}{this.state.endTime}</Text>

            </View>
            
        );
    }   
}




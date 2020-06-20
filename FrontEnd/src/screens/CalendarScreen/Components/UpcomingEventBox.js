import React, {Component} from 'react';
import { View,Text } from "react-native";
import styles from '../Styles/UpcomingEventBoxStyles.js';
import AntDesign from 'react-native-vector-icons/AntDesign';

export default class UpcomingEventBox extends Component{
    render() {
        return (
            <View style={styles.container}>
                <AntDesign name="pushpin" color={'#FF1DCE'} size={20} style={{position: 'absolute', right: '10%', top: '5%'}}/>
                <Text style={styles.eventTitle}>{this.props.title}</Text>
                <Text style={styles.eventDescription}>{this.props.description}</Text>
                <Text style={styles.startDate}>Starts {this.props.startDay}{' '}at {this.props.startTime}</Text>
                <Text style={styles.endDate}>Ends on {this.props.endDay}{' '}at {this.props.endTime}</Text>
            </View>
        );
    }   
}




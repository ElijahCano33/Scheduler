import React, {Component} from 'react';
import { View,Text } from "react-native";
import styles from '../Styles/UpcomingEventBoxStyles.js';

export default class UpcomingEventBox extends Component{
    render() {
        return (
            <View style={styles.container}>
                <Text style={styles.eventTitle}>Event Title: {this.props.title}</Text>
                <Text style={styles.eventDescription}>Event Description: {this.props.description}</Text>
                <Text style={styles.startDay}>{this.props.startDay}</Text>
                <Text style={styles.startTime}>{this.props.startTime}</Text>
                <Text style={styles.endDay}>{this.props.endDay}</Text>
                <Text style={styles.endTime}>{this.props.endTime}</Text>
            </View>
        );
    }   
}




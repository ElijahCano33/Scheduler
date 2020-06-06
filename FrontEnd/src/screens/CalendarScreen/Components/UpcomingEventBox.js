import React, {Component} from 'react';
import { View,Text } from "react-native";
import styles from '../Styles/UpcomingEventBoxStyles.js';



export default class UpcomingEventBox extends Component{
    
    render() {
        return (
            <View style={styles.container}>
                <Text style={styles.day}>{this.props.day}</Text>
                <Text style={styles.time}>{this.props.time}</Text>
                <Text style={styles.eventDescriptionText}>{this.props.event}</Text>
                
            </View>
            
        );
    }   
}




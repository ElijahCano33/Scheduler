import React, {Component} from 'react';
import { View,Text } from "react-native";
import styles from '../Styles/EventInfoStyles.js';

export default class EventInfo extends Component{
    render() {
        return (
            <View style={styles.eventContainer}>
                <Text style={styles.title}>{this.props.title}</Text>
                <Text style={styles.description}>{this.props.description}</Text>
                <Text style={styles.dates}>Starts At:{' '}{this.props.startDate}</Text>
                <Text style={styles.dates}>Finishes On: {' '}{this.props.endDate}</Text>
            </View>
            
        );
    }   
}




import React, {Component} from 'react';
import { View,Text } from "react-native";
import styles from '../Styles/EventInfoStyles.js';

export default class FriendBox extends Component{
    render() {
        return (
            <View style={styles.eventContainer}>
                <Text style={styles.title}>{this.props.title}</Text>
                <Text style={styles.description}>{this.props.description}</Text>
                <Text style={styles.dates}>Starts At:{' '}{this.props.startTime}</Text>
                <Text style={styles.dates}>Finishes On: {' '}{this.props.endDate}{' '}At{' '}{this.props.endTime}</Text>
            </View>
            
        );
    }   
}




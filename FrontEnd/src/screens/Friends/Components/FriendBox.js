import React, {Component} from 'react';
import { View,Text } from "react-native";
import styles from '../Styles/FriendBoxStyles.js';



export default class FriendBox extends Component{
    
    render() {
        return (
            
            <View style={styles.container}>
                <Text style={styles.eventDescriptionText}>{this.props.firstName}</Text>
                <Text style={styles.eventDescriptionText}>{this.props.lastName}</Text>
                <Text style={styles.eventDescriptionText}>{this.props.email}</Text>
                <Text style={styles.eventDescriptionText}>{this.props.userName}</Text>
            </View>
            
        );
    }   
}




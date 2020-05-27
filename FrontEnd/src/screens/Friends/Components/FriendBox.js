import React, {Component} from 'react';
import { View,Text } from "react-native";
import styles from '../Styles/FriendBoxStyles.js';



export default class FriendBox extends Component{
    
    render() {
        return (
            
            <View style={styles.container}>
                <Text style={styles.eventDescriptionText}>{this.props.friend}</Text>
            </View>
            
        );
    }   
}




import React, {Component} from 'react';
import { View,Text, Image } from "react-native";
import styles from '../Styles/FriendBoxStyles.js';
import Foundation from 'react-native-vector-icons/Foundation';
import Entypo from 'react-native-vector-icons/Entypo';

export default class FriendBox extends Component{
    render() {
        return (
            <View style={styles.container}>
                <Text style={styles.name}>{this.props.firstName}{' '}{this.props.lastName}</Text>
                <Text style={styles.email}>{this.props.email}</Text>
                <Text style={styles.username}>{this.props.userName}</Text>
                <Image source={require('../../../../pics/image-0.png')} style={styles.image}/>
                <Foundation name="calendar" color={'#FF1DCE'} size={50} style={styles.calendarIcon}/>
                <Entypo name="trash" color={'#FF1DCE'} size={45} style={styles.trashIcon}/>
            </View>
            
        );
    }   
}




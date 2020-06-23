import React, {Component} from 'react';
import { View,Text, Image, TouchableOpacity} from "react-native";
import styles from '../Styles/FriendBoxStyles.js';
import Foundation from 'react-native-vector-icons/Foundation';
import Entypo from 'react-native-vector-icons/Entypo';

export default class FriendBox extends Component {

    
    navigateToFriendsCalendar(){
        console.log("this is friend's email: " + this.props.email);
        this.props.navigation.navigate('FriendsCalendarScreen', {data: this.props.email});
    }
    

    render() {


        return (
            <View style={styles.container}>

                <Text style={styles.name}>{this.props.firstName}{' '}{this.props.lastName}</Text>
                <Text style={styles.email}>{this.props.email}</Text>
                <Text style={styles.username}>{this.props.userName}</Text>
                <Image source={require('../../../../pics/image-0.png')} style={styles.image}/>

                <TouchableOpacity onPress={this.navigateToFriendsCalendar.bind(this)} style={styles.calendarIcon}>
                    <Foundation name="calendar" color={'#FF1DCE'} size={50}/>
                </TouchableOpacity>

                <TouchableOpacity style={styles.trashIcon}>
                    <Entypo name="trash" color={'#FF1DCE'} size={45}/>
                </TouchableOpacity>

            </View>  
        );
    }   
}

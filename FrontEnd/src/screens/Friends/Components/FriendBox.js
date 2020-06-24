import React, {Component} from 'react';
import { Alert, View,Text, Image, TouchableOpacity} from "react-native";
import styles from '../Styles/FriendBoxStyles.js';
import Foundation from 'react-native-vector-icons/Foundation';
import Entypo from 'react-native-vector-icons/Entypo';
import axios from "axios";

export default class FriendBox extends Component {
    constructor(props) {
        super(props)
        
        this.state = {
            friendEmail: '',
            userId: 0,
            friendId: 0,
            status: ''
            
        }
    }

    navigateToFriendsCalendar(){
        this.props.navigation.navigate('FriendsCalendarScreen', {data: this.props.email});
    }

    createTwoButtonAlert = () => {
        
    Alert.alert(
      "Important Notice",
      "Are you sure you want to remove " + this.props.firstName + " from being your friend?",
      [
        {
          text: "Cancel",
          onPress: () => console.log("Cancel Pressed"),
          style: "cancel"
        },
        { text: "OK", onPress: () => this.removeFriendConfirmation()}
      ],
      { cancelable: false }
    );
    }

    removeFriendConfirmation(){
        let email = this.props.email;
        this.setState({friendEmail: email});
        this.getUserId();
    }

    getUserId(){
        axios({
            method: 'post',
            url: 'http://192.168.68.1:5000/api/userId',
        })
        .then((response) => {
            this.setState({userId: response['data']['user_id']});
            this.removeFriend();
            
        }, (error) => {
            console.log(error);
        });
    }

    removeFriend(){
        let currentUserId = this.state.userId;
        let friend = this.state.friendEmail;
        let requestType = 'block';
        let friendId = 0;

        axios({
            method: 'post',
            url: 'http://192.168.68.1:5000/api/friendId',
            data: {friend: friend}
        })
        .then((response) => {
            this.setState({friendId: response['data']['friend_id']});
            friendId = this.state.friendId;
              
            axios({
                method: 'post',
                url: 'http://192.168.68.1:5000/api/friendship/update',
                data: {request_user_id: currentUserId, befriend_user_id: friendId, requested_friendship_type: requestType}
            })
            .then((response) => {
                
                this.setState({status: response['data']['status_info']});
                Alert.alert(this.props.firstName + " has been removed from your friend's list!");
                this.props.parentReference();
        
            }, (error) => {
                console.log(error);
            });
    
        }, (error) => {
            console.log(error);
        });
        
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

                <TouchableOpacity style={styles.trashIcon} onPress={this.createTwoButtonAlert}>
                    <Entypo name="trash" color={'#FF1DCE'} size={45}/>
                </TouchableOpacity>

            </View>  
        );
    }   
}

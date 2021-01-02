import React, {Component} from 'react';
import { Alert, View,Text, Image, TouchableOpacity} from "react-native";
import styles from '../Styles/FriendBoxStyles.js';
import Foundation from 'react-native-vector-icons/Foundation';
import Entypo from 'react-native-vector-icons/Entypo';
import {API_URL} from "@env";
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
        this.props.navigation.navigate('FriendsCalendarScreen', {email: this.props.email, firstName: this.props.firstName});
    }

    confirmFriendRemovalAlertBox = () => {
        
        Alert.alert("Important Notice","Are you sure you want to remove " + this.props.firstName + " from being your friend?",
        [
            {text: "Cancel",  onPress: () => console.log("Cancel Pressed"), style: "cancel"},
            { text: "OK", onPress: () => this.removeFriendConfirmation()}
        ],
        { cancelable: false }
        );  
    }

    confirmViewFriendsCalendarAlertBox = () => {
        Alert.alert("Important Notice","Are you sure you want to view " + this.props.firstName + "'s calendar and events?",
        [
            {text: "Cancel",  onPress: () => console.log("Cancel Pressed"), style: "cancel"},
            { text: "OK", onPress: () => this.navigateToFriendsCalendar()}
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
        let url = API_URL + 'api/userId';
        axios({
            method: 'post',
            url: url,
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
        let friendIdServiceUrl = API_URL + 'api/friendId';
        let updateFriendshipServiceUrl = API_URL + 'api/friendship/update';

        axios({
            method: 'post',
            url: friendIdServiceUrl,
            data: {friend: friend}
        })
        .then((response) => {
            this.setState({friendId: response['data']['friend_id']});
            friendId = this.state.friendId;
              
            axios({
                method: 'post',
                url: updateFriendshipServiceUrl,
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

                <TouchableOpacity onPress={this.confirmViewFriendsCalendarAlertBox} style={styles.calendarIcon}>
                    <Foundation name="calendar" color={'#FF1DCE'} size={50}/>
                </TouchableOpacity>

                <TouchableOpacity style={styles.trashIcon} onPress={this.confirmFriendRemovalAlertBox}>
                    <Entypo name="trash" color={'#FF1DCE'} size={45}/>
                </TouchableOpacity>

            </View>  
        );
    }   
}

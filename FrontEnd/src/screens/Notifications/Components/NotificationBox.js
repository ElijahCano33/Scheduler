import React, {Component} from 'react';
import { View, Alert,  Text, TouchableOpacity} from 'react-native';
import styles from '../Styles/NotificationBoxStyles.js';
import axios from "axios";

export default class NotificationBox extends Component{

    constructor(props) {
        super(props)
    
        this.state = {
            friend: '',
            requestType: '',
            userId: 0,
            friendId: 0,
            status: ''
        }
      }

    async acceptFriendRequest(){
        if(this.state.userId === 0) await this.getUserId();

        await this.friendServicesRequest();
        
        return true;

    }

    async getUserId(){
        await axios({
            method: 'post',
            url: 'http://192.168.68.1:5000/api/userId',
        })
        .then((response) => {
            this.setState({userId: response['data']['user_id']});
            return response['data']['user_id'];
            
        }, (error) => {
            console.log(error);
        });
    }
    
    async friendServicesRequest(){
        let currentUserId = this.state.userId;
        console.log("this is the current user id: " + currentUserId);
        let friend = this.state.friend;
        let requestType = "accept";
        let friendId;

        await axios({
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
                Alert.alert(this.state.status);
        
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
                <Text style={styles.notificationDescription}>{this.props.description}{"\n"}</Text>
                <Text style={styles.notificationTime}>{this.props.time}</Text>
                {
                this.props.type === "friend_request" ? 
                    <TouchableOpacity style={styles.acceptFriendRequestButton} onPress={() => this.acceptFriendRequest()}>
                        <Text style={styles.acceptText}>Accept</Text>
                    </TouchableOpacity>
                    : null
                }
            </View>            
        );
    }
}
    



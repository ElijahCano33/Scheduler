import React, {Component} from 'react';
import { View, Image, ImageBackground, Text, FlatList, TouchableOpacity} from 'react-native';
import styles from '../Styles/NotificationBoxStyles.js';

export default class NotificationBox extends Component{
    
    render() {
        return (
            <View style={styles.container}>
                <Text style={styles.notificationDescription}>{this.props.description}{"\n"}</Text>
                <Text style={styles.notificationTime}>{this.props.time}</Text>
                {
                this.props.type === "friend_request" ? 
                    <TouchableOpacity style={styles.acceptFriendRequestButton}>
                        <Text style={styles.acceptText}>Accept</Text>
                    </TouchableOpacity>
                    : null
                }
            </View>            
        );
    }
}
    



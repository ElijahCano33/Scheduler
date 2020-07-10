import React, {Component} from 'react';
import { View, Image, ImageBackground, Text, FlatList} from 'react-native';
import styles from '../Styles/NotificationsScreenStyles.js';
import NotifcationBox from './NotificationBox.js';

const LATEST = [
    {'description': 'Louis King viewed your calendar!', 'time': '16h', 'type': 'calendar_viewing'},
    {'description': 'Jerry Terry marked a new event on your calendar!', 'time': '18h', 'type': 'calendar_marking'},
    {'description': 'Alex Rodriguez sent you a friend request!', 'time': '23h', 'type': 'friend_request'}
];

const OLDER = [
    {'description': 'Jeremiah Raz sent you a friend request!', 'time': '5d', 'type': 'friend_request'},
    {'description': 'Ryan Press marked a new event on your calendar!', 'time': '7d', 'type': 'calendar_marking'},
    {'description': 'Eli Menedez sent you a friend request!', 'time': '23d', 'type': 'calendar_viewing'},
    {'description': 'Jeremiah Raz sent you a friend request!', 'time': '5d', 'type': 'friend_request'},
    {'description': 'Ryan Press marked a new event on your calendar!', 'time': '7d', 'type': 'calendar_marking'},
    {'description': 'Eli Menedez sent you a friend request!', 'time': '23d', 'type': 'calendar_viewing'}
];

export default class NotificationsScreen extends Component{
    
    render() {
        return (
            <ImageBackground source={require('../../../../pics/fade.jpg')} style={styles.fadeBackground}>

                <Image
                    style={styles.logo}
                    source={require('../../../../pics/scriptscheduler.png')}
                />

                <Text style={styles.notificationsText}>Notifications</Text>

                <Text style={styles.latestText}>Latest</Text>

                <View style={styles.latestNotificationsList}>
                    <FlatList
                        data={LATEST}
                        keyExtractor={item => item.id}
                        renderItem={({ item }) => (<NotifcationBox description={item.description} time={item.time}/>)}
                    />

                    <Text style={styles.olderText}>Older</Text>

                    <FlatList
                        data={OLDER}
                        keyExtractor={item => item.id}
                        renderItem={({ item }) => (<NotifcationBox description={item.description} time={item.time}/>)}
                    />
                </View>

                
            </ImageBackground>
            
        );
    }
}
    



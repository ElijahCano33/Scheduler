import React, {Component} from 'react';
import { View, Image, ImageBackground, Text, FlatList} from 'react-native';
import styles from '../Styles/NotificationsScreenStyles.js';
import NotifcationBox from './NotificationBox.js';

const NOTIFICATIONS = [
    {'description': 'Louis King viewed your calendar!', 'time': '16h', 'type': 'calendar_viewing', email: ''},
    {'description': 'Jerry Terry marked a new event on your calendar!', 'time': '18h', 'type': 'calendar_marking', email: ''},
    {'description': 'Alex Rodriguez sent you a friend request!', 'time': '23h', 'type': 'friend_request', email: ''},
    {'description': 'Jeremiah Raz sent you a friend request!', 'time': '5d', 'type': 'friend_request', email: 'johnny12@gmail.com'},
    {'description': 'Ryan Press marked a new event on your calendar!', 'time': '7d', 'type': 'calendar_marking', email: ''},
    {'description': 'Eli Menedez sent you a friend request!', 'time': '23d', 'type': 'calendar_viewing', email: ''},
    {'description': 'Jeremiah Raz sent you a friend request!', 'time': '5d', 'type': 'friend_request', email: ''},
    {'description': 'Ryan Press marked a new event on your calendar!', 'time': '7d', 'type': 'calendar_marking', },
    {'description': 'Eli Menedez sent you a friend request!', 'time': '23d', 'type': 'calendar_viewing', email: ''}
];

export default class NotificationsScreen extends Component{

    renderListHeader(){
        return(
            <View style={styles.notificationsListHeader}>

                <Image
                    style={styles.logo}
                    source={require('../../../../pics/scriptscheduler.png')}
                />

                <Text style={styles.notificationsText}>Notifications</Text>

                <Text style={styles.earlierText}>Earlier</Text>

            </View>
        )
    }
    
    render() {

        return (
            
            <ImageBackground source={require('../../../../pics/fade.jpg')}  style={styles.fadeBackground}>

                   <FlatList
                    data={NOTIFICATIONS}
                    keyExtractor={item => item.id}
                    renderItem={({ item }) => (<NotifcationBox description={item.description} time={item.time} type={item.type} email={item.email}/>)}
                    ListHeaderComponent={this.renderListHeader}
                />

            </ImageBackground>
        );
    }
}
    



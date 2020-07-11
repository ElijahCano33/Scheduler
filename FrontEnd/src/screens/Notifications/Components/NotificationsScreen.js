import React, {Component} from 'react';
import { View, Image, ImageBackground, Text, FlatList, Animated} from 'react-native';
import styles from '../Styles/NotificationsScreenStyles.js';
import NotifcationBox from './NotificationBox.js';

const NOTIFICATIONS = [
    {'description': 'Louis King viewed your calendar!', 'time': '16h', 'type': 'calendar_viewing'},
    {'description': 'Jerry Terry marked a new event on your calendar!', 'time': '18h', 'type': 'calendar_marking'},
    {'description': 'Alex Rodriguez sent you a friend request!', 'time': '23h', 'type': 'friend_request'},
    {'description': 'Jeremiah Raz sent you a friend request!', 'time': '5d', 'type': 'friend_request'},
    {'description': 'Ryan Press marked a new event on your calendar!', 'time': '7d', 'type': 'calendar_marking'},
    {'description': 'Eli Menedez sent you a friend request!', 'time': '23d', 'type': 'calendar_viewing'},
    {'description': 'Jeremiah Raz sent you a friend request!', 'time': '5d', 'type': 'friend_request'},
    {'description': 'Ryan Press marked a new event on your calendar!', 'time': '7d', 'type': 'calendar_marking'},
    {'description': 'Eli Menedez sent you a friend request!', 'time': '23d', 'type': 'calendar_viewing'}
];

export default class NotificationsScreen extends Component{

    renderListHeader(){
        return(
            <View style={{height: '20%', backgroundColor: 'transparent'}}>

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
        const scrollY = new Animated.Value(0);
        const translateY = scrollY.interpolate({
            inputRange:[0, 30],
            outputRange:[0, -30]
        })
        return (
            
            <ImageBackground source={require('../../../../pics/fade.jpg')} style={{flex: 1}}>

                <Animated.View style={{transform:[{translateY}]}}>
                    <Image
                        style={styles.logo}
                        source={require('../../../../pics/scriptscheduler.png')}
                    />

                    <Text style={styles.notificationsText}>Notifications</Text>

                    <Text style={styles.earlierText}>Earlier</Text>
                </Animated.View>
                   
                   <FlatList
                    data={NOTIFICATIONS}
                    keyExtractor={item => item.id}
                    renderItem={({ item }) => (<NotifcationBox description={item.description} time={item.time}/>)}
                    onScroll={(e)=> {
                        scrollY.setValue(e.nativeEvent.contentOffset.y)
                    }}
                    style={{position: 'absolute', top: '21%'}}
                />

            </ImageBackground>
        );
    }
}
    



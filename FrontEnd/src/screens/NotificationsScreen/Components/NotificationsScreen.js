import React, {Component} from 'react';
import { StyleSheet, View, Text, Image, ImageBackground} from 'react-native';
import styles from '../Styles/NotificationsScreenStyles.js';
//import SchedulerIconButtonsContainer from '../../../components/SchedulerIconButtonsContainer.js';

export default class FriendsScreen extends Component{
    
    
    render() {
        return (
            <ImageBackground source={require('../../../../pics/fade.jpg')} style={styles.fadeBackgroundStyles}>
                <Image
                    style={styles.logo}
                    source={require('../../../../pics/scriptscheduler.png')}
                />
                <Text>this is NotificationsScre</Text>
                
            </ImageBackground>
            
        );
    }
}
    



import React, {Component} from 'react';
import { Image, ImageBackground} from 'react-native';
import styles from '../Styles/NotificationsScreenStyles.js';

export default class FriendsScreen extends Component{
    
    render() {
        return (
            <ImageBackground source={require('../../../../pics/fade.jpg')} style={styles.fadeBackground}>

                <Image
                    style={styles.logo}
                    source={require('../../../../pics/scriptscheduler.png')}
                />
                
            </ImageBackground>
            
        );
    }
}
    



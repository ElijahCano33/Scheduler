import React, {Component} from 'react';
import { StyleSheet, View, Text, Image, ImageBackground} from 'react-native';
import styles from '../Styles/SchedulerMainScreenStyles.js';
import SchedulerIconButtonsContainer from '../../../components/SchedulerIconButtonsContainer.js';

export default class SchedulerMainScreen extends Component{
    
    
    render() {
        return (
            <ImageBackground source={require('../../../../pics/fade.jpg')} style={styles.fadeBackgroundStyles}>
                <Image
                    style={styles.logo}
                    source={require('../../../../pics/RedScheduler.png')}
                />
                <View 
                    style={styles.container}
                />
                
            </ImageBackground>
            
        );
    }
}
    



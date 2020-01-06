import React, {Component} from 'react';
import { StyleSheet, View, Text, Image, ImageBackground} from 'react-native';
import styles from '../Styles/SettingsScreenStyles.js';


export default class SettingsScreen extends Component{
    
    
    render() {
        return (
            <ImageBackground source={require('../../../../pics/fade.jpg')} style={styles.fadeBackgroundStyles}>
                <Text>This is the settings screen</Text>
                
            </ImageBackground>
            
        );
    }
}
    



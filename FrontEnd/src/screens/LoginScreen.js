import React, {Component} from 'react';
import { StyleSheet, Text, View} from 'react-native';
import PopUpBoxMainScreen from '../components/PopUpBoxMainScreen.js';

export default class LoginScreen extends Component{
    render(){
        return (
            <View style={styles.screenColor}>
                <PopUpBoxMainScreen/>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    screenColor: {
        backgroundColor: '#8A2BE2',
        flex:1,
        justifyContent: 'center'
        
    }
});
import React, {Component} from 'react';
import { StyleSheet, Text, View} from 'react-native';

export default class PopUpBoxMainScreen extends Component{
    render(){
        return (
            <View
                style={styles.whitePopUpBox}>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    whitePopUpBox: {
        backgroundColor: 'white',
        top: -20,
        left: 73,
        height: 250,
        width: 250
    }
});
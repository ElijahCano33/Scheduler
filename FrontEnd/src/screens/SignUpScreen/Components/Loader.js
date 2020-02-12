import React, { Component } from 'react';
import {ActivityIndicator, Alert, TouchableWithoutFeedback, StyleSheet,Text,View,Image,TextInput,TouchableOpacity, ImageBackground} from 'react-native';
import styles from '../Styles/LoaderStyles.js';


export default class Loader extends Component {
    render(){
        return(
            <View style={this.props.style}>
                <Text style={styles.loadingText}>Loading...</Text>
                <ActivityIndicator size="large" color="white" style={{position: 'absolute', alignSelf: 'center', top: '40%'}} />
            </View>
        );
    }

};
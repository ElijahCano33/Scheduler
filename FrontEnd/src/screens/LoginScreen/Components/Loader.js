import React, { Component } from 'react';
import {ActivityIndicator, Text,View} from 'react-native';
import styles from '../Styles/LoaderStyles.js';

export default class Loader extends Component {
    render(){
        return(
            <View style={this.props.style}>
                <Text style={styles.loadingText}>Loading...</Text>
                <ActivityIndicator size="large" color="white" style={styles.loadingAnimation}/>
            </View>
        );
    }

};
import React, {Component} from 'react';
import { StyleSheet, View, Text, Image, ImageBackground} from 'react-native';
import styles from '../Styles/LoadingScreenStyles.js';


const FIVE_SECONDS = 5000;

export default class LoadingScreen extends Component{
    /*
    This function will immediately be called once
    the component is mounted. Often used to load data
    when a request has been made to the backend. In this
    case though, we are using it to notify the program that 
    we want to display this component for a total of five
    seconds.
    */
    componentDidMount(){
        setTimeout(() => {
            this.props.navigation.navigate('LoginScreen');
        }, FIVE_SECONDS);
    }
    
    render() {
        return (
            <ImageBackground source={require('../../../../pics/fade.jpg')} style={styles.fadeBackgroundStyles}>
                <Image source={require('../../../../pics/image-0.png')} style={styles.image}/>
            </ImageBackground>
            
        );
    }
}
    



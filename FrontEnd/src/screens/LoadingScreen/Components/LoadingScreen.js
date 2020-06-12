import React, {Component} from 'react';
import { Image, ImageBackground} from 'react-native';
import styles from '../Styles/LoadingScreenStyles.js';

const FIVE_SECONDS = 5000;

export default class LoadingScreen extends Component{
    componentDidMount(){
        setTimeout(() => {
            this.props.navigation.navigate('LoginScreen');
        }, FIVE_SECONDS);
    }
    
    render() {
        return (
            <ImageBackground source={require('../../../../pics/fade.jpg')} style={styles.fadeBackground}>
                <Image source={require('../../../../pics/image-0.png')} style={styles.image}/>
            </ImageBackground>
        );
    }
}
    



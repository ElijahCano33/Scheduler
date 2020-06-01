import React, {Component} from 'react';
import { View,Text, Image } from "react-native";
import styles from '../Styles/FriendBoxStyles.js';



export default class FriendBox extends Component{
    
    render() {
        return (
            
            <View style={styles.container}>
                <Text style={styles.firstName}>{this.props.firstName}</Text>
                <Text style={styles.lastName}>{this.props.lastName}</Text>
                <Text style={styles.email}>Email: {this.props.email}</Text>
                <Text style={styles.username}>Username: {this.props.userName}</Text>
                <Image source={require('../../../../pics/image-0.png')} style={styles.image}/>
            </View>
            
        );
    }   
}




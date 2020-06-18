import React, {Component} from 'react';
import { TextInput, View, Text, TouchableOpacity, Image, ImageBackground} from 'react-native';
//import styles from '../Styles/SearchScreenStyles.js';


export default class EventScreen extends Component{
    render(){
        return(
            <TouchableOpacity onPress={()=> {this.props.navigation.navigate('CalendarScreen')}}>
                <Text> is the event screen!</Text>
            </TouchableOpacity>
        );
    }
}
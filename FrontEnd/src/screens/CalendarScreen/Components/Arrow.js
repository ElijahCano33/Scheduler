import React, {Component} from 'react';
import { StyleSheet, View, Text, Image, ImageBackground} from 'react-native';
import AntDesingIcon from 'react-native-vector-icons/AntDesign';

export default class Arrow extends Component{
    
    render() {
        return (
            <AntDesingIcon name={this.props.name} color={'black'} size={25}/>
        );
    }
}
    



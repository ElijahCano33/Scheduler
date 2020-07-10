import React, {Component} from 'react';
import { View, Image, ImageBackground, Text, FlatList} from 'react-native';
import styles from '../Styles/NotificationBoxStyles.js';

export default class NotificationBox extends Component{
    
    render() {
        return (
            <View style={styles.container}>
                <Text style={styles.notificationDescription}>{this.props.description}{"\n"}</Text>
                <Text style={styles.notificationTime}>{this.props.time}</Text>
            </View>            
        );
    }
}
    



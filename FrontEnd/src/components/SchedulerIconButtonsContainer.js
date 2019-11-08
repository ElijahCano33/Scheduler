import React, {Component} from 'react';
import { StyleSheet, Text, View} from 'react-native';

export default class SchedulerIconButtonsContainer extends Component{
    render(){
        return (
            <View
                style={styles.schedulerIconButtons}>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    schedulerIconButtons: {
        top: '50%',
        alignContent: 'center',
        flexDirection: 'row',
        color: 'white'
    }
});

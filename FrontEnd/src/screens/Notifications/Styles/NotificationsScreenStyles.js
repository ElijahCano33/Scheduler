import {StyleSheet} from 'react-native';

export default StyleSheet.create({
    fadeBackground: {
        justifyContent: 'center', 
        flex: 1
    },
    
    logo: {
        height: 650,
        width: 800,
        top: -230,
        left: '-37%',
        position: 'absolute'
    },

    notificationsText: {
        position: 'absolute',
        top: '220%',
        alignSelf: 'center',
        fontWeight: 'bold',
        fontFamily: 'sans-serif-thin',
        color: 'white',
        fontSize: 29
    },

    earlierText: {
        position: 'absolute',
        top: '400%',
        left: '5%',
        fontWeight: 'bold',
        fontFamily: 'sans-serif-thin',
        color: 'white',
        fontSize: 23
    },
    
});
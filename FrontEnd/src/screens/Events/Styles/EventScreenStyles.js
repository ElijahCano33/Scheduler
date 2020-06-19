import {StyleSheet} from 'react-native';

export default StyleSheet.create({
    container: {
        backgroundColor: '#2d2d2d', 
        flex: 1, 
        justifyContent: 'center'
    },

    eventScreenHeaderText: {
        position: 'absolute',
        top: '0%',
        left: '15%',
        fontWeight: 'bold',
        fontFamily: 'sans-serif-thin',
        color: 'white',
        fontSize: 25
    },

    icon: {
        position: 'absolute', 
        top: '0.5%', 
        left: '0%'
    },

    flatList: {
        justifyContent: 'center', 
        alignItems: 'center'
    }
});
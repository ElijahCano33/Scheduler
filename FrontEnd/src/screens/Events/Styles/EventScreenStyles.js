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
        left: '1%'
    },

    flatList: {
        justifyContent: 'center', 
        alignItems: 'center'
    },

    noEventsView: {
        justifyContent: 'center',
        alignSelf: 'center',
        flex: 1, 
    },

    noEventsText: {
        fontFamily: 'sans-serif-thin',
        fontSize: 25,
        fontWeight: 'bold',
        color: 'white'
    }
});
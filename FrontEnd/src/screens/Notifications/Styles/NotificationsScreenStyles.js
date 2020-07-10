import {StyleSheet} from 'react-native';

export default StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'transparent'
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
        top: '11%',
        alignSelf: 'center',
        fontWeight: 'bold',
        fontFamily: 'sans-serif-thin',
        color: 'white',
        fontSize: 29
    },

    latestText: {
        position: 'absolute',
        top: '17%',
        left: '5%',
        fontWeight: 'bold',
        fontFamily: 'sans-serif-thin',
        color: 'white',
        fontSize: 23
    },

    notificationsList: {
        flex: 1,
        top: '21%', 
        width: '100%', 
        height: '120%', 
        backgroundColor: 'transparent', 
        position: 'absolute'
    },

    olderText: {
        left: '5%',
        fontWeight: 'bold',
        fontFamily: 'sans-serif-thin',
        color: 'white',
        fontSize: 23
    }
    
});
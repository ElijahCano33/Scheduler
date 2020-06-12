import {Dimensions, StyleSheet} from 'react-native';

const windowWidth = Dimensions.get("window").width;
const tabWidth = windowWidth / 4;

export default StyleSheet.create({
    container: {
        backgroundColor: '#fbfbfb',
        padding: 20,
        marginVertical: 8,
        marginHorizontal: 16,
        width: 150,
        borderRadius: 20,  
    },

    eventTitle: {
        alignContent: 'center',
        top: '0%',
        left: '15%',
        justifyContent: 'center',
        alignSelf: 'center',
        position: 'absolute',
        fontSize: 10,
        fontWeight: 'bold',
        color: 'black',
        fontFamily: 'sans-serif-thin',
    },

    eventDescription: {
        alignContent: 'center',
        top: '33%',
        left: '15%',
        justifyContent: 'center',
        alignSelf: 'center',
        position: 'absolute',
        fontSize: 10,
        fontWeight: 'bold',
        color: 'black',
        fontFamily: 'sans-serif-thin',
    },

    startDay: {
        position: 'absolute',
        top: '120%',
        left: '15%',
        fontSize: 10,
       fontFamily: 'sans-serif-thin',
       fontWeight: 'bold' 
    },

    startTime: {
        position: 'absolute',
        top: '120%',
        left: '70%',
        fontSize: 10,
       fontFamily: 'sans-serif-thin',
       fontWeight: 'bold' 
    },

    endDay: {
        position: 'absolute',
        top: '150%',
        left: '15%',
        fontSize: 10,
       fontFamily: 'sans-serif-thin',
       fontWeight: 'bold' 
    },

    endTime: {
        position: 'absolute',
        top: '150%',
        left: '70%',
        fontSize: 10,
       fontFamily: 'sans-serif-thin',
       fontWeight: 'bold' 
    },
    
});
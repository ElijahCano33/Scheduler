import {Dimensions, StyleSheet} from 'react-native';

const windowWidth = Dimensions.get("window").width;
const tabWidth = windowWidth / 4;

export default StyleSheet.create({
    container: {
        backgroundColor: '#2d2d2d',
        padding: 20,
        marginVertical: 8,
        marginHorizontal: 16,
        width: 180,
        height: 150,
        borderRadius: 20,
        shadowColor: 'white',
        shadowOffset: {
            width: 10,
            height: 10
        },
        shadowRadius: 20,
        shadowOpacity: 5.0,
        elevation: 30
    },

    eventTitle: {
        alignContent: 'center',
        top: '0%',
        left: '10%',
        position: 'absolute',
        fontSize: 15,
        fontWeight: 'bold',
        color: 'white',
        fontFamily: 'sans-serif-thin',
    },

    eventDescription: {
        alignContent: 'center',
        top: '25%',
        left: '10%',
        justifyContent: 'center',
        alignSelf: 'center',
        position: 'absolute',
        fontSize: 15,
        fontWeight: 'bold',
        color: 'white',
        fontFamily: 'sans-serif-thin',
    },

    startDate: {
        position: 'absolute',
        top: '70%',
        left: '10%',
        fontSize: 13,
        color: 'white',
       fontFamily: 'sans-serif-thin',
       fontWeight: 'bold' 
    },

    endDate: {
        position: 'absolute',
        top: '100%',
        left: '10%',
        fontSize: 13,
        color: 'white',
       fontFamily: 'sans-serif-thin',
       fontWeight: 'bold' 
    },

    icon: {
        position: 'absolute', 
        right: '10%', 
        top: '5%'
    }
    
});
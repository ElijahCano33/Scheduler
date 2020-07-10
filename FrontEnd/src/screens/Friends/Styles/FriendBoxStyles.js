import {Dimensions, StyleSheet} from 'react-native';

const windowWidth = Dimensions.get("window").width;
const tabWidth = windowWidth / 4;

export default StyleSheet.create({
    container: {
        backgroundColor: '#2d2d2d',
        padding: 20,
        marginVertical: 8,
        marginHorizontal: 16,
        width: 380,
        height: 70,
        left: '-2.1%',
        borderRadius: 30,
        shadowColor: '#000000',
        shadowOffset: {
            width: 10,
            height: 10
        },
        shadowRadius: 5,
        shadowOpacity: 1.0,
        elevation: 10
    },
    
    name: {
        position: 'absolute',
        top: '8%',
        left: '20%',
        fontSize: 20,
        color: 'white',
        fontWeight: 'bold',
        fontFamily: 'sans-serif-thin',
    },

    email: {
        position: 'absolute',
        top: '65%',
        left: '20%',
        color: 'white',
        fontSize: 20,
        fontWeight: 'bold',
        fontFamily: 'sans-serif-thin'
    },

    username: {
        position: 'absolute',
        top: '125%',
        left: '20%',
        color: 'white',
        fontSize: 20,
        fontWeight: 'bold',
        fontFamily: 'sans-serif-thin'
    },

    image: {
        width: 75,
        height: 75,
        top: '-10%',
        left: '1%',
        position: 'absolute'
    },

    calendarIcon: {
        position: 'absolute',
        right: '17%',
        top: '20%'
    },

    trashIcon: {
        position: 'absolute',
        right: '2%',
        top: '27%'
    }
});
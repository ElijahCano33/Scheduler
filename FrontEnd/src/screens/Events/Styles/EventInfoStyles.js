import {StyleSheet} from 'react-native';

export default StyleSheet.create({
    eventContainer: {
        backgroundColor: '#2d2d2d',
        paddingBottom: 20,
        height: 200,
        shadowColor: '#000000', 
        borderLeftWidth: 5, 
        borderRightWidth: 5,
        marginBottom: 10,
        borderColor: '#FF1DCE',
        shadowColor: 'white',
        shadowOffset: {
            width: 10,
            height: 10
        },
        shadowRadius: 20,
        shadowOpacity: 5.0,
        elevation: 30,
        borderRadius: 20
    },

    title: {
        alignContent: 'center',
        alignSelf: 'center',
        fontSize: 20,
        fontWeight: 'bold', 
        color: 'white', 
        fontFamily: 'sans-serif-thin'
    },

    description: {
        alignContent: 'center',
        alignSelf: 'center',
        fontSize: 15,
        fontWeight: 'bold', 
        color: 'white', 
        fontFamily: 'sans-serif-thin'
    },

    dates: {
        bottom: '-60%',
        alignContent: 'center',
        alignSelf: 'center',
        fontSize: 15,
        fontWeight: 'bold', 
        color: 'white', 
        fontFamily: 'sans-serif-thin'
    },

    text: {
        fontSize: 15,
        left: '5%', 
        fontWeight: 'bold', 
        color: 'white', 
        fontFamily: 'sans-serif-thin'
    }
});
import {StyleSheet} from 'react-native';

export default StyleSheet.create({
    eventContainer: {
        backgroundColor: 'white',
        paddingBottom: 20,
        height: 200,
        marginBottom: 10,
        
        shadowColor: "rgba(0,0,0,0.3)",
        shadowOffset: {
            width: 10,
            height: 10
        },
        shadowRadius: 1,
        shadowOpacity: 4,
        
        elevation: 7,
        
        borderRadius: 20
        
    },

    title: {
        alignContent: 'center',
        alignSelf: 'center',
        fontSize: 20,
        fontWeight: 'bold', 
        color: 'black', 
        fontFamily: 'sans-serif-thin'
    },

    description: {
        alignContent: 'center',
        alignSelf: 'center',
        fontSize: 15,
        fontWeight: 'bold', 
        color: 'black', 
        fontFamily: 'sans-serif-thin'
    },

    dates: {
        bottom: '-60%',
        alignContent: 'center',
        alignSelf: 'center',
        fontSize: 15,
        fontWeight: 'bold', 
        color: 'black', 
        fontFamily: 'sans-serif-thin'
    },

    text: {
        fontSize: 15,
        left: '5%', 
        fontWeight: 'bold', 
        color: 'black', 
        fontFamily: 'sans-serif-thin'
    }
});
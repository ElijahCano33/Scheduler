import {StyleSheet} from 'react-native';

export default StyleSheet.create({
    eventContainer: {
        backgroundColor: '#2d2d2d',
        height: '55%',
        shadowColor: '#000000', 
        width: '50%',
        marginRight: 30,
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
        position: 'absolute',
        alignSelf: 'center',
        top: '10%',
        paddingBottom: 10,
        fontSize: 25,
        fontWeight: 'bold', 
        color: 'white', 
        fontFamily: 'sans-serif-thin'
    },

    description: {
        position: 'absolute',
        top: '20%',
        alignSelf: 'center',
        fontSize: 18,
        fontWeight: 'bold', 
        color: 'white', 
        fontFamily: 'sans-serif-thin'
    },

    dates: {
        bottom: '-67%',
        left: '8%',
        
        fontSize: 18,
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
    },

    editIcon: {
        position: 'absolute',
        top: '1%',
        right: '12%'
    },

    trashIcon: {
        position: 'absolute',
        top: '1%',
        right: '2%'
    },

    eventTimeInfoText: {
        position: 'absolute',
        bottom: '33%',
        left: '3%',
        fontWeight: 'bold', 
        color: 'white', 
        fontFamily: 'sans-serif-thin',
        fontSize: 25

    }
});
import {StyleSheet} from 'react-native';

export default StyleSheet.create({
    container: {
        backgroundColor: '#2f4f4f',
        width: '70%',
        height: '40%',
        top: '30%',
        borderRadius: 20
    },
    loadingText: {
        position: 'absolute',
        top: '5%',
        left: '20%',
        fontSize: 15,
        fontWeight: 'bold',
        color: 'white',
        fontFamily: 'sans-serif-thin'
    },

    loadingAnimation: {
        position: 'absolute', 
        alignSelf: 'center', 
        top: '40%'
    }
});
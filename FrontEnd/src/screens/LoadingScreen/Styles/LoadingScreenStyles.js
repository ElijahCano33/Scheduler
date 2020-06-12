import {StyleSheet, Dimensions} from 'react-native';

const windowWidth= Dimensions.get('window').width
const windowHeight = Dimensions.get('window').height

export default StyleSheet.create({
    fadeBackground: {
        justifyContent: 'center', 
        alignItems: 'center', 
        flex: 1
    },
    image: {
        left: windowWidth/2-270,
        position: 'absolute'
    }
});
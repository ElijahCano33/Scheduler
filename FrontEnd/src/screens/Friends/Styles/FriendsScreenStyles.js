import {StyleSheet} from 'react-native';

export default StyleSheet.create({
    fadeBackgroundStyles: {
        justifyContent: 'center', 
        alignItems: 'center', 
        //flexDirection: 'row',
        flex: 1
    },
    logo: {
        height: 650,
        width: 800,
        top: -210,//-35
        left: '-37%',
        position: 'absolute'
    },
    container: {
        width: 395,
        height: 110,
        bottom: '-12%',
        backgroundColor: 'red'
    },
    input1: {
        height: 40,
        width: 340,
        paddingLeft: 38,
        borderRadius: 20,
        backgroundColor: '#2f4f4f',
        marginBottom: 20,
        top: '20%',
        position: 'absolute'
    },
});
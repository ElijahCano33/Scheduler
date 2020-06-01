import {StyleSheet} from 'react-native';

export default StyleSheet.create({
    fadeBackgroundStyles: {
        justifyContent: 'center', 
        alignItems: 'center', 
        flex: 1
    },
    logo: {
        height: 650,
        width: 800,
        bottom: '36%',//-35
        left: '-38%',
        position: 'absolute'
    },
    
    flatlistContainer: {
        flex: 1
    },
    upcomingEventsText: {
        top: '69%',
        left: '3%',
        fontSize: 22,
        color: 'white',
        position: 'absolute',
        fontWeight: "bold"
    },
    container: {
        width: 395,
        height: 110,
        bottom: '-12%',
        backgroundColor: 'red'
    },
    createEventsButton: {
        width: '15%',
        height: '9%',
        borderRadius: 100,
        top: '88.7%',
        left: '80%',
        backgroundColor: '#7ffff4',
        position: 'absolute'
    },
    createEventsText: {
        color: '#c71585',
        justifyContent: 'center', 
        alignItems: 'center', 
        top: '8%',
        left: '5%',
        alignSelf: 'center',
        fontWeight: "bold",
        fontSize: 18
    }
});
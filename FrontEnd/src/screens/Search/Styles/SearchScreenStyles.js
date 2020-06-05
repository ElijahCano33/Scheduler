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
        left: '14%'
        //position: 'absolute'
    },
    container: {
        width: 395,
        height: 110,
        bottom: '-12%',
        backgroundColor: 'red'
    },

    searchBar: {
        height: 40,
        width: 368,
        paddingLeft: 38,
        borderRadius: 20,
        backgroundColor: '#2f4f4f',
        marginBottom: 20,
        top: '20%',
        position: 'absolute',
        fontFamily: 'sans-serif-thin',
        fontWeight: 'bold',
        fontSize: 15
    },
    
    noSearchResults: {
        position: 'absolute',
        top: '370%',
        left: '43%',
        color: 'white',
        fontWeight: "bold",
        fontFamily: 'sans-serif-thin'
    }

});
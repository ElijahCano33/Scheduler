import {StyleSheet} from 'react-native';

export default StyleSheet.create({
    fadeBackground: {
        justifyContent: 'center', 
        alignItems: 'center', 
        flex: 1
    },

    logo: {
        height: 650,
        width: 800,
        top: -210,
        left: '-37%',
        position: 'absolute'
    },

    searchBar: {
        height: 40,
        width: 368,
        paddingLeft: 38,
        borderRadius: 20,
        backgroundColor: '#2d2d2d', //'#2f4f4f',
        marginBottom: 20,
        fontSize: 16,
        fontFamily: 'sans-serif-thin',
        top: '20%',
        position: 'absolute',
        fontWeight: 'bold'
    },

    searchBarIcon: {
        top: '20.85%', 
        left: '5.5%', 
        position: 'absolute'
    },

    sadFaceIcon: {
        top: '35%', 
        left: '-4%', 
        position: 'absolute'
    },

    noFriendsText: {
        top: '68%', 
        fontWeight: 'bold', 
        color: 'white'
    },

    friendsList: {
        top: '28%', 
        marginBottom: 0, 
        bottom: 50, 
        width: '100%', 
        height: '80%', 
        backgroundColor: 'transparent', 
        position: 'absolute'
    },

});
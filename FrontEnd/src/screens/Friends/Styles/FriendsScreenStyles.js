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
        top: -230,
        left: '-37%',
        position: 'absolute'
    },

    searchBar: {
        height: 40,
        width: 368,
        paddingLeft: 38,
        borderRadius: 20,
        backgroundColor: '#2d2d2d',
        marginBottom: 20,
        fontSize: 16,
        fontFamily: 'sans-serif-thin',
        top: '15%',
        position: 'absolute',
        fontWeight: 'bold'
    },

    searchBarIcon: {
        top: '15.8%', 
        left: '5.5%', 
        position: 'absolute'
    },

    noFriendsIcon: {
        top: '45%', 
        left: '0%', 
        position: 'absolute'
    },

    noFriendsText: {
        top: '70%',
        left: '0%', 
        fontWeight: 'bold', 
        fontFamily: 'sans-serif-thin',
        color: 'white'
    },

    friendsList: {
        top: '22%', 
        marginBottom: 0, 
        bottom: 50, 
        width: '100%', 
        height: '80%', 
        backgroundColor: 'transparent', 
        position: 'absolute'
    },

});
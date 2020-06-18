import {StyleSheet, Dimensions} from 'react-native';

const windowWidth= Dimensions.get('window').width
const windowHeight = Dimensions.get('window').height

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
        left: '14%'
    },

    searchBar: {
        height: windowHeight/100+30,
        width: windowWidth/100+380,
        //paddingLeft: 38,
        borderRadius: 20,
        backgroundColor: '#2f4f4f',
        //marginBottom: 20,
        top: '20%',
        position: 'absolute',
        fontFamily: 'sans-serif-thin',
        fontWeight: 'bold',
        fontSize: 16
    },
    
    noSearchResults: {
        position: 'absolute',
        top: '370%',
        left: '43%',
        color: 'white',
        fontWeight: "bold",
        fontFamily: 'sans-serif-thin'
    },

    searchIcon: {
        top: '20.85%', 
        left: windowWidth/100+17, 
        position: 'absolute'
    },

    noSearchResultsView: {
        top: '37.5%', 
        left: '8%', 
        position: 'absolute', 
        height: '10%', 
        width: '50%'
    },

    noSearchResultsIcon: {
        top: '50%', 
        left: '40%', 
        position: 'absolute'
    }
});
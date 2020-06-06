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
        top: '71%',
        left: '3%',
        fontSize: 22,
        color: 'white',
        position: 'absolute',
        fontWeight: "bold",
        fontFamily: 'sans-serif-thin'
    },
    container: {
        width: 395,
        height: 110,
        bottom: '-12%',
        backgroundColor: 'red'
    },
    createEventsButton: {
        width: '15%',
        height: '8.5%',
        borderRadius: 30,
        top: '89.7%',
        left: '80%',
        backgroundColor: '#0099FF',
        position: 'absolute',
        
    },
    createEventsText: {
        color: '#0099FF', //'#c71585'
        justifyContent: 'center', 
        alignItems: 'center', 
        top: '8%',
        left: '5%',
        alignSelf: 'center',
        fontWeight: "bold",
        fontSize: 18
    },

    centeredView: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        marginTop: 22
    },

    modalView: {
    margin: 20,
    width: '70%',
    height: '54%',
    backgroundColor: "white",
    borderRadius: 20,
    padding: 35,
    alignItems: "center",
    shadowColor: "#000",
    shadowOffset: {
        width: 0,
        height: 2
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5
    },

    openButton: {
    backgroundColor: "#F194FF",
    borderRadius: 20,
    padding: 10,
    elevation: 2
    },

    textStyle: {
    color: "white",
    fontWeight: "bold",
    textAlign: "center"
    },

    modalText: {
    marginBottom: 15,
    textAlign: "center"
    }
});
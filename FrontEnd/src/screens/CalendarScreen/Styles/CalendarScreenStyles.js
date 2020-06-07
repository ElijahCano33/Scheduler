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
        backgroundColor: '#FF1DCE', //'#0099FF', '#7ffff4'
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

    textStyle: {
        color: "white",
        fontWeight: "bold",
        textAlign: "center"
    },

    centeredView: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: 'rgba(0,0,0,0.5)',
        marginTop: 0
        },
      modalView: {
        margin: 20,
        width: '78%',
        top: '23%',
        height: '40%',
        backgroundColor: "white",
        padding: 35,
        alignItems: "center",
        shadowColor: "#000",
        shadowOffset: {
          width: 0,
          height: 2
        },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,
        elevation: 5,
        position: 'absolute'
      },
      openButton: {
        backgroundColor: "#F194FF",
        top: '119%',
        left: '58%',
        width: '72%',
        height: '20%',
        position: 'absolute'
      },
      closeButton: {
        backgroundColor: "#F194FF",
        top: '119%',
        left: '0%',
        height: '20%',
        width: '70%',
        position: 'absolute'
      },
      textStyle1: {
        color: "white",
        fontWeight: "bold",
        textAlign: "center",
        position: 'absolute',
        top: '26%',
        left: '34%',
        fontFamily: 'sans-serif-thin'
      },
      textStyle2: {
        color: "white",
        fontWeight: "bold",
        textAlign: "center",
        position: 'absolute',
        fontFamily: 'sans-serif-thin',
        top: '23%',
        left: '40%'
      },
      modalText: {
        marginBottom: 15,
        textAlign: "center"
      },
      input1: {
        height: 40,
        width: 250,
        paddingLeft: 10,
        marginBottom: 20,
        top: '35%',
        position: 'absolute',
        borderWidth: 1,
        borderRadius: 2,
        borderColor: '#ddd',
        borderBottomWidth: 0,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.8,
        shadowRadius: 2,
        elevation: 1,
      },
      input2: {
        height: 40,
        width: 250,
        backgroundColor: 'white',
        paddingLeft: 0,
        fontSize: 15,
        marginBottom: 20,
        top: '16%',
        position: 'absolute',
        borderRadius: 2,
        borderColor: 'grey',
        borderBottomWidth: 0.3,
      },
    
});
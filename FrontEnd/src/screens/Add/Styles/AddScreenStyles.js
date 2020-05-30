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
      top: -200,//-35
      left: '14%'
      //position: 'absolute'
  },
  container: {
      width: 395,
      height: 110,
      bottom: '-12%',
      backgroundColor: 'red'
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
      elevation: 2.,
      top: '90%',
      left: '31%',
      width: 150
    },
    closeButton: {
      backgroundColor: "#F194FF",
      borderRadius: 20,
      padding: 10,
      elevation: 2.,
      top: '78%',
      left: '-31%',
      width: 150
    },
    textStyle: {
      color: "white",
      fontWeight: "bold",
      textAlign: "center"
    },
    modalText: {
      marginBottom: 15,
      textAlign: "center"
    },
    input1: {
      height: 40,
      width: 250,
      backgroundColor: 'grey',
      paddingLeft: 10,
      marginBottom: 20,
      top: '35%',
      position: 'absolute'
    },
    input2: {
      height: 40,
      width: 250,
      backgroundColor: 'grey',
      paddingLeft: 10,
      marginBottom: 20,
      top: '55%',
      position: 'absolute'
    },
    input3: {
      height: 40,
      width: 250,
      backgroundColor: 'white',
      paddingLeft: 10,
      marginBottom: 20,
      top: '75%',
      left: '0%',
      position: 'absolute'
    },


});
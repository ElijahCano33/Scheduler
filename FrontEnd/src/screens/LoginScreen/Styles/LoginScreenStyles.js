import {StyleSheet} from 'react-native';

export default StyleSheet.create({
    screen: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
      backgroundColor: 'transparent'
    },
    fadeBackgroundStyles: {
      justifyContent: 'center', 
      alignItems: 'center', 
      flex: 1
    },
  
    logo: {
      height: 650,
      width: 800,
      top: -220,//-35
      left: '14%'
    },
  
    input1: {
      height: 40,
      width: 250,
      backgroundColor: '#FFFFFF',
      paddingLeft: 10,
      marginBottom: 20,
      top: '35%',
      position: 'absolute'
    },

    input2: {
        height: 40,
        width: 250,
        paddingLeft: 10,
        backgroundColor: '#FFFFFF',
        marginBottom: 20,
        top: '45%', 
        position: 'absolute'
      },
  
    buttonContainer1: {
      width: 120,
      backgroundColor: '#000000',
      borderRadius: 20,
      paddingHorizontal: 30,
      textAlign: 'left',
      left: '18%', //16% for it to work on all android screens
      top: '54.5%',
      position: 'absolute'
    },

    buttonContainer2: {
        width: 120,
        backgroundColor: '#000000',
        paddingHorizontal: 30,
        borderRadius: 20,
        textAlign: 'left',
        top: '54.5%',
        left: '51%',
        position: 'absolute'
      },
  
    buttonText: {
      textAlign: 'center',
      color: '#FFFFFF',
      fontWeight: '700'
    }
  });
  
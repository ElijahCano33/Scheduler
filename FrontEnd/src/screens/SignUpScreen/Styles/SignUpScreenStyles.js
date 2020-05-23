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
      height: 450,
      width: 600,
      top: -200,//-35
      //position: 'absolute'
    },
  
    input1: {
      height: 40,
      width: 250,
      paddingLeft: 10,
      backgroundColor: '#FFFFFF',
      marginBottom: 20,
      top: '25%',
      position: 'absolute'
    },

    input2: {
        height: 40,
        width: 250,
        paddingLeft: 10,
        backgroundColor: '#FFFFFF',
        marginBottom: 20,
        top: '35%', 
        position: 'absolute'
      },
      input3: {
        height: 40,
        width: 250,
        paddingLeft: 10,
        backgroundColor: '#FFFFFF',
        marginBottom: 20,
        top: '45%',
        position: 'absolute'
      },
  
      input4: {
          height: 40,
          width: 250,
          paddingLeft: 0,
          backgroundColor: '#FFFFFF',
          marginBottom: 20,
          top: '55%', 
          position: 'absolute'
        },

        input5: {
          height: 40,
          width: 250,
          paddingLeft: 0,
          backgroundColor: '#FFFFFF',
          marginBottom: 20,
          top: '75%', 
          position: 'absolute'
        },

        
  
    buttonContainer1: {
      width: 120,
      backgroundColor: '#000000',
      paddingHorizontal: 30,
      borderRadius: 20,
      textAlign: 'left',
      left: '18%', //16% for it to work on all android screens
      top: '64.5%',
      position: 'absolute'
    },

    buttonContainer2: {
        width: 120,
        backgroundColor: '#000000',
        paddingHorizontal: 30,
        borderRadius: 20,
        textAlign: 'left',
        top: '64.5%',
        left: '51%',
        position: 'absolute'
      },
  
    buttonText: {
      textAlign: 'center',
      color: '#FFFFFF',
      fontWeight: '700'
    }
  });
  
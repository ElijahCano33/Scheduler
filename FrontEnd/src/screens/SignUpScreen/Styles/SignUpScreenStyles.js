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
    //position: 'absolute'
  },

  input1: {
    height: 40,
    width: 250,
    paddingLeft: 10,
    backgroundColor: '#FFFFFF',
    marginBottom: 20,
    top: '20%',
    position: 'absolute'
  },

  input2: {
      height: 40,
      width: 250,
      paddingLeft: 10,
      backgroundColor: '#FFFFFF',
      marginBottom: 20,
      top: '30%', 
      position: 'absolute'

    },

    input3: {
      height: 40,
      width: 250,
      paddingLeft: 10,
      backgroundColor: '#FFFFFF',
      marginBottom: 20,
      top: '40%', 
      position: 'absolute'
    },

    input4: {
      height: 40,
      width: 250,
      paddingLeft: 10,
      backgroundColor: '#FFFFFF',
      marginBottom: 20,
      top: '50%',
      position: 'absolute'
    },
  
    input5: {
        height: 40,
        width: 250,
        paddingLeft: 0,
        backgroundColor: '#FFFFFF',
        marginBottom: 20,
        top: '60%', 
        position: 'absolute'
      },        
  
    buttonContainer1: {
      width: 120,
      backgroundColor: '#7ffff4',
      paddingHorizontal: 30,
      borderRadius: 20,
      textAlign: 'left',
      left: '18%', //16% for it to work on all android screens
      top: '70%',
      position: 'absolute'
    },

    buttonContainer2: {
        width: 120,
        backgroundColor: '#7ffff4',
        paddingHorizontal: 30,
        borderRadius: 20,
        textAlign: 'left',
        top: '70%',
        left: '51%',
        position: 'absolute'
      },
  
    buttonText: {
      textAlign: 'center',
      color: '#FFFFFF',
      fontWeight: '700'
    },
    
  });
  
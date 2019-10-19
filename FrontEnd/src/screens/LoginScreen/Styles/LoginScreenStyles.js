import {StyleSheet} from 'react-native';

export default StyleSheet.create({
    container: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
      backgroundColor: '#40e0d0'
    },
  
    logo: {
      height: 160,
      width: 320,
      top: '-200%',
      position: 'absolute'
    },
  
    input1: {
      height: 40,
      width: 250,
      backgroundColor: '#FFFFFF',
      marginBottom: 20,
      top: '40%',
      position: 'absolute'
    },

    input2: {
        height: 40,
        width: 250,
        backgroundColor: '#FFFFFF',
        marginBottom: 20,
        top: '50%', 
        position: 'absolute'
      },
  
    buttonContainer1: {
      width: 105,
      backgroundColor: '#000000',
      paddingHorizontal: 30,
      textAlign: 'left',
      left: '18%',
      top: '59%',
      position: 'absolute'
    },

    buttonContainer2: {
        width: 120,
        backgroundColor: '#000000',
        paddingHorizontal: 30,
        textAlign: 'left',
        top: '59%',
        left: '51.5%',
        position: 'absolute'
      },
  
    buttonText: {
      textAlign: 'center',
      color: '#FFFFFF',
      fontWeight: '700'
    }
  });
  
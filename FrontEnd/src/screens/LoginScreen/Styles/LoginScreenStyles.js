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
      top: '-30%',
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
        top: '-7%', 
      },
  
    buttonContainer1: {
      width: 120,
      backgroundColor: '#000000',
      paddingHorizontal: 30,
      textAlign: 'left',
      left: '-16.5%',
      top: '-8%'
    },

    buttonContainer2: {
        width: 120,
        backgroundColor: '#000000',
        paddingHorizontal: 30,
        textAlign: 'left',
        top: '-10.72%',
        left: '16.5%'
      },
  
    buttonText: {
      textAlign: 'center',
      color: '#FFFFFF',
      fontWeight: '700'
    }
  });
  
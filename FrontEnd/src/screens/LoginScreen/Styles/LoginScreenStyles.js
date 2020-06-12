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
    height: windowWidth +280,
    width: windowHeight+150,
    top: windowHeight/10000-180,
    left: '13.5%'
  },

  emailInput: {
    height: windowHeight/15, 
    width: windowWidth/1.56, 
    backgroundColor: '#FFFFFF',
    paddingLeft: 10,
    marginBottom: 20,
    top: '35%',
    position: 'absolute'
  },

  passwordInput: {
    height: windowHeight/16, 
    width: windowWidth/1.56, 
    backgroundColor: '#FFFFFF',
    paddingLeft: 0,
    marginBottom: 20,
    top: '45%', 
    position: 'absolute'
  },

  loader: {
    position: 'absolute', 
    top: '-650%', 
    left: '110%', 
    width: '200%', 
    height: '500%', 
    backgroundColor: '#FF1DCE', 
    borderRadius: 20
  },

  loginButton: {
    width: windowWidth/16+95,
    backgroundColor: '#FF1DCE', //'#7ffff4
    borderRadius: 20,
    paddingHorizontal: 30,
    textAlign: 'left',
    left: '18%', //16% for it to work on all android screens
    top: '54.5%',
    position: 'absolute'
  },

  signUpButton2: {
      width: 120,
      backgroundColor: '#FF1DCE',
      paddingHorizontal: 30,
      borderRadius: 20,
      textAlign: 'left',
      left: '17.95%', //16% for it to work on all android screens windowWidth/4-30
      top: '54.5%',
      left: '51%',
      position: 'absolute'
    },

    signUpButton: {
      width: windowWidth/16+95, //120
      backgroundColor: '#7ffff4',
      paddingHorizontal: 30,
      borderRadius: 20,
      textAlign: 'left',
      top: '54.5%',
      left: '52%', //windowWidth/4+105
      position: 'absolute'
    },
  
    buttonText: {
      textAlign: 'center',
      color: '#FFFFFF',
      fontWeight: '700'
    }
 });
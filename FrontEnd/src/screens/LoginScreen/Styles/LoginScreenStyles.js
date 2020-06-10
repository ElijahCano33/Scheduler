import {StyleSheet} from 'react-native';

export default StyleSheet.create({
  fadeBackground: {
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

  emailInput: {
    height: 40,
    width: 250,
    backgroundColor: '#FFFFFF',
    paddingLeft: 10,
    marginBottom: 20,
    top: '35%',
    position: 'absolute'
  },

  passwordInput: {
    height: 40, 
    width: 250, 
    backgroundColor: '#FFFFFF', 
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
    width: 120,
    backgroundColor: '#FF1DCE', //'#7ffff4
    borderRadius: 20,
    paddingHorizontal: 30,
    textAlign: 'left',
    left: '18%', //16% for it to work on all android screens
    top: '54.5%',
    position: 'absolute'
  },

  signUpButton: {
      width: 120,
      backgroundColor: '#FF1DCE',
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
  
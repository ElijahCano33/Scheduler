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
    top: -220,
    left: '14%'
  },

  firstNameInput: {
    height: 40,
    width: 250,
    paddingLeft: 10,
    backgroundColor: '#FFFFFF',
    marginBottom: 20,
    top: '20%',
    position: 'absolute'
  },

  lastNameInput: {
    height: 40,
    width: 250,
    paddingLeft: 10,
    backgroundColor: '#FFFFFF',
    marginBottom: 20,
    top: '30%', 
    position: 'absolute'

  },

  emailInput: {
    height: 40,
    width: 250,
    paddingLeft: 10,
    backgroundColor: '#FFFFFF',
    marginBottom: 20,
    top: '40%', 
    position: 'absolute'
  },

  usernameInput: {
    height: 40,
    width: 250,
    paddingLeft: 10,
    backgroundColor: '#FFFFFF',
    marginBottom: 20,
    top: '50%',
    position: 'absolute'
  },

  passwordInput: {
    height: 40,
    width: 250,
    paddingLeft: 0,
    backgroundColor: '#FFFFFF',
    marginBottom: 20,
    top: '60%', 
    position: 'absolute'
    },        

  loginButton: {
    width: 120,
    backgroundColor: '#FF1DCE', 
    paddingHorizontal: 30,
    borderRadius: 20,
    textAlign: 'left',
    left: '18%',
    top: '70%',
    position: 'absolute'
  },

  registerButton: {
    width: 120,
    backgroundColor: '#FF1DCE',
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
  
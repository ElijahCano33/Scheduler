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
    height: 650,
    width: 800,
    top: windowWidth/100-250,
    left: windowWidth/100-160,
    alignItems: 'center',
    position: 'absolute'
  },

  firstNameInput: {
    height: 40,
    width: 250,
    paddingLeft: 10,
    backgroundColor: '#FFFFFF',
    marginBottom: 20,
    top: '10%',
    position: 'absolute'
  },

  lastNameInput: {
    height: 40,
    width: 250,
    paddingLeft: 10,
    backgroundColor: '#FFFFFF',
    marginBottom: 20,
    top: '20%', 
    position: 'absolute'

  },

  emailInput: {
    height: 40,
    width: 250,
    paddingLeft: 10,
    backgroundColor: '#FFFFFF',
    marginBottom: 20,
    top: '30%', 
    position: 'absolute'
  },

  usernameInput: {
    height: 40,
    width: 250,
    paddingLeft: 10,
    backgroundColor: '#FFFFFF',
    marginBottom: 20,
    top: '40%',
    position: 'absolute'
  },

  passwordInput: {
    height: 40,
    width: 250,
    paddingLeft: 0,
    backgroundColor: '#FFFFFF',
    marginBottom: 20,
    top: '50%', 
    position: 'absolute'
    },        

  loginButton: {
    width: windowWidth/16+95,
    backgroundColor: '#FF1DCE', 
    paddingHorizontal: 30,
    borderRadius: 20,
    textAlign: 'left',
    left: '18%',
    top: '60%',
    position: 'absolute'
  },

  registerButton: {
    width: windowWidth/16+95,
    backgroundColor: '#FF1DCE',
    paddingHorizontal: 30,
    borderRadius: 20,
    textAlign: 'left',
    top: '60%',
    left: '52%',
    position: 'absolute'
  },

  buttonText: {
    textAlign: 'center',
    color: '#FFFFFF',
    fontWeight: '700'
  },
    
});
  
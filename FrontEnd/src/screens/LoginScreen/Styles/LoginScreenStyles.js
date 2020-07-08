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
    backgroundColor: '#2d2d2d',
    borderRadius: 20,
    paddingHorizontal: 30,
    textAlign: 'left',
    left: '18%', 
    top: '54.5%',
    position: 'absolute',
    shadowColor: 'white',
    shadowOffset: {
        width: 10,
        height: 10
    },
    shadowRadius: 20,
    shadowOpacity: 5.0,
    elevation: 30
  },

  signUpButton: {
    width: windowWidth/16+95,
    backgroundColor: '#2d2d2d',
    paddingHorizontal: 30,
    borderRadius: 20,
    textAlign: 'left',
    top: '54.5%',
    left: '52%', 
    position: 'absolute',
    shadowColor: 'white',
    shadowOffset: {
        width: 10,
        height: 10
    },
    shadowRadius: 20,
    shadowOpacity: 5.0,
    elevation: 30
  },
  
  buttonText: {
    textAlign: 'center',
    color: '#FFFFFF',
    fontWeight: '700'
  }
 });
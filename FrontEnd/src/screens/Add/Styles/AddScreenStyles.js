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
    top: -200,
    left: '14%'
  },

  centeredView: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: 'rgba(0,0,0,0.5)',
    marginTop: 0
  },

  modalView: {
    margin: 20,
    width: '70%',
    top: '25%',
    height: '35%',
    backgroundColor: "white",
    padding: 35,
    alignItems: "center",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
    position: 'absolute'
  },

  openButton: {
    backgroundColor: "#F194FF",
    top: '119%',
    left: '62.1%',
    width: '72%',
    height: '20%',
    position: 'absolute'
  },

  closeButton: {
    backgroundColor: "#F194FF",
    top: '119%',
    left: '0%',
    height: '20%',
    width: '70%',
    position: 'absolute'
  },

  friendModalCancelText: {
    color: "white",
    fontWeight: "bold",
    textAlign: "center",
    position: 'absolute',
    top: '26%',
    left: '34%',
    fontFamily: 'sans-serif-thin'
  },

  friendModalSubmitText: {
    color: "white",
    fontWeight: "bold",
    textAlign: "center",
    position: 'absolute',
    fontFamily: 'sans-serif-thin',
    top: '23%',
    left: '40%'
  },

  modalText: {
    marginBottom: 15,
    textAlign: "center"
  },

  friendEmailUsernameInput: {
    height: 40,
    width: 250,
    backgroundColor: '#2d2d2d',
    color: 'white',
    paddingLeft: 10,
    marginBottom: 20,
    top: '35%',
    position: 'absolute'
    
  },

  friendServicesText: {
    position: 'absolute',
    top: '60%',
    left: '18%',
    fontSize: 20,
    fontWeight: 'bold',
    color: 'white',
    fontFamily: 'sans-serif-thin'
  },

  calendarServicesText: {
    position: 'absolute',
    top: '60%',
    left: '9%',
    fontSize: 20,
    fontWeight: 'bold',
    color: 'white',
    fontFamily: 'sans-serif-thin'
  },

  friendServicesModalText: {
    fontWeight: 'bold', 
    fontSize: 20, 
    color: 'black', 
    top: '3%', 
    position: 'absolute', 
    fontFamily: 'sans-serif-thin'
  },

  friendServicesButton: {
    top: '0%', 
    left: '50%', 
    position: 'absolute', 
    backgroundColor: 'transparent', 
    width: '50%', 
    height: '100%'
  },

  friendServicesIcon: {
    top: '45%', 
    left: '19%', 
    position: 'absolute'
  },

  calendarServicesButton: {
    top: '0%', 
    left: '0%', 
    position: 'absolute', 
    backgroundColor: 'transparent', 
    width: '50%', 
    height: '100%'
  },

  calendarServicesIcon: {
    top: '45%', 
    left: '28%', 
    position: 'absolute'
  }

});
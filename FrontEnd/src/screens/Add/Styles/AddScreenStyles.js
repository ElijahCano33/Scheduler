import {StyleSheet} from 'react-native';

export default StyleSheet.create({
  fadeBackgroundStyles: {
    justifyContent: 'center', 
    alignItems: 'center', 
    //flexDirection: 'row',
    flex: 1
  },
  logo: {
    height: 650,
    width: 800,
    top: -200,//-35
    left: '14%'
    //position: 'absolute'
  },
  container: {
    width: 395,
    height: 110,
    bottom: '-12%',
    backgroundColor: 'red'
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
    height: '35%',
    backgroundColor: "white",
    //borderRadius: 20,
    padding: 35,
    alignItems: "center",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5
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
  textStyle1: {
    color: "white",
    fontWeight: "bold",
    textAlign: "center",
    position: 'absolute',
    top: '26%',
    left: '34%'
  },
  textStyle2: {
    color: "white",
    fontWeight: "bold",
    textAlign: "center",
    position: 'absolute',
    top: '23%',
    left: '40%'
  },
  modalText: {
    marginBottom: 15,
    textAlign: "center"
  },
  input1: {
    height: 40,
    width: 250,
    //backgroundColor: 'grey',
    paddingLeft: 10,
    marginBottom: 20,
    top: '35%',
    position: 'absolute',
    borderWidth: 1,
    borderRadius: 2,
    borderColor: '#ddd',
    borderBottomWidth: 0,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.8,
    shadowRadius: 2,
    elevation: 1,
  },
  input2: {
    height: 40,
    width: 250,
    backgroundColor: 'white',
    paddingLeft: 10,
    marginBottom: 20,
    top: '30%',
    position: 'absolute',
    borderWidth: 1,
    borderRadius: 2,
    borderColor: '#ddd',
    borderBottomWidth: 0,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.8,
    shadowRadius: 2,
    elevation: 1,
  },
  input3: {
    height: 40,
    width: 250,
    backgroundColor: 'white',
    paddingLeft: 10,
    marginBottom: 20,
    top: '75%',
    left: '0%',
    position: 'absolute'
  },

  friendServicesText: {
    position: 'absolute',
    top: '60%',
    left: '18%',
    fontSize: 20,
    fontWeight: 'bold',
    color: 'white'
  },

  calendarServicesText: {
    position: 'absolute',
    top: '60%',
    left: '9%',
    fontSize: 20,
    fontWeight: 'bold',
    color: 'white'
  },



});
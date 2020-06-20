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
    bottom: '41%',
    left: '-38%',
    position: 'absolute'
  },
  
  flatlistContainer: {
    flex: 1
  },

  upcomingEventsText: {
    top: '-65%',
    left: '3%',
    fontSize: 22,
    color: 'white',
    position: 'absolute',
    fontWeight: "bold",
    fontFamily: 'sans-serif-thin'
  },
  container: {
    width: 395,
    height: 110,
    bottom: '-12%',
    backgroundColor: 'red'
  },

  createEventsButton: {
    width: '15%',
    height: '8.5%',
    borderRadius: 30,
    top: '89.7%',
    left: '80%',
    backgroundColor: '#2d2d2d', 
    position: 'absolute',
  },

  createEventsText: {
      color: '#0099FF',
      justifyContent: 'center', 
      alignItems: 'center', 
      top: '8%',
      left: '5%',
      alignSelf: 'center',
      fontWeight: "bold",
      fontSize: 18
  },

  textStyle: {
      color: "white",
      fontWeight: "bold",
      textAlign: "center"
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
    width: '78%',
    top: '19%',
    height: '40%',
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
    left: '58%',
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
    left: '34%',
    fontFamily: 'sans-serif-thin'
  },

  textStyle2: {
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

  input1: {
    height: 40,
    width: 250,
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

  eventTitleInput: {
    height: 40,
    width: 250,
    backgroundColor: 'white',
    paddingLeft: 0,
    fontSize: 14,
    marginBottom: 20,
    top: '16%',
    position: 'absolute',
    borderRadius: 2,
    borderColor: 'grey',
    borderBottomWidth: 0.3,
  },

  startDateInput: {
    height: 40,
    width: 250,
    backgroundColor: 'white',
    paddingLeft: 0,
    fontSize: 14,
    marginBottom: 20,
    top: '70%',
    position: 'absolute',
    borderRadius: 2,
    borderColor: 'grey',
    borderBottomWidth: 0.3,
    
  },
  endDateInput: {
    height: 40,
    width: 250,
    backgroundColor: 'white',
    paddingLeft: 0,
    fontSize: 14,
    marginBottom: 20,
    top: '90%',
    position: 'absolute',
    borderRadius: 2,
    borderColor: 'grey',
    borderBottomWidth: 0.3,
    
  },

  eventDescriptionInput: {
    height: 40,
    width: 250,
    backgroundColor: 'white',
    paddingLeft: 0,
    fontSize: 14,
    marginBottom: 20,
    top: '36%',
    position: 'absolute',
    borderRadius: 2,
    borderColor: 'grey',
    borderBottomWidth: 0.3,
  },

  additionIcon: {
    top: '5%', 
    left: '7%', 
    position: 'absolute'
  },

  upcomingEventsList: {
    top: '-40%', 
    marginTop: 0, 
    bottom: 50, 
    width: '100%',  
    height: 200, 
    backgroundColor: 'transparent', 
    position: 'absolute'
  },

  calendarList: {
    height: '100%', 
    position: 'absolute', 
    top: '6%', 
    left: '0%'
  },

  creatEventText: {
    fontWeight: 'bold', 
    fontSize: 20, 
    color: 'black', 
    top: '3%', 
    position: 'absolute', 
    fontFamily: 'sans-serif-thin'
  },

  singleDayEventButton: {
    position: 'absolute', 
    top: '60%', 
    left: '8%'
  },

  hideEventButton: {
    position: 'absolute', 
    top: '60%', 
    left: '68%'
  },

  noUpcomingEventsText: {
    top: '75%',
    left: '23.5%',
    fontSize: 22,
    color: 'white',
    position: 'absolute',
    fontWeight: "bold",
    fontFamily: 'sans-serif-thin'
  },

  upcomingEventsView: {
    top: '69%',
    left: '2%',
    width: '100%',
    height: '15%',
    position: 'absolute'
  },

  tabNavigatorIcon: {
    top: '15%'
  }
    
});
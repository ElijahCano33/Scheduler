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

  textStyle: {
      color: "white",
      fontWeight: "bold",
      textAlign: "center"
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
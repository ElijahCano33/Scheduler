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
    bottom: '43%',
    left: '-38%',
    position: 'absolute'
  },

  icon: {
    position: 'absolute', 
    top: '0.5%', 
    left: '1%'
  },

  createeventScreenHeaderText: {
    position: 'absolute',
    top: '10%',
    alignSelf: 'center',
    fontWeight: 'bold',
    fontFamily: 'sans-serif-thin',
    color: 'white',
    fontSize: 25
  },

  eventTitleInput: {
    height: 40,
    width: 250,
    backgroundColor: '#FFFFFF',
    paddingLeft: 10,
    marginBottom: 20,
    top: '18%',
    position: 'absolute'
  },

  eventDescriptionInput: {
    height: 120,
    width: 250,
    backgroundColor: '#FFFFFF',
    paddingLeft: 10,
    marginBottom: 20,
    top: '27%',
    position: 'absolute'
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

  singleDayEventButton: {
    position: 'absolute', 
    top: '105%', 
    left: '15%'
  },

  hideEventButton: {
    position: 'absolute', 
    top: '105%', 
    left: '68%'
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

});
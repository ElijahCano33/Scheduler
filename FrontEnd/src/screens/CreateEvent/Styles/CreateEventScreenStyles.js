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

  createEventScreenHeaderText: {
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

  selectDayInstructionsText: {
    position: 'absolute',
    top: '33%',
    alignSelf: 'center',
    fontWeight: 'bold',
    fontFamily: 'sans-serif-thin',
    color: 'white',
    fontSize: 25
  },

  calendarList: {
    height: '40%', 
    position: 'absolute', 
    top: '110%', 
    left: '0%'
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


});
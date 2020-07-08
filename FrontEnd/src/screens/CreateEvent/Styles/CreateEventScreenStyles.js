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
    top: '28%',
    position: 'absolute'
  },

  selectDayView: {
    position: 'absolute',
    top: '55%',
    alignSelf: 'center'
  },

  selectDayText: {
    alignSelf: 'center',
    fontWeight: 'bold',
    fontFamily: 'sans-serif-thin',
    color: 'white',
    fontSize: 25
  },

  noCalendarView: {
    justifyContent: 'center', 
    alignItems: 'center', 
    flex: 1
  },

  selectTimeView: {
    position: 'absolute',
    top: '70%',
    alignSelf: 'center'
  },

  selectTimeText: {
    alignSelf: 'center',
    fontWeight: 'bold',
    fontFamily: 'sans-serif-thin',
    color: 'white',
    fontSize: 25
  },

  calendarList: {
    height: '100%', 
    position: 'absolute', 
    top: '45%', 
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

  downArrowIcon: {
    position: 'absolute',
    width: '100%',
    bottom: '0%',
    alignItems: 'center'
  },

  createEventButton: {
    position: 'absolute',
    bottom: '10%',
    backgroundColor: '#2d2d2d',
    borderRadius: 20,
    width: '50%',
    height: '5%',
    shadowColor: 'white',
    shadowOffset: {
        width: 10,
        height: 10
    },
    shadowRadius: 20,
    shadowOpacity: 5.0,
    elevation: 30
  },

  createEventButtonText: {
    position:'absolute',
    top: '12%',
    alignSelf: 'center',
    color: 'white',
    fontWeight: 'bold',
    fontFamily: 'sans-serif-thin',

  }


});
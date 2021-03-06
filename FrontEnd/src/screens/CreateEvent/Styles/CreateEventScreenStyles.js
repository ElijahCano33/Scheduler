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

  friendCreateEventScreenHeaderText: {
    position: 'absolute',
    top: '10%',
    alignSelf: 'center',
    fontWeight: 'bold',
    fontFamily: 'sans-serif-thin',
    color: 'white',
    fontSize: 21
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

  selectStartingDayView: {
    position: 'absolute',
    top: '48%',
    alignSelf: 'center'
  },

  selectDayText: {
    alignSelf: 'center',
    fontWeight: 'bold',
    fontFamily: 'sans-serif-thin',
    color: 'white',
    fontSize: 25
  },

  selectEndingDayView: {
    position: 'absolute',
    top: '55%',
    alignSelf: 'center'
  },

  noCalendarView: {
    justifyContent: 'center', 
    alignItems: 'center', 
    flex: 1
  },

  selectStartingTimeView: {
    position: 'absolute',
    top: '62%',
    alignSelf: 'center'
  },

  selectEndingTimeView: {
    position: 'absolute',
    top: '69%',
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
    top: '77%', 
    alignSelf: 'center'
  },

  hideEventButton: {
    position: 'absolute', 
    top: '84%', 
    alignSelf: 'center'
  },

  downArrowIcon: {
    position: 'absolute',
    width: '100%',
    bottom: '0%',
    alignItems: 'center'
  },

  createEventButton: {
    position: 'absolute',
    bottom: '3%',
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

  selectTimeButton: {
    position: 'absolute',
    top: '30%',
    alignSelf: 'center',
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
  },

  timePickerWheel: {
    position: 'absolute', 
    top: '60%', 
    alignSelf: 'center', 
    height: '100%', 
    width: '100%'
  },

  setTimeText: {
    fontSize: 25,
    fontWeight: 'bold',
    fontFamily: 'sans-serif-thin',
    position: 'absolute',
    color: 'white',
    bottom: '107%',
    alignSelf: 'center'
  },

  selectTimeButtonText: {
    position:'absolute',
    top: '12%',
    alignSelf: 'center',
    color: 'white',
    fontWeight: 'bold',
    fontFamily: 'sans-serif-thin',
  },

});
import React, {Component} from 'react';
import { View, Text, FlatList, Image, ImageBackground, TouchableOpacity} from 'react-native';
import styles from '../Styles/EventScreenStyles.js';
import EventInfo from './EventInfo.js';
import Feather from 'react-native-vector-icons/Feather';

export default class EventScreen extends Component{
    constructor(props) {
        super(props)

        this.state = {
            selectedEvents: [],
            selectedEventYear: '',
            selectedEventMonth: '',
            selectedEventDay: ''
            
        }
    }

    componentDidMount(){
        let userAnnualEvents = this.props['navigation']['state']['params']['data'];
        let userAnnualEventsLength = userAnnualEvents.length;
        let selectedDay = this.props['navigation']['state']['params']['data'][userAnnualEventsLength-1]['dateString'];

        this.convertDateFormat(selectedDay);

        userAnnualEvents.pop();
        selectedEvents = [];

        selectedEvents = userAnnualEvents.filter(function(item){
            if (item.startDate.includes(selectedDay)) return item.startDate.includes(selectedDay); 
        })

        this.setState({selectedEvents: selectedEvents});
    
    }

    convertDateFormat(eventDay){
        let year = eventDay.substring(0, 4);
        let monthNumberOfSelectedDay = eventDay.substring(5,7);
        let dayOfMonth = eventDay.substring(8, 10);
        let monthNames = ["January", "February", "March", "April", "May","June",
                        "July", "August", "September", "October", "November","December"];

        monthNumberOfSelectedDay[0] === '0' ? monthNumberOfSelectedDay = parseInt(monthNumberOfSelectedDay[1]) : monthNumberOfSelectedDay = parseInt(monthNumberOfSelectedDay);
        let monthOfSelectedDay = monthNames[monthNumberOfSelectedDay];

        this.setState({selectedEventYear: year});
        this.setState({selectedEventMonth: monthOfSelectedDay});
        this.setState({selectedEventDay: dayOfMonth});


    }

    render(){
        return(
            <ImageBackground style={styles.container} source={require('../../../../pics/fade.jpg')}>
                
                <Image
                    style={styles.logo}
                    source={require('../../../../pics/scriptscheduler.png')}
                />

                <Text style={styles.eventScreenHeaderText}>Events For {this.state.selectedEventMonth}{' '}{this.state.selectedEventDay},{' '}{this.state.selectedEventYear}</Text>

                <TouchableOpacity style={styles.icon} onPress={()=> {this.props.navigation.navigate('CalendarScreen')}}>
                <Feather name="x" color={'black'} size={30}/>
                </TouchableOpacity>

                {this.state.selectedEvents.length !== 0 ?  <View style={styles.flatList}> 
                    <FlatList
                        data={this.state.selectedEvents}
                        //horizontal={true}
                        keyExtractor={item => item.id}
                        renderItem={({ item }) => (<EventInfo title={item.title} description={item.description} startTime={item.startTime} endTime={item.endTIme} endDate={item.endDate}/>)}
                    />
                </View>
                :

                <View style={styles.noEventsView}>
                    <Text style={styles.noEventsText}>No Events For This Day!</Text>
                </View>

                }
            </ImageBackground>
        );
    }
}
 
/*
const appStack = createStackNavigator(
  {
    EventScreen: {
      screen: EventScreen,
    },
    CalendarScreen: {
      screen: CalendarScreen,
    },
  },
  {
    initialRouteName: 'EventScreen',
    transitionConfig: () => fromLeft(3000),
  },
);

export default createAppContainer(appStack);
*/
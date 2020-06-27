import React, {Component} from 'react';
import { TextInput, View, Text, Image, FlatList, ImageBackground} from 'react-native';
import styles from '../Styles/SearchScreenStyles.js';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import EventInfo from './EventInfo.js';
import Loader from './Loader.js';
import axios from "axios";


export default class SearchScreen extends Component{
    constructor(props) {
        super(props)
        
        this.state = {
            search: '',
            unfilteredEvents: [],
            filteredEvents: [],
            userId: 0,
            mounted: true
        };

    }  

    componentDidMount(){
        let userId = 0;
        let today = new Date();
        let year = today.getFullYear().toString();
        let month = (today.getMonth()+1).toString();
        if (month < 10) month = "0" + month;
        this.fetchUserId(userId, month, year);
    }

    fetchUserId(usrId, m, y){
        axios({
          method: 'post',
          url: 'http://192.168.68.1:5000/api/userId',
        })
        .then((response) => {
          this.setState({userId: response['data']['user_id']});
          usrId = this.state.userId;
          this.fetchAnnualEventsOfUserAndFriends(usrId, y);
        }, (error) => {
              
          console.log(error);
        });
    }

    fetchAnnualEventsOfUserAndFriends(usrId, y){
        axios({
          method: 'post',
          url: 'http://192.168.68.1:5000/api/event/read',
          data: {user_id: usrId, request_type: "year", year: y, fetch_friend_events: true}
        })
        .then((response) => {
          this.setState({unfilteredEvents: response['data']['events']});
          this.setState({mounted: false})
        },(error) => {
          console.log(error);
        });
    }
    
    searchEvents = (search) => {
        let unfiltered = [];
        let filtered = [];

        if(search !== ''){
            unfiltered = this.state.unfilteredEvents;
            filtered = unfiltered.filter(function(item){
                let input = search;
                
                if(item.title.includes(input)){
                    return item.title.includes(input);

                }else if(item.description.includes(input)){
                    return item.description.includes(input);

                }else if(item.startDate.includes(input)){
                    return item.startDate.includes(input);

                }else if(item.endDate.includes(input)){
                    return item.endDate.includes(input);
                }       
            })
        }
        this.setState({filteredEvents: filtered})
    }
    
    render() {
        return (
            <ImageBackground source={require('../../../../pics/fade.jpg')} style={styles.fadeBackground}>

                <Image
                    style={styles.logo}
                    source={require('../../../../pics/scriptscheduler.png')}
                /> 

                <TextInput
                    placeholder="Search for personal or friend events"
                    placeholderTextColor='#FFFFFF'
                    style={styles.searchBar}
                    onChangeText={this.searchEvents}
                />

                <FontAwesome name="search" color={'white'} size={25} style={styles.searchIcon} />

                {this.state.mounted ? <Loader style={{position: 'absolute', top: '48%', alignSelf: 'center', width: '40%', height: '18%', backgroundColor: '#2d2d2d', borderRadius: 20}}/> :

                this.state.filteredEvents.length === 0 ?

                    <View style={styles.noSearchResultsView}>
                        <FontAwesome name="search" color={'#2d2d2d'} size={200} style={styles.noSearchResultsIcon} />
                        <Text style={styles.noSearchResults}>No Current Search Results</Text>
                    </View>
                
                    :

                    <View style={styles.flatList}> 
                    <FlatList
                        data={this.state.filteredEvents}
                        keyExtractor={item => item.id}
                        key={(item) => item.id}
                        renderItem={({ item }) => (<EventInfo title={item.title} description={item.description} startTime={item.startDate} endDate={item.endDate}/>)}
                    />
                </View>
                }
                
            </ImageBackground>
            
        );
    }
}
    



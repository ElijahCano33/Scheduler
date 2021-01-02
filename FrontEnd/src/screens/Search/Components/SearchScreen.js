import React, {Component} from 'react';
import { TextInput, View, Text, Image, FlatList, ImageBackground} from 'react-native';
import styles from '../Styles/SearchScreenStyles.js';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import EventInfo from './EventInfo.js';
import {API_URL} from "@env";
import axios from "axios";

export default class SearchScreen extends Component{
    constructor(props) {
        super(props)
        
        this.state = {
            search: '',
            unfilteredEvents: [],
            filteredEvents: [],
            userId: 0,
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
        let url = API_URL + 'api/userId';
        axios({
          method: 'post',
          url: url,
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
        let url = API_URL + 'api/event/read';
        axios({
          method: 'post',
          url: url,
          data: {user_id: usrId, request_type: "year", year: y, fetch_friend_events: true}
        })
        .then((response) => {
          this.setState({unfilteredEvents: response['data']['events']});
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

                {this.state.filteredEvents.length === 0 ?

                    <View style={styles.noSearchResultsView}>
                        <FontAwesome name="search" color={'#2d2d2d'} size={200} style={styles.noSearchResultsIcon} />
                        <Text style={styles.noSearchResults}>No Current Search Results</Text>
                    </View>
                
                    :

                    <View style={styles.flatList}> 
                    <FlatList
                        data={this.state.filteredEvents}
                        keyExtractor={(item, index) => index.toString()}
                        renderItem={({ item }) => (<EventInfo title={item.title} description={item.description} startTime={item.startDate} endDate={item.endDate}/>)}
                    />
                </View>
                }
                
            </ImageBackground>
            
        );
    }
}
    



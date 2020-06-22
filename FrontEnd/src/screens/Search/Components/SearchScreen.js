import React, {Component} from 'react';
import { TextInput, View, Text, Image, FlatList, ImageBackground} from 'react-native';
import styles from '../Styles/SearchScreenStyles.js';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import EventInfo from './EventInfo.js';

const EVENTS = [
    {'id': 0, "title": "Birthday1", "description": "Eli's Birthday Party!", "startDate": "2020-06-12 06:00:00", "endDate": "2020-06-12 07:00:00"},
    {'id': 1, "title": "Birthday2", "description": "Troys's Birthday Party!", "startDate": "2020-06-12 06:00:00", "endDate": "2020-06-12 07:00:00"},
    {'id': 2, "title": "Birthday3", "description": "John's Birthday Party!", "startDate": "2020-06-12 06:00:00", "endDate": "2020-06-12 07:00:00"},
    {'id': 3, "title": "Birthday4", "description": "Ben's Birthday Party!", "startDate": "2020-06-12 06:00:00", "endDate": "2020-06-12 07:00:00"},
    {'id': 4, "title": "Birthday5", "description": "Jerry's Birthday Party!", "startDate": "2020-06-12 06:00:00", "endDate": "2020-06-12 07:00:00"},
    {'id': 5, "title": "Birthday6", "description": "Lopez's Birthday Party!", "startDate": "2020-06-12 06:00:00", "endDate": "2020-06-12 07:00:00"},
    {'id': 6, "title": "Birthday7", "description": "Coco's Birthday Party!", "startDate": "2020-06-12 06:00:00", "endDate": "2020-06-12 07:00:00"},
    {'id': 7, "title": "Birthday8", "description": "Bozo's Birthday Party!", "startDate": "2020-06-12 06:00:00", "endDate": "2020-06-12 07:00:00"},
    {'id': 8, "title": "Birthday9", "description": "Mozo's Birthday Party!", "startDate": "2020-06-12 06:00:00", "endDate": "2020-06-12 07:00:00"},
    {'id': 9, "title": "Birthday10", "description": "Perry's Birthday Party!", "startDate": "2020-06-12 06:00:00", "endDate": "2020-06-12 07:00:00"},
]


export default class SearchScreen extends Component{
    constructor(props) {
        super(props)
        
        this.state = {
            search: '',
            unfilteredData: [],
            filteredData: []
        };

    }  

    componentDidMount(){
        this.setState({unfilteredData: EVENTS});
    }

    
    searchEvents = (search) => {
        let unfiltered = [];
        let filtered = [];

        if(search !== ''){
            unfiltered = this.state.unfilteredData;
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
        this.setState({filteredData: filtered})
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

                {this.state.filteredData.length === 0 ?

                    <View style={styles.noSearchResultsView}>
                        <FontAwesome name="search" color={'#2d2d2d'} size={200} style={styles.noSearchResultsIcon} />
                        <Text style={styles.noSearchResults}>No Current Search Results</Text>
                    </View>
                
                    :

                    <View style={styles.flatList}> 
                    <FlatList
                        data={this.state.filteredData}
                        keyExtractor={item => item.id}
                        renderItem={({ item }) => (<EventInfo title={item.title} description={item.description} startTime={item.startDate} endDate={item.endDate}/>)}
                    />
                </View>
                }
                
            </ImageBackground>
            
        );
    }
}
    



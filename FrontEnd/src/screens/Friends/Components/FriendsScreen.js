import React, {Component} from 'react';
import { View, Text, TextInput, Image, FlatList, ImageBackground} from 'react-native';
import styles from '../Styles/FriendsScreenStyles.js';
import FriendBox from './FriendBox.js';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import axios from "axios";

export default class FriendsScreen extends Component{
    constructor(props) {
        super(props)
        this.searchFriends = this.searchFriends.bind(this);

        this.state = {
            unfilteredFriends: [],
            filteredFriends: [],
            search: '',
            
        }
    }
    
    componentDidMount(){
        this.fetchFriendsList();
    }

    fetchFriendsList(){
        axios({
            method: 'get',
            url: 'http://192.168.68.1:5000/api/friendsList',  
        })
        .then((response) => {
            this.setState({unfilteredFriends: response['data']})
        }, (error) => {
            console.log(error);
        });
    }

    searchFriends = (search) => {
        let unfiltered = [];
        let filtered = [];

        if(search !== ''){
            unfiltered = this.state.unfilteredFriends;
            filtered = unfiltered.filter(function(item){
                let input = search;
                
                if(item.first.includes(input)){
                    return item.first.includes(input);

                }else if(item.last.includes(input)){
                    return item.last.includes(input);

                }else if(item.email.includes(input)){
                    return item.email.includes(input);

                }else if(item.username.includes(input)){
                    return item.username.includes(input);
                }       
            })
        }
        this.setState({filteredFriends: filtered})
    }

    renderNoFriends(){
        return(
            <View style={{flex: 1}}>
                <FontAwesome5 name="sad-cry" color={'#2f4f4f'} size={200} style={styles.sadFaceIcon}/>
                <Text style={styles.noFriendsText}>No Friends At This Time!</Text>
            </View>
        );
    }

    renderUnfilteredFriends(){
        return(
            <View style={styles.friendsList}>
                <FlatList
                    data={this.state.unfilteredFriends}
                    keyExtractor={item => item.id}
                    renderItem={({ item }) => (<FriendBox firstName={item.first} lastName={item.last} email={item.email} userName={item.username}/>)}
                />
            </View>
        )
    }

    renderFilteredFriends(){
        return(
            <View style={styles.friendsList}>
                <FlatList
                    data={this.state.filteredFriends}
                    keyExtractor={item => item.id}
                    renderItem={({ item }) => (<FriendBox firstName={item.first} lastName={item.last} email={item.email} userName={item.username}/>)}
                />
            </View>
        );
    }
    
    render() {
        return (
            <ImageBackground source={require('../../../../pics/fade.jpg')} style={styles.fadeBackground}>

                <Image
                    style={styles.logo}
                    source={require('../../../../pics/scriptscheduler.png')}
                /> 
                
                <TextInput
                    placeholder="Search for friends"
                    placeholderTextColor='#FFFFFF'
                    style={styles.searchBar}
                    onChangeText={this.searchFriends}
                />

                <FontAwesome name="search" color={'white'} size={25} style={styles.searchBarIcon}/>

                {
                    (this.state.filteredFriends.length === 0 && this.state.unfilteredFriends.length === 0) 
                        ? this.renderNoFriends() : 
                        (this.state.filteredFriends.length === 0 && this.state.unfilteredFriends.length !== 0) 
                        ? this.renderUnfilteredFriends() : this.renderFilteredFriends()
                }

            </ImageBackground>
        );
    }
}
    



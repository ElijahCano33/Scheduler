import React, {Component} from 'react';
import { StyleSheet, ScrollView,View, Text, TextInput, Image, FlatList, ImageBackground} from 'react-native';
import styles from '../Styles/FriendsScreenStyles.js';
import FriendBox from './FriendBox.js';
import Entypo from 'react-native-vector-icons/Entypo';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import axios from "axios";

export default class FriendsScreen extends Component{
    //The constructor will both initalize and give access to "this"
    constructor(props) {
        super(props)
        this.searchFriends = this.searchFriends.bind(this);

        //sets up current states of component.
        this.state = {
            unfilteredFriends: [],
            filteredFriends: [],
            search: ''
        }
    }

    
    componentDidMount(){
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
        var unfiltered = [];
        var filtered = [];

        if(search !== ''){
            unfiltered = this.state.unfilteredFriends;
            console.log("this is state: " + this.state.unfilteredFriends);

            filtered = unfiltered.filter(function(item){
                var input = search;
                
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
        }else{
            ;
            
        }
    
    this.setState({filteredFriends: filtered})
    console.log(this.state.filteredFriends);
    }
    
    render() {
        return (
            <ImageBackground source={require('../../../../pics/fade.jpg')} style={styles.fadeBackgroundStyles}>
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
                <FontAwesome name="search" color={'white'} size={25} style={{top: '20.85%', left: '5.5%', position: 'absolute'}} />
                {
                    (this.state.filteredFriends.length === 0 && this.state.unfilteredFriends.length === 0) ?
                    <View style={{flex: 1}}>
                        <FontAwesome5 name="sad-cry" color={'#2f4f4f'} size={200} style={{top: '35%', left: '-4%', position: 'absolute'}}/>
                        <Text style={{top: '68%', fontWeight: 'bold', color: 'white'}}>No Friends At This Time!</Text>
                    </View>
                
                :

                    (this.state.filteredFriends.length === 0 && this.state.unfilteredFriends.length !== 0) ?
                    <View style={{top: '28%', marginBottom: 0, bottom: 50, width: '100%', height: '80%', backgroundColor: 'transparent', position: 'absolute'}}>
                        <FlatList
                            data={this.state.unfilteredFriends}
                            keyExtractor={item => item.id}
                            renderItem={({ item }) => (<FriendBox firstName={item.first} lastName={item.last} email={item.email} userName={item.username}/>)}
                        />
                        
                    </View>

                    :

                    <View style={{top: '28%', marginBottom: 0, bottom: 50, width: '100%', height: '80%', backgroundColor: 'transparent', position: 'absolute'}}>
                        <FlatList
                            data={this.state.filteredFriends}
                            keyExtractor={item => item.id}
                            renderItem={({ item }) => (<FriendBox firstName={item.first} lastName={item.last} email={item.email} userName={item.username}/>)}
                        />
                        
                    </View>
                }
            </ImageBackground>
            
        );
    }
}
    



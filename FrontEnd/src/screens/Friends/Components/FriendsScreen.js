import React, {Component} from 'react';
import { StyleSheet, ScrollView,View, Text, Image, FlatList, ImageBackground} from 'react-native';
import styles from '../Styles/FriendsScreenStyles.js';
import FriendBox from './FriendBox.js';
import Entypo from 'react-native-vector-icons/Entypo';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import axios from "axios";

const FRIENDS = [
    {
      "id": 1,
      "first": 'Jose',
      "last": 'bozo',
      "email": 'johnnyyyyyy@gmail.com',
      "username": 'coco123'
    },
      
  ]


export default class FriendsScreen extends Component{
    //The constructor will both initalize and give access to "this"
    constructor(props) {
        super(props)

        //sets up current states of component.
        this.state = {
            friends: []
        }
    }

    componentDidMount(){
        axios({
            method: 'get',
            
            url: 'http://192.168.68.1:5000/api/friendsList',
            
          })
          .then((response) => {
              this.setState({friends: response['data']})
          }, (error) => {
            
              console.log(error);
          });
    }
    
    render() {
        return (
            <ImageBackground source={require('../../../../pics/fade.jpg')} style={styles.fadeBackgroundStyles}>
                <Image
                    style={styles.logo}
                    source={require('../../../../pics/scriptscheduler.png')}
                /> 
                {
                    this.state.friends.length !== 0 ?
                <View style={{top: '18%', marginBottom: 0, bottom: 50, width: '100%', height: '80%', backgroundColor: 'transparent', position: 'absolute'}}>
                    <FlatList
                        data={this.state.friends}
                        keyExtractor={item => item.id}
                        renderItem={({ item }) => (<FriendBox firstName={item.first} lastName={item.last} email={item.email} userName={item.username}/>)}
                    />
                </View>
                :
                    <View style={{flex: 1}}>
                        <FontAwesome5 name="sad-cry" color={'#2f4f4f'} size={200} style={{top: '35%', left: '-4%', position: 'absolute'}}/>
                        <Text style={{top: '68%', fontWeight: 'bold', color: 'white'}}>No Friends At This Time!</Text>
                    </View>
                }
            
            </ImageBackground>
            
        );
    }
}
    



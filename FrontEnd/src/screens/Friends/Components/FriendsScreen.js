import React, {Component} from 'react';
import { StyleSheet, ScrollView,View, Text, Image, FlatList, ImageBackground} from 'react-native';
import styles from '../Styles/FriendsScreenStyles.js';
import FriendBox from './FriendBox.js';
import Entypo from 'react-native-vector-icons/Entypo';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';

const FRIENDS = [
    {
      id: 1,
      friend: 'Jose Friend #1',
    },
    {
      id: 2,
      friend: 'Lopez Friend #2'
    },
    {
      id: 3,
      friend: 'Jerry friend #3',
    },
    {
      id: 4,
      friend: 'Elijah friend #4'
    },
    {
      id: 5,
      friend: 'William friend #5'
    },
    {
      id: 6,
      friend: 'Perry friend $6',
    },
    {
        id: 7,
        friend: 'William friend #5'
    },
    {
        id: 8,
        friend: 'William friend #5'
    },
    {
        id: 9,
        friend: 'Elijah friend #4'
    },
    {
        id: 10,
        friend: 'William friend #5'
    },
    {
        id: 11,
        friend: 'Perry friend $6',
    },
    {
        id: 12,
        friend: 'William friend #5'
    },
    {
        id: 13,
        friend: 'William friend #5'
    },
      
  ]


export default class FriendsScreen extends Component{
    
    render() {
        return (
            <ImageBackground source={require('../../../../pics/fade.jpg')} style={styles.fadeBackgroundStyles}>
                <Image
                    style={styles.logo}
                    source={require('../../../../pics/scriptscheduler.png')}
                /> 
                {
                    FRIENDS.length !== 0 ?
                <View style={{top: '18%', marginBottom: 0, bottom: 50, width: '100%', height: '80%', backgroundColor: 'transparent', position: 'absolute'}}>
                    <FlatList
                        data={FRIENDS}
                        keyExtractor={item => item.id}
                        renderItem={({ item }) => (<FriendBox friend={item.friend}/>)}
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
    



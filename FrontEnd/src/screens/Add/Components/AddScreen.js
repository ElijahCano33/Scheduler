import React, {Component} from 'react';
import { Alert, StyleSheet, Button, Modal, View, Text, Image, TextInput, TouchableHighlight, ImageBackground} from 'react-native';
import styles from '../Styles/AddScreenStyles.js';
import { Dropdown } from 'react-native-material-dropdown';
//import SchedulerIconButtonsContainer from '../../../components/SchedulerIconButtonsContainer.js';
import axios from "axios";

export default class AddScreen extends Component{
    
    constructor(props) {
        super(props)
    
        //sets up current states of component.
        this.state = {
            username: 0,
            friendUsername: 0,
            requestType: '',
            userId: '',
            friendId: '',
            modalVisible: false,
        }
      }
    
    
    friendServicesCall(){
        var currentUserId = this.state.username;
        var currentFriendUserId = this.state.friendUsername;
        var requestType = this.state.requestType;

        axios({
            method: 'post',
            
            url: 'http://192.168.68.1:5000/api/friendship/update',
            data: {
              request_user_id: currentUserId,
              befriend_user_id: currentFriendUserId,
              requested_friendship_type: requestType

            }
          })
          .then((response) => {
              
              console.log("THIS IS THE RESPONSE: " + response);
              var RESS = JSON.stringify(response);
              console.log("this is ress: " + RESS);
      
          }, (error) => {
            
              console.log(error);
          });
    }



    render() {
        let data = [{
            value: 'befriend',
          }, {
            value: 'accept',
          }, {
            value: 'deny',
          }, {
          value: 'block'
        
          }];
      
        return (
            <ImageBackground source={require('../../../../pics/fade.jpg')} style={styles.fadeBackgroundStyles}>
                <Image
                    style={styles.logo}
                    source={require('../../../../pics/scriptscheduler.png')}
                />   
                <Modal
                    animationType="fade"
                    transparent={true}
                    visible={this.state.modalVisible}
                    onRequestClose={() => {
                    Alert.alert("Modal has been closed.");
                    }}
                >

                
                    <View style={styles.centeredView}>
                        <View style={styles.modalView}>
                            <Text style={{fontWeight: 'bold', fontSize: 20, color: 'black'}}>Friend Services</Text>
                        <TextInput
                            placeholder="username"
                            placeholderTextColor='#000000'
                            style={styles.input1}
                            onChangeText={(username) => this.setState({username})}
                        />

                        <TextInput
                            placeholder="friend username"
                            placeholderTextColor='#000000'
                            style={styles.input2}
                            onChangeText={(friendUsername) => this.setState({friendUsername})}
                        />

                        <Dropdown
                            label='Friend Request Type'
                            data={data}
                            containerStyle={{backgroundColor: 'white', width: 250, top: '70%', position: 'absolute'}}
                            onChangeText={(requestType) => this.setState({requestType})}
                        />

                        <TouchableHighlight
                            style={{ ...styles.openButton, backgroundColor: "#2196F3" }}
                            onPress={() => {
                            this.setState({modalVisible: false}, this.friendServicesCall())
                            }}
                        >
                        
                            <Text style={styles.textStyle}>Submit</Text>
                        </TouchableHighlight>

                        <TouchableHighlight
                            style={{ ...styles.closeButton, backgroundColor: "red" }}
                            onPress={() => {
                            this.setState({modalVisible: false})
                            }}
                        >
                        
                            <Text style={styles.textStyle}>Hide Modal</Text>
                        </TouchableHighlight>

                        </View>
                    </View>
                </Modal>
                <View style={{top: '50%', left: '50%', position: 'absolute'}}>
                    <Button
                        title="Press me"
                        onPress={() => { this.setState({modalVisible: true})}}//() => Alert.alert('Cannot press this one')}
                    />
                </View>
            </ImageBackground>
            
        );
    }
}
    



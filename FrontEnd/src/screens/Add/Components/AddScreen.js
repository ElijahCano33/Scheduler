import React, {Component} from 'react';
import { Alert, StyleSheet, Button, Modal, View, Text, Image, TextInput, KeyboardAvoidingView, TouchableHighlight, Keyboard, TouchableWithoutFeedback, ImageBackground} from 'react-native';
import styles from '../Styles/AddScreenStyles.js';
import { Dropdown } from 'react-native-material-dropdown';
//import SchedulerIconButtonsContainer from '../../../components/SchedulerIconButtonsContainer.js';
import axios from "axios";

export default class AddScreen extends Component{
    
    constructor(props) {
        super(props)
    
        //sets up current states of component.
        this.state = {
            friend: '',
            requestType: '',
            userId: 0,
            friendId: 0,
            modalVisible: false,
            isFocused: false,
            resp: ''
        }
      }

    componentDidMount(){
        axios({
            method: 'post',
            
            url: 'http://192.168.68.1:5000/api/userId',
        })
        .then((response) => {
            this.setState({userId: response['data']['user_id']});
        }, (error) => {
            console.log(error);
        });
        
    }
    
    
    friendServicesCall(){
        var currentUserId = this.state.userId;
        console.log("this is the current user id: " + currentUserId);
        var friend = this.state.friend;
        var requestType = this.state.requestType;
        var friendId;

        axios({
            method: 'post',
            
            url: 'http://192.168.68.1:5000/api/friendId',
            data: {
              friend: friend

            }
          })
          .then((response) => {
            this.setState({friendId: response['data']['friend_id']});
            friendId = this.state.friendId;
              
            axios({
                method: 'post',
                
                url: 'http://192.168.68.1:5000/api/friendship/update',
                data: {
                  request_user_id: currentUserId,
                  befriend_user_id: friendId,
                  requested_friendship_type: requestType
    
                }
              })
              .then((response) => {
                  
                  this.setState({resp: response['data']['status_info']});
                  Alert.alert(this.state.resp);
          
              }, (error) => {
                
                  console.log(error);
              });
    
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
                
                <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
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
                                <Text style={{fontWeight: 'bold', fontSize: 20, color: 'black', top: '3%', position: 'absolute'}}>Friend Services</Text>
                            
                            <TextInput
                                placeholder="Type Friend's Email Or Username: "
                                placeholderTextColor='black'
                                style={styles.input2}
                                onChangeText={(friend) => this.setState({friend})}
                            />

                            <Dropdown
                                label='Friend Request Type'
                                data={data}
                                containerStyle={{backgroundColor: 'white', width: 250, top: '55%', height: 60, position: 'absolute', color: 'grey'}}
                                textColor={'red'}
                                itemColor={'blue'}
                                onChangeText={(requestType) => this.setState({requestType})}
                            />

                            <TouchableHighlight
                                style={{ ...styles.openButton, backgroundColor: "red" }}
                                onPress={() => {
                                this.setState({modalVisible: false}, this.friendServicesCall())
                                }}
                            >
                            
                                <Text style={styles.textStyle2}>Submit</Text>
                            </TouchableHighlight>

                            <TouchableHighlight
                                style={{ ...styles.closeButton, backgroundColor: "grey" }}
                                onPress={() => {
                                this.setState({modalVisible: false})
                                }}
                            >
                            
                                <Text style={styles.textStyle1}>Cancel</Text>
                            </TouchableHighlight>

                            </View>
                        </View>
                    </Modal>
                </TouchableWithoutFeedback>  
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
    



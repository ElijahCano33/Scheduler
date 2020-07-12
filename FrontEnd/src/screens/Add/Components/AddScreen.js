import React, {Component} from 'react';
import { StatusBar, Alert, Modal, View, Text, Image, TextInput, TouchableHighlight, Keyboard, TouchableWithoutFeedback, ImageBackground, TouchableOpacity} from 'react-native';
import styles from '../Styles/AddScreenStyles.js';
import { Dropdown } from 'react-native-material-dropdown';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import Foundation from 'react-native-vector-icons/Foundation';
import axios from "axios";

export default class AddScreen extends Component{
    constructor(props) {
        super(props)
    
        this.state = {
            friend: '',
            requestType: '',
            userId: 0,
            friendId: 0,
            modalVisible: false,
            isFocused: false,
            status: ''
        }
      }

    componentDidMount(){
        this.getUserId();
    }

    getUserId(){
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
    
    friendServicesRequest(){
        let currentUserId = this.state.userId;
        let friend = this.state.friend;
        let requestType = this.state.requestType;
        let friendId;

        axios({
            method: 'post',
            url: 'http://192.168.68.1:5000/api/friendId',
            data: {friend: friend}
        })
        .then((response) => {
            this.setState({friendId: response['data']['friend_id']});
            friendId = this.state.friendId;
              
            axios({
                method: 'post',
                url: 'http://192.168.68.1:5000/api/friendship/update',
                data: {request_user_id: currentUserId, befriend_user_id: friendId, requested_friendship_type: requestType}
            })
            .then((response) => {
                
                this.setState({status: response['data']['status_info']});
                Alert.alert(this.state.status);
        
            }, (error) => {
                console.log(error);
            });
    
        }, (error) => {
            console.log(error);
        });
        
    }

    render() {
        let dropDownData = [{value: 'befriend'}, {value: 'accept'}, {value: 'deny'}, {value: 'block'}];
      
        return (
            <ImageBackground source={require('../../../../pics/fade.jpg')} style={styles.fadeBackground}>

                <StatusBar hidden/>

                <Image
                    style={styles.logo}
                    source={require('../../../../pics/scriptscheduler.png')}
                />
                
                <TouchableWithoutFeedback onPress={Keyboard.dismiss}>

                    <Modal
                        animationType="fade"
                        transparent={true}
                        visible={this.state.modalVisible}
                        onRequestClose={() => {Alert.alert("Modal has been closed.");}}
                    >
                        <View style={styles.centeredView}>

                            <View style={styles.modalView}>

                                <Text style={styles.friendServicesModalText}>Friend Services</Text>
                            
                                <TextInput
                                    placeholder="Type Friend's Email Or Username: "
                                    placeholderTextColor='white'
                                    style={styles.friendEmailUsernameInput}
                                    onChangeText={(friend) => this.setState({friend})}
                                />

                                <Dropdown
                                    label='Friend Request Type'
                                    placeholderTextColor="white"
                                    data={dropDownData}
                                    baseColor="red"
                                    lineWidth={0}
                                    containerStyle={{backgroundColor: 'black', width: 250, top: '65%', height: 40, position: 'absolute', padding: 0}}
                                    textColor={'black'}
                                    //style={{position: 'absolute', top: '0%', left: '100%'}}
                                    onChangeText={(requestType) => this.setState({requestType})}
                                />

                                <TouchableHighlight style={{ ...styles.openButton, backgroundColor: "red" }} onPress={() => {this.setState({modalVisible: false}, this.friendServicesRequest())}}>

                                    <Text style={styles.friendModalSubmitText}>Submit</Text>

                                </TouchableHighlight>

                                <TouchableHighlight style={{ ...styles.closeButton, backgroundColor: "grey" }} onPress={() => {this.setState({modalVisible: false})}}>
                                    <Text style={styles.friendModalCancelText}>Cancel</Text>
                                </TouchableHighlight>

                            </View>

                        </View>

                    </Modal>

                </TouchableWithoutFeedback>  

                <TouchableOpacity style={styles.friendServicesButton} onPress={() => { this.setState({modalVisible: true})}}>

                    <MaterialIcons name="group-add" color={'#2d2d2d'} size={120} style={styles.friendServicesIcon} />

                    <Text style={styles.friendServicesText}>Friend Services</Text>

                </TouchableOpacity>

                <TouchableOpacity style={styles.calendarServicesButton}>

                    <Foundation name="calendar" color={'#2d2d2d'} size={120} style={styles.calendarServicesIcon} />

                    <Text style={styles.calendarServicesText}>Calendar Services</Text>
                    
                </TouchableOpacity>

            </ImageBackground>
            
        );
    }
}
    



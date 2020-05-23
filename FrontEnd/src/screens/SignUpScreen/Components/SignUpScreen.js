import React, { Component } from 'react';
import {StyleSheet,Text,View,Image,TextInput,TouchableOpacity, ImageBackground, TouchableWithoutFeedback, Keyboard} from 'react-native';
import PasswordTextInput from './PasswordTextInput.js';
import styles from '../Styles/SignUpScreenStyles.js';
import axios from "axios";

const serverUrl = 'http://192.168.68.1:5000';
const http = axios.create({
  baseURL: serverUrl
})

export default class SignUpScreen extends Component {

  //The constructor will both initalize and give access to "this"
  constructor(props) {
    super(props)

    //sets up current states of component.
    this.state = {
        firstName: '',
        lastName: '',
        email: '',
        password: '',
        userName: ''
    }
  }
  
  //Sends the user to the loading screen.
  navigateToLoginScreen(){
    this.props.navigation.navigate('LoginScreen');
  }
  
  /*
    The following function establishes a POST network 
    request to the backend using the fetch API. It
    gets ahold of the email and password values that
    the user entered in the login forms, converts
    them from strings to JSON, and then sends them to 
    the backend api with the endpoint "/login".
  */
  signUpNetworkRequestToBackend(){
    var firstName = this.state.firstName;
    var lastName = this.state.lastName;
    var email = this.state.email;
    var password = this.state.password;
    var username = this.state.userName;

    console.log("This is the first name: " + firstName);
    console.log("this is last name: " + lastName);
    console.log("this is the email: " + email);
    console.log("this is the password: " + password);
    console.log("this is the username: " + username);
    
    axios({
      method: 'post',
      
      url: 'http://192.168.68.1:5000/api/register',
      data: {
        first_name: firstName,
        last_name: lastName,
        email: email,
        password: password,
        user_name: username
      }
    })
    .then((response) => {
        
        console.log(response);
    }, (error) => {
      
        console.log(error);
    });
  }

  //Sends the user to the app's main screen.
  navigateToSchedulerMainScreen(){
    this.props.navigation.navigate('SchedulerMainScreen');
  }

  /*
    This function makes calls to the 
    signUpNetworkRequest function and 
    then navigates the user to the app's
    main screen.
  */
 signUpButtonPressed(){
  this.signUpNetworkRequestToBackend();
  this.navigateToSchedulerMainScreen();
}

  
  /*
    The following renders the text Scheduler at
    the top of the screen, login registration forms,
    and both the login and signup buttons.
  */
  render(){
    return(
      <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
        <ImageBackground source={require('../../../../pics/fade.jpg')} style={styles.fadeBackgroundStyles}>
          
          <Image
            style={styles.logo}
            source={require('../../../../pics/PersonalScheduler.png')}
          />

          <TextInput
            placeholder="First Name"
            placeholderTextColor='#000000'
            style={styles.input1}
            onChangeText={(firstName) => this.setState({firstName})}
          />

          <TextInput
            placeholder="Last Name"
            placeholderTextColor='#000000'
            style={styles.input2}
            onChangeText={(lastName) => this.setState({lastName})}
          />

          <TextInput
            placeholder="username"
            placeholderTextColor='#000000'
            style={styles.input5}
            onChangeText={(userName) => this.setState({userName})}
          />

          <TextInput
            placeholder="Email"
            placeholderTextColor='#000000'
            style={styles.input3}
            onChangeText={(email) => this.setState({email})}
          />

          <PasswordTextInput
            placeholder="Password"
            placeholderTextColor='#000000'
            style={styles.input4}
            onChange={(password) => this.setState({password})}
          />

          <TouchableOpacity 
            style={styles.buttonContainer1} 
            onPress={() => this.navigateToLoginScreen()}> 

            <Text 
              style={styles.buttonText}>LOGIN
            </Text>

          </TouchableOpacity>

          <TouchableOpacity 
            style={styles.buttonContainer2}
            onPress={() => this.signUpButtonPressed()}>

            <Text 
              style={styles.buttonText}>SIGN UP
            </Text>

          </TouchableOpacity>

          </ImageBackground>
        </TouchableWithoutFeedback>
    );
  }
}

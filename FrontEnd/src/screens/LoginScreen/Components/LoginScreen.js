import React, { Component } from 'react';
import {StyleSheet,Text,View,Image,TextInput,TouchableOpacity, TouchableWithoutFeedback, Keyboard, ImageBackground, Alert} from 'react-native';
import styles from '../Styles/LoginScreenStyles.js';
import PasswordTextInput from './PasswordTextInput.js';
import Loader from './Loader.js';
import axios from "axios";


export default class LoginScreen extends Component {

  //The constructor will both initalize and give access to "this"
  constructor(props) {
    super(props)

    //sets up current states of component.
    this.state = {
        email: '',
        password: '',
        loginButtonPressed: false,
        authenticated: false,
        loginMessage: ''
    }
  }
  
  //Sends the user to the app's main screen.
  navigateToCalendarScreen(){
    this.props.navigation.navigate('CalendarScreen');
  }
  
  /*
    The following function establishes a POST network 
    request to the backend using the fetch API. It
    gets ahold of the email and password values that
    the user entered in the login forms, converts
    them from strings to JSON, and then sends them to 
    the backend api with the endpoint "/login".
  */
  loginNetworkRequestToBackend(){
    var email = this.state.email;
    var password = this.state.password; 

    axios({
      method: 'post',
      
      url: 'http://192.168.68.1:5000/api/login',
      data: {
        email: email,
        password: password,
        
      }
    })
    .then((response) => {
        
        this.setState({authenticated: true});
        var resp = JSON.parse(response["request"]["_response"]);
        var repsMessage = resp["status_info"];
    
        this.setState({loginMessage: repsMessage});
        
        if(this.state.authenticated){
          this.navigateToCalendarScreen();
        }else{
          console.log("registered value: " + this.state.authenticated);
        }

    }, (error) => {
      var errorJSON = JSON.parse(error["request"]["_response"]);
      var errorMessage = errorJSON['error'];
      this.errorAlert(errorMessage);
      this.showLoaderComponent();

    });

  }

  errorAlert(err){
    Alert.alert(
      "Failed Login!",
      err,
      [
        /*
        {
          text: "Cancel",
          onPress: () => console.log("Cancel Pressed"),
          style: "cancel"
        },
        */
        { text: "OK", onPress: () => console.log("OK Pressed") }
      ],
      { cancelable: false }
    );
  }

  /*
    This function makes calls to the 
    loginNetworkRequest function and 
    then navigates the user to the loading
    screen.
  */
  loginButtonPressed(){
    this.showLoaderComponent();
    this.loginNetworkRequestToBackend();
  }

  navigateToSignUpScreen(){
    this.props.navigation.navigate('SignUpScreen');
  }

  showLoaderComponent = () => {
    if(this.state.loginButtonPressed){
      this.setState({loginButtonPressed: false})
    }else{
      this.setState({loginButtonPressed: true})
    }
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
            source={require('../../../../pics/scriptscheduler.png')}
        />

          <TextInput
            placeholder="Email"
            placeholderTextColor='#000000'
            style={styles.input1}
            onChangeText={(email) => this.setState({email})}
          />

          <PasswordTextInput
            placeholder="Password"
            placeholderTextColor='#000000'
            style={{height: 40, width: 250, backgroundColor: '#FFFFFF', marginBottom: 20, top: '45%', position: 'absolute'}}
            onChange={(password) => this.setState({password})}
          />

          <TouchableOpacity 
            style={styles.buttonContainer1} 
            onPress={() => this.loginButtonPressed()}>

            { this.state.loginButtonPressed === true ? <Loader style={{position: 'absolute', top: '-650%', left: '110%', width: '200%', height: '500%', backgroundColor: '#6633FF', borderRadius: 20}}/> : null }

            <Text 
              style={styles.buttonText}>LOGIN
            </Text>
          </TouchableOpacity>

          <TouchableOpacity 
            style={styles.buttonContainer2}
            onPress={() => this.navigateToSignUpScreen()}>
            <Text 
              style={styles.buttonText}>SIGN UP
            </Text>
          </TouchableOpacity>

          </ImageBackground>
        </TouchableWithoutFeedback>
    );
  }
}

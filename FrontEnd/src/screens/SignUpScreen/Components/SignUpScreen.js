import React, { Component } from 'react';
import {Alert, Button, Text,View,Image,TextInput,TouchableOpacity, ImageBackground, TouchableWithoutFeedback, Keyboard} from 'react-native';
import PasswordTextInput from './PasswordTextInput.js';
import styles from '../Styles/SignUpScreenStyles.js';
import Loader from './Loader.js';
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
        signUpButtonPressed: false,
        userName: '',
        registered: false,
        responseMessage: '',
        authenticated: false,
        loginMessage: ''
    }
  }

  createTwoButtonAlert = () =>
  
    Alert.alert(
      "Alert!",
      "Account Created Successfully!"
      [
        {
          text: "Cancel",
          onPress: () => console.log("Cancel Pressed"),
          style: "cancel"
        },
        { text: "OK", onPress: () => console.log("OK Pressed") }
      ],
      { cancelable: false }
    
    );
  

  renderAlertBox(){
    return(<Button title={"2-Button Alert"} onPress={this.createTwoButtonAlert}/>);
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
        
        this.setState({registered: true});
        var status = response['data']['status_info'];
        this.setState({responseMessage: status});

        if(this.state.registered === true){
          this.loginNetworkRequestToBackend();
        }else{
          console.log("registered value: " + this.state.registered);
          this.showLoaderComponent();
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
      "Sign Up Failed!",
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
        var responsejson = JSON.stringify(response);
        var responseObj = JSON.parse(response["request"]["_response"]);
        var rpsMessage = responseObj["status_info"];
        console.log("info: " + rpsMessage);
    
        this.setState({loginMessage: rpsMessage});
        
        if(this.state.authenticated){
          this.navigateToCalendarScreen();
        }else{
          console.log("registered value: " + this.state.authenticated);
        }

    }, (error) => {
      
        console.log(error);
    });
  }

  //Sends the user to the app's main screen.
  navigateToCalendarScreen(){
    this.props.navigation.navigate('CalendarScreen');
  }

  /*
    This function makes calls to the 
    signUpNetworkRequest function and 
    then navigates the user to the app's
    main screen.
  */
  signUpButtonPressed(){
    this.showLoaderComponent();
    this.signUpNetworkRequestToBackend();

    //this.navigateToSchedulerMainScreen();

  }

  showLoaderComponent = () => {
    if(this.state.signUpButtonPressed){
      this.setState({signUpButtonPressed: false})
    }else{
      this.setState({signUpButtonPressed: true})
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
            placeholder="Email"
            placeholderTextColor='#000000'
            style={styles.input3}
            onChangeText={(email) => this.setState({email})}
          />

          <TextInput
            placeholder="Username"
            placeholderTextColor='#000000'
            style={styles.input4}
            onChangeText={(userName) => this.setState({userName})}
          />

          <PasswordTextInput
            placeholder="Password"
            placeholderTextColor='#000000'
            style={styles.input5}
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

            { this.state.signUpButtonPressed === true ? <Loader style={{position: 'absolute', top: '-1000%', left: '-100%', width: '200%', height: '500%', backgroundColor: '#FF1DCE', borderRadius: 20}}/> : null }

            <Text style={styles.buttonText}>SIGN UP</Text>

          </TouchableOpacity>

          </ImageBackground>
        </TouchableWithoutFeedback>
    );
  }
}

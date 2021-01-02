import React, { Component } from 'react';
import {Alert, Button, Text,Image,TextInput,TouchableOpacity, ImageBackground, TouchableWithoutFeedback, Keyboard} from 'react-native';
import PasswordTextInput from './PasswordTextInput.js';
import styles from '../Styles/SignUpScreenStyles.js';
import Loader from './Loader.js';
import {API_URL} from "@env";
import axios from "axios";

export default class SignUpScreen extends Component {
  constructor(props) {
    super(props)

    this.state = {
        firstName: '',
        lastName: '',
        email: '',
        userName: '',
        password: '',
        signUpButtonPressed: false,
        registered: false,
        registeredStatus: '',
        authenticated: false,
        loginMessage: '',
        loginStatus: ''
    }
  }

  registeredAlert(){
    Alert.alert("Alert!", "Account Created Successfully", [{ text: "OK"}], { cancelable: false });
  }
  
  renderRegisteredAlert(){
    return(<Button title={"2-Button Alert"} onPress={this.registeredAlert}/>);
  }
  
  navigateToLoginScreen(){
    this.props.navigation.navigate('LoginScreen');
  }

  navigateToCalendarScreen(){
    this.props.navigation.navigate('CalendarScreen');
  }

  signUpButtonPressed(){
    this.toggleLoader();
    this.signUpNetworkRequestToBackend();
  }

  toggleLoader = () => {
    this.state.signUpButtonPressed ? this.setState({signUpButtonPressed: false}) : this.setState({signUpButtonPressed: true})
  }

  errorAlert(errorAlertMessage){
    Alert.alert("Sign Up Failed!", errorAlertMessage, [{ text: "OK"}], { cancelable: false });
  }
  
  signUpNetworkRequestToBackend(){
    let firstName = this.state.firstName;
    let lastName = this.state.lastName;
    let email = this.state.email;
    let password = this.state.password;
    let username = this.state.userName;
    let url = API_URL + 'api/register';
    console.log("this is the url: " + url);
    
    axios({
      method: 'post',
      url: url,
      data: {first_name: firstName, last_name: lastName, email: email, password: password, user_name: username}
    })
    .then((response) => {

      let status = response['data']['status_info'];
      this.setState({registered: true});
      this.setState({registeredStatus: status});
      this.state.registered ? this.loginRequest() : this.toggleLoader();

    }, (error) => {

        let errorJSON = JSON.parse(error["request"]["_response"]);
        let errorMessage = errorJSON['error'];
        this.errorAlert(errorMessage);
        this.toggleLoader();

    });
  }

  loginRequest(){
    let email = this.state.email;
    let password = this.state.password; 

    axios({
      method: 'post',
      url: 'http://192.168.68.1:5000/api/login',
      data: {email: email, password: password}
    })
    .then((response) => { 

      let status = response['data']['status_info'];
      this.setState({authenticated: true});
      this.setState({loginStatus: status});
      if(this.state.authenticated) this.navigateToCalendarScreen();  

    }, (error) => {
      
      let errorJSON = JSON.parse(error["request"]["_response"]);
      let errorMessage = errorJSON['error'];
      this.errorAlert(errorMessage);
      this.toggleLoader();

    });
  }
  
  render(){
    console.log("hellol!");
    return(
      <TouchableWithoutFeedback onPress={Keyboard.dismiss}>

        <ImageBackground source={require('../../../../pics/fade.jpg')} style={styles.fadeBackground}>
          
        <Image
          style={styles.logo}
          source={require('../../../../pics/scriptscheduler.png')}
        />

        <TextInput
          placeholder="First Name"
          autoFocus={true}
          placeholderTextColor='#000000'
          style={styles.firstNameInput}
          onChangeText={(firstName) => this.setState({firstName})}
        />

        <TextInput
          placeholder="Last Name"
          placeholderTextColor='#000000'
          style={styles.lastNameInput}
          onChangeText={(lastName) => this.setState({lastName})}
        />

        <TextInput
          placeholder="Email"
          placeholderTextColor='#000000'
          style={styles.emailInput}
          onChangeText={(email) => this.setState({email})}
        />

        <TextInput
          placeholder="Username"
          placeholderTextColor='#000000'
          style={styles.usernameInput}
          onChangeText={(userName) => this.setState({userName})}
        />

        <PasswordTextInput
          placeholder="Password"
          placeholderTextColor='#000000'
          style={styles.passwordInput}
          onChange={(password) => this.setState({password})}
        />

        <TouchableOpacity 
          style={styles.loginButton} 
          onPress={() => this.navigateToLoginScreen()}> 
          <Text style={styles.buttonText}>LOGIN</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.registerButton} onPress={() => this.signUpButtonPressed()}>
          { this.state.signUpButtonPressed ? <Loader style={{position: 'absolute', top: '-1000%', left: '-100%', width: '200%', height: '500%', backgroundColor: '#2d2d2d', borderRadius: 20}}/> : null }
          <Text style={styles.buttonText}>SIGN UP</Text>
        </TouchableOpacity>

        </ImageBackground>
      </TouchableWithoutFeedback>
    );
  }
}

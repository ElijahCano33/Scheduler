import React, { Component } from 'react';
import {Text,Image,TextInput,TouchableOpacity, TouchableWithoutFeedback, Keyboard, ImageBackground, Alert} from 'react-native';
import styles from '../Styles/LoginScreenStyles.js';
import PasswordTextInput from './PasswordTextInput.js';
import Loader from './Loader.js';
import axios from "axios";

export default class LoginScreen extends Component {
  constructor(props) {
    super(props)

    this.state = {
        email: '',
        password: '',
        status: '',
        authenticated: false,
        loginButtonPressed: false,
    }
  }
  
  navigateToCalendarScreen(){
    this.props.navigation.navigate('CalendarScreen');
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
      this.setState({status: status});
      if(this.state.authenticated) this.navigateToCalendarScreen();  

    }, (error) => {
      
      let errorJSON = JSON.parse(error["request"]["_response"]);
      let errorMessage = errorJSON['error'];
      this.errorAlert(errorMessage);
      this.toggleLoader();

    });

  }

  errorAlert(errorAlertMessage){
    Alert.alert("Failed Login!", errorAlertMessage, [{ text: "OK"}], { cancelable: false });
  }

  loginButtonPressed(){
    this.toggleLoader();
    this.loginRequest();
  }

  navigateToSignUpScreen(){
    this.props.navigation.navigate('SignUpScreen');
  }

  toggleLoader = () => {
    this.state.loginButtonPressed ? this.setState({loginButtonPressed: false}) : this.setState({loginButtonPressed: true})
  }
  
  render(){
    return(
      <TouchableWithoutFeedback onPress={Keyboard.dismiss}>

        <ImageBackground source={require('../../../../pics/fade.jpg')} style={styles.fadeBackground}>
          
        <Image
            style={styles.logo}
            source={require('../../../../pics/scriptscheduler.png')}
        />
                    
        <TextInput
          placeholder="Email"
          placeholderTextColor='#000000'
          style={styles.emailInput}
          onChangeText={(email) => this.setState({email})}
        />

        <PasswordTextInput
          placeholder="Password"
          placeholderTextColor='#000000'
          style={styles.passwordInput}
          onChange={(password) => this.setState({password})}
        />

        <TouchableOpacity 
          style={styles.loginButton} 
          onPress={() => this.loginButtonPressed()}>
          { this.state.loginButtonPressed ? <Loader style={{position: 'absolute', top: '-650%', left: '110%', width: '200%', height: '500%', backgroundColor: '#FF1DCE', borderRadius: 20}}/> : null }
          <Text style={styles.buttonText}>LOGIN</Text>
        </TouchableOpacity>

        <TouchableOpacity 
          style={styles.signUpButton}
          onPress={() => this.navigateToSignUpScreen()}>
          <Text style={styles.buttonText}>SIGN UP</Text>
        </TouchableOpacity>

        </ImageBackground>

      </TouchableWithoutFeedback>

    );
  }
}

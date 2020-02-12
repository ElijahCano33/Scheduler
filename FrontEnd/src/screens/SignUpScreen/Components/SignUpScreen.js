import React, { Component } from 'react';
import {StyleSheet,Text,View,Image,TextInput,TouchableOpacity, ImageBackground, TouchableWithoutFeedback, Keyboard} from 'react-native';
import PasswordTextInput from './PasswordTextInput.js';
import styles from '../Styles/SignUpScreenStyles.js';
import Loader from './Loader.js';

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
        signUpButtonPressed: false
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
    fetch('http://PUTIPADDRESSHERE!!!/login', {
        method: 'POST',
        headers: {
            Accept: 'application/json',
                    'Content-Type': 'application/json',
        },

        body: {
          firstName: this.state.firstName,
          lastName: this.state.lastName,
          email: this.state.email,
          password: this.state.password
        }
            
    });
  }

  fetchSignUpNetworkResponseFromBackend(){
    return fetch('http://127.0.0.1:5000/api/register')

    .then((response) => response.json())

    .then((responseJson) => {
      return responseJson['status'];
    })

    .catch((error) => {
      console.log("This is the status value: " + responseJson['status']);
      throw error;
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
  this.showLoaderComponent();
  this.signUpNetworkRequestToBackend();
  this.navigateToSchedulerMainScreen();

  if (this.fetchSignUpNetworkResponseFromBackend() == true){
    this.navigateToSchedulerMainScreen();
  }else{
    //Alert.alert("Invalid SignUp!");
    this.showLoaderComponent();
  }
}

showLoaderComponent = () => {
  if(this.state.signUpButtonPressed == true){
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
            onChangeText={(email) => this.setState({email})}
          />

          <TextInput
            placeholder="Last Name"
            placeholderTextColor='#000000'
            style={styles.input2}
            onChangeText={(password) => this.setState({password})}
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

            { this.state.signUpButtonPressed == true ? <Loader style={{position: 'absolute', top: '-1000%', left: '-100%', width: '200%', height: '500%', backgroundColor: 'black', borderRadius: 20}}/> : null }

            <Text 
              style={styles.buttonText}>SIGN UP
            </Text>

          </TouchableOpacity>

          </ImageBackground>
        </TouchableWithoutFeedback>
    );
  }
}

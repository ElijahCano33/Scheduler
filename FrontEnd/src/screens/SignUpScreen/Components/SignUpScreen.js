import React, { Component } from 'react';
import {StyleSheet,Text,View,Image,TextInput,TouchableOpacity, ImageBackground} from 'react-native';
import styles from '../Styles/SignUpScreenStyles.js';

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
      <ImageBackground source={require('../../../../pics/fade.jpg')} style={styles.fadeBackgroundStyles}>
        
        <Image
          style={styles.logo}
          source={require('../../../../pics/RedScheduler.png')}
         />
         <TextInput
              placeholder="  First Name"
              placeholderTextColor='#000000'
              style={styles.input1}
              onChangeText={(email) => this.setState({email})}
            />
        <TextInput
              placeholder="  Last Name"
              placeholderTextColor='#000000'
              style={styles.input2}
              onChangeText={(password) => this.setState({password})}
            />
        <TextInput
              placeholder="  Email"
              placeholderTextColor='#000000'
              style={styles.input3}
              onChangeText={(email) => this.setState({email})}
            />
        <TextInput
              placeholder="  Password"
              placeholderTextColor='#000000'
              style={styles.input4}
              onChangeText={(password) => this.setState({password})}
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
    );
  }
}

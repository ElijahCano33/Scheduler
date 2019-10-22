import React, { Component } from 'react';
import {StyleSheet,Text,View,Image,TextInput,TouchableOpacity} from 'react-native';
import styles from '../Styles/LoginScreenStyles.js';

export default class LoginScreen extends Component {

  //The constructor will both initalize and give access to "this"
  constructor(props) {
    super(props)

    //sets up current states of component.
    this.state = {
        email: '',
        password: '',
    }
  }
  
  //Sends the user to the loading screen.
  navigateToLoadingScreen(){
    this.props.navigation.navigate('LoadingScreen');
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
    fetch('http://PUTIPADDRESSHERE!!!/login', {
        method: 'POST',
        headers: {
            Accept: 'application/json',
                    'Content-Type': 'application/json',
        },

        body: {
          email: this.state.email,
          password: this.state.password
        }
            
    });
  }

  /*
    This function makes calls to the 
    loginNetworkRequest function and 
    then navigates the user to the loading
    screen.
  */
  loginButtonPressed(){
    this.loginNetworkRequestToBackend();
    this.navigateToLoadingScreen();
  }
  
  /*
    The following renders the text Scheduler at
    the top of the screen, login registration forms,
    and both the login and signup buttons.
  */
  render(){
    return(
      <View style={styles.container}>
      
      <Image
        style={styles.logo}
        source={require('../../../../pics/schedi.png')}
       />
      <TextInput
            placeholder="  email"
            placeholderTextColor='#000000'
            style={styles.input1}
            onChangeText={(email) => this.setState({email})}
          />
      <TextInput
            placeholder="  password"
            placeholderTextColor='#000000'
            style={styles.input2}
            onChangeText={(password) => this.setState({password})}
          />
      <TouchableOpacity 
        style={styles.buttonContainer1} 
        onPress={() => this.loginButtonPressed()}> 
        <Text 
          style={styles.buttonText}>LOGIN
        </Text>
      </TouchableOpacity>
      <TouchableOpacity 
        style={styles.buttonContainer2}>
        <Text 
          style={styles.buttonText}>SIGN UP
          </Text>
      </TouchableOpacity>
      </View>
    );
  }
}

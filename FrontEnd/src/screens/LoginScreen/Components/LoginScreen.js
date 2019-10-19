import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View,
  Image,
  TextInput,
  TouchableOpacity
} from 'react-native';
import styles from '../Styles/LoginScreenStyles.js';

export default class LoginScreen extends Component {
  render() {
    return (
      <View style={styles.container}>
      
      <Image
        style={styles.logo}
        source={require('../../../../pics/scheduler.png')}
       />
      
      <TextInput
            placeholder="  email"
            placeholderTextColor='#000000'
            style={styles.input1}
          />
      <TextInput
            placeholder="  password"
            placeholderTextColor='#000000'
            style={styles.input2}
          />
      <TouchableOpacity style={styles.buttonContainer1}>
        <Text style={styles.buttonText}>LOGIN</Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.buttonContainer2}>
        <Text style={styles.buttonText}>SIGN UP</Text>
      </TouchableOpacity>
      </View>
    );
  }
}

import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View,
  Image,
  TextInput,
  TouchableOpacity
} from 'react-native';
// import LoginForm from './LoginForm';

export default class LoginScreen extends Component {
  render() {
    return (
      <View style={styles.container}>
      <View style={styles.logoContainer}>
      <Image
        style={styles.logo}
        source={require('../pics/scheduler.png')}
      />
      </View>
      <TextInput
            placeholder="  email"
            placeholderTextColor='#000000'
            style={styles.input}
          />
      <TextInput
            placeholder="  password"
            placeholderTextColor='#000000'
            style={styles.input}
          />
      <TouchableOpacity style={styles.buttonContainer}>
        <Text style={styles.buttonText}>LOGIN</Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.buttonContainer}>
        <Text style={styles.buttonText}>SIGN UP</Text>
      </TouchableOpacity>

      <View style={styles.formContainer}>
      </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#40e0d0'
  },

  logo: {
    height: 200,
    width: 500
  },

  input: {
    height: 40,
    width: 250,
    backgroundColor: '#FFFFFF',
    marginBottom: 20
  },

  buttonContainer: {
    width: 120,
    backgroundColor: '#000000',
    paddingHorizontal: 30,
    textAlign: 'left'
  },

  buttonText: {
    textAlign: 'center',
    color: '#FFFFFF',
    fontWeight: '700'
  }

});

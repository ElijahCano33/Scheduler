import React, {Component} from 'react';
import { StyleSheet, Text, View} from 'react-native';
 
export default class App extends Component{
  render() {
    return (
      <View style={styles.backgroundTest}>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  backgroundTest: {
    flex: 1,
    backgroundColor: '#8A2BE2'
  }
})


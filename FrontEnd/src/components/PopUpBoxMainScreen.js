import React, {Component} from 'react';
import { StyleSheet, TextInput, View, TouchableOpacity, Text} from 'react-native';
// import { TouchableOpacity } from 'react-native-gesture-handler';


export default class PopUpBoxMainScreen extends Component{
    render(){
        return (
            <View style={styles.container}>
                <TextInput
                placeholder="username or email"
                style={styles.input}
                />
                <TextInput
                placeholder="password"
                style={styles.input}
                /> 

                <TouchableOpacity style={styles.buttonContainer}>
                    <Text style={styles.buttonText}>LOGIN</Text>
                </TouchableOpacity>

                <TouchableOpacity style={styles.buttonContainer2}>
                    <Text style={styles.buttonText}>SIGN UP</Text>
                </TouchableOpacity>

            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        padding: 10
    },
    input: {
        marginTop: 20,
        backgroundColor: "white",
        top: -20,
        left: 73,
        height: 40,
        width: 250,
        color: '#000000'
    },

    buttonContainer: {
        backgroundColor: "darkblue",
        left: 125,
        height: 40,
        width: 75,
        paddingVertical: 10
    },
    buttonText: {
        textAlign: 'center',
        color: 'white',
        fontWeight: '700'
    },

    buttonContainer2: {
        backgroundColor: "darkblue",
        left: 150,
        height: 40,
        width: 90,
        paddingVertical: 10
    },
    buttonText: {
        textAlign: 'center',
        color: 'white',
        fontWeight: '700'
    }
});
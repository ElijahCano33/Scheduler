import React, {Component} from 'react';
import { StyleSheet, View, Text, Image} from 'react-native';


const FIVE_SECONDS = 5000;

export default class LoadingScreen extends Component{
    /*
    This function will immediately be called once
    the component is mounted. Often used to load data
    when a request has been made to the backend. In this
    case though, we are using it to notify the program that 
    we want to display this component for a total of five
    seconds.
    */
    componentDidMount(){
        /*
        This function looks weird because it uses the "modern"
        syntax of javascript otherwirse known as the es6 syntax aka
        javascript 6. Don't be intimidated all it does is set a timer
        for 5 seconds and then navigate to the login screen.
        */
        setTimeout(() => {
            this.props.navigation.navigate('LoginScreen');
        }, FIVE_SECONDS);
    }
    
    render() {
        return (
            <View style={styles.splashColor}>
                <Text>
                    Our logo will go in the center of this screen
                </Text>
            </View>
        );
    }
}
    
const styles = StyleSheet.create({
    splashColor: {
        backgroundColor: 'purple',
        flex:1,
    },
    logo: {
        
    }
});


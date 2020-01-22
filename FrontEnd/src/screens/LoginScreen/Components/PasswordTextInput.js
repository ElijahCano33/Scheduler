import React, {Component} from 'react';
import {Item, Input, Icon} from 'native-base';
import {View, Text, TextInput} from 'react-native';


export default class PasswordTextInput extends Component {
    state = {
        icon: "eye-off",
        password: true
    };

    togglePasswordVisibilityIcon(){
        this.setState(prevState => ({
            icon: prevState.icon === 'eye' ? 'eye-off' : 'eye',
            password: !prevState.password
        }));
    }

    render(){
        return(

            <Item style={this.props.style}>
                <Input placeholderTextColor={this.props.placeholderTextColor} placeholder={this.props.placeholder} style={{paddingLeft: 10, fontSize: 14}} secureTextEntry={this.state.password} onChangeText={(e) => this.props.onChange(e)}/>
                <Icon name={this.state.icon} style={{bottom: '0%', left: '-10%'}} onPress={() => this.togglePasswordVisibilityIcon()}/>
            </Item>
        );
    }
}
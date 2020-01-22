import React, {Component} from 'react';
import {Item, Input, Icon, Label} from 'native-base';
import {View, Text} from 'react-native';


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
        const {onChange, label} = this.props;
        return(

            <Item style={this.props.style}>
                <Label style={{top: '0%', fontSize: 14, paddingLeft: 0, color: 'black'}}>{label}</Label>
                <Input secureTextEntry={this.state.password} onChangeText={(e) => onChange(e)}/>
                <Icon name={this.state.icon} style={{bottom: '0%', left: '-10%'}} onPress={() => this.togglePasswordVisibilityIcon}/>
            </Item>
        );
    }
}
import React, {Component} from 'react';
import {Item, Input, Icon} from 'native-base';
import styles from '../Styles/PasswordTextInputStyles';

export default class PasswordTextInput extends Component {
    state = {
        icon: "eye",
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
                <Input placeholderTextColor={this.props.placeholderTextColor} placeholder={this.props.placeholder} style={styles.placeHolder} secureTextEntry={this.state.password} onChangeText={(e) => this.props.onChange(e)}/>
                <Icon name={this.state.icon} style={styles.icon} onPress={() => this.togglePasswordVisibilityIcon()}/>
            </Item>
        );
    }
}
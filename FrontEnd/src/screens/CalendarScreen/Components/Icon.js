import React, {Component} from 'react';
import PropTypes from 'prop-types';
import { Text } from "react-native";



export default class Icon extends Component{
    
    icon = iconMap[this.props.name];
    
    render() {
        return (
          
            <Text style={[{ fontSize: 26}, this.props.color, this.props.style]}>{this.icon}</Text>
            
        );
    }   
}




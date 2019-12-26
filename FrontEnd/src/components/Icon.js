import React, {Component} from 'react';
import PropTypes from 'prop-types';
import { Text } from "react-native";

const iconMap = {
  home: "♡",
  search: "♢",
  favorites: "♧",
  profile: "♤"
};



export default class Icon extends Component{
    
    icon = iconMap[name];
    
    render() {
        return (
            
            
            
            <Text style={[{ fontSize: 26, color }, style]}>{icon}</Text>
            
            


            
            
        );
    }   
}


Icon.propTypes = {
    name: PropTypes.string,
    color: PropTypes.string,
    style: PropTypes.object
};


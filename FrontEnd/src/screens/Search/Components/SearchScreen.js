import React, {Component} from 'react';
import { StyleSheet, TextInput, View, Text, Image, ImageBackground} from 'react-native';
import styles from '../Styles/SearchScreenStyles.js';
import { SearchBar } from 'react-native-elements';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';

//import SchedulerIconButtonsContainer from '../../../components/SchedulerIconButtonsContainer.js';

export default class SearchScreen extends Component{
    constructor(props) {
        super(props)
        
        this.state = {
            search: '',
            unfilteredData: [],
            filteredData: []
        };
    }  

    updateSearch = search => {
        this.setState({ search });
    };
    
    render() {
        const { search } = this.state;
        return (
            <ImageBackground source={require('../../../../pics/fade.jpg')} style={styles.fadeBackgroundStyles}>
                <Image
                    style={styles.logo}
                    source={require('../../../../pics/scriptscheduler.png')}
                />
                <TextInput
                    placeholder="Search for personal or friend events"
                    placeholderTextColor='#FFFFFF'
                    style={styles.searchBar}
                    onChangeText={(search) => this.setState({search})}
                />
                <FontAwesome name="search" color={'white'} size={25} style={{top: '20.85%', left: '5.5%', position: 'absolute'}} />

                {this.state.unfilteredData.length === 0 ? 
                    <View style={{top: '37.5%', left: '8%', position: 'absolute', height: '10%', width: '50%'}}>
                        <FontAwesome name="search" color={'#2f4f4f'} size={200} style={{top: '50%', left: '40%', position: 'absolute'}} />
                        <Text style={styles.noSearchResults}>No Current Search Results</Text>
                    </View>
                
                    :

                    <Text>This will be search results</Text>
                }
                
            </ImageBackground>
            
        );
    }
}
    



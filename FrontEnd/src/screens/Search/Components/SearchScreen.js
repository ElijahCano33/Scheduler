import React, {Component} from 'react';
import { TextInput, View, Text, Image, ImageBackground} from 'react-native';
import styles from '../Styles/SearchScreenStyles.js';
import FontAwesome from 'react-native-vector-icons/FontAwesome';

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
        return (
            <ImageBackground source={require('../../../../pics/fade.jpg')} style={styles.fadeBackground}>

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

                <FontAwesome name="search" color={'white'} size={25} style={styles.searchIcon} />

                {this.state.unfilteredData.length === 0 ?

                    <View style={styles.noSearchResultsView}>
                        <FontAwesome name="search" color={'#2d2d2d'} size={200} style={styles.noSearchResultsIcon} />
                        <Text style={styles.noSearchResults}>No Current Search Results</Text>
                    </View>
                
                    :

                    <Text>This will be search results</Text>
                }
                
            </ImageBackground>
            
        );
    }
}
    



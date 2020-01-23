import {Dimensions, StyleSheet} from 'react-native';

const windowWidth = Dimensions.get("window").width;
const tabWidth = windowWidth / 4;


export default StyleSheet.create({
    container: {
        top: '40%', //40%
        backgroundColor: 'white',
        width: '41.5%', //41.5%
        height: '13.5%', //13.5%
        borderRadius: 20,
        position: 'absolute',
        shadowColor: "#000000",
        shadowOpacity: 10,
        shadowRadius: 2,
        elevation: 5
    },
    eventDescriptionText: {
        top: '33%',
        left: '27%',
        position: 'absolute',
        fontSize: 20,
        fontWeight: 'bold',
        color: '#c71585'
    }
    
});
import {Dimensions, StyleSheet} from 'react-native';

const windowWidth = Dimensions.get("window").width;
const tabWidth = windowWidth / 4;


export default StyleSheet.create({
    container: {
        backgroundColor: '#fbfbfb',
        padding: 20,
        marginVertical: 8,
        marginHorizontal: 16,
        width: 150,
        borderRadius: 20,
        
    },
    eventDescriptionText: {
        alignContent: 'center',
        top: '60%',
        left: '35%',
        justifyContent: 'center',
        alignSelf: 'center',
        position: 'absolute',
        fontSize: 15,
        fontWeight: 'bold',
        color: 'black'
    }
    
});
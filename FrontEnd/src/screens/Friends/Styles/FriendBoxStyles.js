import {Dimensions, StyleSheet} from 'react-native';

const windowWidth = Dimensions.get("window").width;
const tabWidth = windowWidth / 4;

export default StyleSheet.create({
    container: {
        backgroundColor: '#fbfbfb',
        padding: 20,
        marginVertical: 8,
        marginHorizontal: 16,
        width: 350,
        height: 80,
        left: '1.5%',
        borderRadius: 30,  
    },
    firstName: {
        position: 'absolute',
        top: '8%',
        left: '27%',
        fontSize: 20,
        fontWeight: 'bold'
    },
    lastName: {
        position: 'absolute',
        top: '8%',
        left: '27%',
        fontSize: 20,
        paddingLeft: 30,
        fontWeight: 'bold'
    },
    lastName2: {
        position: 'absolute',
        top: '8%',
        left: '27%',
        fontSize: 20,
        paddingLeft: 90,
        fontWeight: 'bold'
    },
    email: {
        position: 'absolute',
        top: '65%',
        left: '27%',
        fontSize: 20,
        fontWeight: 'bold'
    },
    username: {
        position: 'absolute',
        top: '125%',
        left: '27%',
        fontSize: 20,
        fontWeight: 'bold'
    },
    image: {
        width: 90,
        height: 90,
        top: '-12%',
        left: '1%',
        position: 'absolute'
    }
    
    
});
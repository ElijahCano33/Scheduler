import {Dimensions, StyleSheet} from 'react-native';

const windowWidth = Dimensions.get("window").width;
const tabWidth = windowWidth / 4;

export default StyleSheet.create({
    container: {
        backgroundColor: '#fbfbfb',
        padding: 20,
        marginVertical: 8,
        marginHorizontal: 16,
        width: 380,
        height: 70,
        left: '-2.1%',
        borderRadius: 30,  
    },
    firstName: {
        position: 'absolute',
        top: '8%',
        left: '20%',
        fontSize: 20,
        fontWeight: 'bold',
        fontFamily: 'sans-serif-thin'
    },
    lastName: {
        position: 'absolute',
        top: '8%',
        left: '24%',
        fontSize: 20,
        paddingLeft: 30,
        fontWeight: 'bold',
        fontFamily: 'sans-serif-thin'
    },
    lastName2: {
        position: 'absolute',
        top: '8%',
        left: '8.5%',
        fontSize: 20,
        paddingLeft: 90,
        fontWeight: 'bold',
        fontFamily: 'sans-serif-thin'
    },
    email: {
        position: 'absolute',
        top: '65%',
        left: '20%',
        fontSize: 20,
        fontWeight: 'bold',
        fontFamily: 'sans-serif-thin'
    },
    username: {
        position: 'absolute',
        top: '125%',
        left: '20%',
        fontSize: 20,
        fontWeight: 'bold',
        fontFamily: 'sans-serif-thin'
    },
    image: {
        width: 75,
        height: 75,
        top: '-10%',
        left: '1%',
        position: 'absolute'
    }
    
    
});
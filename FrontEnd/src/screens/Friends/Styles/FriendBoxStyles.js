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
        height: 70,
        left: '1.5%',
        borderRadius: 30,
        
    },
    
    
});
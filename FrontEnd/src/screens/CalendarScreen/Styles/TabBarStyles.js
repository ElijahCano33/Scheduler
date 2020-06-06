import {Dimensions, StyleSheet} from 'react-native';


const windowWidth = Dimensions.get("window").width;
const tabWidth = windowWidth / 4;


export default StyleSheet.create({
    
    container: {
        flexDirection: 'row',
        height: 52,
        elevation: 2
    },
    tabButton: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    },
    spotLight: {
        width: '16%', //tabWidth
        left:'2%',
        top: '10%',
        height: "75%", //100
        backgroundColor: '#0099FF', //"rgba(128,128,255,0.2), #c71585", '#7c40ff'
        borderRadius: 20, //8

      }
});
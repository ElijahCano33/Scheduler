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
        width: tabWidth,
        height: "100%",
        backgroundColor: "rgba(128,128,255,0.2)",
        borderRadius: 8
      }
});
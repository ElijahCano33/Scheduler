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
        width: '16%',
        left:'2%',
        top: '10%',
        height: "75%",
        backgroundColor: '#FF1DCE',
        borderRadius: 20,

    }
});
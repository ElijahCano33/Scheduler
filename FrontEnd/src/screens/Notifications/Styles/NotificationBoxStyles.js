import {StyleSheet} from 'react-native';

export default StyleSheet.create({
    container: {
        backgroundColor: '#2d2d2d',
        padding: 20,
        marginVertical: 8,
        marginHorizontal: 16,
        width: 377.5,
        height: 70,
        left: '-2.1%',
        shadowColor: '#000000',
        shadowOffset: {
            width: 10,
            height: 10
        },
        shadowRadius: 5,
        shadowOpacity: 1.0,
        elevation: 10,
        borderLeftWidth: 5,
        borderLeftColor: '#FF1DCE',
        borderRightColor: '#FF1DCE',
        borderRightWidth: 5,
        flex: 1
        
    },

    notificationDescription: {
        position: 'absolute',
        top: '10%',
        left: '3%',
        fontWeight: 'bold',
        fontFamily: 'sans-serif-thin',
        color: 'white',
        fontSize: 17,
        marginBottom: 10
    },

    notificationTime:{
        fontWeight: 'bold',
        fontFamily: 'sans-serif-thin',
        color: 'grey',
        fontSize: 18,
        position: 'absolute',
        bottom: '10%',
        left: '3%'
    },

    acceptFriendRequestButton: {
        position: 'absolute',
        width: '20%',
        height: '100%',
        backgroundColor: 'red',
        bottom: '13%',
        right: '7%',
        borderRadius: 3
    },

    acceptText: {
        alignSelf: 'center',
        fontWeight: 'bold',
        fontFamily: 'sans-serif-thin',
        color: 'white',
    }

    
});
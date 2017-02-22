import {StyleSheet, Dimensions} from 'react-native';

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#fff',
        borderBottomColor: "#eee",
        borderStyle: "solid",
        borderBottomWidth: 2
    },
    containerReply: {
        marginLeft: 45,
        backgroundColor: '#fff',
        borderBottomColor: "#eee",
        borderStyle: "solid",
        borderBottomWidth: 2,
        borderLeftColor: "#fcda00",
        borderLeftWidth: 4
    },
    container__panel: {
        flex: 1,
        padding: 20,
        flexDirection: 'row',
        justifyContent: 'space-between'
    },

    messageEnterContainer: {
        height: 65,
        padding: 15,
        width: Dimensions.get("window").width,
        backgroundColor: '#e0e0e0',
        position: 'absolute',
        bottom: 0,      
        flex: 1,
        flexDirection: 'row',
    },
    messageEnterTextContainer: {
        backgroundColor: '#fff',
        paddingLeft: 10,
        
        width: Dimensions.get("window").width - 65
    },
    messageEnterBtn: {
    backgroundColor: '#fff',
    width: 35, height: 35
    },
    messageEnterText: {
        
    },
    messageEnterAdd: {
        position: 'absolute',
        right: 15,
        top: 9
    },
    messageEnterSmiles: {
        position: 'absolute',
        right: 50,
        top: 9
    },
});

export default styles;
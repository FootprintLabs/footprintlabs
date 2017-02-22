import {StyleSheet, Dimensions} from 'react-native';

const styles = StyleSheet.create({
    container: {
        height: 65,
        padding: 15,
        width: Dimensions.get("window").width,
        backgroundColor: '#e0e0e0',
        position: 'absolute',
        bottom: 0,      
        flex: 1,
        flexDirection: 'row',
    },


    container__submit: {
        backgroundColor: '#fff',
        width: 35, height: 35
    },
    container__submit__img: {
        flex:1,
        alignSelf: 'stretch',
        width: 35, 
        height: 35
    },


    container__input: {
        backgroundColor: '#fff',
        paddingLeft: 10,
        
        width: Dimensions.get("window").width - 65
    },
    container__input__attach: {
        position: 'absolute',
        right: 15,
        top: 9
    },
    container__input__emoji: {
        position: 'absolute',
        right: 50,
        top: 9
    },
});

export default styles;
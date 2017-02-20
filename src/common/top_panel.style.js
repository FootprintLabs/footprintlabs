import {StyleSheet} from 'react-native';


export default styles = StyleSheet.create({
    container: {
        backgroundColor: '#2a2a2a',
        flexDirection: 'row',
        justifyContent: 'space-between',
        height: 60
    },
    container__left_panel: {
        flexDirection: 'row'
    },

    container__left_panel__logo: {
        justifyContent: 'center',
        alignItems: 'center',
        width: 60, height: 60
    },

    container__left_panel__text_container: {
        justifyContent: 'center',
        alignItems: 'flex-start'
    },
    container__left_panel__text_main: {
        fontSize: 18,
        fontWeight: '400',
        fontStyle: 'normal',
        fontFamily: 'Proxima Nova Cn Rg',
        letterSpacing: 1.2,
        textAlign: 'left',
        color: '#ffffff'
    },
    container__left_panel__text_sub: {
        fontSize: 14,
        fontWeight: '400',
        fontStyle: 'normal',
        marginTop: -4,
        textAlign: 'left',
        color: '#c8c8c8'
    },

    container__notification: {
        justifyContent: 'center',
        alignItems: 'center',
        width: 60, height: 60
    },
    container__notification__circle: {
        width: 35,
        height: 35,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#ffdc00',
        borderRadius: 35
    },
    container__notification__text: {
        fontSize: 16,
        fontWeight: '400',
        fontStyle: 'normal',
        letterSpacing: 0.3,
        textAlign: 'center',
        color: '#2a2a2a'
    }
});
import React, {Component} from 'react';
import {View} from 'react-native';

import styles from './style';


export default class BurgerBtn extends Component {
    render() {
        return (
            <View style={styles.container}>
                <View style={styles.burger_slice} />
                <View style={styles.burger_slice__middle} />
                <View style={styles.burger_slice} />
            </View>
        );
    }
}
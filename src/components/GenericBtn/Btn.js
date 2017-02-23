import React, {Component} from 'react';
import {View, Text} from 'react-native';

import styles from './style';


class Btn extends Component {
    render() {
        return (
            <View style={styles.btn}>
                <Text style={styles.title}>
                    {this.props.title} 
                </Text>
            </View>
        );
    }
}

export default Btn;
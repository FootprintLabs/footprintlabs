import React, {Component} from 'react';
import {Image} from 'react-native';

import styles from './style';


export default Avatar = ({src}) => {
    return (
        <Image
            source={src}
            style={styles.avatar}
        />
    );
}
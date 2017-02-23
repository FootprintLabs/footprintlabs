import React, {Component} from 'react'
import {Text, View, Button, Image} from 'react-native';

import styles from './style';

import Images from '../../images';
import Icon from '../Icon';
import MenuBtn from '../MenuBtn';
import GenericBtn from '../GenericBtn'


export default class ImageBar extends Component {
    render () {
        return (
            <View style={styles.container}>
                <Image
                    source={Images.headerImg}
                    style={styles.container__bgimg}
                />
                <View style={styles.container__box} />

                <View style={styles.container__panel}>
                    <View>
                        <Text style={styles.container__panel___textMain}>
                            Staff
                        </Text>
                        <View style={{flexDirection:'row', alignItems: 'center'}}>
                            <Icon type="lock" size="small" />

                            <Text style={styles.container__panel___textSub}>
                                Channel • 10,000 Members
                            </Text>
                        </View>
                    </View>
                    <View style={styles.container__panel___buttonPanel}>
                        <GenericBtn title="Joined" />
                        
                        <MenuBtn />
                    </View>
                </View>
            </View>
        )
    }
}
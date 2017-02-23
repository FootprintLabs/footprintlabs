import React, {Component} from 'react';
import SvgUri from 'react-native-svg-uri';
import {Text, View} from 'react-native';

import styles from './style';
import Images from '../../images';

export default class TopPanel extends Component {
    
    render () {
        return (
            <View style={styles.container}>
                <View style={styles.container__left_panel}>
                    <View style={styles.container__left_panel__logo}>
                        <SvgUri
                            width="22"
                            height="22"
                            svgXmlData={Images.svg.logo}
                        />
                    </View>
                    
                    <View style={styles.container__left_panel__text_container}>
                        <Text style={styles.container__left_panel__text_main}>
                            {"Crossfit, inc.".toUpperCase()}
                        </Text>
                        <Text style={styles.container__left_panel__text_sub}>
                            {"Headquarters".toUpperCase()}
                        </Text>
                    </View>
                </View>
                
                <View style={styles.container__notification}>
                    <View style={styles.container__notification__circle}>
                        <Text style={styles.container__notification__text}>
                        8
                        </Text>
                    </View>
                </View>
            </View>
        )
    }
}

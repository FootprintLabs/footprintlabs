import React, {Component} from 'react'
import {Text, View, Button, Image} from 'react-native';

import SvgUri from 'react-native-svg-uri';
import styles from './style';

import Images from '../../images';


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
                            <SvgUri
                                width="10"
                                height="12"
                                svgXmlData ={Images.svg.lock}
                            />
                            <Text style={styles.container__panel___textSub}>
                                Channel • 10,000 Members
                            </Text>
                        </View>
                    </View>
                    <View style={styles.container__panel___buttonPanel}>
                        <View style={styles.container__panel___buttonPanel__buttonStatus}>
                            <Text style={{
                                color: "#3e3e3e"
                            }}>
                                Joined
                            </Text>
                        </View>
                        <View style={styles.container__panel___buttonPanel__buttonMenu}>
                            <View style={styles.burger_slice} />
                            <View style={styles.burger_slice__middle} />
                            <View style={styles.burger_slice}/>
                        </View>
                    </View>
                </View>
            </View>
        )
    }
}
import React, {Component} from 'react';
import {View} from 'react-native';

import Header from '../../components/Header';
import TopImageBar from '../../components/TopImageBar';
import Chat from '../../components/Chat';
import styles from './style';


export default class ChatContainer extends Component {
    render() {
        return (
            <View style={styles.container}>
                <Header />
                <TopImageBar />
                <Chat />
            </View>
        );
    }
}
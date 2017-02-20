import React, {Component} from 'react';
import {View} from 'react-native';

import Header from '../common/header';
import Chat from '../chat/chat';


class ChatPage extends Component {
    render() {
        return (
            <View style={{flex: 1}}>
                <Header />
                <Chat />
            </View>
        );
    }
}

export default ChatPage;
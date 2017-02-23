import React, {Component} from 'react';
import {View, Text} from 'react-native';

import Input from '../Input';
import ChatFeed from '../ChatFeed';
import styles from './style';
import ChatApi from '../../api/ChatApi';
import UserApi from '../../api/UserApi';


export default class ChatContainer extends Component {
    constructor(props) {
        super(props);
        this.state ={
            messages: ChatApi.getMessages(),
            user: UserApi.getUserData()
        }

        this.addMessage = this.addMessage.bind(this);
    }


    addMessage(text) {
        const {avatar, username} = this.state.user;
        const messages = this.state.messages.slice();
        const newMessage = {
            id: messages.length-1+2,
            isReply: false,
            avatar: avatar,
            username:  username,
            time: '1m',
            text,
            replies: []
        };

        this.setState({messages: [...messages, newMessage]});
    }

    render () {
        const {messages, user} = this.state;


        return (
            <View style={styles.container}>
                <ChatFeed messages={messages}/>
                <Input addMessage={this.addMessage} user={user}/>
            </View>
        )
    }
}
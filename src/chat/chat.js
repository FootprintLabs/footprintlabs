import React, {Component} from 'react';
import {View} from 'react-native';

import MessageInput from './message_input';
import Board from './board';
import styles from './chat.style';
import dataset from '../dataset';


export default class Chat extends Component {
    constructor(props) {
        super(props);
        this.state ={
            messages: dataset.chat.messages,
            user: dataset.user
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
                <Board messages={messages}/>
                <MessageInput addMessage={this.addMessage} user={user}/>
            </View>
        )
    }
}
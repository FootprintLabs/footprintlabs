import React, {Component} from 'react';

import MessageInput from './MessageInput';


export default class ChatInput extends Component {
    render () {
        return (
            <MessageInput addMessage={this.props.addMessage} user={this.props.user} />
        )
    }
}
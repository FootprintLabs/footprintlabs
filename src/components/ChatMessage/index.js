import React, {Component} from 'react';

import Message from './Message';


export default class ChatMessage extends Component {
    render() {
        return (
            <Message toggleReplies={this.props.toggleReplies}>{this.props.children}</Message>
        );
    }
}
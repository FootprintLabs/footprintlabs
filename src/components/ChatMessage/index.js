import React, {Component} from 'react';

import Message from './Message';


export default class ChatMessage extends Component {
    render() {
        return (
            <Message>{this.props.children}</Message>
        );
    }
}
import React, {Component} from 'react';

import Replies from './Replies';


export default class ChatReplies extends Component {
    render() {
        return (
            <Replies visibility={this.props.visibility} replies={this.props.replies} />
        );
    }
}
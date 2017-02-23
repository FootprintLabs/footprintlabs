import React, {Component} from 'react';

import Feed from './Feed';


export default class ChatFeed extends Component {
    parseMessages(messages, replies) {
        return messages.map((message, i) => {
            return {
                    id: (i+''+Math.floor(Math.random()*10000)),
                    current: message,
                    replies: replies.filter(_message => message.id === _message.parent_id),
                    visibility: false
                }
        })
    }

    componentWillMount() {
        const messages = this.props.messages.filter(message => !message.parent_id);
        const replies = this.props.messages.filter(message => !!message.parent_id);

        this.setState({
            messages: this.parseMessages(messages, replies)
        })
    }
    
    render () {
        
        return (
            <Feed messages={this.state.messages}/>
        )
    }
}
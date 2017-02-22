import React, {Component} from 'react';

import Feed from './Feed';


export default class ChatFeed extends Component {
    render () {
        return (
            <Feed messages={this.props.messages}/>
        )
    }
}
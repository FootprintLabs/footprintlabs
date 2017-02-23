import React, {Component} from 'react';

import Btn from './Btn';


export default class GenericBtn extends Component {
    render() {
        return (
            <Btn title={this.props.title} />
        );
    }
}
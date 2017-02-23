import React, {Component} from 'react';

import Ico from './Ico';


export default class Icon extends Component {
    render() {
        const {size, type} = this.props;

        
        return (
            <Ico size={size} type={type}/>
        );
    }
}
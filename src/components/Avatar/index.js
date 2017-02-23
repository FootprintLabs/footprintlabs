import React, {Component, PropTypes} from 'react';

const Image = require('./Avatar').default;
import Images from '../../images';

export default class Avatar extends Component {
    static propTypes = {
        src: PropTypes.string
    }

    constructor(props) {
        super(props);

        this.state = {
            src: this.getImage(props.src)
        }
    }

    getImage(src) {
        var expression = /[-a-zA-Z0-9@:%_\+.~#?&//=]{2,256}\.[a-z]{2,4}\b(\/[-a-zA-Z0-9@:%_\+.~#?&//=]*)?/gi;
        var regex = new RegExp(expression);

        if(Images.avatars[src])
            return Images.avatars[src];
        else if(!src && !src.match(regex))
            return (Images.avatars.default);
        else 
            return {uri: src};
    }

    render() {
        return (
            <Image src={this.state.src}/>
        );
    }
}
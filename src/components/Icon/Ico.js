import React, {Component} from 'react';
import SvgUri from 'react-native-svg-uri';

import Images from '../../images';
import styles from './style';


export default class Ico extends Component {
    constructor(props) {
        super(props);
        
        this.state = {
            size: styles[props.size]
        }
    }

    render() {
        const {type} = this.props,
              {width, height} = this.state.size;


        return (
            <SvgUri
                width={width}
                height={height}
                svgXmlData ={Images.svg[type]}
            />
        );
    }
}
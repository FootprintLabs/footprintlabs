import React, {Component} from 'react';
import {ScrollView} from 'react-native';

import styles from './style';
import ChatMessage from '../ChatMessage';


export default class Feed extends Component { 
    constructor(props) {
        super(props);
    }

    componentDidUpdate(){
        const bottomOfList =  this.state.listHeight - this.state.scrollViewHeight
        this._scrollView.scrollTo({ y: bottomOfList })   
    }
    
    render() {
        const {messages} = this.props;


        return (
            <ScrollView 
                ref={ (component) => this._scrollView = component } 
                onLayout={ (e) => {
                    const height = e.nativeEvent.layout.height
                    this.setState({scrollViewHeight: height })
                }}
                onContentSizeChange={ (contentWidth, contentHeight) => {
                    this.setState({listHeight: contentHeight })
                }}
                style={styles.container}
            >
                {messages.map((item, i) => <ChatMessage key={i+''+(Math.floor(Math.random()*10000))}>{item}</ChatMessage>)}
            </ScrollView>
        );
    }
}
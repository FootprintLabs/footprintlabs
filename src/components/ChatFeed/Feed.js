import React, {Component} from 'react';
import {ScrollView, View} from 'react-native';

import styles from './style';
import ChatMessage from '../ChatMessage';
import ChatReplies from '../ChatReplies';


export default class Feed extends Component { 
    constructor(props) {
        super(props);

        this.state = {
            shouldScrollDown: true, 
            messages: props.messages
        }

        this.toggleRepliesVisibility = this.toggleRepliesVisibility.bind(this);
    }

    componentDidUpdate(){
        if(this.state.shouldScrollDown){
            const bottomOfList =  this.state.listHeight - this.state.scrollViewHeight
            this._scrollView.scrollTo({ y: bottomOfList }) 
        }  
    }
    

    toggleRepliesVisibility(id) {
        this.state.shouldScrollDown = false;
        const messages = this.state.messages.slice().map(message => {
            if(id === message.id)
                message.visibility = !message.visibility;
            return message; 
        });

        this.setState({messages});
    }

    render() {
        const {messages} = this.state;

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
                {messages.map((item, i) => {
                    return <View key={i+''+(Math.floor(Math.random()*10000))}>
                        <ChatMessage 
                            key={i+''+(Math.floor(Math.random()*10000))}
                            toggleReplies={()=>{this.toggleRepliesVisibility(item.id)}}
                        >
                            {item.current}
                        </ChatMessage>
                        {
                            <ChatReplies 
                                replies={item.replies}
                                visibility={item.visibility}
                            />
                        }
                    </View>
                })}
            </ScrollView>
        );
    }
}
import React, {Component} from 'react';
import {View} from 'react-native';

import ChatMessage from '../ChatMessage';

export default Replies = ({replies, visibility})=>{
        return visibility 
            ?(
                <View>
                    {replies.map((reply, i) => 
                        <ChatMessage key={i+''+(Math.floor(Math.random()*10000))}>
                            {reply}
                        </ChatMessage>
                    )}
                </View>
            )
            : null;
}
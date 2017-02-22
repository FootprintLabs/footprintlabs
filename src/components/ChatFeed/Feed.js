import React, {Component} from 'react';
import SvgUri from 'react-native-svg-uri';
import {
  Text,
  View,
  TextInput,
  ScrollView,
  Image 
} from 'react-native';

import styles from './style';
import ChatMessage from '../ChatMessage';


 const Feed = ({messages}) => { 
    return (
        <ScrollView style={styles.container}>
            {messages.map((item, i) => <ChatMessage key={i+''+(Math.floor(Math.random()*10000))}>{item}</ChatMessage>)}
        </ScrollView>
    );
}

export default Feed;
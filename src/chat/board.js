import React, {Component} from 'react';
import SvgUri from 'react-native-svg-uri';
import {
  Text,
  View,
  TextInput,
  ScrollView,
  Image 
} from 'react-native';

import styles from './board.style';
import Message from './message';


 const Board = ({messages}) => { 
    return (
        <ScrollView style={styles.container}>
            {messages.map((item, i) => <Message key={i+''+(Math.floor(Math.random()*10000))}>{item}</Message>)}
        </ScrollView>
    );
}

export default Board;
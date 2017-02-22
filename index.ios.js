import React, { Component } from 'react';
import {AppRegistry} from 'react-native';

import ChatPage from './src/pages/ChatPage';


export default class Footprint extends Component {
  render() {
    return (
      <ChatPage />
    );
  }
}

AppRegistry.registerComponent('Footprint', () => Footprint);

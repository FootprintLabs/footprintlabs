import React, { Component } from 'react';
import {AppRegistry} from 'react-native';

import ChatPage from './src/layouts/chat_page';


export default class Footprint extends Component {
  render() {
    return (
      <ChatPage />
    );
  }
}

AppRegistry.registerComponent('Footprint', () => Footprint);

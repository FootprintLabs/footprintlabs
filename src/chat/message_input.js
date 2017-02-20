import React, {Component} from 'react';
import SvgUri from 'react-native-svg-uri';
import {Text, View, TextInput, Image, TouchableWithoutFeedback} from 'react-native';

import {emoji} from '../assets/images/icons/emoji';
import {attach} from '../assets/images/icons/attach';
import styles from './message_input.style';


export default class MessageInput extends Component {
    constructor(props) {
        super(props);
        this.state = {
            text: ''
        };
        
        this.onSubmit = this.onSubmit.bind(this);
    }

    onSubmit() {
        this.props.addMessage(this.state.text);
        this.setState({text: ''});
    }

    render() {
        const {text} = this.state;

        return (
            <View style={styles.container}>
                <TouchableWithoutFeedback 
                    onPressIn={this.onSubmit} 
                >
                    <View style={styles.mescontainer__submit}>
                        <Image
                            source={require('../assets/images/text-logo.png')}
                            style={styles.container__submit__img}
                        />
                    </View>
                </TouchableWithoutFeedback>
                <View style={styles.container__input}>
                    <View style={styles.container__input}>
                        <TextInput 
                            placeholder="Type a message..."
                            value={text}
                            onChangeText={(text) => this.setState({text})}
                            onSubmitEditing={this.onSubmit}
                            underlineColorAndroid="#fff"
                        /> 
                        
                        <View style={styles.container__input__emoji}>
                            <SvgUri
                                width="17"
                                height="17"
                                svgXmlData ={emoji}
                            />   
                        </View> 

                        <View style={styles.container__input__attach}>
                            <SvgUri
                                width="18"
                                height="17"
                                svgXmlData ={attach}
                            />
                        </View> 
                    </View>  
                </View>  
            </View>
        );
    }
}
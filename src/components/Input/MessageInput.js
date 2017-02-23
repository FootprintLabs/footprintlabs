import React, {Component} from 'react';
import {Platform, Text, Dimensions, View, TextInput, Image, TouchableWithoutFeedback} from 'react-native';

import Images from '../../images';
import Icon from '../Icon';
import styles from './style';


export default class MessageInput extends Component {
    constructor(props) {
        super(props);
        this.state = {
            text: 'a',
            keyboard: false
        };
        
        this.onSubmit = this.onSubmit.bind(this);
        this.onChangeAndroid = this.onChangeAndroid.bind(this);
        this.onChangeIOS = this.onChangeIOS.bind(this);
        this.toggleKeyboard = this.toggleKeyboard.bind(this);
    }

    onSubmit() {
        this.props.addMessage(this.state.text);
        this.setState({text: ''});
    }

    onChangeAndroid(text) {
        this.setState({text});
    }
    
    onChangeIOS(event) {
        this.setState({text: event.nativeEvent.text})
    }

    toggleKeyboard (e) {
        this.setState({keyboard: !this.state.keyboard});
    }


    render() {
        const {text} = this.state;
        
        const inputStyle = this.state.keyboard && (Platform.OS === 'ios')
            ? styles.container_keyboard
            : styles.container;

        return (
            <View style={inputStyle}>
                <TouchableWithoutFeedback 
                    onPressIn={this.onSubmit} 
                >
                    <View style={styles.mescontainer__submit}>
                        <Image
                            source={Images.Btns.chatInput}
                            style={styles.container__submit__img}
                        />
                    </View>
                </TouchableWithoutFeedback>
                <View style={styles.container__input}>
                    <View>
                    
                            <TextInput 
                                placeholder="Type a message..."
                                value={this.state.text}
                                onChangeText={this.onChangeAndroid}
                                onChange={this.onChangeIOS}
                                onSubmitEditing={this.onSubmit}
                                underlineColorAndroid="#fff"
                                style={{height: 40}}
                                onFocus={this.toggleKeyboard}
                                onEndEditing={this.toggleKeyboard}
                                autoCorrect={false}
                            /> 
                        
                        <View style={styles.container__input__emoji}>
                            <Icon size="medium" type="emoji" />
                        </View> 

                        <View style={styles.container__input__attach}>
                            <Icon size="medium" type="attach" />
                        </View> 
                    </View>  
                </View>  
            </View>
        );
    }
}
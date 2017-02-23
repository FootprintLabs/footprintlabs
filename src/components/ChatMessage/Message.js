import React, {Component} from 'react';
import {View, Image, Text, TouchableWithoutFeedback} from 'react-native';

import styles from './style';
import Avatar from '../Avatar';
import Icon from '../Icon';


export default class Message extends Component {
    render() {
		const message = this.props.children;
		const {toggleReplies} = this.props;
		const isReply = !!message.parent_id;
		const containerStyle = isReply
			? styles.containerReply
			: styles.container;      
		
		
		return (
            <View style={containerStyle}>
				<View style={styles.container__panel}>
					<View style={{flex:1, flexDirection: 'row'}}>
						<View>
							<Avatar src={message.props.user.avatar} />
						</View>
						<Text style={{paddingLeft: 20, color: '#000', fontSize: 17, fontWeight: '400'}}>
							{message.props.user.username}
						</Text>
					</View>

					<View style={{flex: 1, flexDirection: 'row', alignItems: 'center', justifyContent: 'flex-end'}}>
						<View>
							<Text style={{color: '#999', fontWeight: '200', fontSize: 14}}>
								{message.time}
							</Text>
						</View>
						<View style={{paddingLeft: 10}}>
							<Icon type="reply" size="medium" />
						</View>
					</View>
				</View>

				<View style={{paddingLeft: 75, marginTop: -20}}>
					<Text 
						style={{
							color: '#3e3e3e',
							fontWeight: '400', fontSize: 15,}}>
						{message.message}
					</Text>
				</View>

				{ 
					(!isReply && message.props.replied.length>0) 
					? <TouchableWithoutFeedback 
							onPressIn={toggleReplies} 
						>
						<View style={{marginTop: 35, paddingHorizontal: 20, marginBottom: 13, flex: 1, flexDirection: 'row'}}>
							<Icon type="reply" size="medium" />

							<Text 
								style={{
									color: 'rgb(0, 127, 224)',
									fontWeight: '400', fontSize: 15}}>
								{message.props.replied.length.toString()}
							</Text>
							<Text 
								style={{
									color: '#999',
									fontWeight: '400', fontSize: 15,
									paddingLeft: 4}}>
								replies from {message.props.replied.join(', ')}
							</Text>
						</View>
						</TouchableWithoutFeedback>
					: <View style={{paddingHorizontal: 20, marginBottom: 13}} />
				}

			</View>
        );
    }
}
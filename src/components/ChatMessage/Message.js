import React, {Component} from 'react';
import {View, Image, Text} from 'react-native';
import SvgUri from 'react-native-svg-uri';

import styles from './style';
import Images from '../../images';


export default class Message extends Component {
    render() {
		const {avatar, username, time, text, replies, isReply} = this.props.children;
		const containerStyle = isReply
			? styles.containerReply
			: styles.container;      
		
		
		return (
            <View style={containerStyle}>
				<View style={styles.container__panel}>
					<View style={{flex:1, flexDirection: 'row'}}>
						<View>
							<Image
								source={avatar}
								style={{
									width: 35, 
									height: 35}}
							/>
						</View>
						<Text style={{paddingLeft: 20,flex: 1, color: '#000', fontSize: 17, fontWeight: '400'}}>
							{username}
						</Text>
					</View>

					<View style={{flex: 1, flexDirection: 'row', alignItems: 'center', justifyContent: 'flex-end'}}>
						<View>
							<Text style={{color: '#999', fontWeight: '200', fontSize: 14}}>
								{time}
							</Text>
						</View>
						<View style={{paddingLeft: 10}}>
							<SvgUri
								width="18"
								height="17"
								svgXmlData ={Images.svg.reply}
								style={{
								}}
							/>
						</View>
					</View>
				</View>

				<View style={{paddingLeft: 75, marginTop: -20}}>
					<Text 
						style={{
							color: '#3e3e3e',
							fontWeight: '400', fontSize: 15,}}>
						{text}
					</Text>
				</View>

				<View style={{marginTop: 35, paddingHorizontal: 20, marginBottom: 13, flex: 1, flexDirection: 'row'}}>
					<SvgUri
						width="18"
						height="17"
						svgXmlData ={Images.svg.reply}
						style={{
						}}
					/>
					<Text 
						style={{
							color: 'rgb(0, 127, 224)',
							fontWeight: '400', fontSize: 15}}>
						{replies.length.toString()}
					</Text>
					<Text 
						style={{
							color: '#999',
							fontWeight: '400', fontSize: 15,
							paddingLeft: 4}}>
						replies from {replies.join(', ')}
					</Text>
				</View>
			</View>
        );
    }
}
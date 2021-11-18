import React, { useState } from 'react';
import {
	View,
	Text,
	TouchableOpacity,
	StyleSheet,
	ImageBackground,
	TextInput,
	Dimensions,
	Image,
} from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';

let width = Dimensions.get('window').width;
const EnterEmail =
	'Enter your email and will send you instructions on how to reset it';

const ForgetPass = ({ navigation, route }) => {
	const [text, onChangeText] = React.useState('');
	return (
		<ImageBackground
			source={require('../assets/image/backgr123.png')}
			resizeMode="cover"
			style={{
				flex: 1,
				backgroundColor: 'transparent',
				fontWeight: 'bold',
			}}
		>
			<LinearGradient style={styles.linea} colors={['#000000', '#000000']}>
				<View style={styles.inputView}>
					<View
						style={{
							flexDirection: 'row',
							marginTop: 50,
							marginLeft: 30,
						}}
					>
						<TouchableOpacity onPress={() => navigation.goBack()}>
							<Image
								style={{ width: 20, height: 37 }}
								source={require('../assets/image/whiteBackButton.png')}
							/>
						</TouchableOpacity>
						<View
							style={{
								flex: 1,
								alignItems: 'center',
								justifyContent: 'center',
								width: width,
								paddingRight: 50,
							}}
						>
							<Text style={{ fontSize: 21, color: '#FFFFFF' }}>
								{route.params.forget}
							</Text>
						</View>
					</View>
					<View style={styles.enterEmailText}>
						<Text
							style={{ color: '#FFFFFF', textAlign: 'center', fontSize: 15 }}
						>
							{EnterEmail}
						</Text>
					</View>
					<View style={styles.sectionStyle}>
						<Image
							source={require('../assets/image/emailIcon.png')}
							style={styles.imageStyle}
						/>
						<TextInput
							onChangeText={onChangeText}
							value={text}
							placeholderTextColor="#FFFFFF"
							placeholder={'Email'}
							opacity={0.7}
						/>
					</View>
					<TouchableOpacity style={styles.send}>
						<Text style={{ color: 'white', fontSize: 16 }}>Send</Text>
					</TouchableOpacity>
				</View>
			</LinearGradient>
		</ImageBackground>
	);
};
const styles = StyleSheet.create({
	scr: {
		flex: 1,
		justifyContent: 'center',
		alignItems: 'center',
	},
	linea: {
		flex: 1,
		opacity: 0.7,
	},
	enterEmailText: {
		marginTop: 80,
		justifyContent: 'center',
		alignItems: 'center',
		textAlign: 'center',
		width: width / 1.4,
		marginBottom: 40,
	},
	sectionStyle: {
		flexDirection: 'row',
		alignItems: 'center',
		borderColor: '#FFFFFF',
		width: width / 1.3,
		height: 60,
		backgroundColor: 'grey',
		borderRadius: 10,
		opacity: 0.8,
		marginTop: 20,
	},
	imageStyle: {
		padding: 10,
		margin: 15,
		height: 20,
		width: 20,
		resizeMode: 'stretch',
		alignItems: 'center',
	},
	inputView: {
		justifyContent: 'center',
		alignItems: 'center',
		width: width,
	},
	send: {
		alignItems: 'center',
		justifyContent: 'center',
		width: width / 1.3,
		height: 60,
		backgroundColor: '#5663FF',
		borderRadius: 10,
		marginTop: 200,
	},
});

export default ForgetPass;

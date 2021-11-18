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
import Login from './LoginScreen';

const title = 'FoodyBite';
const forget = 'Forgot Password?';
const login = 'Login';
const create = 'Create New Account';
const Skip = 'Skip';
const txt =
	'Please turn on your GPS to find out better restaurant suggestionsnear you.';
let width = Dimensions.get('window').width;

const WelcomeScreen = ({ navigation }) => {
	return (
		<ImageBackground
			source={require('../assets/image/welcomebc2.png')}
			resizeMode="cover"
			style={{
				flex: 1,
			}}
		>
			<LinearGradient style={styles.linea} colors={['#080808', '#2D2D2D']}>
				<View
					style={{
						marginTop: 50,
						margin: 30,
						flexDirection: 'row',
						alignItems: 'center',
						justifyContent: 'space-between',
					}}
				>
					<TouchableOpacity onPress={() => navigation.goBack()}>
						<Image
							style={{ width: 20, height: 37 }}
							source={require('../assets/image/whiteBackButton.png')}
						/>
					</TouchableOpacity>

					<TouchableOpacity
						style={{
							width: 90,
							height: 40,
							blurRadius: 90,
							borderRadius: 15,
							backgroundColor: 'white',
							alignItems: 'center',
							justifyContent: 'center',
						}}
					>
						<Text style={{ color: 'blue', fontSize: 16 }}>{Skip}</Text>
					</TouchableOpacity>
				</View>
				<View style={styles.inputView}>
					<Text
						style={{
							color: 'white',
							fontSize: 50,
							textAlignVertical: 'center',
						}}
					>
						Hi John,
					</Text>
					<Text style={{ color: 'white', fontSize: 50 }}>
						Welcome to Foodybite
					</Text>
					<Text style={{ marginTop: 50, color: 'white', fontSize: 18 }}>
						{txt}
					</Text>
					<TouchableOpacity style={styles.send}>
						<Text style={{ color: 'white', fontSize: 16 }}>Turn on GPS</Text>
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
		opacity: 0.4,
	},
	inputView: {
		flex: 1,
		marginLeft: 40,
		justifyContent: 'center',
		// backgroundColor: 'grey',
		width: width,
		// flexDirection: 'row',
	},
	send: {
		alignItems: 'center',
		justifyContent: 'center',
		width: width / 1.3,
		height: 60,
		backgroundColor: '#5663FF',
		borderRadius: 10,
		bottom: 70,
		position: 'absolute',
	},
});

export default WelcomeScreen;

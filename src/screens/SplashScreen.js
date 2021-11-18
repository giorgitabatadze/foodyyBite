import React, { useEffect } from 'react';
import { View, Text, ImageBackground, StyleSheet } from 'react-native';

const title = 'FoodyBite';

const SplashScreen = ({ navigation }) => {
	useEffect(() => {
		setTimeout(() => {
			navigation.navigate('LoginScreen');
		}, 3000);
	});
	return (
		<ImageBackground
			source={require('../assets/image/spla123.png')}
			style={{
				flex: 1,
				justifyContent: 'center',
				alignItems: 'center',
			}}
		>
			<Text style={styles.text}> {title}</Text>
		</ImageBackground>
	);
};

const styles = StyleSheet.create({
	scr: {
		flex: 1,
		justifyContent: 'center',
		alignItems: 'center',
		flexDirection: 'column',
	},
	text: {
		color: '#3E3F68',
		fontSize: 48,
		fontWeight: 'bold',
		textAlign: 'center',
	},
});

export default SplashScreen;

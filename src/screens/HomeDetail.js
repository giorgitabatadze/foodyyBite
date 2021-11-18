import React, { useState } from 'react';

import { View, Text, StyleSheet, TouchableOpacity, Image } from 'react-native';

const HomeDetailScreen = ({ navigation }) => {
	return (
		<View style={styles.container}>
			<TouchableOpacity
				style={{
					backgroundColor: 'blue',
					justifyContent: 'center',
					textAlign: 'center',
					padding: 10,
					marginTop: 60,
				}}
				onPress={() => navigation.goBack()}
			>
				<Text style={{ color: 'white' }}>BACK</Text>
			</TouchableOpacity>

			<Image
				style={{ width: 159, height: 134, marginTop: 60 }}
				source={require('../assets/image/homeImage.png')}
			/>
		</View>
	);
};

const styles = StyleSheet.create({
	container: {
		marginHorizontal: 24,
		paddingTop: 15,
		color: '#FEFEFE',
	},
});

export default HomeDetailScreen;

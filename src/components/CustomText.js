import React from 'react';
import { Text, StyleSheet } from 'react-native';

import {
	JosefinSans_100Thin,
	JosefinSans_200ExtraLight,
	JosefinSans_300Light,
	JosefinSans_400Regular,
	JosefinSans_500Medium,
	JosefinSans_600SemiBold,
	JosefinSans_700Bold,
	JosefinSans_100Thin_Italic,
	JosefinSans_200ExtraLight_Italic,
	JosefinSans_300Light_Italic,
	JosefinSans_400Regular_Italic,
	JosefinSans_500Medium_Italic,
	JosefinSans_600SemiBold_Italic,
	JosefinSans_700Bold_Italic,
} from '@expo-google-fonts/josefin-sans';
import AppLoading from 'expo-app-loading';

import { useFonts } from 'expo-font';

const CustomText = ({ children, style }) => {
	let [fontsLoaded, error] = useFonts({
		JosefinSans_100Thin,
		JosefinSans_200ExtraLight,
		JosefinSans_300Light,
		JosefinSans_400Regular,
		JosefinSans_500Medium,
		JosefinSans_600SemiBold,
		JosefinSans_700Bold,
		JosefinSans_100Thin_Italic,
		JosefinSans_200ExtraLight_Italic,
		JosefinSans_300Light_Italic,
		JosefinSans_400Regular_Italic,
		JosefinSans_500Medium_Italic,
		JosefinSans_600SemiBold_Italic,
		JosefinSans_700Bold_Italic,
	});

	if (!fontsLoaded) {
		return <AppLoading />;
	}
	return <Text style={[styles.fonts, style]}>{children}</Text>;
};
const styles = StyleSheet.create({
	fonts: {
		fontFamily: 'JosefinSans_600SemiBold',
	},
});
export default CustomText;

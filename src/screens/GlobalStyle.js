import { Platform, StyleSheet } from 'react-native';

export const globalStyles = StyleSheet.create({
	container: {
		marginHorizontal: 24,
		paddingTop: 15,
		color: '#ECECEC',
	},
	safe: {
		backgroundColor: '#FBFBFB',
		flex: 1,
		paddingTop: Platform.OS === 'android' ? 25 : 0,
	},
	fle: {
		flex: 1,
		justifyContent: 'center',
		alignItems: 'center',
	},
});

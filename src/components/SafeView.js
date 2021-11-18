import React from 'react';
import { Platform, SafeAreaView, StyleSheet } from 'react-native';

const asd = '';
const SafeView = ({ children, style }) => {
	return <SafeAreaView style={[styles.safe, style]}>{children}</SafeAreaView>;
};

const styles = StyleSheet.create({
	safe: {
		backgroundColor: '#FBFBFB',
		flex: 1,
		paddingTop: Platform.OS === 'android' ? 25 : 0,
	},
});

export default SafeView;

// if (isIos()) {
// 	return <View style={{ backgroundColor: 'blue', flex: 1 }} {...props} />;
// } else {
// 	const { style, ...rest } = props;
// 	return <View style={[{ paddingTop: 25 }, props.style]} {...rest} />;
// }
//}

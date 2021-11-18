import React from 'react';
import MasonryList from 'react-native-masonry-list';

import {
	Image,
	StyleSheet,
	TouchableOpacity,
	View,
} from 'react-native';
import { globalStyles } from './GlobalStyle';
import CustomText from '../components/CustomText';
import SafeView from '../components/SafeView';
import {ImageList, numArray} from '../consts/FoodyDataList';


const Preview = 'Preview Screen';
const Photos = ({ navigation, route }) => {
	console.log("arr = ", ImageList);
	const renderItem = () => (
		<TouchableOpacity onPress={() => navigation.navigate('PreviewScreen')}>
			<CustomText> {Preview}</CustomText>
		</TouchableOpacity>
	);

	return (
		<SafeView style={{backgroundColor: 'white', alignItems: 'center'}}>
			<View style={styles.container}>
				<View style={styles.header}>
					<TouchableOpacity onPress={() => navigation.goBack()}>
						<Image
							style={styles.Ima}
							source={require('../assets/image/backButton.png')}
						/>
					</TouchableOpacity>
					<View style={globalStyles.fle}>
						<CustomText style={styles.headerTitle}>
							{route.params.photo}
						</CustomText>
					</View>
				</View>
				<MasonryList
					sorted
					columns={2}
					data={numArray}
					renderItem={renderItem}
					images={ImageList}
					spacing={3}
					onPressImage={(i) => {
						navigation.navigate('PreviewScreen', {
							image: i.source.uri,
							arrData: ImageList,
							index: i.index,
						});
						console.log('hi there-------', i.index);
					}}
				/>
			</View>
		</SafeView>
	);
};

const styles = StyleSheet.create({
	container: {
		marginHorizontal: 24,
		marginTop: 15,
		flex: 1,

	},
	header: {
		width: '100%',
		flexDirection: 'row',
		marginBottom: 50,
	},
	headerTitle: {
		fontSize: 22,
		justifyContent: 'center',
		alignItems: 'center',
		color: '#222455',
		paddingRight: 30,
	},
	Ima: {
		width: 20,
		height: 27,
		marginLeft: 10,
	},
});

export default Photos;



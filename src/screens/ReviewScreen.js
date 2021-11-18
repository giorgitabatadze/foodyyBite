import React, { useState, useEffect } from 'react';
import {
	Image,
	SafeAreaView,
	TextInput,
	StyleSheet,
	Text,
	TouchableOpacity,
	View,
	Platform,
} from 'react-native';
import CustomText from '../components/CustomText';

import Stars from 'react-native-stars';
import SafeView from '../components/SafeView';

const reviewandrating = 'Review & Reitings';
const experience = 'Rate your experience';
const writeExperience = 'Write your experience';
const done = 'Done';

const onButtonClick = () => {
	alert('Review has done');
};

const ReviewScreen = ({ navigation, route }) => {
	const [defaultRating, setDefaultRating] = useState(0);
	const [maxRating, setMaxRating] = useState([1, 2, 3, 4, 5]);

	const starImageFilled =
		'https://raw.githubusercontent.com/AboutReact/sampleresource/master/star_filled.png';
	const starImageCorner =
		'https://raw.githubusercontent.com/AboutReact/sampleresource/master/star_corner.png';

	const CustomRatingBar = () => {
		return (
			<View style={styles.customRatingBarStyle}>
				{maxRating.map((item, key) => {
					return (
						<TouchableOpacity
							activeOpacity={0.7}
							key={item}
							onPress={() => setDefaultRating(item)}
						>
							<Image
								style={styles.starImageStyle}
								source={
									item <= defaultRating
										? { uri: starImageFilled }
										: { uri: starImageCorner }
								}
							/>
						</TouchableOpacity>
					);
				})}
			</View>
		);
	};

	const [value, setValue] = useState('');

	useEffect(() => {
		setValue('Default Value');
	}, []);

	return (
		<SafeView>
			<View style={styles.container}>
				<View style={styles.header}>
					<TouchableOpacity onPress={() => navigation.goBack()}>
						<Image
							style={{ width: 20, height: 27, marginLeft: 10 }}
							source={require('../assets/image/backButton.png')}
						/>
					</TouchableOpacity>
					<View
						style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}
					>
						<CustomText style={styles.headerTitle}>
							{reviewandrating}
						</CustomText>
					</View>
					<TouchableOpacity onPress={() => navigation.navigate('HomeScreen')}>
						<Image
							style={styles.close}
							name={'close'}
							source={require('../assets/image/closeButton.png')}
						/>
					</TouchableOpacity>
				</View>

				<View style={styles.rating}>
					{/*<Stars*/}
					{/*	half={false}*/}
					{/*	default={0}*/}
					{/*	spacing={20}*/}
					{/*	starSize={40}*/}
					{/*	count={5}*/}
					{/*	fullStar={require('../assets/image/star.png')}*/}
					{/*	emptyStar={require('../assets/image/deadStar.png')}*/}
					{/*/>*/}
					<CustomRatingBar />
				</View>
				<View style={styles.exp}>
					<CustomText style={{ color: '#8A98BA' }}> {experience} </CustomText>
				</View>
				<View style={styles.TextInp}>
					<TextInput
						style={{ margin: 15 }}
						placeholder={writeExperience}
						onChangeText={(text) => setValue(text)}
						multiline={true}
						underlineColorAndroid="transparent"
					/>
				</View>
			</View>

			<View style={styles.footer}>
				<TouchableOpacity
					style={styles.Reset}
					title="Restart Screen"
					onPress={() => navigation.goBack()}
				>
					<CustomText style={styles.bottomButtonStyle}> {done}</CustomText>
				</TouchableOpacity>
			</View>
		</SafeView>
	);
};

const styles = StyleSheet.create({
	container: {
		marginHorizontal: 24,
		marginTop: 15,
		alignItems: 'center',
		justifyContent: 'center',
	},
	close: {
		width: 20,
		height: 27,
		marginRight: 10,
		paddingBottom: 0,
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
	},
	rating: {
		margin: 30,
		marginTop: 0,
		marginBottom: 20,
		backgroundColor: '#EEF7FF',
		height: 74,
		alignItems: 'center',
		justifyContent: 'center',
		width: '90%',
	},
	ratingImageStyle: {
		width: 40,
		height: 40,
		marginLeft: 10,
	},
	exp: {
		justifyContent: 'center',
		alignItems: 'center',
	},
	TextInp: {
		marginTop: 50,
		borderWidth: 1,
		borderRadius: 10,
		width: '90%',
		height: 150,
		borderColor: '#8A98BA',
	},
	footer: {
		width: '100%',
		borderTopLeftRadius: 15,
		borderTopRightRadius: 15,
		//    borderWidth: 2,
		height: 71,

		justifyContent: 'center',
		alignItems: 'center',
		flexDirection: 'row',
		position: 'absolute',
		left: 0,
		right: 0,
		bottom: 0,
	},
	Reset: {
		width: '100%',
		backgroundColor: '#5663FF',
		height: '100%',
		justifyContent: 'center',
		alignItems: 'center',
		borderTopLeftRadius: 20,
		borderTopRightRadius: 20,
	},
	bottomButtonStyle: {
		color: 'white',
		fontSize: 20,
		justifyContent: 'center',
		alignItems: 'center',
	},
	stars: {
		justifyContent: 'center',
		alignItems: 'center',
		backgroundColor: '#ecf0f1',
		padding: 8,
		flexDirection: 'row',
	},

	customRatingBarStyle: {
		justifyContent: 'center',
		flexDirection: 'row',
		alignItems: 'center',
	},
	starImageStyle: {
		width: 40,
		height: 40,
		resizeMode: 'cover',
	},
});

export default ReviewScreen;

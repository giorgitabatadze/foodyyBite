import React, { useEffect, useState } from 'react';
import {
	FlatList,
	Image,
	Platform,
	SafeAreaView,
	Slider,
	StyleSheet,
	Text,
	TouchableOpacity,
	View,
} from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import Stars from 'react-native-stars';
import { globalStyles } from './GlobalStyle';
import CustomText from '../components/CustomText';
import SafeView from '../components/SafeView';

const filter = 'Filter';
const category = 'Select Category';
const distance = 'Distance';
const ratings = 'Ratings';
const Reset = 'Reset';
const Apply = 'Apply';

const thumb = require('../assets/image/sliderImage.png');

const RenderItem = ({ item, asd }) => {
	// console.log('item-> ', item.name);
	// console.log('asdf--', asd?.params?.col);
	const [selected, setSelected] = useState(false);
	const onPressCat = () => {
		// console.log('selected--->', selected);
		setSelected(!selected);
	};

	return (
		<TouchableOpacity style={styles.listItemContainer} onPress={onPressCat}>
			<View style={styles.listItem}>
				<LinearGradient
					colors={selected ? ['#FF8C48', '#FF5673'] : ['#FFFFFF', '#FFFFFF']}
					style={styles.linear1}
					start={{ x: 0, y: 0.5 }}
					end={{ x: 1, y: 0.5 }}
					angleCenter={{ x: 0, y: 0.5 }}
				>
					<CustomText
						style={{
							fontSize: 14,
							color: selected ? 'white' : 'grey',
							position: 'absolute',
						}}
					>
						{item.name}
					</CustomText>
				</LinearGradient>
			</View>
		</TouchableOpacity>
	);
};

const FilterScreen = ({ navigation, route }) => {
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

	console.log('844444--', route?.params?.col);
	const [sliderVal, SetsliderVal] = useState(50);
	const [reset, setReset] = useState(true);

	useEffect(() => {
		console.log('reset --', reset);
	}, [reset]);

	return (
		<SafeView>
			<View style={globalStyles.container}>
				<View style={styles.header}>
					<TouchableOpacity onPress={() => navigation.goBack()}>
						<Image
							style={{ width: 20, height: 27, marginLeft: 10 }}
							source={require('../assets/image/backButton.png')}
						/>
					</TouchableOpacity>
					<View style={globalStyles.fle}>
						<CustomText style={styles.headerTitle}>{filter}</CustomText>
					</View>
					<TouchableOpacity onPress={() => navigation.goBack()}>
						<Image
							style={styles.close}
							name={'close'}
							source={require('../assets/image/closeButton.png')}
						/>
					</TouchableOpacity>
				</View>
				<View>
					<View style={styles.category}>
						<CustomText style={styles.headerTextsStyle}>{category}</CustomText>
					</View>

					<FlatList
						numColumns={3}
						data={route.params.data}
						renderItem={(item) => <RenderItem item={item.item} asd={route} />}
						keyExtractor={(item) => item.id}
					/>
				</View>

				<View style={styles.dista}>
					<CustomText style={styles.headerTextsStyle}>{distance}</CustomText>
				</View>
				<View style={styles.slid}>
					<Slider
						// style={styles.sliderTitle}
						thumbStyle={styles.thumb}
						thumbImage={thumb}
						customThumb={thumb}
						trackStyle={styles.track}
						thumbTouchSize={{ width: 140, height: 140 }}
						value={sliderVal}
						maximumValue={100}
						minimumValue={0}
						// trackImage={thumb}

						step={5}
						onValueChange={SetsliderVal}
					/>
				</View>
				<View style={styles.numb}>
					<CustomText> {sliderVal} </CustomText>
					<CustomText> 100 </CustomText>
				</View>

				<View style={styles.dista}>
					<CustomText style={styles.headerTextsStyle}>{ratings}</CustomText>
				</View>

				<View style={styles.rating}>
					{/*<Stars*/}
					{/*	half={false}*/}
					{/*	default={0}*/}
					{/*	update={(val) => {*/}
					{/*		console.log('---', val);*/}
					{/*	}}*/}
					{/*	spacing={20}*/}
					{/*	starSize={40}*/}
					{/*	count={5}*/}
					{/*	fullStar={require('../assets/image/star.png')}*/}
					{/*	emptyStar={require('../assets/image/deadStar.png')}*/}
					{/*/>*/}
					<CustomRatingBar />
				</View>
			</View>
			<View style={styles.footer}>
				<TouchableOpacity style={styles.Reset} onPress={() => setReset(!reset)}>
					<CustomText style={styles.bottomButtonStyle}> {Reset}</CustomText>
				</TouchableOpacity>

				<View style={styles.dividee}></View>

				<TouchableOpacity
					style={styles.Apply}
					onPress={() => navigation.navigate('RestScreen', { data: route.params.data })}
				>
					<CustomText style={styles.bottomButtonStyle}> {Apply}</CustomText>
				</TouchableOpacity>
			</View>
		</SafeView>
	);
};

const styles = StyleSheet.create({
	close: {
		width: 20,
		height: 27,
		marginRight: 10,
		paddingBottom: 0,
	},
	header: {
		marginTop: 10,
		width: '100%',
		flexDirection: 'row',
		marginBottom: 60,
	},
	linear1: {
		height: '100%',
		justifyContent: 'center',
		alignItems: 'center',
		margin: 10,
		width: '100%',
		borderRadius: 10,
		flexDirection: 'row',
		borderWidth: 0.5,
		borderColor: '#3E3F68',
		opacity: 0.8,
	},
	headerTitle: {
		fontSize: 22,
		justifyContent: 'center',
		alignItems: 'center',
		color: '#222455',
	},
	dividee: {
		width: 1,
		height: '100%',
		color: 'white',
	},
	category: {
		justifyContent: 'center',
		alignItems: 'center',
		marginBottom: 10,
	},
	headerTextsStyle: {
		fontSize: 22,
		color: '#3E3F68',
		// fontFamily: 'JosefinSans_600SemiBold',
	},
	numb: {
		flexDirection: 'row',
		justifyContent: 'space-between',
		marginTop: 15
	},

	dista: {
		marginTop: 50,
		justifyContent: 'center',
		alignItems: 'center',
		marginBottom: 30,
	},
	sliderTitle: {
		width: '100%',
		borderRadius: 20,
	},
	rating: {
		margin: 20,
		backgroundColor: '#EEF7FF',
		height: 74,
		alignItems: 'center',
		justifyContent: 'center',
		flexDirection: 'row',
	},
	ratingImageStyle: {
		width: 40,
		height: 40,
		marginLeft: 10,
	},
	footer: {
		width: '100%',
		borderTopLeftRadius: 15,
		borderTopRightRadius: 15,
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
		width: '50%',
		backgroundColor: '#5663FF',
		height: '100%',
		justifyContent: 'center',
		alignItems: 'center',
		borderTopLeftRadius: 20,
	},
	Apply: {
		width: '50%',
		backgroundColor: '#5663FF',
		height: '100%',
		justifyContent: 'center',
		alignItems: 'center',
		borderTopRightRadius: 20,
	},
	bottomButtonStyle: {
		color: 'white',
		fontSize: 20,
		justifyContent: 'center',
		alignItems: 'center',
	},
	listItem: {
		borderRadius: 15,
		width: '90%',
		height: 47.5,
		justifyContent: 'center',
		alignItems: 'center',
		marginTop: 20,
	},
	listItemContainer: {
		justifyContent: 'space-between',
		flex: 1,
		alignItems: 'center',
	},
	thumb: {
		width: 50,
		height: 80,
		backgroundColor: 'red',
		borderBottomRightRadius: 100,
		borderTopRightRadius: 100,
	},
	track: {
		height: 80,
		borderBottomRightRadius: 20,
		borderTopRightRadius: 20,
	},
	slid: {
		flex: 1,
		justifyContent: 'center',
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

export default FilterScreen;

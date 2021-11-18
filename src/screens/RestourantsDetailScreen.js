
import React from 'react';
import {
	FlatList,
	Image,
	StyleSheet,
	TouchableOpacity,
	View,
	ScrollView,
	Platform,
	Linking,
	Share,
} from 'react-native';
import { globalStyles } from './GlobalStyle';
import { BlurView } from 'expo-blur';
import CustomText from '../components/CustomText';
import {ImageList} from '../consts/FoodyDataList';
import FriendListComponent from "../components/FriendListComponent";

import call from 'react-native-phone-call';

const address = '394 Broome St, New York, NY 10013, USA';
const dailyTime = ' daily time ';
const time = '9:30 am to 11:00 pm';
const menuPhotos = 'Menu & Photos';
const Review = 'Review & Reitings';
const num = '574027372';
const Direction = 'Direction';
const seeAll = 'See all';
const Rate = 'Rate your Experience';


const onShare = async () => {
	try {
		const result = await Share.share({
			message:
				'React Native | A framework for building native apps using React',
		});
		if (result.action === Share.sharedAction) {
			if (result.activityType) {
				// shared with activity type of result.activityType
			} else {
				// shared
			}
		} else if (result.action === Share.dismissedAction) {
			// dismissed
		}
	} catch (error) {
		alert(error.message);
	}
};

const DetailsScreen = ({ navigation, route }) => {

	const ImageFlat = () => {
		return (
			<View>
				<FlatList
					horizontal={true}
					showsHorizontalScrollIndicator={false}
					data={ImageList}
					renderItem={renderItem}
					keyExtractor={(item) => item.id}
				/>

				<View style={styles.viSt}>
					<CustomText style={{ color: '#3E3F68', fontSize: 24 }}>
						{Review}
					</CustomText>
					<TouchableOpacity
						onPress={() =>
							navigation.navigate('RewiewAndRaitingScreen', {
								Review: Review,
								daata: route.params.data2,
							})
						}
					>
						<CustomText style={{ fontSize: 14.3, color: '#6E7FAA' }}>
							{seeAll}
						</CustomText>
					</TouchableOpacity>
				</View>
			</View>
		)
	};

	const ReviewFlat = () => {
		return (
			<View>
			<FlatList
				style={{ paddingBottom: 70 }}
				data={route.params.data2}
				renderItem={(item) => <FriendListComponent item={item} />}
				keyExtractor={(item) => item.id}
			/>
			</View>
			)
	}

	const renderItem = ({ item }) => (
		<TouchableOpacity
			onPress={() =>
				navigation.navigate('PhotoScreen', {
					photo: menuPhotos,
				})
			}
		>
			<Image
				style={styles.imgSt}
				source={{
					uri: item.uri,
				}}
			/>
		</TouchableOpacity>
	);

	return (
		<View style={{ backgroundColor: '#FBFBFB', flex: 1 }}>
			<ScrollView showsVerticalScrollIndicator={false}>
				<View style={styles.container}>
					<View style={styles.header}>
						<Image style={styles.image} source={{ uri: route.params.img }} />
						<View style={styles.topCont}>
							<TouchableOpacity onPress={() => navigation.goBack()}>
								<Image
									style={{ width: 20, height: 37 }}
									source={require('../assets/image/whiteBackButton.png')}
								/>
							</TouchableOpacity>
							<View style={{ flexDirection: 'row' }}>
								<TouchableOpacity onPress={onShare}>
									<Image
										style={styles.shareBut}
										source={require('../assets/image/shareButton.png')}
									/>
								</TouchableOpacity>
								<Image
									style={styles.img1}
									source={require('../assets/image/rame.png')}
								/>
							</View>
						</View>
						<View style={styles.viewSt}>
							<View style={styles.bottomcont}>
								<View style={{borderRadius:25,  ...StyleSheet.absoluteFill, overflow:'hidden'}}>
									<BlurView
										intensity={90}
										style={[StyleSheet.absoluteFill, styles.blure]}
									></BlurView>
								</View>
								<TouchableOpacity
									onPress={() => {
										Linking.openURL('tel:574027372');
									}}
									style={[
										styles.items,
										{
											borderRightWidth: 0.3,
											borderColor: 'white',
											paddingRight: 60,
										},
									]}
								>
									<Image
										style={styles.phoneDire}
										source={require('../assets/image/phone.png')}
									/>
									<CustomText style={{ paddingLeft: 15, color: 'white' }}>
										{num}
									</CustomText>
								</TouchableOpacity>

								<TouchableOpacity
									style={styles.items}
									onPress={() =>
										Platform.OS === 'android'
											? Linking.openURL('google.navigation:q=100+101')
											: Linking.openURL(
											'maps://app?saddr=100+101&daddr=100+102'
											)
									}
								>
									<Image
										style={styles.phoneDire}
										source={require('../assets/image/direction.png')}
									/>
									<CustomText style={{ color: 'white', marginLeft: 10 }}>
										{' '}
										{Direction}
									</CustomText>
								</TouchableOpacity>
							</View>
						</View>
					</View>

					<View style={{ paddingHorizontal: 24 }}>
						<View style={styles.filD}>
							<View style={{ flexDirection: 'row', alignItems: 'center' }}>
								<CustomText style={styles.filDText}>
									{route.params.title}
								</CustomText>
								<View style={styles.newView2}>
									<CustomText style={styles.newView2Text}>
										{route.params.name}
									</CustomText>
								</View>
								<View style={styles.dinKm}>
									<CustomText style={styles.dinKmText}>1.2 km</CustomText>
								</View>
								<View></View>
							</View>
							<View style={styles.star}>
								<Image
									style={{ width: 10, height: 10 }}
									source={require('../assets/image/star.png')}
								/>
								<CustomText style={{ fontSize: 10 }}>
									{route.params.star}
								</CustomText>
							</View>
						</View>

						<View style={{ marginTop: 17 }}>
							<CustomText style={{ color: '#8A98BA', fontSize: 14 }}>
								{address}
							</CustomText>
							<View style={{ flexDirection: 'row', marginTop: 10 }}>
								<CustomText style={{ color: '#FF4A40', fontSize: 14 }}>
									{route.params.op + ' Now'}
								</CustomText>
								<CustomText style={{ color: '#8A98BA', fontSize: 14 }}>
									{dailyTime}
								</CustomText>
								<CustomText style={{ color: '#ff4a40', fontSize: 14 }}>
									{time}
								</CustomText>
							</View>
						</View>

						<View style={styles.newView}>
							<CustomText style={{ color: '#3E3F68', fontSize: 24 }}>
								{menuPhotos}
							</CustomText>
							<TouchableOpacity
								onPress={() =>
									navigation.navigate('PhotoScreen', {
										photo: menuPhotos,
									})
								}
							>
								<CustomText style={{ fontSize: 14.3, color: '#6E7FAA' }}>
									{seeAll}
								</CustomText>
							</TouchableOpacity>
						</View>

						<FlatList
							ListHeaderComponent={ImageFlat}
							ListFooterComponent={ReviewFlat}
						/>


					</View>
				</View>
			</ScrollView>

			<View style={styles.footer}>
				<TouchableOpacity
					style={styles.Reset}
					title="Restart Screen"
					onPress={() => navigation.navigate('ReviewScreen')}
				>
					<CustomText style={styles.bottomButtonStyle}>
						{Rate}
					</CustomText>
				</TouchableOpacity>
			</View>
		</View>
	);
};

const styles = StyleSheet.create({
	container: {
		flex: 1,
	},
	friView: {
		flex: 1,
		flexDirection: 'row',
		justifyContent: 'space-between',
		alignItems: 'center',
	},
	dinKm: {
		marginLeft: 10,
		backgroundColor: '#848DFF',
		borderRadius: 10,
		height: 15,
		alignItems: 'center',
		justifyContent: 'center',
		width: 40
	},
	dinKmText: {
		fontSize: 10,
		color: 'white',
		alignItems: 'center',
	},
	header: {
		width: '100%',
		height: 400,
		backgroundColor: 'green',
	},
	image: {
		flex: 1,
	},
	newView: {
		flexDirection: 'row',
		alignItems: 'center',
		marginTop: 20,
		justifyContent: 'space-between',
		marginBottom: 15,
	},
	filD: {
		justifyContent: 'space-between',
		marginTop: 25,
		flexDirection: 'row',
		alignItems: 'center',
	},
	filDText: {
		fontSize: 22,
		color: '#3E3F68',
		fontWeight: 'bold',
		marginTop: 0,
	},
	newView2Text: {
		fontSize: 10,
		color: 'white',
		alignItems: 'center',
	},
	newView2: {
		marginLeft: 20,
		backgroundColor: '#FF5673',
		borderRadius: 10,
		height: 15,
		alignItems: 'center',
		justifyContent: 'center',
		width: 60,
	},
	textby: {
		fontSize: 10,
		color: '#3E3F68',
		alignItems: 'center',
		width: '100%',
		marginBottom: 20,
		marginTop: 8,
	},
	phoneDire: {
		width: 40,
		height: 40,
	},
	img1: {
		width: 20,
		height: 37,
		paddingRight: 0,
	},
	imView: {
		flexDirection: 'row',
		backgroundColor: '#F6F7FF',
		justifyContent: 'space-between',
		padding: 5,
		borderRadius: 5,
	},
	viewSt: {
		width: '100%',
		alignItems: 'center',
		paddingHorizontal: 30,
		borderRadius: 30,
	},
	imgSt: {
		width: 170,
		height: 120,
		borderRadius: 10,
		marginRight: 15,
	},
	viSt: {
		flexDirection: 'row',
		alignItems: 'center',
		marginTop: 25,
		justifyContent: 'space-between',
		marginBottom: 15,
	},
	topCont: {
		width: '100%',
		position: 'absolute',
		top: 50,
		flexDirection: 'row',
		justifyContent: 'space-between',
		paddingHorizontal: 20,
	},
	bottomcont: {
		// backgroundColor: 'rgba(52, 52, 52, 0.8)',
		position: 'absolute',
		bottom: 20,
		width: '100%',
		flexDirection: 'row',
		justifyContent: 'space-between',
		borderRadius: 30,
		padding: 15,
	},
	blure: {
		borderRadius: 15,
		backgroundColor: 'green',
	},
	items: {
		flexDirection: 'row',
		alignItems: 'center',
		paddingRight: 20,
	},

	star: {
		height: 21,
		backgroundColor: '#F6F7FF',
		alignItems: 'center',
		justifyContent: 'center',
		borderRadius: 8,
		width: 40,
		flexDirection: 'row',
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
	shareBut: {
		width: 20,
		height: 37,
		marginRight: 20,
	},
	bottomButtonStyle: {
		color: 'white',
		fontSize: 20,
		justifyContent: 'center',
		alignItems: 'center',
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
	frImage: {
		width: '100%',
		height: '100%',
	},
	frfr: {
		width: 50,
		height: 50,
		borderRadius: 25,
		overflow: 'hidden',
		flexDirection: 'row',
		marginRight: 20,
		marginBottom: 20,
	},
});

export default DetailsScreen;
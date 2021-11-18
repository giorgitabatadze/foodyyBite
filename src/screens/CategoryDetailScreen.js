import React from 'react';
import {
	FlatList,
	Image,
	ImageBackground,
	Platform,
	StyleSheet,
	Text,
	TouchableOpacity,
	View,
} from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import { SwiperFlatList } from 'react-native-swiper-flatlist/index';
import CustomText from '../components/CustomText';
import SafeView from '../components/SafeView';
import RestComp from '../components/RestorantComponent';

const address = '394 Broome St, New York, NY 10013, USA';
const imageArray = [1, 2, 3, 4, 5, 6];
const OPEN = 'OPEN';
const km = 4.5;
const Bones = 'Happy Bones';
const Italian = 'Italian';

const RenderImages = () => {
	return (
		<TouchableOpacity style={styles.Trending}>
			<Image
				style={styles.ImageSt}
				name={'Happy Bones'}
				source={{
					uri: 'https://images.unsplash.com/photo-1616372383709-de2bc15e3dee?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=1080&fit=max',
				}}
			/>
			<View style={styles.headerSt}>
				<View style={styles.open}>
					<CustomText style={styles.headerStText}>{OPEN}</CustomText>
				</View>
				<View style={styles.star}>
					<Image
						style={{ width: 10, height: 10 }}
						source={require('../assets/image/star.png')}
					/>
					<CustomText style={{ fontSize: 10 }}> {km}</CustomText>
				</View>
			</View>
			<View style={{ paddingLeft: 15, flexDirection: 'row' }}>
				<CustomText style={styles.titSt}>{Bones}</CustomText>
				<View style={styles.catViewSt}>
					<CustomText style={styles.categoryStyle}>{Italian}</CustomText>
				</View>
				<View style={styles.kmSt}>
					<CustomText style={styles.categoryStyle}>{km}</CustomText>
				</View>
			</View>
			<CustomText style={styles.addSt}>{address}</CustomText>
		</TouchableOpacity>
	);
};

const CategoryDetailScreen = ({ navigation, route, index }) => {
	return (
		<View style={styles.container}>
			<View style={styles.header}>
				<ImageBackground
					source={require('../assets/image/backgroundImage.png')}
					style={styles.fleSt}
				>
					<TouchableOpacity
						style={{
							zIndex: 100,
							// backgroundColor: 'green',
							position: 'absolute',
							top: 50,
							left: 30,
						}}
						onPress={() => navigation.goBack()}
					>
						<Image
							style={{ width: 20, height: 37 }}
							source={require('../assets/image/whiteBackButton.png')}
						/>
					</TouchableOpacity>
					<LinearGradient
						colors={route.params.colors}
						style={styles.posSt}
						start={{ x: 0, y: 0.5 }}
						end={{ x: 1, y: 0.5 }}
					>
						<TouchableOpacity style={styles.topCont}>
							<View style={styles.fleSt}>
								<CustomText style={styles.TextSt}>
									{route.params.name}
								</CustomText>
							</View>
						</TouchableOpacity>
						<View styl={{ alignItems: 'center' }}>
							<SwiperFlatList
								contentContainerStyle={{
									width: '100%',
									height: 20,
									paddingTop: 10,
								}}
								showPagination
								paginationDefaultColor={'black'}
								paginationActiveColor={'red'}
								paginationStyleItem={{ width: 25, height: 5, marginRight: -4 }}
								data={route.params.array}
							/>
						</View>
					</LinearGradient>
				</ImageBackground>
			</View>

			{/*// TODO: `FlatList */}
			<FlatList
				style={{ paddingHorizontal: 24 }}
				showsVerticalScrollIndicator={false}
				data={imageArray}
				renderItem={(item) => <RenderImages item={item} index={index} />}
				keyExtractor={(item) => item.id}
			/>
		</View>
	);
};

const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: '#F3F3F3',

		paddingTop: Platform.OS === 'android' ? 25 : 0,
	},
	TextSt: { paddingRight: 35, fontSize: 22, color: 'white' },

	fleSt: {
		flex: 1,
		justifyContent: 'center',
		alignItems: 'center',
	},
	addSt: {
		color: '#8A98BA',
		fontSize: 13,
		paddingLeft: 15,
	},
	headerSt: {
		flexDirection: 'row',
		position: 'absolute',
	},
	headerStText: {
		color: '#4CD964',
		fontSize: 10,
		fontWeight: 'bold',
	},
	posSt: {
		position: 'absolute',
		height: 150,
		width: '100%',
		flexDirection: 'row',
		opacity: 0.8,
	},
	kmSt: {
		marginLeft: 10,
		backgroundColor: '#848DFF',
		borderRadius: 10,
		height: 15,
		marginTop: 5,
		alignItems: 'center',
		justifyContent: 'center',
	},
	ImageSt: {
		width: '100%',
		height: 212,
		marginBottom: 21,
		borderTopLeftRadius: 7,
		borderTopRightRadius: 7,
	},
	catViewSt: {
		marginLeft: 10,
		backgroundColor: '#FF5673',
		borderRadius: 10,
		height: 15,
		marginTop: 5,
		alignItems: 'center',
		justifyContent: 'center',
	},
	header: {
		width: '100%',
		height: 150,
	},
	image: {
		flex: 1,
	},
	categoryStyle: {
		fontSize: 10,
		color: 'white',
		alignItems: 'center',
	},
	topCont: {
		width: '100%',
		position: 'absolute',
		top: 57,
		flexDirection: 'row',

		alignItems: 'center',
		paddingLeft: 24,
	},

	Trending: {
		height: 300,
		borderRadius: 10,
		overflow: 'hidden',
		flex: 1,
		marginBottom: 20,
		backgroundColor: 'white',
		top: 20,
	},

	open: {
		margin: 15,
		height: 21,
		backgroundColor: '#FFFFFF',
		alignItems: 'center',
		justifyContent: 'center',
		borderRadius: 8,
		width: 47,
	},
	star: {
		margin: 15,
		height: 21,
		backgroundColor: '#FFFFFF',
		alignItems: 'center',
		justifyContent: 'center',
		borderRadius: 8,
		marginLeft: 250,
		width: 40,
		flexDirection: 'row',
	},
	titSt: {
		fontSize: 18,
		color: '#3E3F68',
		marginBottom: 8,
		fontWeight: 'bold',
	},
});

export default CategoryDetailScreen;

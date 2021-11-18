import React from 'react';
import {
	FlatList,
	Image,
	ImageBackground,
	ScrollView,
	StyleSheet,
	TouchableOpacity,
	View,
	Platform,
	Dimensions,
} from 'react-native';
import { globalStyles } from './GlobalStyle';

import { LinearGradient } from 'expo-linear-gradient';
import CustomText from '../components/CustomText';
import SafeView from '../components/SafeView';
import RestComp from '../components/RestorantComponent';
import {Data, colorsList, CategoryList} from '../consts/FoodyDataList';



const title = 'Trending Restorants';
const category = 'Category';
const friends = 'Friends';
const searchInput = 'Find Restorants';
const seeAll = 'See all';

let width = Dimensions.get('window').width;

const HomeScreen = ({ navigation, item }) => {

	const FirstFlatlistComp = () => {
		return (
		<View>
			<FlatList
				horizontal={true}
				showsHorizontalScrollIndicator={false}
				data={Data}
				renderItem={({ item, index }) => (
					<RestComp item={item} index={index} />
				)}
				keyExtractor={(item) => item.id}
			/>

			{/*// TODO: `category list*/}
			<View style={styles.categoryHeader}>
				<CustomText style={styles.categText}>{category}</CustomText>
				<TouchableOpacity
					style={{flexDirection: 'row'}}
					onPress={() => {
						navigation.navigate('CategoryScreen', {
							// name: item.name,
							array: CategoryList,
							coll: colorsList,
						});
					}}
				>
					<CustomText style={styles.textSeeAll}>{seeAll} </CustomText>
					<CustomText style={styles.textSeeAll}>({CategoryList.length})</CustomText>
				</TouchableOpacity>
			</View>
		</View>
		)
	};


	const SecondFlatlistComp = () => {
		return (
			<View>
				<FlatList
					horizontal={true}
					showsHorizontalScrollIndicator={false}
					data={CategoryList}
					renderItem={({ item, index }) => {
						return <RenderItem item={item} index={index} />;
					}}
					keyExtractor={(item) => item.id}
				/>

				{/*// TODO: `Friends*/}
				<View style={styles.FriendsTitle}>
					<CustomText style={styles.frSt}>{friends}</CustomText>
					<TouchableOpacity
						onPress={() =>
							navigation.navigate('FriendsScreen', { data: Data })
						}
					>
						<CustomText style={{ fontSize: 14.3 }}>{seeAll}</CustomText>
					</TouchableOpacity>
				</View>
			</View>
		)
	};

	const LastFlatlistComponent = () => {
		return (
			<FlatList
				horizontal={true}
				showsHorizontalScrollIndicator={false}
				data={Data}
				renderItem={({ item, index }) => (
					<RenderFriends item={item} index={index} />
				)}
				keyExtractor={(item) => item.id}
			/>
		)
	};
	// console.log('item== ', item?.name);
	console.disableYellowBox = true;

	const RenderFriends = ({ item }) => {
		return (
			<TouchableOpacity style={{ marginRight: 20 }}>
				<View style={styles.friendView}>
					<Image
						style={styles.friendsImage}
						source={{
							uri: item.frImage,
						}}
					></Image>
				</View>
			</TouchableOpacity>
		);
	};

	const RenderItem = ({ item, index }) => (
		<TouchableOpacity
			style={styles.catView}
			onPress={() => {
				console.log('detail=> ', colorsList);
				navigation.navigate('CategoryDetailScreen', {
					name: item.name,
					colors: colorsList[index % colorsList.length],
					array: CategoryList,
					data: Data,
				});
			}}
		>
			<ImageBackground
				source={require('../assets/image/backgroundImage.png')}
				style={globalStyles.fle}
			>
				<LinearGradient
					colors={colorsList[index % colorsList.length]}
					style={styles.linearCategory}
					start={{ x: 0, y: 0.5 }}
					end={{ x: 1, y: 0.5 }}
					angleCenter={{ x: 0, y: 0.5 }}
				>
					<CustomText style={styles.linearCategoryText}>{item.name}</CustomText>
				</LinearGradient>
			</ImageBackground>
		</TouchableOpacity>
	);

	return (
		<SafeView>
			<ScrollView>
				<View style={globalStyles.container}>
					<TouchableOpacity
						style={styles.search}
						onPress={() => {
							navigation.navigate('SearchScreen', {
								data: Data,
							});
						}}
					>
						<View style={styles.searCH}>
							<Image
								source={require('../assets/image/search.png')}
								style={styles.ImageStyle}
							/>
							<CustomText style={styles.textSt}>{searchInput}</CustomText>
						</View>
						<TouchableOpacity
							onPress={() =>
								navigation.navigate('FilterScreen', {
									data: CategoryList,
								})
							}
						>
							<Image
								source={require('../assets/image/filter.png')}
								style={styles.filter}
							/>
						</TouchableOpacity>
					</TouchableOpacity>
					<View style={styles.title}>
						<CustomText style={{ fontSize: 21.4, fontWeight: '400' }}>
							{title}
						</CustomText>
						<TouchableOpacity
							style={{flexDirection: 'row'}}
							onPress={() => navigation.navigate('RestScreen', { data: Data })}
						>
							<CustomText style={styles.textSeeAll}>{seeAll} </CustomText>
							<CustomText style={styles.textSeeAll}>({Data.length})</CustomText>
						</TouchableOpacity>
					</View>


					<FlatList
						ListHeaderComponent={FirstFlatlistComp}
						ListEmptyComponent={SecondFlatlistComp}
						ListFooterComponent={LastFlatlistComponent}
					/>
				</View>
			</ScrollView>

			{/*TODO: TAb Bar */}
		</SafeView>
	);
};

const styles = StyleSheet.create({
	frSt: {
		fontSize: 21.4,
		fontWeight: '400',
	},
	textSeeAll: {
		fontSize: 14.3,
		marginTop: 2,
	},
	seeAll: {
		fontSize: 14.3,
		marginTop: 6,
	},
	categText: {
		fontSize: 21.4,
		fontWeight: '400',
	},
	title: {
		justifyContent: 'space-between',
		flexDirection: 'row',
		alignItems: 'center',
		marginBottom: 20,
	},
	search: {
		flexDirection: 'row',
		borderColor: '#707070',
		borderRadius: 5,
		marginBottom: 28,
		alignItems: 'center',
		backgroundColor: 'white',
		height: 55,
		//    marginTop: 20,
		// asd

		shadowColor: '#000',
		shadowOffset: {
			width: 0,
			height: 1,
		},
		shadowOpacity: 0.1,
		shadowRadius: 1.41,
		elevation: 2,
	},

	Trending: {
		width: width / 1.3,
		height: 253,
		marginRight: 20,
		borderRadius: 10,
		overflow: 'hidden',
		flex: 1,
	},
	linearCategory: {
		position: 'absolute',
		height: 100,
		justifyContent: 'center',
		alignItems: 'center',
		margin: 10,
		width: '100%',
		flexDirection: 'row',
		opacity: 0.5,
	},

	ImageStyle: {
		padding: 10,
		margin: 10,
		height: 10,
		width: 10,
		resizeMode: 'stretch',
	},
	filter: {
		margin: 10,
		height: 10,
		width: 10,
		resizeMode: 'stretch',
		padding: 8,
	},
	textSt: {
		fontSize: 17.2,
		color: '#6E7FAA',
		paddingTop: Platform.OS === 'android' ? 0 : 5,
	},

	image: {
		width: 325,
		height: null,
		marginRight: 20,
		resizeMode: 'cover',
		borderRadius: 10,
	},
	categoryHeader: {
		marginTop: 36.7,
		flexDirection: 'row',
		justifyContent: 'space-between',
		marginBottom: 20,
	},
	FriendsTitle: {
		justifyContent: 'space-between',
		flexDirection: 'row',
		marginTop: 37,
		alignItems: 'center',
		marginBottom: 20,
	},

	MainContainer: {
		flex: 1,
		justifyContent: 'center',
		alignItems: 'center',
		backgroundColor: 'blue',
	},
	button: {
		width: 60,
		height: 60,
		alignItems: 'center',
		justifyContent: 'center',
		shadowColor: 'grey',
		shadowOpacity: 0.1,
		shadowOffset: { x: 2, y: 0 },
		shadowRadius: 2,
		borderRadius: 30,
		position: 'absolute',
		bottom: 20,
		right: 0,
		top: 5,
		left: 5,
	},
	actionBtn: {
		backgroundColor: '#1E90FF',
		textShadowOffset: { width: 5, height: 5 },
		textShadowRadius: 10,
		borderWidth: 2,
		borderColor: '#fff',
	},
	friendsImage: {
		width: '100%',
		height: '100%',
		resizeMode: 'stretch',
		backgroundColor: 'blue',
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
		marginLeft: 200,
		width: 40,
		flexDirection: 'row',
	},
	resImage: {
		width: width,
		height: 172,
		marginBottom: 21,
		borderTopLeftRadius: 7,
		borderTopRightRadius: 7,
	},
	star1: {
		fontSize: 18,
		color: '#3E3F68',
		marginBottom: 8,
		fontWeight: 'bold',
		marginTop: 3,
	},
	gradient: {
		borderRadius: 10,
		height: 15,
		marginTop: 5,
		alignItems: 'center',
		justifyContent: 'center',
		marginBottom: 8,
	},
	cate: {
		height: '100%',
		justifyContent: 'center',
		alignItems: 'center',
		marginLeft: 10,
		width: 60,
		borderRadius: 8,
		flexDirection: 'row',
	},
	catText: {
		fontSize: 14,
		color: 'white',
		position: 'absolute',
	},
	viewKm: {
		marginLeft: 10,
		backgroundColor: '#848DFF',
		borderRadius: 10,
		height: 15,
		marginTop: 5,
		alignItems: 'center',
		justifyContent: 'center',
	},
	kmText: {
		fontSize: 10,
		color: 'white',
		alignItems: 'center',
	},
	groupCont: {
		marginLeft: 34,
		width: 50,
		height: 20,
		paddingRight: 60,
		marginTop: 3,
	},
	addreSS: {
		color: '#8A98BA',
		fontSize: 13,
		paddingLeft: 15,
	},

	shadd: {
		shadowColor: '#000',
		shadowOffset: {
			width: 0,
			height: 12,
		},
		shadowOpacity: 0.9,
		shadowRadius: 40.0,

		elevation: 24,
	},
	friendView: {
		width: 50,
		height: 50,
		borderRadius: 25,
		overflow: 'hidden',
	},
	searCH: {
		flexDirection: 'row',
		alignItems: 'center',
		flex: 1,
	},
	catView: {
		borderRadius: 10,
		overflow: 'hidden',
		width: 100,
		height: 100,
		marginRight: 15,
	},
	linearCategoryText: {
		fontSize: 14,
		color: 'white',
		position: 'absolute',
		alignItems: 'center',
	},
});

export default HomeScreen;

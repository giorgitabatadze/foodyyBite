// import React, { useEffect, useState } from 'react';
// import {
// 	Text,
// 	View,
// 	StyleSheet,
// 	TouchableOpacity,
// 	Image,
// 	SafeAreaView,
// } from 'react-native';
// import Constants from 'expo-constants';
// import { BlurView } from 'expo-blur';
//
// export default function TrendingScreen() {
// 	const [defaultRating, setDefaultRating] = useState(0);
// 	const [maxRating, setMaxRating] = useState([1, 2, 3, 4, 5]);
//
// 	const starImageFilled =
// 		'https://raw.githubusercontent.com/AboutReact/sampleresource/master/star_filled.png';
// 	const starImageCorner =
// 		'https://raw.githubusercontent.com/AboutReact/sampleresource/master/star_corner.png';
//
// 	const CustomRatingBar = () => {
// 		return (
// 			<View style={styles.customRatingBarStyle}>
// 				{maxRating.map((item, key) => {
// 					return (
// 						<View>
// 							<TouchableOpacity
// 								// activeOpacity={0.1}
// 								key={item}
// 								onPress={() => setDefaultRating(item)}
// 								// style={{ backgroundColor: 'cyan' }}
// 							>
// 								<Image
// 									style={styles.starImageStyle}
// 									source={
// 										item <= defaultRating
// 											? { uri: starImageFilled }
// 											: { uri: starImageCorner }
// 									}
// 								/>
// 							</TouchableOpacity>
// 						</View>
// 					);
// 				})}
// 			</View>
// 		);
// 	};
//
// 	return (
// 		<SafeAreaView style={styles.container}>
// 			<View style={styles.container}>
// 				{/*<CustomRatingBar />*/}
//
// 				<BlurView tint="dark" intensity={100}>
// 					<Image
// 						style={{ width: 200, height: 200 }}
// 						source={require('../assets/image/backgroundImage.png')}
// 					/>
// 				</BlurView>
// 			</View>
// 		</SafeAreaView>
// 	);
// }
//
// const styles = StyleSheet.create({
// 	container: {
// 		flex: 1,
// 		backgroundColor: 'white',
// 		padding: 10,
// 		justifyContent: 'center',
// 		textAlign: 'center',
// 	},
// 	titleText: {
// 		padding: 8,
// 		fontSize: 16,
// 		textAlign: 'center',
// 		fontWeight: 'bold',
// 	},
// 	textStyle: {
// 		textAlign: 'center',
// 		fontSize: 23,
// 		color: '#000',
// 		marginTop: 15,
// 	},
// 	textStyleSmall: {
// 		textAlign: 'center',
// 		fontSize: 16,
// 		color: '#000',
// 		marginTop: 15,
// 	},
// 	buttonStyle: {
// 		justifyContent: 'center',
// 		flexDirection: 'row',
// 		marginTop: 30,
// 		padding: 15,
// 		backgroundColor: '#8ad24e',
// 	},
// 	buttonTextStyle: {
// 		color: '#fff',
// 		textAlign: 'center',
// 	},
// 	customRatingBarStyle: {
// 		justifyContent: 'center',
// 		flexDirection: 'row',
// 		marginTop: 30,
// 	},
// 	starImageStyle: {
// 		width: 40,
// 		height: 40,
// 		resizeMode: 'cover',
// 	},
// });

// Searching using Search Bar Filter in React Native List View
// https://aboutreact.com/react-native-search-bar-filter-on-listview/

// import React in our code
// import React, { useState, useEffect } from 'react';
//
// // import all the components we are going to use
// import { SafeAreaView, Text, StyleSheet, View, FlatList } from 'react-native';
// // import { SearchBar } from 'react-native-elements';
//
// const TrendingScreen = () => {
// 	const [search, setSearch] = useState('');
// 	const [filteredDataSource, setFilteredDataSource] = useState([]);
// 	const [masterDataSource, setMasterDataSource] = useState([]);
//
// 	useEffect(() => {
// 		fetch('https://jsonplaceholder.typicode.com/posts')
// 			.then((response) => response.json())
// 			.then((responseJson) => {
// 				setFilteredDataSource(responseJson);
// 				setMasterDataSource(responseJson);
// 			})
// 			.catch((error) => {
// 				console.error(error);
// 			});
// 	}, []);
//
// 	const searchFilterFunction = (text) => {
// 		// Check if searched text is not blank
// 		if (text) {
// 			// Inserted text is not blank
// 			// Filter the masterDataSource
// 			// Update FilteredDataSource
// 			const newData = masterDataSource.filter(function (item) {
// 				const itemData = item.title
// 					? item.title.toUpperCase()
// 					: ''.toUpperCase();
// 				const textData = text.toUpperCase();
// 				return itemData.indexOf(textData) > -1;
// 			});
// 			setFilteredDataSource(newData);
// 			setSearch(text);
// 		} else {
// 			// Inserted text is blank
// 			// Update FilteredDataSource with masterDataSource
// 			setFilteredDataSource(masterDataSource);
// 			setSearch(text);
// 		}
// 	};
//
// 	const ItemView = ({ item }) => {
// 		return (
// 			// Flat List Item
// 			<Text style={styles.itemStyle} onPress={() => getItem(item)}>
// 				{item.id}
// 				{'.'}
// 				{item.title.toUpperCase()}
// 			</Text>
// 		);
// 	};
//
// 	const ItemSeparatorView = () => {
// 		return (
// 			// Flat List Item Separator
// 			<View
// 				style={{
// 					height: 0.5,
// 					width: '100%',
// 					backgroundColor: '#C8C8C8',
// 				}}
// 			/>
// 		);
// 	};
//
// 	const getItem = (item) => {
// 		// Function for click on an item
// 		alert('Id : ' + item.id + ' Title : ' + item.title);
// 	};
//
// 	return (
// 		<SafeAreaView style={{ flex: 1 }}>
// 			<View style={styles.container}>
// 				<SearchBar
// 					round
// 					searchIcon={{ size: 24 }}
// 					onChangeText={(text) => searchFilterFunction(text)}
// 					onClear={(text) => searchFilterFunction('')}
// 					placeholder="Type Here..."
// 					value={search}
// 				/>
// 				<FlatList
// 					data={filteredDataSource}
// 					keyExtractor={(item, index) => index.toString()}
// 					ItemSeparatorComponent={ItemSeparatorView}
// 					renderItem={ItemView}
// 				/>
// 			</View>
// 		</SafeAreaView>
// 	);
// };
//
// const styles = StyleSheet.create({
// 	container: {
// 		backgroundColor: 'white',
// 	},
// 	itemStyle: {
// 		padding: 10,
// 	},
// });
//
// export default TrendingScreen;

// import React from 'react';
// import { Image, Text, StyleSheet, View } from 'react-native';
// import { BlurView } from 'expo-blur';
//
// const uri =
// 	'https://s3.amazonaws.com/exp-icon-assets/ExpoEmptyManifest_192.png';
//
// export default function App() {
// 	return (
// 		<View style={{ flex: 1 }}>
// 			<View style={styles.container}>
// 				<Image
// 					style={styles.blurredImage}
// 					source={require('../assets/image/backgroundImage.png')}
// 				/>
//
// 				{/* Adjust the tint and intensity */}
// 				<BlurView
// 					intensity={70}
// 					style={[StyleSheet.absoluteFill, styles.nonBlurredContent]}
// 				>
// 					<Text>Hello! I am bluring contents underneath</Text>
// 				</BlurView>
// 			</View>
// 		</View>
// 	);
// }
//
// const styles = StyleSheet.create({
// 	container: {
// 		flex: 1,
// 		alignItems: 'center',
// 		justifyContent: 'center',
// 	},
// 	blurredImage: {
// 		width: 192,
// 		height: 192,
// 		borderRadius: 30,
// 	},
// 	nonBlurredContent: {
// 		alignItems: 'center',
// 		justifyContent: 'center',
// 	},
// });


// import React, { useState } from 'react';
// import { Provider, createStore } from 'aniuta';
// import { View, Text, Button } from 'react-native';
//
// //useCounter.js. Name should be unique
// const useCounter = createStore({
// 	name: 'CounterStore',
// 	Store: () => {
// 		const [count, setCount] = useState(0);
//
// 		const increment = () => setCount(count + 1);
// 		const decrement = () => setCount(count - 1);
// 		const reset = () => setCount(0);
//
// 		return { count, increment, decrement, reset };
// 	},
// });
//
// //counter.js - Counter Component
// function Counter() {
// 	const { count, increment, decrement, reset } = useCounter();
//
// 	return (
// 		<View>
// 			<Button title='-' onPress={decrement} />
// 			<Text>{count.toString()}</Text>
// 			<Button title='+' onPress={increment} />
// 			<Button title='reset' onPress={reset} />
// 		</View>
// 	);
// }


import React from 'react';
import { ScrollView, RefreshControl, StyleSheet, Text, SafeAreaView, Animated } from 'react-native';
import Constants from 'expo-constants';

const wait = timeout => {
	return new Promise(resolve => {
		setTimeout(resolve, timeout);
	});
};

//Just wrap App with Provider component and you are good to go
export default function TrendingScreen() {

	const [refreshing, setRefreshing] = React.useState(false);

	const onRefresh = React.useCallback(() => {
		setRefreshing(true);

		wait(2000).then(() => setRefreshing(false));
	}, []);

	return (
		<SafeAreaView style={styles.container}>
			<ScrollView
				contentContainerStyle={styles.scrollView}
				refreshControl={<RefreshControl refreshing={refreshing} onRefresh={onRefresh} />}>
				<Text>Pull down to see RefreshControl indicator</Text>
			</ScrollView>
		</SafeAreaView>
	);
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		marginTop: Constants.statusBarHeight,
	},
	scrollView: {
		flex: 1,
		backgroundColor: 'pink',
		alignItems: 'center',
		justifyContent: 'center',
	},
});



//
// import React from 'react';
// import {
// 	FlatList,
// 	Image,
// 	ImageBackground,
// 	ScrollView,
// 	StyleSheet,
// 	TouchableOpacity,
// 	View,
// 	Platform,
// 	Dimensions,
// } from 'react-native';
// import { globalStyles } from './GlobalStyle';
//
// import { LinearGradient } from 'expo-linear-gradient';
// import CustomText from '../components/CustomText';
// import SafeView from '../components/SafeView';
// import RestComp from '../components/RestorantComponent';
//
// const arr = [
// 	{ id: 1, name: 'Italian' },
// 	{ id: 2, name: 'Chinese' },
// 	{ id: 3, name: 'Maxican' },
// 	{ id: 4, name: 'Arabian' },
// 	{
// 		id: 5,
// 		name: 'Indian',
// 	},
// 	{ id: 6, name: 'Thai' },
// 	{ id: 7, name: 'American' },
// 	{ id: 8, name: 'Europian' },
// 	{ id: 9, name: 'Korean' },
// ];
//
// const DATA = [
// 	{
// 		id: '1',
// 		title: 'Happy Bones',
// 		img: 'https://images.unsplash.com/photo-1613733895930-4a51e90d50fe?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=1080&fit=max',
// 		op: 'OPEN',
// 		star: 4.5,
// 		name: 'Italian',
// 		frImage:
// 			'https://images.unsplash.com/photo-1619379973074-81e0c85d721d?crop=entropy&cs=tinysrgb&fit=crop&fm=jpg&h=300&ixid=MnwxfDB8MXxyYW5kb218fHx8fHx8fHwxNjE5NTMzOTQ3&ixlib=rb-1.2.1&q=80&utm_campaign=api-credit&utm_medium=referral&utm_source=unsplash_source&w=300',
// 	},
// 	{
// 		id: '2',
// 		title: 'Second Item',
// 		img: 'https://arc-anglerfish-washpost-prod-washpost.s3.amazonaws.com/public/2KL6JYQYH4I6REYMIWBYVUGXPI.jpg',
// 		op: 'CLOSE',
// 		star: 4.2,
// 		name: 'Arabian',
// 		frImage:
// 			'https://images.unsplash.com/photo-1619385859058-7bfe5029e615?crop=entropy&cs=tinysrgb&fit=crop&fm=jpg&h=100&ixid=MnwxfDB8MXxyYW5kb218fHx8fHx8fHwxNjE5NTMzNDY3&ixlib=rb-1.2.1&q=80&utm_campaign=api-credit&utm_medium=referral&utm_source=unsplash_source&w=200',
// 	},
// 	{
// 		id: '3',
// 		title: 'Third Item',
// 		img: 'https://images.unsplash.com/photo-1616372383709-de2bc15e3dee?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=1080&fit=max',
// 		op: 'OPEN',
// 		star: 3.5,
// 		name: 'Korean',
// 		frImage:
// 			'https://images.unsplash.com/photo-1619378087011-9781c44d35e4?crop=entropy&cs=tinysrgb&fit=crop&fm=jpg&h=300&ixid=MnwxfDB8MXxyYW5kb218fHx8fHx8fHwxNjE5NTM2Nzcw&ixlib=rb-1.2.1&q=80&utm_campaign=api-credit&utm_medium=referral&utm_source=unsplash_source&w=300',
// 	},
// 	{
// 		id: '4',
// 		title: 'fours Item',
// 		img: 'https://arc-anglerfish-washpost-prod-washpost.s3.amazonaws.com/public/2KL6JYQYH4I6REYMIWBYVUGXPI.jpg',
// 		op: 'CLOSE',
// 		star: 4.2,
// 		name: 'Arabian',
// 		frImage:
// 			'https://images.unsplash.com/photo-1619488016341-b86418ab3618?crop=entropy&cs=tinysrgb&fit=crop&fm=jpg&h=300&ixid=MnwxfDB8MXxyYW5kb218fHx8fHx8fHwxNjE5NTM2ODE3&ixlib=rb-1.2.1&q=80&utm_campaign=api-credit&utm_medium=referral&utm_source=unsplash_source&w=300',
// 	},
// 	{
// 		id: '5',
// 		title: 'Happy Bones',
// 		img: 'https://images.unsplash.com/photo-1613733895930-4a51e90d50fe?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=1080&fit=max',
// 		op: 'OPEN',
// 		star: 4.5,
// 		name: 'Italian',
// 		frImage:
// 			'https://images.unsplash.com/photo-1619379973074-81e0c85d721d?crop=entropy&cs=tinysrgb&fit=crop&fm=jpg&h=300&ixid=MnwxfDB8MXxyYW5kb218fHx8fHx8fHwxNjE5NTMzOTQ3&ixlib=rb-1.2.1&q=80&utm_campaign=api-credit&utm_medium=referral&utm_source=unsplash_source&w=300',
// 	},
// 	{
// 		id: '6',
// 		title: 'Second Item',
// 		img: 'https://arc-anglerfish-washpost-prod-washpost.s3.amazonaws.com/public/2KL6JYQYH4I6REYMIWBYVUGXPI.jpg',
// 		op: 'CLOSE',
// 		star: 4.2,
// 		name: 'Arabian',
// 		frImage:
// 			'https://images.unsplash.com/photo-1619385859058-7bfe5029e615?crop=entropy&cs=tinysrgb&fit=crop&fm=jpg&h=100&ixid=MnwxfDB8MXxyYW5kb218fHx8fHx8fHwxNjE5NTMzNDY3&ixlib=rb-1.2.1&q=80&utm_campaign=api-credit&utm_medium=referral&utm_source=unsplash_source&w=200',
// 	},
// 	{
// 		id: '7',
// 		title: 'Third Item',
// 		img: 'https://images.unsplash.com/photo-1616372383709-de2bc15e3dee?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=1080&fit=max',
// 		op: 'OPEN',
// 		star: 3.5,
// 		name: 'Korean',
// 		frImage:
// 			'https://images.unsplash.com/photo-1619385859058-7bfe5029e615?crop=entropy&cs=tinysrgb&fit=crop&fm=jpg&h=100&ixid=MnwxfDB8MXxyYW5kb218fHx8fHx8fHwxNjE5NTMzNDY3&ixlib=rb-1.2.1&q=80&utm_campaign=api-credit&utm_medium=referral&utm_source=unsplash_source&w=200',
// 	},
// 	{
// 		id: '8',
// 		title: 'fours Item',
// 		img: 'https://arc-anglerfish-washpost-prod-washpost.s3.amazonaws.com/public/2KL6JYQYH4I6REYMIWBYVUGXPI.jpg',
// 		op: 'CLOSE',
// 		star: 4.2,
// 		name: 'Arabian',
// 		frImage:
// 			'https://images.unsplash.com/photo-1619385859058-7bfe5029e615?crop=entropy&cs=tinysrgb&fit=crop&fm=jpg&h=100&ixid=MnwxfDB8MXxyYW5kb218fHx8fHx8fHwxNjE5NTMzNDY3&ixlib=rb-1.2.1&q=80&utm_campaign=api-credit&utm_medium=referral&utm_source=unsplash_source&w=200',
// 	},
// 	{
// 		id: '9',
// 		title: 'fours Item',
// 		img: 'https://arc-anglerfish-washpost-prod-washpost.s3.amazonaws.com/public/2KL6JYQYH4I6REYMIWBYVUGXPI.jpg',
// 		op: 'CLOSE',
// 		star: 4.2,
// 		name: 'Thai',
// 		frImage:
// 			'https://images.unsplash.com/photo-1619385859058-7bfe5029e615?crop=entropy&cs=tinysrgb&fit=crop&fm=jpg&h=100&ixid=MnwxfDB8MXxyYW5kb218fHx8fHx8fHwxNjE5NTMzNDY3&ixlib=rb-1.2.1&q=80&utm_campaign=api-credit&utm_medium=referral&utm_source=unsplash_source&w=200',
// 	},
// 	{
// 		id: '10',
// 		title: 'fours Item',
// 		img: 'https://arc-anglerfish-washpost-prod-washpost.s3.amazonaws.com/public/2KL6JYQYH4I6REYMIWBYVUGXPI.jpg',
// 		op: 'CLOSE',
// 		star: 4.2,
// 		name: 'Thai',
// 		frImage:
// 			'https://images.unsplash.com/photo-1619385859058-7bfe5029e615?crop=entropy&cs=tinysrgb&fit=crop&fm=jpg&h=100&ixid=MnwxfDB8MXxyYW5kb218fHx8fHx8fHwxNjE5NTMzNDY3&ixlib=rb-1.2.1&q=80&utm_campaign=api-credit&utm_medium=referral&utm_source=unsplash_source&w=200',
// 	},
//
// ];
//
// const colors = [
// 	['#FF5673', '#FF8C48'],
// 	['#79ff48', '#6756ff'],
// 	['#5a48ff', '#da56ff'],
// 	['#ffe748', '#56ffeb'],
// ];
//
// const title = 'Trending Restorants';
// const category = 'Category';
// const friends = 'Friends';
// const searchInput = 'Find Restorants';
// const seeAll = 'See all';
// const address = '394 Broome St, New York, NY 10013, USA';
//
// let width = Dimensions.get('window').width;
//
// const HomeScreen = ({ navigation, item }) => {
//
// 	const FirstFlatlistComp = () => {
// 		return (
// 			<View>
// 				<FlatList
// 					horizontal={true}
// 					showsHorizontalScrollIndicator={false}
// 					data={DATA}
// 					renderItem={({ item, index }) => (
// 						<RenderImages item={item} index={index} />
// 					)}
// 					keyExtractor={(item) => item.id}
// 				/>
//
// 				{/*// TODO: `category list*/}
// 				<View style={styles.categoryHeader}>
// 					<CustomText style={styles.categText}>{category}</CustomText>
// 					<TouchableOpacity
// 						style={{flexDirection: 'row'}}
// 						onPress={() => {
// 							navigation.navigate('CategoryScreen', {
// 								// name: item.name,
// 								array: arr,
// 								coll: colors,
// 							});
// 						}}
// 					>
// 						<CustomText style={styles.textSeeAll}>{seeAll} </CustomText>
// 						<CustomText style={styles.textSeeAll}>({arr.length})</CustomText>
// 					</TouchableOpacity>
// 				</View>
// 			</View>
// 		)
// 	};
//
//
// 	const SecondFlatlistComp = () => {
// 		return (
// 			<View>
// 				<FlatList
// 					horizontal={true}
// 					showsHorizontalScrollIndicator={false}
// 					data={arr}
// 					renderItem={({ item, index }) => {
// 						return <RenderItem item={item} index={index} />;
// 					}}
// 					keyExtractor={(item) => item.id}
// 				/>
//
// 				{/*// TODO: `Friends*/}
// 				<View style={styles.FriendsTitle}>
// 					<CustomText style={styles.frSt}>{friends}</CustomText>
// 					<TouchableOpacity
// 						onPress={() =>
// 							navigation.navigate('FriendsScreen', { data: DATA })
// 						}
// 					>
// 						<CustomText style={{ fontSize: 14.3 }}> See all</CustomText>
// 					</TouchableOpacity>
// 				</View>
// 			</View>
// 		)
// 	};
//
// 	const LastFlatlistComponent = () => {
// 		return (
// 			<FlatList
// 				horizontal={true}
// 				showsHorizontalScrollIndicator={false}
// 				data={DATA}
// 				renderItem={({ item, index }) => (
// 					<RenderFriends item={item} index={index} />
// 				)}
// 				keyExtractor={(item) => item.id}
// 			/>
// 		)
// 	};
// 	// console.log('item== ', item?.name);
// 	console.disableYellowBox = true;
//
//
// 	const RenderImages = ({ item, index }) => {
// 		return (
// 			<TouchableOpacity
// 				style={styles.Trending}
// 				onPress={() =>
// 					navigation.navigate('DetailScreen', {
// 						img: item.img,
// 						title: item.title,
// 						op: item.op,
// 						star: item.star,
// 						name: item.name,
// 						friend: item.frImage,
//
// 						data2: DATA,
// 					})
// 				}
// 			>
// 				<Image
// 					style={styles.resImage}
// 					name={'Happy Bones'}
// 					source={{
// 						uri: item.img,
// 					}}
// 				/>
// 				<View style={{ flexDirection: 'row', position: 'absolute' }}>
// 					<View style={styles.open}>
// 						<CustomText
// 							style={{
// 								color: item.op == 'OPEN' ? '#4CD964' : '#FF3B30',
// 								fontSize: 10,
// 								fontWeight: 'bold',
// 							}}
// 						>
// 							{item.op}
// 						</CustomText>
// 					</View>
// 					<View style={styles.star}>
// 						<Image
// 							style={{ width: 10, height: 10 }}
// 							source={require('../assets/image/star.png')}
// 						/>
// 						<CustomText style={{ fontSize: 10 }}> {item.star}</CustomText>
// 					</View>
// 				</View>
// 				<View
// 					style={{
// 						paddingLeft: 15,
// 						flexDirection: 'row',
// 						justifyContent: 'center',
// 						alignItems: 'center',
// 						// backgroundColor: 'red'
// 					}}
// 				>
// 					<CustomText style={styles.star1}>{item.title}</CustomText>
// 					<View style={styles.gradient}>
// 						<LinearGradient
// 							colors={colors[index % colors.length]}
// 							style={styles.cate}
// 							start={{ x: 0, y: 0.5 }}
// 							end={{ x: 1, y: 0.5 }}
// 							angleCenter={{ x: 0, y: 0.5 }}
// 						>
// 							<CustomText style={styles.catText}>{item.name}</CustomText>
// 						</LinearGradient>
// 					</View>
// 					<View style={styles.viewKm}>
// 						<CustomText style={styles.kmText}>1.2 km</CustomText>
// 					</View>
// 					<View>
// 						<Image
// 							style={styles.groupCont}
// 							source={require('../assets/image/groupContacts.png')}
// 						></Image>
// 					</View>
// 				</View>
// 				<View style={styles.shadd}>
// 					<CustomText style={styles.addreSS}>{address}</CustomText>
// 				</View>
// 			</TouchableOpacity>
// 		);
// 	};
//
// 	const RenderFriends = ({ item }) => {
// 		return (
// 			<TouchableOpacity style={{ marginRight: 20 }}>
// 				<View style={styles.friendView}>
// 					<Image
// 						style={styles.friendsImage}
// 						source={{
// 							uri: item.frImage,
// 						}}
// 					></Image>
// 				</View>
// 			</TouchableOpacity>
// 		);
// 	};
//
// 	const RenderItem = ({ item, index }) => (
// 		<TouchableOpacity
// 			style={styles.catView}
// 			onPress={() => {
// 				console.log('detail=> ', colors);
// 				navigation.navigate('CategoryDetailScreen', {
// 					name: item.name,
// 					colors: colors[index % colors.length],
// 					array: arr,
// 					data: DATA,
// 				});
// 			}}
// 		>
// 			<ImageBackground
// 				source={require('../assets/image/backgroundImage.png')}
// 				style={globalStyles.fle}
// 			>
// 				<LinearGradient
// 					colors={colors[index % colors.length]}
// 					style={styles.linearCategory}
// 					start={{ x: 0, y: 0.5 }}
// 					end={{ x: 1, y: 0.5 }}
// 					angleCenter={{ x: 0, y: 0.5 }}
// 				>
// 					<CustomText style={styles.linearCategoryText}>{item.name}</CustomText>
// 				</LinearGradient>
// 			</ImageBackground>
// 		</TouchableOpacity>
// 	);
//
// 	return (
// 		<SafeView>
// 			<ScrollView>
// 				<View style={globalStyles.container}>
// 					<TouchableOpacity
// 						style={styles.search}
// 						onPress={() => {
// 							navigation.navigate('SearchScreen', {
// 								data: DATA,
// 							});
// 						}}
// 					>
// 						<View style={styles.searCH}>
// 							<Image
// 								source={require('../assets/image/search.png')}
// 								style={styles.ImageStyle}
// 							/>
// 							<CustomText style={styles.textSt}>{searchInput}</CustomText>
// 						</View>
// 						<TouchableOpacity
// 							onPress={() =>
// 								navigation.navigate('FilterScreen', {
// 									data: DATA,
// 								})
// 							}
// 						>
// 							<Image
// 								source={require('../assets/image/filter.png')}
// 								style={styles.filter}
// 							/>
// 						</TouchableOpacity>
// 					</TouchableOpacity>
// 					<View style={styles.title}>
// 						<CustomText style={{ fontSize: 21.4, fontWeight: '400' }}>
// 							{' '}
// 							{title}
// 						</CustomText>
// 						<TouchableOpacity
// 							style={{flexDirection: 'row'}}
// 							onPress={() => navigation.navigate('RestScreen', { data: DATA })}
// 						>
// 							<CustomText style={styles.textSeeAll}>{seeAll} </CustomText>
// 							<CustomText style={styles.textSeeAll}>({DATA.length})</CustomText>
// 						</TouchableOpacity>
// 					</View>
//
//
// 					<FlatList
// 						ListHeaderComponent={FirstFlatlistComp}
// 						ListEmptyComponent={SecondFlatlistComp}
// 						ListFooterComponent={LastFlatlistComponent}
// 					/>
// 				</View>
// 			</ScrollView>
//
// 			{/*TODO: TAb Bar */}
// 		</SafeView>
// 	);
// };
//
// const styles = StyleSheet.create({
// 	frSt: {
// 		fontSize: 21.4,
// 		fontWeight: '400',
// 	},
// 	textSeeAll: {
// 		fontSize: 14.3,
// 		marginTop: 2,
// 	},
// 	seeAll: {
// 		fontSize: 14.3,
// 		marginTop: 6,
// 	},
// 	categText: {
// 		fontSize: 21.4,
// 		fontWeight: '400',
// 	},
// 	title: {
// 		justifyContent: 'space-between',
// 		flexDirection: 'row',
// 		alignItems: 'center',
// 		marginBottom: 20,
// 	},
// 	search: {
// 		flexDirection: 'row',
// 		borderColor: '#707070',
// 		borderRadius: 5,
// 		marginBottom: 28,
// 		alignItems: 'center',
// 		backgroundColor: 'white',
// 		height: 55,
// 		//    marginTop: 20,
// 		// asd
//
// 		shadowColor: '#000',
// 		shadowOffset: {
// 			width: 0,
// 			height: 1,
// 		},
// 		shadowOpacity: 0.1,
// 		shadowRadius: 1.41,
// 		elevation: 2,
// 	},
//
// 	Trending: {
// 		width: width / 1.3,
// 		height: 253,
// 		marginRight: 20,
// 		borderRadius: 10,
// 		overflow: 'hidden',
// 		flex: 1,
// 	},
// 	linearCategory: {
// 		position: 'absolute',
// 		height: 100,
// 		justifyContent: 'center',
// 		alignItems: 'center',
// 		margin: 10,
// 		width: '100%',
// 		flexDirection: 'row',
// 		opacity: 0.5,
// 	},
//
// 	ImageStyle: {
// 		padding: 10,
// 		margin: 10,
// 		height: 10,
// 		width: 10,
// 		resizeMode: 'stretch',
// 	},
// 	filter: {
// 		margin: 10,
// 		height: 10,
// 		width: 10,
// 		resizeMode: 'stretch',
// 		padding: 8,
// 	},
// 	textSt: {
// 		fontSize: 17.2,
// 		color: '#6E7FAA',
// 		paddingTop: Platform.OS === 'android' ? 0 : 5,
// 	},
//
// 	image: {
// 		width: 325,
// 		height: null,
// 		marginRight: 20,
// 		resizeMode: 'cover',
// 		borderRadius: 10,
// 	},
// 	categoryHeader: {
// 		marginTop: 36.7,
// 		flexDirection: 'row',
// 		justifyContent: 'space-between',
// 		marginBottom: 20,
// 	},
// 	FriendsTitle: {
// 		justifyContent: 'space-between',
// 		flexDirection: 'row',
// 		marginTop: 37,
// 		alignItems: 'center',
// 		marginBottom: 20,
// 	},
//
// 	MainContainer: {
// 		flex: 1,
// 		justifyContent: 'center',
// 		alignItems: 'center',
// 		backgroundColor: 'blue',
// 	},
// 	button: {
// 		width: 60,
// 		height: 60,
// 		alignItems: 'center',
// 		justifyContent: 'center',
// 		shadowColor: 'grey',
// 		shadowOpacity: 0.1,
// 		shadowOffset: { x: 2, y: 0 },
// 		shadowRadius: 2,
// 		borderRadius: 30,
// 		position: 'absolute',
// 		bottom: 20,
// 		right: 0,
// 		top: 5,
// 		left: 5,
// 	},
// 	actionBtn: {
// 		backgroundColor: '#1E90FF',
// 		textShadowOffset: { width: 5, height: 5 },
// 		textShadowRadius: 10,
// 		borderWidth: 2,
// 		borderColor: '#fff',
// 	},
// 	friendsImage: {
// 		width: '100%',
// 		height: '100%',
// 		resizeMode: 'stretch',
// 		backgroundColor: 'blue',
// 	},
// 	open: {
// 		margin: 15,
// 		height: 21,
// 		backgroundColor: '#FFFFFF',
// 		alignItems: 'center',
// 		justifyContent: 'center',
// 		borderRadius: 8,
// 		width: 47,
// 	},
// 	star: {
// 		margin: 15,
// 		height: 21,
// 		backgroundColor: '#FFFFFF',
// 		alignItems: 'center',
// 		justifyContent: 'center',
// 		borderRadius: 8,
// 		marginLeft: 200,
// 		width: 40,
// 		flexDirection: 'row',
// 	},
// 	resImage: {
// 		width: width,
// 		height: 172,
// 		marginBottom: 21,
// 		borderTopLeftRadius: 7,
// 		borderTopRightRadius: 7,
// 	},
// 	star1: {
// 		fontSize: 18,
// 		color: '#3E3F68',
// 		marginBottom: 8,
// 		fontWeight: 'bold',
// 		marginTop: 3,
//
// 	},
// 	gradient: {
// 		borderRadius: 50,
// 		marginTop: 5,
// 		alignItems: 'center',
// 		justifyContent: 'center',
// 		width: 60,
// 		height: 18,
// 		marginBottom: 10,
// 		marginLeft: 10
// 	},
// 	cate: {
// 		height: '100%',
// 		justifyContent: 'center',
// 		alignItems: 'center',
// 		marginLeft: 10,
// 		width: 60,
// 		borderRadius: 8,
// 		flexDirection: 'row',
// 	},
// 	catText: {
// 		fontSize: 10,
// 		color: 'white',
// 		position: 'absolute',
// 	},
// 	viewKm: {
// 		marginLeft: 10,
// 		backgroundColor: '#848DFF',
// 		borderRadius: 10,
// 		height: 18,
// 		marginTop: 5,
// 		alignItems: 'center',
// 		justifyContent: 'center',
// 		marginBottom: 10,
// 		width: 30,
//
// 	},
// 	kmText: {
// 		fontSize: 10,
// 		color: 'white',
// 		alignItems: 'center',
// 	},
// 	groupCont: {
// 		marginLeft: 30,
// 		width: 50,
// 		height: 20,
// 		paddingRight: 60,
// 		marginTop: 3,
// 		marginBottom: 8
// 	},
// 	addreSS: {
// 		color: '#8A98BA',
// 		fontSize: 13,
// 		paddingLeft: 15,
// 	},
//
// 	shadd: {
// 		shadowColor: '#000',
// 		shadowOffset: {
// 			width: 0,
// 			height: 12,
// 		},
// 		shadowOpacity: 0.9,
// 		shadowRadius: 40.0,
//
// 		elevation: 24,
// 	},
// 	friendView: {
// 		width: 50,
// 		height: 50,
// 		borderRadius: 25,
// 		overflow: 'hidden',
// 	},
// 	searCH: {
// 		flexDirection: 'row',
// 		alignItems: 'center',
// 		flex: 1,
// 	},
// 	catView: {
// 		borderRadius: 10,
// 		overflow: 'hidden',
// 		width: 100,
// 		height: 100,
// 		marginRight: 15,
// 	},
// 	linearCategoryText: {
// 		fontSize: 14,
// 		color: 'white',
// 		position: 'absolute',
// 		alignItems: 'center',
// 	},
// });
//
// export default HomeScreen;






//
// import React from 'react';
// import {
// 	FlatList,
// 	Image,
// 	StyleSheet,
// 	TouchableOpacity,
// 	View,
// 	ScrollView,
// 	Platform,
// 	Linking,
// 	Share,
// } from 'react-native';
// import { globalStyles } from './GlobalStyle';
// import { BlurView } from 'expo-blur';
// import CustomText from '../components/CustomText';
//
// import call from 'react-native-phone-call';
//
// const address = '394 Broome St, New York, NY 10013, USA';
// const dailyTime = ' daily time ';
// const time = '9:30 am to 11:00 pm';
// const menuPhotos = 'Menu & Photos';
// const comment =
// 	'Most living animal species are in Bilateria, a clade whose members have a bil' +
// 	'aterally symmetric body plan. The Bilateria include the protostomes—in which many groups of invertebrates are';
// const Review = 'Review & Reitings';
// const num = '574027372';
// const Direction = 'Direction';
//
// const onShare = async () => {
// 	try {
// 		const result = await Share.share({
// 			message:
// 				'React Native | A framework for building native apps using React',
// 		});
// 		if (result.action === Share.sharedAction) {
// 			if (result.activityType) {
// 				// shared with activity type of result.activityType
// 			} else {
// 				// shared
// 			}
// 		} else if (result.action === Share.dismissedAction) {
// 			// dismissed
// 		}
// 	} catch (error) {
// 		alert(error.message);
// 	}
// };
//
// const arr = [
// 	{
// 		uri: 'https://luehangs.site/pic-chat-app-images/beautiful-blond-blonde-hair-478544.jpg',
// 		dimensions: { width: 120, height: 120 },
// 	},
// 	{
// 		uri: 'https://images.unsplash.com/photo-1613733895930-4a51e90d50fe?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=1080&fit=max',
// 	},
// 	{
// 		uri: 'https://luehangs.site/pic-chat-app-images/beautiful-blond-blonde-hair-478544.jpg',
// 		dimensions: { width: 200, height: 200 },
// 	},
//
// 	{
// 		uri: 'https://luehangs.site/pic-chat-app-images/beautiful-beautiful-women-beauty-40901.jpg',
// 		dimensions: { width: 200, height: 130 },
// 	},
// 	{
// 		uri: 'https://luehangs.site/pic-chat-app-images/animals-avian-beach-760984.jpg',
// 		dimensions: { width: 300, height: 500 },
// 	},
// 	{
// 		uri: 'https://luehangs.site/pic-chat-app-images/beautiful-blond-fishnet-stockings-48134.jpg',
//
// 		id: 'blpccx4cn',
// 	},
// 	{
// 		uri: 'https://luehangs.site/pic-chat-app-images/beautiful-beautiful-woman-beauty-9763.jpg',
// 	},
// 	{
// 		uri: 'https://images.unsplash.com/photo-1613733895930-4a51e90d50fe?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=1080&fit=max',
// 	},
// ];
//
// const RenderFriends = ({ item }) => {
// 	return (
// 		<View style={{ flexDirection: 'row' }}>
// 			<View style={styles.frfr}>
// 				<Image
// 					style={styles.frImage}
// 					source={{
// 						uri: item.item.frImage,
// 					}}
// 				></Image>
// 			</View>
// 			<View style={{ flex: 1 }}>
// 				<View style={styles.friView}>
// 					<CustomText style={{ fontSize: 20, color: '#3E3F68' }}>
// 						Mark Zargberg
// 					</CustomText>
// 					<View style={styles.imView}>
// 						<Image
// 							style={{ width: 10, height: 10 }}
// 							source={require('../assets/image/star.png')}
// 						/>
// 						<CustomText style={{ fontSize: 10 }}> 4.5</CustomText>
// 					</View>
// 				</View>
//
// 				<CustomText style={styles.textby}>{comment}</CustomText>
// 			</View>
// 		</View>
// 	);
// };
//
// const DetailsScreen = ({ navigation, route }) => {
//
// 	const ImageFlat = () => {
// 		return (
// 			<View>
// 				<FlatList
// 					horizontal={true}
// 					showsHorizontalScrollIndicator={false}
// 					data={arr}
// 					renderItem={renderItem}
// 					keyExtractor={(item) => item.id}
// 				/>
//
// 				<View style={styles.viSt}>
// 					<CustomText style={{ color: '#3E3F68', fontSize: 24 }}>
// 						{Review}
// 					</CustomText>
// 					<TouchableOpacity
// 						onPress={() =>
// 							navigation.navigate('RewiewAndRaitingScreen', {
// 								Review: Review,
// 								daata: route.params.data2,
// 							})
// 						}
// 					>
// 						<CustomText style={{ fontSize: 14.3, color: '#6E7FAA' }}>
// 							See all
// 						</CustomText>
// 					</TouchableOpacity>
// 				</View>
// 			</View>
// 		)
// 	};
//
// 	const ReviewFlat = () => {
// 		return (
// 			<FlatList
// 				style={{ paddingBottom: 70 }}
// 				data={route.params.data2}
// 				renderItem={(item) => <RenderFriends item={item} />}
// 				keyExtractor={(item) => item.id}
// 			/>)
// 	}
//
// 	const renderItem = ({ item }) => (
// 		<TouchableOpacity
// 			onPress={() =>
// 				navigation.navigate('PhotoScreen', {
// 					photo: menuPhotos,
// 				})
// 			}
// 		>
// 			<Image
// 				style={styles.imgSt}
// 				source={{
// 					uri: item.uri,
// 				}}
// 			/>
// 		</TouchableOpacity>
// 	);
//
// 	return (
// 		<View style={{ backgroundColor: '#FBFBFB', flex: 1 }}>
// 			<ScrollView showsVerticalScrollIndicator={false}>
// 				<View style={styles.container}>
// 					<View style={styles.header}>
// 						<Image style={styles.image} source={{ uri: route.params.img }} />
// 						<View style={styles.topCont}>
// 							<TouchableOpacity onPress={() => navigation.goBack()}>
// 								<Image
// 									style={{ width: 20, height: 37 }}
// 									source={require('../assets/image/whiteBackButton.png')}
// 								/>
// 							</TouchableOpacity>
// 							<View style={{ flexDirection: 'row' }}>
// 								<TouchableOpacity onPress={onShare}>
// 									<Image
// 										style={styles.shareBut}
// 										source={require('../assets/image/shareButton.png')}
// 									/>
// 								</TouchableOpacity>
// 								<Image
// 									style={styles.img1}
// 									source={require('../assets/image/rame.png')}
// 								/>
// 							</View>
// 						</View>
// 						<View style={styles.viewSt}>
// 							<View style={styles.bottomcont}>
// 								<View style={{borderRadius:25,  ...StyleSheet.absoluteFill, overflow:'hidden'}}>
// 									<BlurView
// 										intensity={90}
// 										style={[StyleSheet.absoluteFill, styles.blure]}
// 									></BlurView>
// 								</View>
// 								<TouchableOpacity
// 									onPress={() => {
// 										Linking.openURL('tel:574027372');
// 									}}
// 									style={[
// 										styles.items,
// 										{
// 											borderRightWidth: 0.3,
// 											borderColor: 'white',
// 											paddingRight: 60,
// 										},
// 									]}
// 								>
// 									<Image
// 										style={styles.phoneDire}
// 										source={require('../assets/image/phone.png')}
// 									/>
// 									<CustomText style={{ paddingLeft: 15, color: 'white' }}>
// 										{num}
// 									</CustomText>
// 								</TouchableOpacity>
//
// 								<TouchableOpacity
// 									style={styles.items}
// 									onPress={() =>
// 										Platform.OS === 'android'
// 											? Linking.openURL('google.navigation:q=100+101')
// 											: Linking.openURL(
// 											'maps://app?saddr=100+101&daddr=100+102'
// 											)
// 									}
// 								>
// 									<Image
// 										style={styles.phoneDire}
// 										source={require('../assets/image/direction.png')}
// 									/>
// 									<CustomText style={{ color: 'white', marginLeft: 10 }}>
// 										{' '}
// 										{Direction}
// 									</CustomText>
// 								</TouchableOpacity>
// 							</View>
// 						</View>
// 					</View>
//
// 					<View style={{ paddingHorizontal: 24 }}>
// 						<View style={styles.filD}>
// 							<View style={{ flexDirection: 'row', alignItems: 'center' }}>
// 								<CustomText style={styles.filDText}>
// 									{route.params.title}
// 								</CustomText>
// 								<View style={styles.newView2}>
// 									<CustomText style={styles.newView2Text}>
// 										{route.params.name}
// 									</CustomText>
// 								</View>
// 								<View style={styles.dinKm}>
// 									<CustomText style={styles.dinKmText}>1.2 km</CustomText>
// 								</View>
// 								<View></View>
// 							</View>
// 							<View style={styles.star}>
// 								<Image
// 									style={{ width: 10, height: 10 }}
// 									source={require('../assets/image/star.png')}
// 								/>
// 								<CustomText style={{ fontSize: 10 }}>
// 									{' '}
// 									{route.params.star}
// 								</CustomText>
// 							</View>
// 						</View>
//
// 						<View style={{ marginTop: 5 }}>
// 							<CustomText style={{ color: '#8A98BA', fontSize: 14 }}>
// 								{address}
// 							</CustomText>
// 							<View style={{ flexDirection: 'row' }}>
// 								<CustomText style={{ color: '#FF4A40', fontSize: 14 }}>
// 									{route.params.op + ' Now'}
// 								</CustomText>
// 								<CustomText style={{ color: '#8A98BA', fontSize: 14 }}>
// 									{dailyTime}
// 								</CustomText>
// 								<CustomText style={{ color: '#ff4a40', fontSize: 14 }}>
// 									{time}
// 								</CustomText>
// 							</View>
// 						</View>
//
// 						<View style={styles.newView}>
// 							<CustomText style={{ color: '#3E3F68', fontSize: 24 }}>
// 								{menuPhotos}
// 							</CustomText>
// 							<TouchableOpacity
// 								onPress={() =>
// 									navigation.navigate('PhotoScreen', {
// 										photo: menuPhotos,
// 									})
// 								}
// 							>
// 								<CustomText style={{ fontSize: 14.3, color: '#6E7FAA' }}>
// 									See all
// 								</CustomText>
// 							</TouchableOpacity>
// 						</View>
//
// 						<FlatList
// 							ListHeaderComponent={ImageFlat}
// 							ListFooterComponent={ReviewFlat}
// 						/>
//
//
// 					</View>
// 				</View>
// 			</ScrollView>
//
// 			<View style={styles.footer}>
// 				<TouchableOpacity
// 					style={styles.Reset}
// 					title="Restart Screen"
// 					onPress={() => navigation.navigate('ReviewScreen')}
// 				>
// 					<CustomText style={styles.bottomButtonStyle}>
// 						Rate your Experience
// 					</CustomText>
// 				</TouchableOpacity>
// 			</View>
// 		</View>
// 	);
// };
//
// const styles = StyleSheet.create({
// 	container: {
// 		flex: 1,
// 	},
// 	friView: {
// 		flex: 1,
// 		flexDirection: 'row',
// 		justifyContent: 'space-between',
// 		alignItems: 'center',
// 	},
// 	dinKm: {
// 		marginLeft: 10,
// 		backgroundColor: '#848DFF',
// 		borderRadius: 10,
// 		height: 15,
// 		alignItems: 'center',
// 		justifyContent: 'center',
// 	},
// 	dinKmText: {
// 		fontSize: 10,
// 		color: 'white',
// 		alignItems: 'center',
// 	},
// 	header: {
// 		width: '100%',
// 		height: 400,
// 		backgroundColor: 'green',
// 	},
// 	image: {
// 		flex: 1,
// 	},
// 	newView: {
// 		flexDirection: 'row',
// 		alignItems: 'center',
// 		marginTop: 20,
// 		justifyContent: 'space-between',
// 		marginBottom: 15,
// 	},
// 	filD: {
// 		justifyContent: 'space-between',
// 		marginTop: 25,
// 		flexDirection: 'row',
// 		alignItems: 'center',
// 	},
// 	filDText: {
// 		fontSize: 22,
// 		color: '#3E3F68',
// 		fontWeight: 'bold',
// 		marginTop: 0,
// 	},
// 	newView2Text: {
// 		fontSize: 10,
// 		color: 'white',
// 		alignItems: 'center',
// 	},
// 	newView2: {
// 		marginLeft: 20,
// 		backgroundColor: '#FF5673',
// 		borderRadius: 10,
// 		height: 15,
// 		alignItems: 'center',
// 		justifyContent: 'center',
// 		width: 40,
// 	},
// 	textby: {
// 		fontSize: 10,
// 		color: '#3E3F68',
// 		alignItems: 'center',
// 		width: '100%',
// 		marginBottom: 20,
// 		marginTop: 8,
// 	},
// 	phoneDire: {
// 		width: 40,
// 		height: 40,
// 	},
// 	img1: {
// 		width: 20,
// 		height: 37,
// 		paddingRight: 0,
// 	},
// 	imView: {
// 		flexDirection: 'row',
// 		backgroundColor: '#F6F7FF',
// 		justifyContent: 'space-between',
// 		padding: 5,
// 		borderRadius: 5,
// 	},
// 	viewSt: {
// 		width: '100%',
// 		alignItems: 'center',
// 		paddingHorizontal: 30,
// 		borderRadius: 30,
// 	},
// 	imgSt: {
// 		width: 170,
// 		height: 120,
// 		borderRadius: 10,
// 		marginRight: 15,
// 	},
// 	viSt: {
// 		flexDirection: 'row',
// 		alignItems: 'center',
// 		marginTop: 25,
// 		justifyContent: 'space-between',
// 		marginBottom: 15,
// 	},
// 	topCont: {
// 		width: '100%',
// 		position: 'absolute',
// 		top: 50,
// 		flexDirection: 'row',
// 		justifyContent: 'space-between',
// 		paddingHorizontal: 20,
// 	},
// 	bottomcont: {
// 		// backgroundColor: 'rgba(52, 52, 52, 0.8)',
// 		position: 'absolute',
// 		bottom: 20,
// 		width: '100%',
// 		flexDirection: 'row',
// 		justifyContent: 'space-between',
// 		borderRadius: 30,
// 		padding: 15,
// 	},
// 	blure: {
// 		borderRadius: 15,
// 		backgroundColor: 'green',
// 	},
// 	items: {
// 		flexDirection: 'row',
// 		alignItems: 'center',
// 		paddingRight: 20,
// 	},
//
// 	star: {
// 		height: 21,
// 		backgroundColor: '#F6F7FF',
// 		alignItems: 'center',
// 		justifyContent: 'center',
// 		borderRadius: 8,
// 		width: 40,
// 		flexDirection: 'row',
// 	},
// 	footer: {
// 		width: '100%',
// 		borderTopLeftRadius: 15,
// 		borderTopRightRadius: 15,
// 		height: 71,
// 		justifyContent: 'center',
// 		alignItems: 'center',
// 		flexDirection: 'row',
// 		position: 'absolute',
// 		left: 0,
// 		right: 0,
// 		bottom: 0,
// 	},
// 	shareBut: {
// 		width: 20,
// 		height: 37,
// 		marginRight: 20,
// 	},
// 	bottomButtonStyle: {
// 		color: 'white',
// 		fontSize: 20,
// 		justifyContent: 'center',
// 		alignItems: 'center',
// 	},
// 	Reset: {
// 		width: '100%',
// 		backgroundColor: '#5663FF',
// 		height: '100%',
// 		justifyContent: 'center',
// 		alignItems: 'center',
// 		borderTopLeftRadius: 20,
// 		borderTopRightRadius: 20,
// 	},
// 	frImage: {
// 		width: '100%',
// 		height: '100%',
// 	},
// 	frfr: {
// 		width: 50,
// 		height: 50,
// 		borderRadius: 25,
// 		overflow: 'hidden',
// 		flexDirection: 'row',
// 		marginRight: 20,
// 		marginBottom: 20,
// 	},
// });
//
// export default DetailsScreen;

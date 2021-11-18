import React, { useState } from 'react';
import {
	StyleSheet,
	View,
	TouchableOpacity,
	Image,
	TextInput,
	FlatList,
} from 'react-native';
import CustomText from '../components/CustomText';
import SafeView from '../components/SafeView';

const Trending = 'Trending Restourants';
const address = '394 Broome St, New York, NY 10013, USA';

const SearchScreen = ({ navigation, route }) => {
	const [searchValue, SetSearchValue] = useState();

	const data = route.params.data;

	const onChangeRes = (value) => {
		const fil = data.filter((i) => {
			// console.log(i.title == value);
			return i.title == value;
		});
		// console.log('aq aris fill ', fil);
		SetSearchValue(fil);
	};
	console.log('searchValue', searchValue);
	//

	// console.log('asd--', route.params.data);
	const RenderImages = ({ item }) => {
		return (
			<TouchableOpacity
				style={styles.Trending}
				onPress={() =>
					navigation.navigate('DetailScreen', {
						img: item.item.img,
						title: item.item.title,
						op: item.item.op,
						star: item.item.star,
						name: item.item.name,
					})
				}
			>
				<Image
					style={{
						width: '100%',
						height: 222,
						marginBottom: 21,
						borderTopLeftRadius: 7,
						borderTopRightRadius: 7,
					}}
					name={'asd Bones'}
					source={{
						uri: item.item.img,
					}}
				/>
				<View style={{ flexDirection: 'row', position: 'absolute' }}>
					<View style={styles.open}>
						<CustomText
							style={{ color: '#4CD964', fontSize: 10, fontWeight: 'bold' }}
						>
							OPEN
						</CustomText>
					</View>
					<View style={styles.star}>
						<Image
							style={{ width: 10, height: 10 }}
							source={require('../assets/image/star.png')}
						/>
						<CustomText style={{ fontSize: 10 }}> 4.5</CustomText>
					</View>
				</View>
				<View style={{ paddingLeft: 15, flexDirection: 'row' }}>
					<CustomText
						style={{
							fontSize: 18,
							color: '#3E3F68',
							marginBottom: 8,
							fontWeight: 'bold',
						}}
					>
						{item.item.title}
					</CustomText>
					<View
						style={{
							marginLeft: 10,
							backgroundColor: '#FF5673',
							borderRadius: 10,
							height: 15,
							marginTop: 5,
							alignItems: 'center',
							justifyContent: 'center',
						}}
					>
						<CustomText
							style={{ fontSize: 10, color: 'white', alignItems: 'center' }}
						>
							{item.item.name}
						</CustomText>
					</View>
					<View
						style={{
							marginLeft: 10,
							backgroundColor: '#848DFF',
							borderRadius: 10,
							height: 15,
							marginTop: 5,
							alignItems: 'center',
							justifyContent: 'center',
						}}
					>
						<CustomText
							style={{ fontSize: 10, color: 'white', alignItems: 'center' }}
						>
							1.2 km
						</CustomText>
					</View>
				</View>
				<CustomText style={{ color: '#8A98BA', fontSize: 13, paddingLeft: 15 }}>
					{address}
				</CustomText>
			</TouchableOpacity>
		);
	};

	return (
		<SafeView>
			<View style={styles.container}>

				{/*// TODO: `Search*/}
				<View style={styles.search}>
					<View style={{ flexDirection: 'row', alignItems: 'center', flex: 1 }}>
						<Image
							source={require('../assets/image/search.png')}
							style={styles.ImageStyle}
						/>
						<TextInput
							placeholder="Find Restaurants"
							placeholderTextColor="#dddddd"
							style={{
								fontSize: 17.2,
								color: '#6E7FAA',
							}}
							onChangeText={onChangeRes}
						/>
					</View>
					<TouchableOpacity onPress={() => navigation.goBack()}>
						<Image
							source={require('../assets/image/searchCloseButton.png')}
							style={styles.filter}

						/>
					</TouchableOpacity>
				</View>

				{/*// TODO: `FlatList */}
				<FlatList
					style={{ marginTop: 20, marginBottom: 300 }}
					showsVerticalScrollIndicator={false}
					data={searchValue}
					// data = {route.params.data}
					renderItem={(item) => <RenderImages item={item} />}
					keyExtractor={(item) => item.id}
				/>
			</View>
		</SafeView>
	);
};

const styles = StyleSheet.create({
	container: {
		marginHorizontal: 24,
		marginTop: 15,
		color: '#FEFEFE',
	},
	headerTitle: {
		marginBottom: 29,
		fontSize: 22,
		justifyContent: 'center',
		alignItems: 'center',
		paddingRight: 30,
	},
	header: {
		flexDirection: 'row',
	},
	search: {
		flexDirection: 'row',
		borderColor: '#707070',
		borderRadius: 5,
		marginBottom: 28,
		alignItems: 'center',
		backgroundColor: 'white',
		height: 55,

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
		height: 300,
		borderRadius: 10,
		overflow: 'hidden',
		flex: 1,
		borderWidth: 0.1,
		marginBottom: 20,
		backgroundColor: 'white',
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
		height: 15,
		width: 15,
		resizeMode: 'stretch',
		padding: 8,
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
});

export default SearchScreen;

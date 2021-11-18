import React from 'react';
import {
	FlatList,
	Image,
	ImageBackground,
	StyleSheet,
	TouchableOpacity,
	View,
} from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import CustomText from '../components/CustomText';
import SafeView from '../components/SafeView';

const Category = ({ navigation, route }) => {
	const color = route.params.coll;
	const Category = 'Category';

	const RenderItem = ({ item, index }) => {
		// console.log('rame-> ', index);
		const color2 = color[[index % color.length]];
		return (
			<TouchableOpacity
				style={{ overflow: 'hidden', borderRadius: 10 }}
				onPress={() => {
					console.log('detail=> ', color);
					navigation.navigate('CategoryDetailScreen', {
						name: item.name,
						colors: color2,
					});
				}}
			>
				<ImageBackground
					source={require('../assets/image/zcx.png')}
					resizeMode="cover"
					// blurRadius={10}
					style={styles.ImageBackSt}
				>
					<LinearGradient
						colors={color[index % color.length]}
						style={styles.linearSt}
						start={{ x: 0, y: 0.5 }}
						end={{ x: 1, y: 0.5 }}
					>
						<CustomText style={{ fontSize: 25, color: 'white' }}>
							{item.name}
						</CustomText>
						<View
							style={{
								height: 30,
								width: 5,
								backgroundColor: 'white',
								position: 'absolute',
								right: 20,
								borderRadius: 50,
							}}
						></View>
					</LinearGradient>
				</ImageBackground>
			</TouchableOpacity>
		);
	};

	return (
		<SafeView style={{ flex: 1, marginBottom: 40 }}>
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
						<CustomText style={styles.headerTitle}>{Category}</CustomText>
					</View>
					<Image
						style={styles.close}
						name={'search'}
						source={require('../assets/image/searchButton.png')}
					/>
				</View>

				<FlatList
					showsVerticalScrollIndicator={false}
					data={route.params.array}
					keyExtractor={(item) => item.id}
					contentContainerStyle={{ paddingBottom: 50 }}
					renderItem={({ item, index }) => (
						<RenderItem item={item} index={index} />
					)}
				/>
			</View>
		</SafeView>
	);
};
const styles = StyleSheet.create({
	container: {
		marginHorizontal: 24,
		marginTop: 15,
	},
	close: {
		width: 23,
		height: 23,
		marginRight: 10,
	},
	header: {
		width: '100%',
		flexDirection: 'row',
		marginBottom: 40,
	},
	headerTitle: {
		fontSize: 22,
		justifyContent: 'center',
		alignItems: 'center',
		color: '#222455',
	},
	title: {
		justifyContent: 'space-between',

		alignItems: 'center',
		marginBottom: 20,
	},
	linearSt: {
		position: 'absolute',
		height: 90,
		justifyContent: 'center',
		alignItems: 'center',
		margin: 10,
		width: '100%',
		borderRadius: 10,
		flexDirection: 'row',
		opacity: 0.8,
	},

	background: {
		position: 'absolute',
		left: 0,
		right: 0,
		top: 0,
		height: 300,
		backgroundColor: 'orange',
	},
	ImageBackSt: {
		height: 90,
		justifyContent: 'center',
		alignItems: 'center',
		margin: 10,
		overflow: 'hidden',
		borderRadius: 10,
		flexDirection: 'row',
	},
	button: {
		padding: 15,
		alignItems: 'center',
		borderRadius: 5,
	},
	text: {
		backgroundColor: 'transparent',
		fontSize: 15,
		color: '#fff',
	},
});

export default Category;

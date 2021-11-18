import React from 'react';
import {
	Dimensions,
	Image,
	Platform,
	SafeAreaView,
	StyleSheet,
	Text,
	TouchableOpacity,
	View,
} from 'react-native';
import { globalStyles } from './GlobalStyle';
import CustomText from '../components/CustomText';
import SafeView from '../components/SafeView';

import { SwiperFlatList } from 'react-native-swiper-flatlist/index';

let width = Dimensions.get('window').width;
let height = Dimensions.get('window').height / 2;

const Preview = ({ navigation, route }) => {
	const RenderItem = ({ item }) => {
		return (
			<View style={styles.vieW}>
				<Image
					style={{ width: '100%', height: '100%' }}
					name={'Happy Bones'}
					source={{
						uri: item?.item?.source?.uri,
					}}
				/>
			</View>
		);
	};

	return (
		<SafeView style={{backgroundColor: '#25262E'}}>
			<View style={styles.container}>
				<View style={styles.header}>
					<TouchableOpacity onPress={() => navigation.goBack()}>
						<Image
							style={styles.imStyle}
							source={require('../assets/image/whiteBackButton.png')}
						/>
					</TouchableOpacity>
					<View style={globalStyles.fle}>
						<CustomText style={styles.headerTitle}>Preview</CustomText>
					</View>
				</View>
			</View>

			<SwiperFlatList
				index={route.params.index}
				showPagination
				paginationStyleItem={{ width: 7, height: 7, marginRight: -4 }}
				paginationDefaultColor={'#6A6A6A'}
				paginationActiveColor={'#5663FF'}
				data={route.params.arrData}
				renderItem={(item) => {
					return <RenderItem item={item} />;
				}}
			/>
		</SafeView>
	);
};

const styles = StyleSheet.create({
	container: {
		flex: 1,
		marginTop: 15,
		color: 'white',
	},
	header: {
		width: '100%',
		flexDirection: 'row',
		paddingHorizontal: 15,
	},
	headerTitle: {
		fontSize: 22,
		color: 'white',
		paddingRight: 30,
	},
	dot: {
		color: '#6A6A6A',
		margin: 2,
		fontSize: 8,
	},
	activeDot: {
		color: '#5663FF',
		margin: 2,
		fontSize: 8,
	},

	vieW: {
		flex: 1,
		width: width,
		height: height,
		alignItems: 'center',
		justifyContent: 'center',
	},
	slide: {
		flex: 1,
		justifyContent: 'center',
		alignItems: 'center',
		backgroundColor: 'transparent',
	},

	text: {
		color: '#fff',
		fontSize: 30,
		fontWeight: 'bold',
	},

	image: {
		width: width,
		flex: 1,
	},
	imStyle: {
		width: 20,
		height: 27,
		marginLeft: 10,
		color: 'white',
	},
});

export default Preview;

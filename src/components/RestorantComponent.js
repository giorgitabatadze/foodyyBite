import React from 'react';
import {
	Dimensions,
	Image,
	StyleSheet,
	TouchableOpacity,
	View,
} from 'react-native';
import CustomText from './CustomText';
import { LinearGradient } from 'expo-linear-gradient';
import { useNavigation } from '@react-navigation/native';
import {Data, colorsList} from '../consts/FoodyDataList';


const address = '394 Broome St, New York, NY 10013, USA';
const km = '1.2 km';

let width = Dimensions.get('window').width;


const RestComp = ({ item, index,}) => {

	const navigation = useNavigation();


	return (
		<TouchableOpacity
			style={styles.Trending}
			onPress={() =>
				navigation.navigate('DetailScreen', {
					img: item.img,
					title: item.title,
					op: item.op,
					star: item.star,
					name: item.name,
					friend: item.frImage,

					data2: Data,
				})
			}
		>
			<Image
				style={styles.resImage}
				name={'Happy Bones'}
				source={{
					uri: item.img,
				}}
			/>
			<View style={{ flexDirection: 'row', position: 'absolute' }}>
				<View style={styles.open}>
					<CustomText
						style={{
							color: item.op == 'OPEN' ? '#4CD964' : '#FF3B30',
							fontSize: 10,
							fontWeight: 'bold',
						}}
					>
						{item.op}
					</CustomText>
				</View>
				<View style={styles.star}>
					<Image
						style={{ width: 10, height: 10 }}
						source={require('../assets/image/star.png')}
					/>
					<CustomText style={{ fontSize: 10 }}> {item.star}</CustomText>
				</View>
			</View>
			<View
				style={{
					paddingLeft: 15,
					flexDirection: 'row',
					justifyContent: 'center',
					alignItems: 'center',
					// backgroundColor: 'red'
				}}
			>
				<CustomText style={styles.star1}>{item.title}</CustomText>
				<View style={styles.gradient}>
					<LinearGradient
						colors={colorsList[index % colorsList.length]}
						style={styles.cate}
						start={{ x: 0, y: 0.5 }}
						end={{ x: 1, y: 0.5 }}
						angleCenter={{ x: 0, y: 0.5 }}
					>
						<CustomText style={styles.catText}>{item.name}</CustomText>
					</LinearGradient>
				</View>
				<View style={styles.viewKm}>
					<CustomText style={styles.kmText}>{km}</CustomText>
				</View>
				<View>
					<Image
						style={styles.groupCont}
						source={require('../assets/image/groupContacts.png')}
					></Image>
				</View>
			</View>
			<View style={styles.shadd}>
				<CustomText style={styles.addreSS}>{address}</CustomText>
			</View>
		</TouchableOpacity>
	);
};

const styles = StyleSheet.create({
	Trending: {
		width: width / 1.3,
		height: 253,
		marginRight: 20,
		borderRadius: 10,
		overflow: 'hidden',
		flex: 1,
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
		marginLeft: 8
	},
	gradient: {
		borderRadius: 50,
		marginTop: 5,
		alignItems: 'center',
		justifyContent: 'center',
		width: 60,
		height: 18,
		marginBottom: 10,
		marginLeft: 5

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
		fontSize: 10,
		color: 'white',
		position: 'absolute',
		marginTop: 5
	},
	viewKm: {
		marginLeft: 10,
		backgroundColor: '#848DFF',
		borderRadius: 10,
		// height: 15,
		marginTop: 5,
		alignItems: 'center',
		justifyContent: 'center',


		width: 46,
		height: 18,
		marginBottom: 10,
	},
	kmText: {
		fontSize: 10,
		color: 'white',
		alignItems: 'center',
		justifyContent: 'center',
		marginTop: 2
	},
	groupCont: {
		marginLeft: 20,
		width: 50,
		height: 20,
		paddingRight: 60,
		marginTop: 3,
		marginBottom: 7,
		marginRight: 10,
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
});

export default RestComp;

// if (isIos()) {
// 	return <View style={{ backgroundColor: 'blue', flex: 1 }} {...props} />;
// } else {
// 	const { style, ...rest } = props;
// 	return <View style={[{ paddingTop: 25 }, props.style]} {...rest} />;
// }
//}

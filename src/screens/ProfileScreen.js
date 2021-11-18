import React from 'react';
import {
	Image,
	Platform,
	SafeAreaView,
	StyleSheet,
	Text,
	TouchableOpacity,
	View,
} from 'react-native';
import { globalStyles } from './GlobalStyle';
import SafeView from '../components/SafeView';
import CustomText from '../components/CustomText';

const Profile = ({ navigation }) => {
	const jubo = 'Jubo Arevadze';
	const Reviews = 'Reviews';
	const Followers = 'Followers';
	const Following = 'Following';
	const Follow = 'Follow';
	const Block = 'Block';
	const mail = 'juboArevadze1988@gmail.com';
	const Profile = 'Profile';

	return (
		<SafeView>
			<View style={globalStyles.container}>
				<View style={styles.header}>
					<TouchableOpacity onPress={() => navigation.goBack()}>
						<Image
							style={styles.proImage}
							source={require('../assets/image/backButton.png')}
						/>
					</TouchableOpacity>
					<View style={globalStyles.fle}>
						<CustomText style={styles.headerTitle}>{Profile}</CustomText>
					</View>
				</View>

				<View style={{ justifyContent: 'center', alignItems: 'center' }}>
					<Image
						style={{ width: 135, height: 135 }}
						source={require('../assets/image/profileImage.png')}
					/>
					<CustomText style={{ color: '#3E3F68', fontSize: 24 }}>
						{jubo}
					</CustomText>
					<CustomText style={{ color: '#6E7FAA', fontSize: 14 }}>
						{mail}
					</CustomText>
				</View>

				<View style={styles.fullView}>
					<View style={styles.hun}>
						<CustomText style={styles.one}> 120</CustomText>
						<CustomText style={styles.proText}>{Reviews}</CustomText>
					</View>
					<View style={styles.followers}>
						<CustomText style={styles.one}> 50k</CustomText>
						<CustomText style={styles.proText}>{Followers}</CustomText>
					</View>
					<View style={styles.hun}>
						<CustomText style={styles.one}> 45</CustomText>
						<CustomText style={styles.proText}>{Following}</CustomText>
					</View>
				</View>

				<View style={styles.butView}>
					<TouchableOpacity style={styles.follow}>
						<CustomText style={{ color: 'white' }}> {Follow} </CustomText>
					</TouchableOpacity>
					<View style={{ width: 10 }}></View>
					<TouchableOpacity style={styles.blok}>
						<CustomText> {Block} </CustomText>
					</TouchableOpacity>
				</View>
			</View>
		</SafeView>
	);
};

const styles = StyleSheet.create({
	container: {
		marginHorizontal: 24,
		marginTop: 15,
		backgroundColor: 'red',
	},
	hun: {
		width: '33%',
		alignItems: 'center',
		justifyContent: 'center',
	},
	one: {
		color: '#5663FF',
		fontSize: 20,
	},
	fullView: {
		flexDirection: 'row',
		width: '100%',
		height: '12%',
		marginTop: 40,
		alignItems: 'center',
	},
	proImage: {
		width: 20,
		height: 27,
		marginLeft: 10,
	},
	proText: {
		marginTop: 9,
		color: '#6E7FAA',
		fontSize: 14,
	},
	butView: {
		flexDirection: 'row',
		height: 40,
		marginTop: 30,
	},
	blok: {
		flex: 0.5,
		marginRight: '10%',
		justifyContent: 'center',
		alignItems: 'center',
		borderRadius: 10,
		borderWidth: 1,
		borderColor: '#8A98BA',
	},
	follow: {
		flex: 0.5,
		backgroundColor: '#5663FF',
		marginLeft: '10%',
		justifyContent: 'center',
		alignItems: 'center',
		borderRadius: 10,
	},
	close: {
		width: 23,
		height: 23,
		marginRight: 10,
	},
	followers: {
		width: '33%',
		borderRightWidth: 1,
		borderLeftWidth: 1,
		borderColor: '#8A98BA',
		alignItems: 'center',
		justifyContent: 'center',
		height: 34,
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
		paddingRight: 30,
	},
});

export default Profile;

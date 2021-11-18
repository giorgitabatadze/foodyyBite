import React from 'react';

import {
	FlatList,
	Image,
	StyleSheet,
	TouchableOpacity,
	View,
} from 'react-native';
import { globalStyles } from './GlobalStyle';
import CustomText from '../components/CustomText';
import SafeView from '../components/SafeView';
import FriendListComponent from "../components/FriendListComponent";


const RewandRaiting = ({ navigation, route }) => {
	return (
		<SafeView>
			<View style={styles.container}>
				<View style={styles.header}>
					<TouchableOpacity onPress={() => navigation.goBack()}>
						<Image
							style={{ width: 20, height: 27 }}
							source={require('../assets/image/backButton.png')}
						/>
					</TouchableOpacity>
					<View style={globalStyles.fle}>
						<CustomText style={styles.headerTitle}>
							{route.params.Review}
						</CustomText>
					</View>
				</View>

				<FlatList
					showsVerticalScrollIndicator={false}
					data={route.params.daata}
					renderItem={(item) => <FriendListComponent item={item} />}
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

		flex: 1,
	},
	header: {
		width: '100%',
		flexDirection: 'row',
		marginBottom: 50,
		paddingRight: 30,
	},
	headerTitle: {
		fontSize: 22,
		justifyContent: 'center',
		alignItems: 'center',
		color: '#222455',
	},

	frImage: {
		width: '100%',
		height: '100%',
	},

	item: {
		backgroundColor: '#f9c2ff',
		padding: 20,
		marginVertical: 8,
		marginHorizontal: 16,
	},
	title: {
		fontSize: 20,
	},
});

export default RewandRaiting;

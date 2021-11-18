import React, { useState } from 'react';
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

const frineds = 'Find Friends';
const Contacts = 'Contacts';
const Suggestions = 'Suggestions';
const mark = 'mark Zargberg';
const Reviews = '45 Reviews';

const RenderFriends = ({ item }) => {
	const [follow, setFollow] = useState(true);
	console.log('foolwwwowowow--->', item);

	const onPressButton = () => {
		console.log('foolwwwowowow--->', follow);
		setFollow(!follow);
	};


	return (
		<View style={styles.frView}>
			<View style={styles.secView}>
				<Image
					style={styles.friendsImage}
					source={{ uri: item.frImage }}
				></Image>
			</View>
			<View style={{ marginLeft: 15, marginBottom: 13 }}>
				<CustomText style={styles.tit}>{mark}</CustomText>
				<CustomText style={styles.rev}>{Reviews}</CustomText>
			</View>
			<TouchableOpacity
				style={[
					styles.foll,
					{ backgroundColor: follow ? '#5663FF' : '#fff', marginLeft: '24%' },
				]}
				onPress={onPressButton}
			>
				<CustomText style={{ color: follow ? 'white' : '#8A98BA' }}>
					{follow ? 'Follow' : 'UnFollow'}
				</CustomText>
			</TouchableOpacity>
		</View>
	);
};

const Friends = ({ navigation, route }) => {

	const ListComponent = () => {
		return (
			<View>
				<View style={styles.contacts}>
					<CustomText style={{ color: '#222455' }}> {Contacts} </CustomText>
				</View>

				<FlatList
					showsVerticalScrollIndicator={false}
					data={route.params.data}
					renderItem={(item) => <RenderFriends item={item.item} />}
					keyExtractor={(item) => item.id}
				/>

				<View style={styles.suggestions}>
					<CustomText style={{ color: '#222455' }}>
						{Suggestions}
					</CustomText>
				</View>

			</View>
		)
	};

	const ListComponent2 = () => {
		return (
			<View>


				<FlatList
					showsVerticalScrollIndicator={false}
					data={route.params.data}
					renderItem={(item) => <RenderFriends item={item.item} />}
					keyExtractor={(item) => item.id}
					contentContainerStyle={{ paddingBottom: 100 }}
				/>
			</View>
		)
	};

	console.log('data---', route.params.data);
	const [state, setState] = useState(0);
	return (
		<SafeView>
			<View style={globalStyles.container}>
				<View style={styles.header}>
					<TouchableOpacity onPress={() => navigation.goBack()}>
						<Image
							style={styles.imSt}
							source={require('../assets/image/backButton.png')}
						/>
					</TouchableOpacity>
					<View style={globalStyles.fle}>
						<CustomText style={styles.headerTitle}>{frineds}</CustomText>
					</View>
					<Image
						style={styles.close}
						name={'search'}
						source={require('../assets/image/searchButton.png')}
					/>
				</View>

				<FlatList
					showsVerticalScrollIndicator={false}
					data={route.params.data}
					renderItem={(item) => <RenderFriends item={item.item} />}
					keyExtractor={(item) => item.id}
					ListHeaderComponent={ListComponent}
					ListFooterComponent={ListComponent2}
				/>
			</View>
		</SafeView>
	);
};

const styles = StyleSheet.create({
	touch: {
		backgroundColor: 'blue',
		padding: 10,
		marginTop: 50,
	},
	close: {
		width: 23,
		height: 23,
		marginRight: 10,
	},
	header: {
		width: '100%',
		flexDirection: 'row',
		marginBottom: 50,
	},
	tit: {
		fontSize: 20,
		color: '#3E3F68',
		alignItems: 'center',
	},
	foll: {
		height: 30,
		width: 90,
		marginRight: 0,
		alignItems: 'center',
		justifyContent: 'center',
		borderRadius: 8,
		borderWidth: 1,
		borderColor: '#8A98BA',
	},
	rev: {
		fontSize: 10,
		color: '#6E7FAA',
		alignItems: 'center',
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
	imSt: {
		width: 20,
		height: 27,
		marginLeft: 10,
	},
	contacts: {
		width: '100%',
		backgroundColor: '#F7F8FF',
		height: 50,
		justifyContent: 'center',
		marginBottom: 20,
	},
	suggestions: {
		width: '100%',
		backgroundColor: '#F7F8FF',
		height: 50,
		justifyContent: 'center',
		marginTop: 30,
		marginBottom: 20,
	},
	friendsImage: {
		width: '100%',
		height: '100%',
		resizeMode: 'stretch',
		backgroundColor: 'blue',
	},
	frView: {
		flexDirection: 'row',
		// justifyContent: 'space-between',
		width: '100%',
		alignItems: 'center',
		marginBottom: 5,
	},
	secView: {
		width: 50,
		height: 50,
		borderRadius: 25,
		overflow: 'hidden',
		flexDirection: 'row',
	},
	btnNormal: {
		borderColor: 'blue',
		borderWidth: 1,
		borderRadius: 10,
		height: 30,
		width: 100,
	},
	btnPress: {
		borderColor: 'blue',
		borderWidth: 1,
		height: 30,
		width: 100,
	},
});

export default Friends;

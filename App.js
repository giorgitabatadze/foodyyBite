import React from 'react';

import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import 'react-native-gesture-handler';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import SearchScreen from '@screens/SearchScreen';
import RestourantsScreen from '@screens/RestourantsScreen';
import DetailsScreen from '@screens/RestourantsDetailScreen';
import FilterScreen from './src/screens/Filter';
import ReviewScreen from '@screens/ReviewScreen';
import Category from '@screens/CategoryScreen';
import Friends from '@screens/FriendsScreen';
import Profile from '@screens/ProfileScreen';
import RewandRaiting from '@screens/RewiewandRaitingScreen';
import Photos from '@screens/PhotosScreen';
import Preview from '@screens/PreviewScreen';
import BottomTabNavigator from '@navigation/BottomNavigator';
import HomeDetailScreen from '@screens/HomeDetail';
import CategoryDetailScreen from '@screens/CategoryDetailScreen';
import SplashScreen from '@screens/SplashScreen';
import Login from '@screens/LoginScreen';
import ForgetPass from '@screens/ForgotPasswordScreen';
import createAcc from '@screens/createAccountScreen';
import WelcomeScreen from '@screens/WelcomeScreen';
import TrendingScreen from './src/screens/TrendingScreen';

const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();

export default function App() {
	return (
		<NavigationContainer>
			<Stack.Navigator
				screenOptions={{
					headerShown: false,
				}}
			>
				{/*<Stack.Screen name="SplashScreen" component={SplashScreen} />*/}
				<Stack.Screen name="LoginScreen" component={Login} />
				<Stack.Screen name="createAccScreen" component={createAcc} />
				<Stack.Screen name="ForgetPassScreen" component={ForgetPass} />
				<Stack.Screen name="WelcomeScreen" component={WelcomeScreen} />
				<Stack.Screen name="HomeScreen" component={BottomTabNavigator} />
				<Stack.Screen name="SearchScreen" component={SearchScreen} />
				<Stack.Screen name="DetailScreen" component={DetailsScreen} />
				<Stack.Screen name="RestScreen" component={RestourantsScreen} />
				<Stack.Screen name="FilterScreen" component={FilterScreen} />
				<Stack.Screen name="ReviewScreen" component={ReviewScreen} />
				<Stack.Screen name="CategoryScreen" component={Category} />
				<Stack.Screen name="FriendsScreen" component={Friends} />
				<Stack.Screen name="ProfileScreen" component={Profile} />
				<Stack.Screen name="RewiewAndRaitingScreen" component={RewandRaiting} />
				<Stack.Screen name="PhotoScreen" component={Photos} />
				<Stack.Screen name="PreviewScreen" component={Preview} />
				<Stack.Screen name="HomeDetailScreen" component={HomeDetailScreen} />
				<Stack.Screen
					name="CategoryDetailScreen"
					component={CategoryDetailScreen}
				/>
				<Stack.Screen name="Trending" component={TrendingScreen} />
			</Stack.Navigator>
		</NavigationContainer>
	);
}

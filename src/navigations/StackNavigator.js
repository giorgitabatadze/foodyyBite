import React from 'react';

import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import 'react-native-gesture-handler';

import HomeScreen from "./screens/HomeScreen";
import SearchScreen from "./screens/SearchScreen";


const Stack = createStackNavigator();

export default function MainStackNavigator() {

    return (

        <NavigationContainer>
            <Stack.Navigator screenOptions={{
                headerShown: false
            }}>
                <Stack.Screen name="HomeScreen" component={HomeScreen}/>
                <Stack.Screen name="SearchScreen" component={SearchScreen} />
            </Stack.Navigator>
        </NavigationContainer>
    );
}

// options={{ title: "Trending Restourants", headerLeft: null }}
// headerLeft: null
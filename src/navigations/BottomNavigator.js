import React from "react";
import {createBottomTabNavigator} from "@react-navigation/bottom-tabs";
import HomeScreen from "../screens/HomeScreen";
import {Image, StyleSheet, TouchableOpacity, View} from "react-native";
import Profile from "../screens/ProfileScreen";
import COLORS from "../consts/Colors";

const Tab = createBottomTabNavigator();


const BottomTabNavigator = () => {
    return (
        <Tab.Navigator
            tabBarOptions={{
                style: {
                    height: 75,
                    borderTopWidth: 0,
                    borderTopLeftRadius: 30,
                    borderTopRightRadius: 30,
                    elevation: 0,
                    margin: 0,
                    justifyContent: 'center',
                    alignItems: 'center',
                    alignSelf: 'center',
                    tabStyle: {
                        width: 'auto',
                        height: 'auto'
                    }
                },
                showLabel: false,
                activeTintColor: COLORS.primary,
                inactiveTintColor: 'red',
            }}
        >
            <Tab.Screen name="HomeScreen"
                        component={HomeScreen}
                        options={{
                            tabBarIcon: ({color, focused, size}) => (
                                focused ?
                                    <Image style={{width: 25, height: 27, }}
                                           size={40}
                                           resizeMode="contain"
                                           color={color}
                                           source={require('../assets/image/homeImage.png')}
                                        //tintColor={tintColor} //there is no need for this
                                    />
                                    :

                                    <Image style={{width: 25, height: 27}}
                                           resizeMode="contain"
                                           color={color}
                                           source={require('../assets/image/DefaultHome.png')}
                                        //tintColor={tintColor} //there is no need for this
                                    />
                            ),
                        }}
            />
            <Tab.Screen name="Bookmark"
                        component={HomeScreen}
                        options={{
                            tabBarIcon: ({color, focused, size}) => (
                                focused ?
                                    <Image style={{width: 20, height: 27, }}
                                           size={28}
                                           source={require('../assets/image/chosenBookmark.png')}
                                           resizeMode="contain"
                                           color={color}

                                    />
                                    :
                                    <Image style={{width: 20, height: 27,}}
                                           source={require('../assets/image/bookmark.png')}
                                           resizeMode="contain"
                                           color={color}

                                        //tintColor={tintColor} //there is no need for this
                                    />
                            ),
                        }}
            />
            <Tab.Screen name="home"
                        component={HomeScreen}
                        options={{
                            tabBarIcon: ({color}) => (
                                <TouchableOpacity
                                    style={{
                                        height: 60,
                                        width: 60,
                                        justifyContent: 'center',
                                        alignItems: 'center',
                                        backgroundColor: COLORS.liteBlue,
                                        //    borderColor: COLORS.primary,
                                        //    borderWidth: 1,
                                        borderRadius: 50,
                                        top: -18,
                                        elevation: 5,
                                    }}>
                                    <Image style={{width: 20, height: 27}}
                                           resizeMode="contain"
                                           source={require("../assets/image/addButton.png")}/>
                                </TouchableOpacity>
                            ),
                        }}
            />
            <Tab.Screen name="Notification"
                        component={HomeScreen}
                        options={{
                            tabBarIcon: ({color, focused}) => (
                                    focused ?
                                    <Image name="Notification"
                                           style={{width: 20, height: 27,}}
                                           source={require('../assets/image/chosenNotification.png')}
                                    />
                                    :
                                        <Image name="Notification"
                                               style={{width: 25, height: 27}}
                                               source={require('../assets/image/notification.png')}
                                        />
                            ),
                        }}
            />
            <Tab.Screen name="Profile"
                        component={Profile}
                        options={{
                            tabBarIcon: ({color, focused}) => (
                                focused ?
                                        <Image name="profile" color={COLORS.primary}
                                               style={{width: 20, height: 27, }}
                                               source={require('../assets/image/chosenProfileImage.png')}
                                        />
                                :
                                    <Image name="profile" color={COLORS.primary}
                                           style={{width: 20, height: 27, }}
                                           source={require('../assets/image/profile.png')}
                                    />
                            ),
                        }}
            />
        </Tab.Navigator>
    );
};


const styles = StyleSheet.create({
    addButtonText: {
        color: "#fff",
        fontSize: 60,
        justifyContent: 'center',
        alignItems: 'center',
        top: -9,
    },
})

export default BottomTabNavigator;
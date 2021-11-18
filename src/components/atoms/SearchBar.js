import React from 'react';
import {StyleSheet, View, SafeAreaView, Text, TouchableOpacity, Image, TextInput, FlatList} from "react-native";

const Trending = 'Trending Restourants';
const address = '394 Broome St, New York, NY 10013, USA';

const imageArray = [
    1, 2, 3, 4, 5, 6
];

const RenderImages = ({item}) => {
    return (
        <TouchableOpacity style={styles.Trending}>
            <Image
                style={{width: '100%', height: 172, marginBottom: 21, borderRadius: 7}}
                name={"Happy Bones"}
                source={{
                    uri:
                        "https://images.unsplash.com/photo-1616372383709-de2bc15e3dee?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=1080&fit=max",
                }}/>
            {/*absolute*/}
            <View style={{flexDirection: 'row', position: 'absolute',}}>
                <View style={styles.open}>
                    <Text style={{color: '#4CD964', fontSize: 10, fontWeight: 'bold'}}> OPEN </Text>
                </View>
                <View style={styles.star}>
                    <Image
                        style={{width: 10, height: 10}}
                        source={require("../../assets/image/star.png")}/>
                    <Text style={{fontSize: 10}}> 4.5</Text>
                </View>
            </View>
            <View style={{paddingLeft: 15, flexDirection: "row", }}>
                <Text
                    style={{fontSize: 18, color: '#3E3F68', marginBottom: 8, fontWeight: 'bold'}}>
                    Happy Bones
                </Text>
                <View
                    style={{
                        marginLeft: 10,
                        backgroundColor: '#FF5673',
                        borderRadius: 10,
                        height: 15,
                        marginTop: 5,
                        alignItems: 'center',
                        justifyContent: 'center',
                    }}>
                    <Text style={{fontSize: 10, color: 'white', alignItems: 'center'}}> Italian </Text>
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
                    }}>
                    <Text style={{fontSize: 10, color: 'white', alignItems: 'center',}}> 1.2 km </Text>
                </View>
                <Image
                    style={{marginLeft: 34, width: 50, height: 20, paddingRight: 60, marginTop: 3}}
                    source={require("../../assets/image/groupContacts.png")}></Image>
            </View>
            <Text
                style={{color: '#8A98BA', fontSize: 13, paddingLeft: 15}}>
                {address}
            </Text>
        </TouchableOpacity>

        // position opacity
    );
};

const SearchBar = ({navigation}) => {
    return (
        <SafeAreaView>
            <View style={styles.container}>
                <View style={styles.header}>
                    <TouchableOpacity
                        onPress={()=> navigation.goBack()}>
                    <Image
                        style={{width: 20, height: 27,  marginLeft: 10, }}
                        source={require("../../assets/image/backButton.png")}/>
                    </TouchableOpacity>
                    <View style={{flex: 1,justifyContent: 'center', alignItems: 'center'}}>
                        <Text style={styles.headerTitle}>
                            {Trending}
                        </Text>
                    </View>
                </View>

                {/*// TODO: `Search*/}
                <View
                    style={styles.search}
                >
                    <View style={{flexDirection: 'row', alignItems: 'center', flex: 1}}>
                        <Image
                            source={require('../../assets/image/search.png')} style={styles.ImageStyle}/>
                        <TextInput
                            placeholder="Find Restaurants"
                            placeholderTextColor="#dddddd"
                            style={{
                                fontSize: 17.2,
                                color: '#6E7FAA',
                            }}
                        />
                    </View>
                    <TouchableOpacity>
                        <Image source={require('../../assets/image/filter.png')} style={styles.filter}/>
                    </TouchableOpacity>
                </View>

                {/*// TODO: `FlatList */}
                <FlatList
                    style={{backgroundColor: 'yellow'}}
                    showsVerticalScrollIndicator={false}
                    data={imageArray}
                    renderItem={(item) => <RenderImages item={item}/>}

                    keyExtractor={item => item.id}
                />
            </View>
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    container: {
        marginHorizontal: 24,
        marginTop: 15,
    },
    headerTitle: {
        marginBottom: 29,
        fontSize: 22,
        justifyContent: 'center',
        alignItems: 'center',
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

        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 1,
        },
        shadowOpacity: 0.1,
        shadowRadius: 1.41,
        elevation: 2,

    },

    Trending: {
        // width: 325,
        height: 253,
        borderRadius: 10,
        overflow: "hidden",
        flex: 1,
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
        height: 10,
        width: 10,
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
        width: 47
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
    }
})

export default SearchBar;
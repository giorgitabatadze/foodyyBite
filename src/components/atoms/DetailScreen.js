import React from 'react';
import {StyleSheet, View, TextInput, } from "react-native";

const abcd = () => {
    return (
        <View style={styles.container}></View>
    )

}

const styles = StyleSheet.create({
    container: {
        width: '100%',
        height: 50,
        borderRadius: 3,
    },
    searchInput: {
        width: '100%',
        height: '100%',
        paddingLeft: 8,
        fontSize: 40,
    }
})

export default abcd;
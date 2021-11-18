import React from 'react';
import {
    Dimensions,
    Image,
    StyleSheet,
    TouchableOpacity,
    View,
} from 'react-native';
import CustomText from './CustomText';
import { useNavigation } from '@react-navigation/native';
import {Data, colorsList} from '../consts/FoodyDataList';


let width = Dimensions.get('window').width;


const comment =
    'Most living animal species are in Bilateria, a clade whose members have a bil' +
    'aterally symmetric body plan. The Bilateria include the protostomes—in which many groups of invertebrates are';
const Mark = 'Mark Zargberg';
const star = '4.5';


const FriendListComponent = ({ item, index,}) => {

    const navigation = useNavigation();


    return (
        <View style={{ flexDirection: 'row' }}>
            <View style={styles.frfr}>
                <Image
                    style={styles.frImage}
                    source={{
                        uri: item.item.frImage,
                    }}
                ></Image>
            </View>
            <View style={{ flex: 1 }}>
                <View style={styles.friView}>
                    <CustomText style={{ fontSize: 20, color: '#3E3F68' }}>
                        {Mark}
                    </CustomText>
                    <View style={styles.imView}>
                        <Image
                            style={{ width: 10, height: 10 }}
                            source={require('../assets/image/star.png')}
                        />
                        <CustomText style={{ fontSize: 10 }}> {star}</CustomText>
                    </View>
                </View>

                <CustomText style={styles.textby}>{comment}</CustomText>
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    friView: {
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
    },
    dinKm: {
        marginLeft: 10,
        backgroundColor: '#848DFF',
        borderRadius: 10,
        height: 15,
        alignItems: 'center',
        justifyContent: 'center',
    },
    dinKmText: {
        fontSize: 10,
        color: 'white',
        alignItems: 'center',
    },
    header: {
        width: '100%',
        height: 400,
        backgroundColor: 'green',
    },
    image: {
        flex: 1,
    },
    newView: {
        flexDirection: 'row',
        alignItems: 'center',
        marginTop: 20,
        justifyContent: 'space-between',
        marginBottom: 15,
    },
    filD: {
        justifyContent: 'space-between',
        marginTop: 25,
        flexDirection: 'row',
        alignItems: 'center',
    },
    filDText: {
        fontSize: 22,
        color: '#3E3F68',
        fontWeight: 'bold',
        marginTop: 0,
    },
    newView2Text: {
        fontSize: 10,
        color: 'white',
        alignItems: 'center',
    },
    newView2: {
        marginLeft: 20,
        backgroundColor: '#FF5673',
        borderRadius: 10,
        height: 15,
        alignItems: 'center',
        justifyContent: 'center',
        width: 40,
    },
    textby: {
        fontSize: 10,
        color: '#3E3F68',
        alignItems: 'center',
        width: '100%',
        marginBottom: 20,
        marginTop: 8,
    },
    phoneDire: {
        width: 40,
        height: 40,
    },
    img1: {
        width: 20,
        height: 37,
        paddingRight: 0,
    },
    imView: {
        flexDirection: 'row',
        backgroundColor: '#F6F7FF',
        justifyContent: 'space-between',
        padding: 5,
        borderRadius: 5,
    },
    viewSt: {
        width: '100%',
        alignItems: 'center',
        paddingHorizontal: 30,
        borderRadius: 30,
    },
    imgSt: {
        width: 170,
        height: 120,
        borderRadius: 10,
        marginRight: 15,
    },
    viSt: {
        flexDirection: 'row',
        alignItems: 'center',
        marginTop: 25,
        justifyContent: 'space-between',
        marginBottom: 15,
    },
    topCont: {
        width: '100%',
        position: 'absolute',
        top: 50,
        flexDirection: 'row',
        justifyContent: 'space-between',
        paddingHorizontal: 20,
    },
    bottomcont: {
        // backgroundColor: 'rgba(52, 52, 52, 0.8)',
        position: 'absolute',
        bottom: 20,
        width: '100%',
        flexDirection: 'row',
        justifyContent: 'space-between',
        borderRadius: 30,
        padding: 15,
    },
    blure: {
        borderRadius: 15,
        backgroundColor: 'green',
    },
    items: {
        flexDirection: 'row',
        alignItems: 'center',
        paddingRight: 20,
    },

    star: {
        height: 21,
        backgroundColor: '#F6F7FF',
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 8,
        width: 40,
        flexDirection: 'row',
    },
    footer: {
        width: '100%',
        borderTopLeftRadius: 15,
        borderTopRightRadius: 15,
        height: 71,
        justifyContent: 'center',
        alignItems: 'center',
        flexDirection: 'row',
        position: 'absolute',
        left: 0,
        right: 0,
        bottom: 0,
    },
    shareBut: {
        width: 20,
        height: 37,
        marginRight: 20,
    },
    bottomButtonStyle: {
        color: 'white',
        fontSize: 20,
        justifyContent: 'center',
        alignItems: 'center',
    },
    Reset: {
        width: '100%',
        backgroundColor: '#5663FF',
        height: '100%',
        justifyContent: 'center',
        alignItems: 'center',
        borderTopLeftRadius: 20,
        borderTopRightRadius: 20,
    },
    frImage: {
        width: '100%',
        height: '100%',
    },
    frfr: {
        width: 50,
        height: 50,
        borderRadius: 25,
        overflow: 'hidden',
        flexDirection: 'row',
        marginRight: 20,
        marginBottom: 20,
    },
});

export default FriendListComponent;

// if (isIos()) {
// 	return <View style={{ backgroundColor: 'blue', flex: 1 }} {...props} />;
// } else {
// 	const { style, ...rest } = props;
// 	return <View style={[{ paddingTop: 25 }, props.style]} {...rest} />;
// }
//}

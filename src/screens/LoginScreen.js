import React, { useEffect, useCallback, useState } from 'react';
import {
	View,
	Text,
	TouchableOpacity,
	StyleSheet,
	ImageBackground,
	TextInput,
	Dimensions,
	Image,
	KeyboardAvoidingView,
	ScrollView,
} from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import Feather from 'react-native-vector-icons/Feather';
import { Formik } from 'formik';
import * as yup from 'yup';
// import * as SplashScreen from 'expo-splash-screen';
import CustomText from '../components/CustomText';

const loginValidationSchema = yup.object().shape({
	email: yup
		.string()
		.email('Please enter valid email')
		.required('Email Address is Required'),
	password: yup
		.string()
		.min(8, ({ min }) => `Password must be at least ${min} characters`)
		.required('Password is required'),
});

const title = 'FoodyBite';
const forget = 'Forgot Password?';
const login = 'Login';
const create = 'Create New Account';
let width = Dimensions.get('window').width;

const Login = ({ navigation }) => {
	// const [appIsReady, setAppIsReady] = useState(false);
	// useEffect(() => {
	// 	async function prepare() {
	// 		try {
	// 			// Keep the splash screen visible while we fetch resources
	// 			await SplashScreen.preventAutoHideAsync();
	// 			// Pre-load fonts, make any API calls you need to do here
	// 			// Artificially delay for two seconds to simulate a slow loading
	// 			// experience. Please remove this if you copy and paste the code!
	// 			await new Promise((resolve) => setTimeout(resolve, 3000));
	// 		} catch (e) {
	// 			console.warn(e);
	// 		} finally {
	// 			// Tell the application to render
	// 			setAppIsReady(true);
	// 		}
	// 	}
	//
	// 	prepare();
	// }, []);

	// const onLayoutRootView = useCallback(async () => {
	// 	if (appIsReady) {
	// 		// This tells the splash screen to hide immediately! If we call this after
	// 		// `setAppIsReady`, then we may see a blank screen while the app is
	// 		// loading its initial state and rendering its first pixels. So instead,
	// 		// we hide the splash screen once we know the root view has already
	// 		// performed layout.
	// 		await SplashScreen.preventAutoHideAsync();
	// 	}
	// }, [appIsReady]);
	//
	// if (!appIsReady) {
	// 	return null;
	// }

	const [data, setData] = React.useState({
		username: '',
		password: '',
		check_textInputChange: false,
		secureTextEntry: true,
		isValidUser: true,
		isValidPassword: true,
	});

	const handleValidUser = (val) => {
		if (val.trim().length >= 4) {
			setData({
				...data,
				isValidUser: true,
			});
		} else {
			setData({
				...data,
				isValidUser: false,
			});
		}
	};

	const updateSecureTextEntry = () => {
		setData({
			...data,
			secureTextEntry: !data.secureTextEntry,
		});
	};

	return (
		<ImageBackground
			// onLayout={onLayoutRootView}
			source={require('../assets/image/backgr123.png')}
			resizeMode="cover"
			style={{
				flex: 1,
			}}
		>

			<LinearGradient style={styles.linea} colors={['#000000', '#000000']}>
				<KeyboardAvoidingView
								style={styles.container}
								behavior={Platform.OS === 'ios' ? 'position' : 'padding'}
								enabled
							>
					<ScrollView>,
						<CustomText style={styles.text}> {title}</CustomText>
						<View style={[styles.inputView]}>
							<Formik
								validationSchema={loginValidationSchema}
								initialValues={{ email: '', password: '' }}
								onSubmit={(values) => console.log(values)}
							>
								{({ handleChange, handleBlur, values, errors, isValid }) => (
									<>
										<View style={styles.sectionStyle}>
											<Image
												source={require('../assets/image/emailIcon.png')}
												style={styles.imageStyle}
											/>
											<TextInput
												placeholderTextColor="#FFFFFF"
												placeholder={'Email'}
												opacity={0.7}
												onEndEditing={(e) =>
													handleValidUser(e.nativeEvent.text)
												}
												keyboardType="email-address"
												name="email"
												onChangeText={handleChange('email')}
												onBlur={handleBlur('email')}
												value={values.email}
											/>
										</View>

										{errors.email && (
											<CustomText style={{ fontSize: 13, color: 'red' }}>
												{errors.email}
											</CustomText>
										)}
									</>
								)}
							</Formik>

							<Formik
								validationSchema={loginValidationSchema}
								initialValues={{ email: '', password: '' }}
								onSubmit={(values) => console.log(values)}
							>
								{({
									handleChange,
									handleBlur,
									values,
									errors,
									isValid,
									touched,
								}) => (
									<>
										<View style={[styles.sectionStyle, { marginTop: 20 }]}>
											<Image
												source={require('../assets/image/passwordIcon.png')}
												style={styles.imageStyle}
											/>

											<TextInput
												secureTextEntry={data.secureTextEntry ? true : false}
												placeholderTextColor="white"
												placeholder="Password"
												opacity={0.7}
												autoCapitalize="none"
												name="password"
												onChangeText={handleChange('password')}
												onBlur={handleBlur('password')}
												value={values.password}
											/>
											<TouchableOpacity onPress={updateSecureTextEntry}>
												{data.secureTextEntry ? (
													<Feather
														name="eye-off"
														color="white"
														size={20}
														style={{ paddingLeft: 190 }}
													/>
												) : (
													<Feather
														name="eye"
														color="white"
														size={20}
														style={{ paddingLeft: 190 }}
													/>
												)}
											</TouchableOpacity>
										</View>
										{errors.password && (
											<CustomText style={{ fontSize: 13, color: 'red' }}>
												{errors.password}
											</CustomText>
										)}

										<TouchableOpacity
											style={{ width: width / 1.3 }}
											onPress={() =>
												navigation.navigate('ForgetPassScreen', {
													forget: forget,
												})
											}
										>
											<CustomText style={styles.forgot}> {forget}</CustomText>
										</TouchableOpacity>
										<TouchableOpacity
											style={[styles.login, { zIndex: 100 }]}
											onPress={() => navigation.navigate('HomeScreen')}
											title="LOGIN"
											disabled={!isValid}
										>
											<CustomText style={{ color: 'white', fontSize: 16 }}>
												{login}
											</CustomText>
										</TouchableOpacity>
									</>
								)}
							</Formik>

							<TouchableOpacity
								style={styles.bottom}
								onPress={() => navigation.navigate('createAccScreen')}
							>
								<CustomText
									style={{
										color: '#FFFFFF',
										position: 'absolute',
										textAlignVertical: 'bottom',
									}}
								>
									{create}
								</CustomText>
							</TouchableOpacity>
						</View>
					</ScrollView>
				</KeyboardAvoidingView>
			</LinearGradient>
		</ImageBackground>
	);
};

const styles = StyleSheet.create({
	container: {
		flex: 1,
	},
	scr: {
		flex: 1,
		justifyContent: 'center',
		alignItems: 'center',
	},
	text: {
		color: '#FFFFFF',
		fontSize: 48,
		fontWeight: 'bold',
		textAlign: 'center',
		marginTop: 120,
		// backgroundColor: '#000000a0',
	},
	input: {
		margin: 12,
		borderWidth: 1,
		borderColor: '#FFFFFF',
		width: width / 1.3,
		height: 60,
		backgroundColor: 'grey',
		borderRadius: 10,
	},
	inputView: {
		marginTop: 200,
		justifyContent: 'center',
		alignItems: 'center',
		width: width,
	},
	sectionStyle: {
		flexDirection: 'row',
		alignItems: 'center',
		borderColor: '#FFFFFF',
		width: width / 1.3,
		height: 60,
		backgroundColor: 'grey',
		borderRadius: 10,
		opacity: 0.8,
		marginTop: 20,
	},
	imageStyle: {
		padding: 10,
		margin: 15,
		height: 20,
		width: 20,
		resizeMode: 'stretch',
		alignItems: 'center',
	},
	linea: {
		flex: 1,
		opacity: 0.7,
	},
	forgot: {
		paddingLeft: width / 2.24,
		fontSize: 16,
		color: 'white',
		marginTop: 10,
	},
	login: {
		alignItems: 'center',
		justifyContent: 'center',
		borderColor: '#FFFFFF',
		width: width / 1.3,
		height: 60,
		backgroundColor: '#5663FF',
		borderRadius: 10,
		marginTop: 90,
	},
	bottom: {
		justifyContent: 'flex-end',
		marginBottom: 0,
		alignItems: 'center',
		height: 150,
	},
	errorMsg: {
		color: '#FF0000',
		fontSize: 14,
	},
});
export default Login;

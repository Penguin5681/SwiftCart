/*
 SwiftCart v1.0.0
 Copyright (c) 2024 Pranav Sinha
 Licensed under the CC0-1.0 License.
*/
import {
	Animated,
	Image,
	NativeSyntheticEvent,
	SafeAreaView,
	StatusBar,
	Text,
	TouchableOpacity,
	View,
} from 'react-native';
import {useTheme} from '../../../Hooks/themeHook.tsx';
import {Colors} from '../../../Constants/Colors/Colors.tsx';
import {GlobalStyle} from '../../../Styles/Global/GlobalStyle.tsx';
import PagerView from 'react-native-pager-view';
import {Style} from '../../../Styles/OnboardingScreen/Style.tsx';
import {
	heightPercentageToDP,
	widthPercentageToDP,
} from 'react-native-responsive-screen';
import {useRef, useState} from 'react';

const OnboardingScreen = ({navigation} : {navigation: any}) => {
	const pagerViewRef = useRef<PagerView>(null);
	const [currentPage, setCurrentPage] = useState<number>(0);
	const dotWidth = useRef([
		new Animated.Value(5),
		new Animated.Value(5),
		new Animated.Value(5),
	]).current;
	const handlePageChange = (
		event: NativeSyntheticEvent<{position: number}>,
	) => {
		const position = event.nativeEvent.position;
		setCurrentPage(position);
		dotWidth.forEach((dot, index) => {
			Animated.timing(dot, {
				toValue: index === position ? 32 : 5,
				duration: 300,
				useNativeDriver: false,
			}).start();
		});
	};

	return (
		<SafeAreaView
			style={[
				GlobalStyle.globalStyle,
				{backgroundColor: useTheme().isDarkMode ? Colors.Black : Colors.White},
			]}>
			<StatusBar
				backgroundColor={useTheme().isDarkMode ? Colors.Black : Colors.White}
				barStyle={useTheme().isDarkMode ? 'light-content' : 'dark-content'}
				translucent={true}
			/>

			<View style={Style.header}>
				<TouchableOpacity>
					<Text
						style={[
							Style.skipLabel,
							{color: useTheme().isDarkMode ? Colors.White : Colors.Black},
						]}>
						Skip
					</Text>
				</TouchableOpacity>
			</View>

			<PagerView
				style={Style.pagerView}
				ref={pagerViewRef}
				onPageSelected={handlePageChange}
				initialPage={0}>
				<View style={Style.page}>
					<Image
						resizeMode={'contain'}
						source={require('../../../Assets/OnboardingScreenAssets/Images/slide1.png')}
						style={{
							width: widthPercentageToDP('100%'),
							height: heightPercentageToDP('45%'),
						}}
					/>

					<View style={Style.slideDescriptions}>
						<Text
							style={[
								Style.slideDescriptionHeader,
								{color: useTheme().isDarkMode ? Colors.White : Colors.Black},
							]}>
							Choose Products
						</Text>

						<Text style={Style.slideDescriptionFooter}>
							Choose from thousands of products, from fashion to tech. Find what
							you love, effortlessly.
						</Text>
					</View>
				</View>

				<View style={Style.page}>
					<Image
						resizeMode={'contain'}
						source={require('../../../Assets/OnboardingScreenAssets/Images/slide2.png')}
						style={{
							width: widthPercentageToDP('100%'),
							height: heightPercentageToDP('45%'),
						}}
					/>

					<View style={Style.slideDescriptions}>
						<Text
							style={[
								Style.slideDescriptionHeader,
								{color: useTheme().isDarkMode ? Colors.White : Colors.Black},
							]}>
							Make Payment
						</Text>

						<Text
							adjustsFontSizeToFit={true}
							style={Style.slideDescriptionFooter}>
							Seamless payments and speedy delivery. Start shopping smarter
							today.
						</Text>
					</View>
				</View>

				<View style={Style.page}>
					<Image
						resizeMode={'contain'}
						source={require('../../../Assets/OnboardingScreenAssets/Images/slide3.png')}
						style={{
							width: widthPercentageToDP('100%'),
							height: heightPercentageToDP('45%'),
						}}
					/>

					<View style={Style.slideDescriptions}>
						<Text
							style={[
								Style.slideDescriptionHeader,
								{color: useTheme().isDarkMode ? Colors.White : Colors.Black},
							]}>
							Get Your Order
						</Text>

						<Text style={Style.slideDescriptionFooter}>
							Get the product you love at your door steps.
						</Text>
					</View>
				</View>
			</PagerView>

			<View
				style={[
					Style.footer,
					{justifyContent: currentPage > 0 ? 'space-between' : 'flex-end'},
				]}>
				{currentPage > 0 && (
					<TouchableOpacity
						onPress={() => pagerViewRef.current?.setPage(currentPage - 1)}>
						<Text style={Style.inActiveText}>Prev</Text>
					</TouchableOpacity>
				)}

				<View style={Style.indicatorDotWrapper}>
					{dotWidth.map((width, index) => (
						<Animated.View key={index} style={[Style.inActiveDot, {width}]} />
					))}
				</View>

				<TouchableOpacity
					onPress={() => {
						if (currentPage < 2) {
							pagerViewRef.current?.setPage(currentPage + 1);
						} else {
							// Handle "Get Started" action
						}
					}}>
					<Text style={Style.activeText}>
						{currentPage === 2 ? 'Get Started' : 'Next'}
					</Text>
				</TouchableOpacity>
			</View>
		</SafeAreaView>
	);
};

export default OnboardingScreen;

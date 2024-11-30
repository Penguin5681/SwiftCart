/*
 SwiftCart v1.0.0
 Copyright (c) 2024 Pranav Sinha
 Licensed under the CC0-1.0 License.
*/

import {
	SafeAreaView,
	StatusBar, Text,
	TouchableOpacity,
	useColorScheme,
	View
} from "react-native";
import {GlobalStyle} from "../../../Styles/Global/GlobalStyle.tsx";
import {Colors} from "../../../Constants/Colors/Colors.tsx";
import {Style} from "../../../Styles/Screens/LoginScreen/Style.tsx";
import {SvgXml} from "react-native-svg";
import {Icon} from "../../../Assets/Icons/SVG/Icon.tsx";
import DancingLabel from "../../../Components/DancingLabel/DancingLabel.tsx";
import {useState} from "react";
import {createMaterialTopTabNavigator} from "@react-navigation/material-top-tabs";
import AwesomeButton from "react-native-really-awesome-button";
import {widthPercentageToDP} from "react-native-responsive-screen";

const Tabs = createMaterialTopTabNavigator();

const LoginScreen = ({navigation} : {navigation: any}) => {
	const [isDarkMode, setIsDarkMode] = useState<boolean>(useColorScheme() === 'dark');
	const toggleDark = () => {
		setIsDarkMode(!isDarkMode);
	};

	return (
		<SafeAreaView style={[GlobalStyle.globalStyle, {
			backgroundColor: isDarkMode ? Colors.Black : Colors.White,
			marginTop: StatusBar.currentHeight,
		}]}>
			<StatusBar
				backgroundColor={isDarkMode ? Colors.Black : Colors.White}
				barStyle={isDarkMode ? 'light-content' : 'dark-content'}
				translucent={true}
			/>
			<View
				style={Style.header}>
				<View
					style={Style.headerGreetingTextWrapper}>
					<Text
						style={[Style.headerGreetingText, {color: isDarkMode ? Colors.White : Colors.Black}]}>
						Welcome to&nbsp;&nbsp;
					</Text>
					<TouchableOpacity
						onPress={() => {
							toggleDark();
						}}>
						<DancingLabel
							text={"SwiftCart"}
							fontSize={24}
							fontWeight={'700'}
							isDarkMode={isDarkMode}/>
					</TouchableOpacity>
				</View>
				<View style={Style.signInTextWrapper}>
					<Text style={[Style.signInText, {color: isDarkMode ? Colors.White : Colors.Black}]}>
						Sign In
					</Text>
				</View>
			</View>

			<View style={Style.formWrapper}>

			</View>

		</SafeAreaView>
	);
};

export default LoginScreen;

/*
<AwesomeButton
					raiseLevel={0}
					backgroundColor={Colors.SixOne}
					borderRadius={18}
					animatedPlaceholder={true}>
					<SvgXml
						style={Style.googleIcon}
						xml={Icon.googleIcon}/>
					<Text
						adjustsFontSizeToFit={true}
						style={{color: Colors.White, fontSize: 16}}>
						Sign in with Google
					</Text>
				</AwesomeButton>

 */

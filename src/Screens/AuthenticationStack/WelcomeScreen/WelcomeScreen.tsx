/*
 SwiftCart v1.0.0
 Copyright (c) 2024 Pranav Sinha
 Licensed under the CC0-1.0 License.
*/

import {SafeAreaView} from "react-native";
import {GlobalStyle} from "../../../Styles/Global/GlobalStyle.tsx";
import {useTheme} from "../../../Hooks/themeHook.tsx";
import {Colors} from "../../../Constants/Colors/Colors.tsx";

const WelcomeScreen = ({navigation} : {navigation: any}) => {
	const isDarkMode = useTheme().isDarkMode;
	return (
		<SafeAreaView style={[GlobalStyle.globalStyle, {backgroundColor: isDarkMode ? Colors.Black : Colors.White}]}>

		</SafeAreaView>
	);
};

export default WelcomeScreen;

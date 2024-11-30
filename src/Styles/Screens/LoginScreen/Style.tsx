/*
 SwiftCart v1.0.0
 Copyright (c) 2024 Pranav Sinha
 Licensed under the CC0-1.0 License.
*/
import {StyleSheet} from "react-native";
import {horizontalScale, scaleFontSize, verticalScale} from "../../../Util/Scaling/scalingUtil.ts";
import {getInterFontFamily, getSoraFontFamily} from "../../../Util/FontHelper/fontHelper";
import {Colors} from "../../../Constants/Colors/Colors.tsx";
import {widthPercentageToDP} from "react-native-responsive-screen";

export const Style = StyleSheet.create({
	header: {
		marginTop: verticalScale(12),
		marginHorizontal: horizontalScale(25),
		justifyContent: 'space-between',
	},
	iconWrapper: {

	},
	textWrapper: {
		marginLeft: horizontalScale(18),
	},
	contentWrapper: {
		flex: 1,
		marginHorizontal: horizontalScale(18),
	},
	pagerView: {
		flex: 1,
	},
	headerGreetingTextWrapper: {
		flexDirection: 'row',
		alignItems: 'center',
	},
	headerGreetingText: {
		fontSize: scaleFontSize(18),
		fontFamily: getInterFontFamily('Inter', '800'),
	},
	signInTextWrapper: {

	},
	signInText: {
		fontSize: scaleFontSize(45),
		fontFamily: getSoraFontFamily('Sora', '500'),
	},
	signInProviderWrapper: {
		flexDirection: 'row',
		marginTop: verticalScale(12),
		marginHorizontal: horizontalScale(25),
		backgroundColor: "#606",
	},
	googleIcon: {
		width: 25,
		height: 25,
		marginRight: horizontalScale(8),
	},
	googleButtonWrapper: {
		width: '50%',
	},
	facebookButtonWrapper: {
		width: '50%',
	},
	formWrapper: {

	},
});

import {StyleSheet} from "react-native";
import {Colors} from "../../Constants/Colors/Colors.tsx";
import {getComfortaFont, getSoraFontFamily} from "../../Util/FontHelper/fontHelper";
import {horizontalScale, scaleFontSize, verticalScale} from "../../Util/Scaling/scalingUtil.ts";
import {widthPercentageToDP} from "react-native-responsive-screen";

export const Style = StyleSheet.create({
	pagerView: {
		flex: 1,
	},
	header: {
		flexDirection: 'row',
		justifyContent: 'flex-end',
		marginHorizontal: 25,
		marginTop: verticalScale(12),
	},
	skipLabel: {
		fontSize: scaleFontSize(18),
		fontFamily: getSoraFontFamily('Sora', '500'),
	},
	slideDescriptions: {
		flexDirection: 'column',
		alignItems: 'center',
		justifyContent: 'center',
	},
	slideDescriptionHeader: {
		fontFamily: getSoraFontFamily('Sora', '700'),
		fontSize: scaleFontSize(30),
		textAlign: 'center',
	},
	slideDescriptionFooter: {
		color: "#A8A8A9",
		textAlign: 'center',
		marginTop: verticalScale(4),
	},
	footer: {
		flexDirection: 'row',
		justifyContent: 'space-between',
		marginHorizontal: horizontalScale(25),
		marginBottom: verticalScale(10),
	},
	page: {
		marginTop: verticalScale(50),
	},
	indicatorDotWrapper: {
		flexDirection: 'row',
		justifyContent: 'center',
		alignSelf: 'center',
		position: 'absolute',
		width: '100%'
	},
	activeDot: {
		width: 32,
		height: 4,
		borderRadius: 20,
		marginHorizontal: 4,
		backgroundColor: Colors.Primary,
	},
	inActiveDot: {
		width: 5,
		height: 5,
		borderRadius: 100,
		marginHorizontal: 4,
		backgroundColor: Colors.Primary,
	},
	activeText: {
		color: Colors.Primary,
		fontSize: scaleFontSize(17),
	},
	inActiveText: {
		color: "#A8A8A9",
		fontSize: scaleFontSize(17),
	}
});

import {Text} from "react-native";
import {getDancingScript} from "../../Util/FontHelper/fontHelper";
import {Colors} from "../../Constants/Colors/Colors.tsx";

interface VariableLabelProps {
	text: string,
	fontSize: number,
	fontWeight: string,
	isDarkMode: boolean,
}

const DancingLabel = (props: VariableLabelProps) => {
	return (
		<Text style={[{
			fontFamily: getDancingScript('DancingScript', props.fontWeight),
			color: Colors.Primary,
			fontSize: props.fontSize,
		}]}>
			{props.text}
		</Text>
	)
};

export default DancingLabel;

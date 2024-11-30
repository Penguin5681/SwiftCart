/*
 SwiftCart v1.0.0
 Copyright (c) 2024 Pranav Sinha
 Licensed under the CC0-1.0 License.
*/
import AwesomeButton from "react-native-really-awesome-button";
import {Colors} from "../../Constants/Colors/Colors.tsx";

interface PrimaryButtonProps {
	text: string,
	onPress: Function,
	progress: boolean,
}

const PrimaryButton = (props: PrimaryButtonProps) => {
	return (
		<AwesomeButton
			raiseLevel={0}
			stretch={true}
			backgroundColor={Colors.Primary}
			progress={props.progress}
			onPress={async (next) => {
				if (next) {
					next();
				}
				props.onPress();
			}}>
			{props.text}
		</AwesomeButton>
	);
};

export default PrimaryButton;

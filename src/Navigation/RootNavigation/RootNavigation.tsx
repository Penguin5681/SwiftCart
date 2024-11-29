import {RootRoutes} from './RootRoutes.ts';
import TestScreen1 from '../../Screens/TestScreen1/TestScreen1.tsx';
import TestScreen2 from '../../Screens/TestScreen2/TestScreen2.tsx';
import {createStackNavigator} from "@react-navigation/stack";

const Stack = createStackNavigator();

const RootNavigation = () => {
	return (
		<Stack.Navigator
			initialRouteName={RootRoutes.TestScreen1}>
			<Stack.Screen name={RootRoutes.TestScreen1} component={TestScreen1} />
			<Stack.Screen name={RootRoutes.TestScreen2} component={TestScreen2} />
		</Stack.Navigator>
	);
};

export default RootNavigation;

import {AuthenticationRoutes} from './Routes.tsx';
import {createStackNavigator} from "@react-navigation/stack";
import OnboardingScreen from "../../Screens/AuthenticationStack/OnboardingScreen/OnboardingScreen.tsx";

const Stack = createStackNavigator();

const RootNavigation = () => {
	return (
		<Stack.Navigator
			screenOptions={{headerShown: false}}
			initialRouteName={AuthenticationRoutes.OnboardingScreen}>
			<Stack.Screen
				name={AuthenticationRoutes.OnboardingScreen}
				component={OnboardingScreen}/>
		</Stack.Navigator>
	);
};

export default RootNavigation;

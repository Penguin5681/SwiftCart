/*
 SwiftCart v1.0.0
 Copyright (c) 2024 Pranav Sinha
 Licensed under the CC0-1.0 License.
*/

import {AuthenticationRoutes} from './Routes.tsx';
import {createStackNavigator} from "@react-navigation/stack";
import OnboardingScreen from "../../Screens/AuthenticationStack/OnboardingScreen/OnboardingScreen.tsx";
import LoginScreen from "../../Screens/AuthenticationStack/LoginScreen/LoginScreen.tsx";

const Stack = createStackNavigator();

const RootNavigation = () => {
	return (
		<Stack.Navigator
			screenOptions={{headerShown: false}}
			initialRouteName={AuthenticationRoutes.OnboardingScreen}>
			<Stack.Screen
				name={AuthenticationRoutes.OnboardingScreen}
				component={OnboardingScreen}/>
			<Stack.Screen
				name={AuthenticationRoutes.LoginScreen}
				component={LoginScreen}/>
		</Stack.Navigator>
	);
};

export default RootNavigation;

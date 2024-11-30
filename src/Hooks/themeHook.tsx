/*
 SwiftCart v1.0.0
 Copyright (c) 2024 Pranav Sinha
 Licensed under the CC0-1.0 License.
*/

import { useColorScheme } from 'react-native';

export const useTheme = () => {
	const isDarkMode = useColorScheme() === 'dark';
	return { isDarkMode };
};

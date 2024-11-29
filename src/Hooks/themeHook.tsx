import { useColorScheme } from 'react-native';

export const useTheme = () => {
	const isDarkMode = useColorScheme() === 'dark';
	return { isDarkMode };
};

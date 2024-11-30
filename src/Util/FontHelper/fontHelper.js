/*
 SwiftCart v1.0.0
 Copyright (c) 2024 Pranav Sinha
 Licensed under the CC0-1.0 License.
*/
export const getComfortaFont = (baseFont = "Comfortaa", weight) => {
	switch (weight) {
		case '300':
			return `${baseFont}-Light`;
		case '400':
		case 'normal':
			return `${baseFont}-Regular`;
		case '500':
			return `${baseFont}-Medium`;
		case '600':
			return `${baseFont}-SemiBold`;
		case '700':
		case 'bold':
			return `${baseFont}-Bold`;
		default:
			return `${baseFont}-Regular`;
	}
};

export const getInterFontFamily = (baseFont = 'Inter', weight) => {
	switch (weight) {
		case '100':
			return `${baseFont}-Thin`;
		case '200':
			return `${baseFont}-ExtraLight`;
		case '300':
			return `${baseFont}-Light`;
		case '400':
		case 'normal':
			return `${baseFont}-Regular`;
		case '500':
			return `${baseFont}-Medium`;
		case '600':
			return `${baseFont}-SemiBold`;
		case '700':
		case 'bold':
			return `${baseFont}-Bold`;
		case '800':
			return `${baseFont}-ExtraBold`;
		case '900':
			return `${baseFont}-Black`;
		default:
			return `${baseFont}-Regular`;
	}
};

export const getSoraFontFamily = (baseFont = 'Sora', weight) => {
	switch (weight) {
		case '100':
			return `${baseFont}-Thin`;
		case '200':
			return `${baseFont}-ExtraLight`;
		case '300':
			return `${baseFont}-Light`;
		case '400':
		case 'normal':
			return `${baseFont}-Regular`;
		case '500':
			return `${baseFont}-Medium`;
		case '600':
			return `${baseFont}-SemiBold`;
		case '700':
		case 'bold':
			return `${baseFont}-Bold`;
		case '800':
			return `${baseFont}-ExtraBold`;
		case '900':
			return `${baseFont}-Black`;
		default:
			return `${baseFont}-Regular`;
	}
};

export const getDancingScript = (basefont = 'DancingScript', weight) => {
	switch (weight) {
		case '400':
			return `${basefont}-Regular`;
		case '700':
			return `${basefont}-Bold`;
		case '600':
			return `${basefont}-SemiBold`;
		case '500':
			return `${basefont}-Medium`;
		default:
			return `${basefont}-Regular`;
	}
}

import { createIcon } from '@chakra-ui/icons';

// using `path`
const PlayIcon = createIcon({
	displayName: 'UpDownIcon',
	viewBox: '0 0 30 20',
	// path can also be an array of elements, if you have multiple paths, lines, shapes, etc.
	path: <path d="M18 13.5L0 26.4904L0 0.509619L18 13.5Z" fill="white" />,
});

export default PlayIcon;

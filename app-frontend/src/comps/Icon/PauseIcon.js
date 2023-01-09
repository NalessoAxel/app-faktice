import { createIcon } from '@chakra-ui/icons';

// using `path`
const PauseIcon = createIcon({
	displayName: 'UpDownIcon',
	viewBox: '0 0 30 20',
	// path can also be an array of elements, if you have multiple paths, lines, shapes, etc.
	path: (
		<>
			<rect y="0.5" width="7" height="26" fill="white" />
			<rect x="12" y="0.5" width="7" height="26" fill="white" />
		</>
	),
});

export default PauseIcon;

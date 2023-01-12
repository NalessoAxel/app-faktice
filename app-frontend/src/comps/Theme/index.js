import { extendTheme } from '@chakra-ui/react';

import Button from './comps/Button';
import Heading from './comps/Heading';

// ? https://chakra-ui.com/docs/theming/theme#typography
const fonts = {
	body: 'Inter, system-ui, sans-serif',
};

// ? https://chakra-ui.com/docs/theming/theme#breakpoints
const breakpoints = ['576px', '768px', '992px', '1200px', '1440px'];
breakpoints.base = '0px';
breakpoints.sm = '576px';
breakpoints.md = '768px';
breakpoints.lg = '992px';
breakpoints.xl = '1200px';
breakpoints.xxl = '1440px';

// ? https://chakra-ui.com/docs/theming/theme#colors
const colors = {
	body: '#1B1B1B',
};

// ? https://chakra-ui.com/docs/theming/theme#spacing
const space = {};

// ? https://chakra-ui.com/docs/features/color-mode
const config = {
	initialColorMode: 'light',
	useSystemColorMode: false,
};

// ? I need to expose my variables to JS as well so I’m creating an object for it

const theme = extendTheme({
	fonts,
	breakpoints,
	colors,
	space,
	config,
	styles: {
		global: (props) => ({
			':root': {
				'--seek-before-width': '0',
			},
			'.loader-container': {
				position: 'fixed',
				top: '50%',
				transform: 'translate(-50%, -50%)',
				zIndex: '999',
				display: 'flex',
				paddingRight: '50px',
				paddingBottom: '50px',
			},
			'.counter-container': {
				overflow: 'hidden',
				height: '10vw',
				minHeight: '10vw',
			},
			'image-loader': {
				zIndex: '9999',
				marginTop: '0px',
				marginBottom: '1vw',
				color: 'white',
				fontSize: '20vw',
				lineHeight: '20vw',
			},
			'.progressBar': {
				width: '100%',
				appearance: 'none',
				borderRadius: '10px',
				position: 'relative',
				outline: 'none',
				height: '18px',
			},

			'.progressBar::before': {
				content: '""',
				height: '18px',
				width: 'var(--seek-before-width)',
				backgroundColor: '#696767',
				borderTopLeftRadius: '10px',
				borderBottomLeftRadius: '10px',
				position: 'absolute',
				top: '0',
				left: '0',
				zIndex: '2',
				cursor: 'pointer',
			},
			'.progressBar::-webkit-slider-thumb': {
				height: '15px',
				width: ' 15px',
				borderRadius: '50%',
				border: 'none',
				backgroundColor: '#9C9C9C',
				colors: 'white',
				cursor: 'pointer',
				position: 'relative',
				margin: '-2px 0 0 0',
				zIndex: '3',
			},
			'.progressBar:active::-webkit-slider-thumb': {
				transform: 'scale(1.2)',
				backgroundColor: '#696767',
			},
			// #A4A4A4
		}),
	},
	components: {
		Heading,
		Button,
	},
});

export default theme;

// ? https://chakra-ui.com/docs/theming/customize-theme

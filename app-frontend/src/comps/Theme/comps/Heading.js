const Heading = {
	baseStyle: {
		color: '#ffffff',
		fontFamily: 'body',
	},
	variants: {
		h1: () => ({
			fontSize: '10.25rem',
			fontWeight: '600',
			lineHeight: '1.2em',
			letterSpacing: '0.05em',
		}),

		h2: () => ({
			fontSize: '3rem',
			fontWeight: '700',
			lineHeight: '1.2em',
			letterSpacing: '0.05em',
		}),

		h3: () => ({
			fontSize: '2.75rem',
			lineHeight: '1.2em',
			letterSpacing: '0.05em',
		}),
		h4: () => ({
			fontSize: '1.6rem',
			lineHeight: '1.2em',
			letterSpacing: '0.05em',
		}),
	},
};

export default Heading;

const Button = {
	baseStyle: {
		textTransform: 'none',
	},
	variants: {
		primary: {
			backgroundColor: 'transparent',
			color: '#fff',
			fontSize: '12px',

			height: '40px',

			display: 'flex',
			alignContent: 'center',

			border: 'none',
			borderRadius: 'none',

			_hover: {
				cursor: 'pointer',
			},

			_focus: {
				outline: 'none',
				border: 'none',
				boxShadow: 'none',
			},

			_active: {
				textDecoration: 'none',
				outline: 'none',
				border: 'none',
			},
		},
	},
	defaultProps: {
		variant: 'primary',
	},
};

export default Button;

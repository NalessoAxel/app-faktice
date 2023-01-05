const path = require('path');

module.exports = {
	presets: ['next/babel'],
	plugins: [
		[
			'babel-plugin-module-resolver',
			{
				root: ['./src'],
				alias: {
					_contexts: path.resolve(__dirname, './src/contexts'),
					_comps: path.resolve(__dirname, './src/comps'),
					_lib: path.resolve(__dirname, './src/lib'),
					_utils: path.resolve(__dirname, './src/comps/Utils'),
				},
			},
		],
	],
};

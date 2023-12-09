/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ['*.html'],
	theme: {
		container: {
			center: true
		},
		fontFamily: {
			roboto: 'Roboto'
		},
		extend: {
			animationDelay: {
				1700: '1700ms',
				2500: '2500ms'
			},
			colors: {
				dark: '#14213d',
				light: '#E5E5E5',
				yellow: '#FCA311'
			}
		}
	},
	plugins: [require('tailwindcss-animation-delay')]
};

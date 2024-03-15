/** @type {import('tailwindcss').Config} */
export default {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	darkMode: 'class',
	theme: {
		extend: {
			screens: {
			  '3xl': '1599px',
			  '4xl': '1889px',
			  'sx' : '394px',
			  'sxx' : '378px',
			},
		  },
	},
	plugins: [],
}

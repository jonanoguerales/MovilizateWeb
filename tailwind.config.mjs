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
			  '5xl':'1400px',
			  '6xl':'1250px',
			  '7xl':'2100px',
			  '1sm':'550px',
			  '2sm':'722px',
			  '3sm':'572px',
			},
		  },
	},
	plugins: [],
}

/** @type {import('tailwindcss').Config} */
export default {
	content: ["./src/**/*.{js,ts,jsx,tsx}"],
	important: true,
	prefix: "cb-",
	theme: {
		extend: {
			fontFamily: {
				motserette: ["Montserrat", "serif"],
			},
		},
	},
	plugins: [],
};

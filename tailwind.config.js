/** @type {import('tailwindcss').Config} */
export default {
	content: ["./src/**/*.{js,ts,jsx,tsx}"],
	important: "#chatbot-container",
	theme: {
		extend: {
			fontFamily: {
				motserette: ["Montserrat", "serif"],
			},
		},
	},
	plugins: [],
};

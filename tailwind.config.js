/** @type {import('tailwindcss').Config} */
export default {
	content: ["./src/**/*.{js,ts,jsx,tsx}"],
	important: "#chatbot-container",
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

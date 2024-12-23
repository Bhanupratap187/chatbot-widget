/** @type {import('tailwindcss').Config} */
export default {
	content: ["./src/**/*.{js,ts,jsx,tsx}"],
	important: true,
	prefix: "cb-",
	theme: {
		extend: {
			fontFamily: {
				roboto: ["Roboto", "sans-serif"],
			},
			display: {
				table: "table",
				"table-cell": "table-cell",
			},
		},
	},
	plugins: [],
};

/** @type {import('tailwindcss').Config} */
export default {
	darkMode: "class", // ← This enables dark mode via class
	content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
	theme: {
		extend: {
			colors: {
				primary: "#DC2626",
				secondary: "#1E40AF",
				success: "#16A34A",
				dark: "#0F172A",
				light: "#F8FAFC",
				accent: "#F59E0B",
			},
			fontFamily: {
				poppins: ["Poppins", "sans-serif"],
			},
		},
	},
	plugins: [],
};

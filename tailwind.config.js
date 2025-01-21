/** @type {import('tailwindcss').Config} */
export default {
    darkMode: ["class"],
    content: ["./index.html", "./src/**/*.{ts,tsx,js,jsx}"],
  theme: {
  	extend: {
  		borderRadius: {
  			lg: 'var(--radius)',
  			md: 'calc(var(--radius) - 2px)',
  			sm: 'calc(var(--radius) - 4px)'
  		},
			colors: {
				color: "#4A4A4A",
				default: "#CBD5E1",
				secondary: "#FF4300",
				dark: "#131920",
			},
			backgroundImage: {
				background: "url('/svg/background.svg')"
			}
  	}
  },
  plugins: [require("tailwindcss-animate")],
};

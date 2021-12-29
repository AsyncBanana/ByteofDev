module.exports = {
	content: [
		"./public/**/*.html",
		"./src/**/*.{astro,js,jsx,svelte,ts,tsx,vue}",
	],
	darkMode: "class",
	plugins: [require("daisyui")],
	daisyui: {
		themes: ["light", "dark"],
	},
	theme: {
		extend: {
			fontFamily: {
				sans: ["Inter", "Verdana", "Geneva", "Tahoma", "sans-serif"],
			},
		},
	},
};

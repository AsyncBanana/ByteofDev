module.exports = {
	content: [
		"./public/**/*.html",
		"./src/**/*.{astro,js,jsx,svelte,ts,tsx,vue}",
	],
	darkMode: "media",
	plugins: [require("daisyui")],
	daisyui: {
		themes: [
			"light",
			{
				dark: {
					...require("daisyui/src/theming/themes")["[data-theme=dark]"],
					"base-content": "rgb(230,230,230)",
				},
			},
		],
		logs: false,
	},
	theme: {
		extend: {
			fontFamily: {
				sans: ["Inter", "Verdana", "Geneva", "Tahoma", "sans-serif"],
			},
		},
	},
};

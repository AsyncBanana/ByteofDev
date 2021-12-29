module.exports = {
	useTabs: true,
	tabWidth: 2,
	plugins: [
		require("./node_modules/prettier-plugin-svelte"),
		require("./node_modules/prettier-plugin-astro"),
	],

	overrides: [
		{
			files: "**/*.svx",
			options: { parser: "markdown" },
		},
		{
			files: "**/*.ts",
			options: { parser: "typescript" },
		},
		{
			files: "**/*.svelte",
			options: { parser: "svelte" },
		},
		{
			files: "**/*.astro",
			options: { parser: "astro" },
		},
	],
};


/** @type {import("prettier").Config} */
export default {
	useTabs: true,
	tabWidth: 2,
	plugins: [
		"prettier-plugin-svelte",
		"prettier-plugin-astro"
	],

	overrides: [
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

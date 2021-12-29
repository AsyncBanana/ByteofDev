// @ts-check
export default /** @type {import('astro').AstroUserConfig} */ ({
	// Comment out "renderers: []" to enable Astro's default component support.
	//renderers: [],
	vite: {
		plugins: [],
	},
	buildOptions: {
		site: "https://byteofdev.com",
	},
	markdownOptions: {
		render: [
			"@astrojs/markdown-remark",
			{
				remarkPlugins: [
					"remark-gfm",
					"remark-smartypants",
					"remark-prism",
					"@fec/remark-a11y-emoji",
					["remark-behead", { depth: 1 }],
				],
				rehypePlugins: [
					"rehype-slug",
					[
						"rehype-autolink-headings",
						{
							content: {
								type: "element",
								tagName: "span",
								properties: { className: ["headerLink"], ariaHidden: true },
								children: [],
							},
							behavior: "append",
						},
					],
				],
			},
		],
	},
});

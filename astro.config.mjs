import svelte from "@astrojs/svelte";
import sitemap from "@astrojs/sitemap";
import { defineConfig } from "astro/config";
import mdx from "@astrojs/mdx";
import tailwind from "@astrojs/tailwind";
import remarkPrism from "remark-prism";
import remarkEmoji from "@fec/remark-a11y-emoji";
import critters from "astro-critters";

// https://astro.build/config
export default defineConfig({
	markdown: [remarkPrism, remarkEmoji],
	integrations: [
		svelte(),
		sitemap({
			filter: (page) => page !== "https://byteofdev.com/posts/",
		}),
		mdx({
			optimize: true,
		}),
		tailwind(),
		critters(),
	],
	vite: {
		plugins: [],
	},
	site: "https://byteofdev.com",
	markdown: {
		syntaxHighlight: "prism",
	},
	experimental: {
		redirects: true,
	},
	redirects: {
		"/posts/": "/",
	},
});

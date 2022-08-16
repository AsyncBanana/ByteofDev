import rss from "@astrojs/rss";
import type { Post } from "$lib/modules/types";
const allPosts: Array<Post> = Object.values(
	import.meta.glob("/src/content/posts/*.mdx", { eager: true })
);
allPosts.sort((a, b) => b.frontmatter.published - a.frontmatter.published);
export const get = () =>
	rss({
		title: "ByteofDev",
		description: "Bite Sized articles for developers",
		customData: `<language>en-us</language>`,

		items: allPosts.map((item) => {
			return {
				title: item.frontmatter.title,
				description: item.frontmatter.description,
				link: item.url,
				pubDate: new Date(item.frontmatter.published),
			};
		}),
		site: import.meta.env.SITE,
	});

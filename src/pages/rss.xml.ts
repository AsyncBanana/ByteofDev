import rss from "@astrojs/rss";
import getPostUrl from "$lib/modules/getPostUrl";
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
			console.log(item.url);
			return {
				title: item.frontmatter.title,
				description: item.frontmatter.description,
				link: getPostUrl(item),
				pubDate: new Date(item.frontmatter.published),
			};
		}),
		site: import.meta.env.SITE,
	});

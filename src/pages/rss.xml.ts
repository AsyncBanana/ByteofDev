import rss from "@astrojs/rss";
import { getCollection } from "astro:content";
const allPosts = [
	...(await getCollection("posts")),
	...(await getCollection("tips")),
];
allPosts.sort((a, b) => b.data.published - a.data.published);
export const GET = () =>
	rss({
		title: "ByteofDev",
		description: "Bite Sized articles for developers",
		customData: `<language>en-us</language>`,

		items: allPosts.map((item) => {
			return {
				title: item.data.title,
				description: item.data.description,
				link: `${item.collection}/${item.slug}`,
				pubDate: new Date(item.data.published),
			};
		}),
		site: import.meta.env.SITE,
	});

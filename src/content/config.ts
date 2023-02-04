import { defineCollection, z } from "astro:content";
const postCollection = defineCollection({
	schema: z.object({
		title: z.string(),
		description: z.string(),
		tags: z.array(z.string()),
		author: z.string(),
		image: z.object({
			url: z.string(),
			alt: z.string(),
		}),
		published: z.date(),
		updated: z.date(),
	}),
});

export const collections = {
	posts: postCollection,
	tips: postCollection,
};

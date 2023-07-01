import { defineCollection, reference, z } from "astro:content";
const postCollection = defineCollection({
	type: "content",
	schema: z.object({
		title: z.string(),
		description: z.string(),
		tags: z.array(z.string()),
		author: reference('author'),
		image: z.object({
			url: z.string(),
			alt: z.string(),
		}),
		published: z.number(),
		updated: z.number(),
	}),
});
const authorCollection = defineCollection({
	type: "content",
	schema: z.object({
		name: z.string(),
		image: z.string(),
		website: z.string(),
		email: z.object({
			host: z.string(),
			name: z.string()
		}),
		github: z.string()
	})
})
export const collections = {
	posts: postCollection,
	tips: postCollection,
	author: authorCollection
};

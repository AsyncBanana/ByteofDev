import type { MarkdownInstance } from "astro";
export interface PostFrontmatter {
	title: string;
	description: string;
	author: string;
	tags: Array<string>;
	published: number;
	updated: number;
	image: {
		url: string;
		alt: string;
	};
}
export type Post = MarkdownInstance<PostFrontmatter>;

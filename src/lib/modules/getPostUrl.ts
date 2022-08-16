import type { Post } from "./types";

export default function getPostUrl(post: Post, wrap = true) {
	const urlArray = post.url.split("/");
	const postUrl = urlArray.slice(-2).join("/").split(".")[0];
	if (!wrap) {
		return postUrl.split("/")[1];
	}
	return `/${postUrl}/`;
}

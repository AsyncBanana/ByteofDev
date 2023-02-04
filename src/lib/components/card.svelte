<script lang="ts">
	import getPostUrl from "$lib/modules/getPostUrl";
	export let item: Post;
	export let lazy = true;
	import type { Post } from "$lib/modules/types";
	import dayjs from "dayjs";
</script>

<a
	class="rounded-md flex flex-col bg-base-100 shadow-md p-4"
	href={getPostUrl(item)}
>
	<img
		src={item.frontmatter.image.url}
		alt="Article header"
		class="rounded-md bg-base-300 w-full aspect-video"
		loading={lazy ? "lazy" : "eager"}
	/>
	<h2 class="font-bold text-xl">{item.frontmatter.title}</h2>
	<p>{item.frontmatter.description}</p>
	<br />
	<div style="margin-block-start: auto;">
		<p class="font-normal">By {item.frontmatter.author}</p>
		<p class="font-medium">
			{dayjs(item.frontmatter.published).format("MMMM D, YYYY")}{item
				.frontmatter.updated >
			item.frontmatter.published + 86400000 // filter out tiny post-launch updates
				? ` (Updated ${dayjs(item.frontmatter.updated).format("MMMM D, YYYY")})`
				: ``}
		</p>
	</div>
</a>

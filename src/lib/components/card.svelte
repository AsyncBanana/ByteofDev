<script lang="ts">
	export let item: CollectionEntry<"posts"> | CollectionEntry<"tips">;
	export let author: CollectionEntry<"author">;
	export let lazy = true;
	import type { CollectionEntry } from "astro:content";
	import dayjs from "dayjs";
</script>

<a
	class="rounded-md flex flex-col shadow-md p-4 dark:bg-neutral"
	href={`/${item.collection}/${item.slug}/`}
>
	<img
		src={item.data.image.url}
		alt="Article header"
		class="rounded-md bg-base-300 w-full aspect-video"
		loading={lazy ? "lazy" : "eager"}
	/>
	<h2 class="font-bold text-xl">{item.data.title}</h2>
	<p>{item.data.description}</p>
	<br />
	<div style="margin-block-start: auto;">
		{#await author then authorData}<p class="font-normal">
				By {authorData?.data.name}
			</p>{/await}
		<p class="font-medium">
			{dayjs(item.data.published).format("MMMM D, YYYY")}{item.data.updated >
			item.data.published + 86400000 // filter out tiny post-launch updates
				? ` (Updated ${dayjs(item.data.updated).format("MMMM D, YYYY")})`
				: ``}
		</p>
	</div>
</a>

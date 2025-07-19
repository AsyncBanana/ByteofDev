<script lang="ts">
	export let item: CollectionEntry<"posts"> | CollectionEntry<"tips">;
	export let author: CollectionEntry<"author">;
	export let lazy = true;
	let className = "";
	import type { CollectionEntry } from "astro:content";
	import dayjs from "dayjs";
	export { className as class };
</script>

<div class={`rounded-md flex flex-col m-4 ${className}`}>
	<a href={`/${item.collection}/${item.slug}/`} class="group">
		<img
			src={item.data.image.url}
			alt="Article header"
			class="rounded-md bg-base-300 w-full aspect-video"
			loading={lazy ? "lazy" : "eager"}
		/>
		<h2 class="font-bold text-3xl group-hover:opacity-85 transition-250">
			{item.data.title}
		</h2></a
	>
	<p>{item.data.description}</p>
	<br />
	<div style="margin-block-start: auto;">
		{#await author then authorData}<p class="font-normal">
				By {authorData?.data.name}
			</p>{/await}
		<p class="font-medium">
			{item.data.updated === item.data.published
				? dayjs(item.data.updated).format("MMMM D, YYYY")
				: `${dayjs(item.data.published).format("MMMM D, YYYY")} (Updated ${dayjs(item.data.updated).format("MMMM D, YYYY")})`}
		</p>
	</div>
</div>

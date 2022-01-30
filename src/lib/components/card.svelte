<script>
	export let item;
	import dayjs from "dayjs";
</script>

<a class="rounded-md bg-base-100 p-4 shadow-md" href={item.url + "/"}>
	<img
		src={item.image.url}
		alt="Article header"
		class="rounded-md w-full aspect-video bg-base-300"
		loading="lazy"
	/>
	<h2 class="font-bold text-xl">{item.title}</h2>
	<p>{item.description}</p>
	<p>By {item.author}</p>
	<p>{dayjs(item.published).format("MMMM D, YYYY")}</p>
</a>

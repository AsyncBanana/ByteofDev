<script>
	export let item;
	import dayjs from "dayjs";
</script>

<a class="rounded-md bg-base-100 p-4" href={item.url}>
	<img src={item.image.url} alt="Article header" class="rounded-md" />
	<h1 class="font-bold text-xl">{item.title}</h1>
	<p>{item.description}</p>
	<p>By {item.author}</p>
	<p>{dayjs(item.published).format("MMMM D, YYYY")}</p>
</a>

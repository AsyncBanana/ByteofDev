<script>
	export let type = "info"; // info, warning, quote
	import {
		faLightbulb,
		faExclamation,
		faQuoteLeft,
	} from "@fortawesome/free-solid-svg-icons";
	import Icon from "svelte-fa";
	const theme = {
		info: {
			colors: "border-info",
			icon: faLightbulb,
		},
		warning: {
			colors: "border-error",
			icon: faExclamation,
		},
		quote: {
			colors: "border-base-100",
			icon: faQuoteLeft,
		},
	};
</script>

<blockquote
	class={`rounded-md ${theme[type].colors} border-l-4 flex flex-row items-center bg-base-300 p-4 m-2 my-4`}
>
	<Icon icon={theme[type].icon} class="align-middle mr-4" size="2x" />
	<p class="text-xl"><slot /></p>
</blockquote>

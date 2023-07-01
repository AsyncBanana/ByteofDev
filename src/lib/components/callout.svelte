<script lang="ts">
	export let type: "info" | "warning" | "quote" = "info"; // info, warning, quote
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
	class={`rounded-md ${theme[type].colors} border-l-4 flex flex-row items-center bg-base-200 p-4 m-2 my-4`}
>
	<Icon icon={theme[type].icon} class="mr-4 align-middle" size="2x" />
	<div class="text-xl inline-block"><slot /></div>
</blockquote>

<script lang="ts">
	export let url: string;
	import { faLink } from "@fortawesome/free-solid-svg-icons";
	import Icon from "svelte-fa";
</script>

<button
	class="btn-ghost btn btn-square hover:bg-base-content hover:bg-opacity-20 hover:border-opacity-0"
	aria-label="Copy Link"
	data-balloon-pos="down"
	on:click={() => {
		navigator.clipboard.writeText(url);
	}}
>
	<Icon icon={faLink} size="2x" />
</button>

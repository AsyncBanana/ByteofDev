<script lang="ts">
	import mediaStore from "$lib/modules/mediaStore";
	let theme = import.meta.env.SSR ? "" : localStorage.getItem("theme");
	let themeElement;
	$: if (!import.meta.env.SSR && document.querySelector("#root")) {
		localStorage.setItem("theme", theme);
		document.querySelector("#root").setAttribute("theme", theme);
	}
</script>

<button
	on:click={() => {
		if (!theme) {
			theme = $mediaStore.light ? "dark" : "light";
		} else {
			theme = theme === "light" ? "dark" : "light";
		}
	}}
	class="m-auto mr-4 p-3 btn btn-square align-bottom focus:outline-none"
	id="themeToggle"
	aria-label="Toggle theme"
	><svg
		xmlns="http://www.w3.org/2000/svg"
		class="h-6 w-6"
		fill="none"
		viewBox="0 0 24 24"
		stroke="currentColor"
		><path
			stroke-linecap="round"
			stroke-linejoin="round"
			stroke-width="2"
			d={(theme ? theme === "light" : $mediaStore.light)
				? "M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z"
				: "M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z"}
		/></svg
	></button
>

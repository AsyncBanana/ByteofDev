<script>
	import { trackEvent } from "$lib/modules/events";
	import { fly } from "svelte/transition";
	import { onMount } from "svelte";
	let visible = false;
	let halfway;
	onMount(() => {
		const halfwayObserver = new IntersectionObserver(
			(entries) => {
				const halfwayEntry = entries[0];
				if (!halfwayEntry.isIntersecting) return;
				visible = true;
				halfwayObserver.unobserve(halfwayEntry.target);
			},
			{
				threshold: 1,
			}
		);
		halfwayObserver.observe(halfway);
	});
</script>

{#if visible}
	<div
		transition:fly={{ y: 250, duration: 1000 }}
		class="rounded-md mr-auto ml-auto bg-base-300 m-5 p-5 right-0 bottom-5 left-0 w-11/12 fixed l-1/2 r-1/2 md:w-1/2 lg:w-5/12"
	>
		<h2 class="font-bold text-xl md:text-3xl">Hey web developer!</h2>
		<p class="indent-2">
			Sign up for the mailing list if you want more articles like these!
		</p>
		<form
			method="POST"
			action="/api/addcontact"
			class="form-control"
			on:submit={() => {
				trackEvent("Newsletter signup", { method: "Popup" });
				visible = false;
			}}
		>
			<label for={`email-popup`} class="text-md indent-2">Email</label>
			<input
				type="email"
				class="shadow text-base-content input"
				name="email"
				id={`email-popup`}
				placeholder="smart@cookie.com"
			/>
			<div class="flex flex-row mt-4">
				<input type="submit" class="w-min btn btn-md btn-primary" />
				<button
					class="ml-4 w-min btn btn-md"
					type="button"
					on:click={() => {
						visible = false;
					}}>Close</button
				>
			</div>
		</form>
	</div>
{/if}
<div class="top-[250%] absolute invisible" id="halfway" bind:this={halfway} />

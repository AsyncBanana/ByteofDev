<script lang="ts">
	import { trackEvent } from "$lib/modules/events";
	export let primary = true;
	export let method: string;
</script>

<div class={`dark:bg-neutral rounded-md p-4 m-2 shadow-xl`}>
	<h2 class="font-bold text-xl">Sign up for updates</h2>
	<form
		method="POST"
		action="/api/addcontact"
		class="form-control"
		on:submit={() => {
			trackEvent("Newsletter signup", { method: method });
		}}
	>
		<p>
			Get interesting posts about web development and more programming straight
			in your inbox!
		</p>
		<label for={`email${primary ? "-primary" : ""}`} class="text-md indent-2"
			>Email</label
		>
		<input
			type="email"
			class="shadow text-base-content input"
			name="email"
			id={`email${primary ? "-primary" : ""}`}
			placeholder="smart@cookie.com"
		/>
		<input
			type="submit"
			class="mt-4 w-min btn btn-md"
			class:btn-primary={primary}
		/>
	</form>
</div>

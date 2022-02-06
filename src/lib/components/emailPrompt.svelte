<script>
	import { trackEvent } from "$lib/modules/events";
	export let primary = true;
</script>

<div class={`bg-base-300 rounded-md p-4 m-2 shadow-xl`}>
	<h2 class="font-bold text-xl">Sign up for updates</h2>
	<form
		method="POST"
		action="/api/addcontact"
		class="form-control"
		on:submit={() => {
			trackEvent("Newsletter signup");
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
			class="shadow input text-base-content"
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

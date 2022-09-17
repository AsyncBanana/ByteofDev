<script>
	import { trackEvent } from "$lib/modules/events";
</script>

<form
	method="POST"
	action="/api/addcontact"
	class="m-auto mb-6 w-3/5 form-control"
	on:submit={() => {
		trackEvent("Newsletter signup", { method: "Signup Page" });
	}}
>
	<label for="email">Enter email here</label>
	<input type="email" class="shadow text-base-content input" name="email" />
	<input type="submit" class="mt-4 w-min btn btn-md btn-primary" />
</form>

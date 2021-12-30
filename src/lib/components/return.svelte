<a
	class="btn btn-primary"
	href={import.meta.env.SSR
		? "/"
		: new URLSearchParams(window.location.search).get("returnTo")}
	>Return to previous page</a
>

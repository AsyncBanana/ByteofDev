export const post: PagesFunction = async (context) => {
	if (
		context.request.headers["content-type"] !==
			"application/x-www-form-urlencoded" &&
		context.request.headers["content-type"] !== "application/json"
	) {
		return new Response("Invalid headers", { status: 400 });
	}
	const email = (await context.request.json())["email"];
	if (!email) {
		return new Response("No email passed", { status: 400 });
	}
	const res = await fetch("https://api.sendgrid.com/v3/marketing/contacts", {
		method: "PUT",
		headers: {
			Authorization: `Bearer ${context.env["SENDGRID_KEY"]}`,
			"Content-Type": "application/json",
		},
		body: JSON.stringify({
			contacts: [
				{
					email: email,
				},
			],
		}),
	});
	return new Response("", {
		status: 303,
		headers: {
			Location: "/thanks",
		},
	});
};

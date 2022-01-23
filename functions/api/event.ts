export const onRequestPost = async (context) => {
	const request = new Request(context.request);
	request.headers.delete("cookie");
	return await fetch("https://plausible.io/api/event", request);
};

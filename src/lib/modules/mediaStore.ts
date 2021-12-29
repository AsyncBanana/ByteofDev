import watchMedia from "svelte-media";

const mediaqueries = {
	light: "(prefers-color-scheme: light)",
};

export default watchMedia(mediaqueries);

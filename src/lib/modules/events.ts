export async function trackEvent(
	name: string,
	props?: Record<string, unknown>
) {
	if (
		!import.meta.env.SSR &&
		(/^localhost$|^127(?:\.[0-9]+){0,2}\.[0-9]+$|^(?:0*:)*?:?0*1$/.test(
			location.hostname
		) ||
			location.protocol === "file:")
	) {
		return;
	}
	try {
		fetch("/api/event", {
			method: "POST",
			headers: { "Content-Type": "application/json" },
			body: JSON.stringify({
				n: name,
				u: location.href,
				d: location.hostname,
				r: document.referrer,
				w: window.innerWidth,
				h: 0,
				p: props ? props : undefined,
			}),
		});
	} catch {
		return;
	}
}
export async function trackPageView() {
	await trackEvent("pageview");
}

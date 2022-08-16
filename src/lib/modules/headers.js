const CSPDirectives = {
	"img-src": ["*", "'self'"],
	"font-src": ["*", "'self'", "data:"],
	"style-src": ["'self'", "'unsafe-inline'"],
	"default-src": ["'self'", "ws://localhost:24678"],
	"script-src": ["'self'", "'unsafe-inline'"],
};
const CSP = Object.entries(CSPDirectives)
	.map(([key, arr]) => key + " " + arr.join(" "))
	.join("; ");

export default {
	"X-Frame-Options": "SAMEORIGIN",
	"Feature-Policy": `microphone 'none'; geolocation 'none'; document-domain 'none'; display-capture 'none'; fullscreen 'none'; gamepad 'none'; gyroscope 'none'; sync-xhr 'none'; screen-wake-lock 'none';`,
	"X-Content-Type-Options": `nosniff`,
	"Content-Security-Policy": CSP,
};

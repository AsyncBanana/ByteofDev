import glob from "tiny-glob";
import { generate } from "critical";

// dimensions to test critical css on
let dimensions = [
	{ width: 414, height: 896 },
	{ width: 1920, height: 1080 },
];

// relative build output folder
let base = "dist";

const files = await glob("**/*.html", { cwd: base });
files.forEach((filePath) => {
	generate({
		base,
		// Overwrite files by passing the same path for `src` and `target`.
		src: filePath,
		target: filePath,
		inline: true,
		extract: false,
		dimensions,
	});
});

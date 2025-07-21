// lazy loading doesn't seem to be necessary
import BiggerPicture from "bigger-picture";
import "bigger-picture/dist/bigger-picture.css";
const lightbox = BiggerPicture({ target: document.body });
document.querySelectorAll("article figure button").forEach((el) =>
	el.addEventListener("click", () => {
		const img = el.querySelector("img") as HTMLImageElement;
		lightbox.open({
			position: 0,
			items: [
				{
					width: img.naturalWidth,
					height: img.naturalHeight,
					img: img.src,
					thumb: img.src,
					element: el,
				},
			],
			scale: 1,
		});
	}),
);

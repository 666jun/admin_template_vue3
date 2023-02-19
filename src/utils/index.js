// vite的静态资源引入
export function getAssetsImg(filename) {
	return new URL(`../assets/img/${filename}`, import.meta.url).href;
}



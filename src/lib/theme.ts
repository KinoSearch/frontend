function getTheme() {
	let theme: "dark" | "light" = "light";
	let localTheme: string | null = window.localStorage.getItem("theme");
	if (localTheme) {
		if (localTheme === "dark" || localTheme === "light") {
			theme = localTheme;

			return theme;
		}
	}

	if (
		window.matchMedia &&
		window.matchMedia("(prefers-color-scheme: dark)").matches
	) {
		theme = "dark";
	}

	return theme;
}

function changeTheme(theme: "dark" | "light") {
	window.localStorage.setItem("theme", theme);
}

export { getTheme, changeTheme };

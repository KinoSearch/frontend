function ucFirst(str: string) {
	if (!str) return str;

	return str[0].toUpperCase() + str.slice(1);
}

function openLink(link: string) {
	let a = document.createElement("a");
	a.target = "_blank";
	a.href = link;
	a.click();
}

export { ucFirst, openLink };

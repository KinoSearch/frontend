import axios from "axios";
import config from "../config";
import { getUser } from "./auth";

async function getNewFilms() {
	let month: string | number = new Date().getMonth();
	if (month === 0) month = "JANUARY";
	if (month === 1) month = "FEBRUARY";
	if (month === 2) month = "MARCH";
	if (month === 3) month = "APRIL";
	if (month === 4) month = "MAY";
	if (month === 5) month = "JUNE";
	if (month === 6) month = "JULY";
	if (month === 7) month = "AUGUST";
	if (month === 8) month = "SEPTEMBER";
	if (month === 9) month = "OCTOBER";
	if (month === 10) month = "NOVEMBER";
	if (month === 11) month = "DECEMBER";

	let { data: res }: any = await axios.get(
		`https://kinopoiskapiunofficial.tech/api/v2.1/films/releases?year=${new Date().getFullYear()}&month=${month}&page=1`,
		{
			headers: {
				"X-API-KEY": config.api_token,
			},
		}
	);

	return res;
}

async function getTopFilms() {
	const { data: res } = await axios.get(
		"https://kinopoiskapiunofficial.tech/api/v2.2/films/top?type=TOP_100_POPULAR_FILMS",
		{
			headers: {
				"X-API-KEY": config.api_token,
			},
		}
	);

	return res;
}

async function getBestFilms() {
	const { data: res } = await axios.get(
		"https://kinopoiskapiunofficial.tech/api/v2.2/films/top?type=TOP_250_BEST_FILMS",
		{
			headers: {
				"X-API-KEY": config.api_token,
			},
		}
	);

	return res;
}

async function getHistory() {
	const user = getUser();

	if (!user) return;

	const { data: res } = await axios.get(
		`https://api.kinosearchapi.ml/history/list`,
		{
			headers: {
				Authorization: `Bearer ${user.accessToken}`,
			},
		}
	);

	return res;
}

async function getFavorite() {
	const user = getUser();

	if (!user) return;

	const { data: res } = await axios.get(
		`https://api.kinosearchapi.ml/favorite/list`,
		{
			headers: {
				Authorization: `Bearer ${user.accessToken}`,
			},
		}
	);

	return res;
}

async function searchFilms(query: string) {
	const { data: res } = await axios.get(
		`https://kinopoiskapiunofficial.tech/api/v2.1/films/search-by-keyword?keyword=${query}`,
		{
			headers: {
				"X-API-KEY": config.api_token,
			},
		}
	);

	return res;
}

async function getFilmById(id: number) {
	const { data: res } = await axios.get(
		`https://kinopoiskapiunofficial.tech/api/v2.2/films/${id}`,
		{
			headers: {
				"X-API-KEY": config.api_token,
			},
		}
	);

	return res;
}

async function getSimilars(id: number) {
	const { data: res } = await axios.get(
		`https://kinopoiskapiunofficial.tech/api/v2.2/films/${id}/similars`,
		{
			headers: {
				"X-API-KEY": config.api_token,
			},
		}
	);

	return res;
}

async function getSequelsAndPrequels(id: number) {
	const { data: res } = await axios.get(
		`https://kinopoiskapiunofficial.tech/api/v2.1/films/${id}/sequels_and_prequels`,
		{
			headers: {
				"X-API-KEY": config.api_token,
			},
		}
	);

	return res;
}

async function getPlayer(id: number) {
	const { data: res } = await axios.post(
		`https://api.kinosearchapi.ml/player/${id}`
	);

	return res;
}

async function checkFavorite(id: number) {
	const user = getUser();

	if (!user) return;
	const { data: res } = await axios.get(
		`https://api.kinosearchapi.ml/favorite/check?filmId=${id}`,
		{
			headers: {
				Authorization: `Bearer ${user.accessToken}`,
			},
		}
	);

	return res;
}

async function addFavorite(id: number) {
	const user = getUser();
	if (!user) return;

	const { data: res } = await axios.post(
		`https://api.kinosearchapi.ml/favorite/add`,
		{ filmId: id },
		{
			headers: {
				Authorization: `Bearer ${user.accessToken}`,
			},
		}
	);

	return res;
}

async function removeFavorite(id: number) {
	const user = getUser();
	if (!user) return;

	const { data: res } = await axios.post(
		`https://api.kinosearchapi.ml/favorite/remove`,
		{ filmId: id },
		{
			headers: {
				Authorization: `Bearer ${user.accessToken}`,
			},
		}
	);

	return res;
}

async function clearHistory() {
	const user = getUser();
	if (!user) return;

	const { data: res } = await axios.post(
		`https://api.kinosearchapi.ml/history/list/clear`,
		null,
		{
			headers: {
				Authorization: `Bearer ${user.accessToken}`,
			},
		}
	);

	return res;
}

async function watchFilm(id: number) {
	const user = getUser();
	if (!user) return;

	const { data: res } = await axios.post(
		`https://api.kinosearchapi.ml/history/watch/${id}`,
		null,
		{
			headers: {
				Authorization: `Bearer ${user.accessToken}`,
			},
		}
	);

	return res;
}

async function changeEmail(email: string) {
	const user = getUser();
	if (!user) return;

	const { data: res } = await axios.post(
		"https://api.kinosearchapi.ml/user/change_email",
		{ email: email },
		{
			headers: {
				Authorization: `Bearer ${user.accessToken}`,
			},
		}
	);

	return res;
}

async function changePassword(current_password: string, new_password: string) {
	const user = getUser();
	if (!user) return;

	const { data: res } = await axios.post(
		"https://api.kinosearchapi.ml/user/change_password",
		{ current_password: current_password, new_password: new_password },
		{
			headers: {
				Authorization: `Bearer ${user.accessToken}`,
			},
		}
	);

	return res;
}

export {
	getNewFilms,
	getTopFilms,
	getBestFilms,
	getHistory,
	getFavorite,
	searchFilms,
	getFilmById,
	getPlayer,
	getSimilars,
	getSequelsAndPrequels,
	checkFavorite,
	removeFavorite,
	addFavorite,
	clearHistory,
	watchFilm,
	changeEmail,
	changePassword,
};

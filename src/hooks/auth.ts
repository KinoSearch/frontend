import axios from "axios";

interface UserData {
	id: number;
	accessToken: string;
	email: string;
}

const Store = window.localStorage;

function setAuth(user: UserData) {
	Store.setItem(
		"auth-data",
		JSON.stringify({
			id: user.id,
			accessToken: user.accessToken,
			email: user.email,
		})
	);
}

function getUser() {
	const data = Store.getItem("auth-data");

	if (!data) {
		return null;
	} else {
		let userData: UserData = JSON.parse(data);
		return userData;
	}
}

async function logout() {
	Store.clear();
	window.location.href = "/";
}

async function getAuth() {
	const user = getUser();

	if (!user) {
		return false;
	}

	await updateAuth();

	try {
		const { data: res } = await axios.get(
			`https://api.kinosearchapi.ml/user/info`,
			{
				headers: {
					authorization: `Bearer ${user.accessToken}`,
				},
			}
		);

		if (res.errors) {
			logout();
			return false;
		}

		return true;
	} catch {
		logout();
		return false;
	}
}

async function login(email: string, password: string) {
	try {
		const { data: res } = await axios.post(
			"https://api.kinosearchapi.ml/auth/login",
			{
				email: email,
				password: password,
			}
		);

		if (!res.auth.token) return { errors: ["bad login or pass"] };

		const { data: user } = await axios.get(
			`https://api.kinosearchapi.ml/user/info`,
			{
				headers: {
					authorization: `Bearer ${res.auth.token}`,
				},
			}
		);

		if (user.errors) return { errors: user.errors };

		let userData: UserData = {
			id: user.user.id,
			accessToken: res.auth.token,
			email: user.user.email,
		};

		setAuth(userData);

		return { errors: null };
	} catch (e) {
		return { errors: [e] };
	}
}

async function register(
	email: string,
	password: string,
	password_confirmation: string
) {
	try {
		const { data: res } = await axios.post(
			"https://api.kinosearchapi.ml/auth/register",
			{
				email: email,
				password: password,
				password_confirmation: password_confirmation,
			}
		);

		if (res.errors) return { errors: res.errors };

		const { data: user } = await axios.get(
			`https://api.kinosearchapi.ml/user/info`,
			{
				headers: {
					authorization: `Bearer ${res.auth.token}`,
				},
			}
		);

		if (user.errors) return { errors: user.errors };

		let userData: UserData = {
			id: user.user.id,
			accessToken: res.auth.token,
			email: user.user.email,
		};

		setAuth(userData);

		return { errors: null };
	} catch (e: any) {
		return { errors: e.response.data.errors };
	}
}

async function updateAuth() {
	const user = getUser();
	if (!user) {
		logout();
		return { error: "not auth" };
	}

	try {
		const { data: res } = await axios.get(
			`https://api.kinosearchapi.ml/user/info`,
			{
				headers: {
					authorization: `Bearer ${user.accessToken}`,
				},
			}
		);

		if (res.errors) {
			logout();
			return { errors: true };
		}

		let userData: UserData = {
			id: res.user.id,
			accessToken: user.accessToken,
			email: res.user.email,
		};

		setAuth(userData);

		return { error: false };
	} catch {
		logout();
		return { error: true };
	}
}

export type { UserData };
export { getAuth, getUser, setAuth, logout, login, updateAuth, register };

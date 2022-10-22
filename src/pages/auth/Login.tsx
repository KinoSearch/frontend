import {
	FormItem,
	FormLayout,
	Group,
	PanelHeader,
	Input,
	Button,
	ScreenSpinner,
	Text,
	Link,
} from "@vkontakte/vkui";
import React, { FormEvent, useContext } from "react";
import { login as LoginHook } from "../../hooks/auth";
import { AppContext } from "../../providers/AppProvider";

export type ErrorType = {
	type: "required" | "custom";
	message: string;
} | null;

function Login({ setActiveView }: { setActiveView: any }) {
	const [email, setEmail] = React.useState<string>("");
	const [password, setPassword] = React.useState<string>("");
	const [error, setError] = React.useState<{
		email: ErrorType;
		password: ErrorType;
	}>({ email: null, password: null });

	const handleEmailChange = (e: any) => {
		setEmail(e.target.value);
		let newError = error;
		newError["email"] = null;
		setError(newError);
		if (
			// eslint-disable-next-line
			!/^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i.test(
				e.target.value
			)
		) {
			let newError = error;

			newError["email"] = {
				type: "custom",
				message: "Email введен некорректно",
			};
			setError(newError);
		}

		if (e.target.value.trim() === "") {
			let newError = error;

			newError["email"] = {
				type: "required",
				message: "Email введен некорректно",
			};
			setError(newError);
		}
	};

	const handlePasswordChange = (e: any) => {
		setPassword(e.target.value);

		let newError = error;
		newError["password"] = null;
		setError(newError);

		if (e.target.value.trim() === "") {
			let newError = error;
			newError["password"] = {
				type: "required",
				message: "Email введен некорректно",
			};
			setError(newError);
		}
	};

	const { setProps } = useContext(AppContext);

	const onSubmit = async (e: FormEvent<HTMLFormElement>) => {
		e.preventDefault();
		setProps({
			popout: <ScreenSpinner state="loading" />,
			modal: null,
			filmId: null,
		});
		try {
			let formError: boolean = false;
			if (
				// eslint-disable-next-line
				!/^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i.test(
					email
				)
			) {
				let newError = error;

				newError["email"] = {
					type: "custom",
					message: "Email введен некорректно",
				};
				setError(newError);

				formError = true;
			}

			if (email.trim() === "") {
				let newError = error;

				newError["email"] = {
					type: "required",
					message: "Email введен некорректно",
				};
				setError(newError);
				formError = true;
			}
			if (password.trim() === "") {
				let newError = error;
				newError["password"] = {
					type: "required",
					message: "Email введен некорректно",
				};
				setError(newError);
				formError = true;
			}

			if (formError) return;

			const res = await LoginHook(email, password);

			if (res.errors) {
				setError({
					email: {
						type: "custom",
						message: "Неправильный логин или пароль",
					},
					password: {
						type: "custom",
						message: "Неправильный логин или пароль",
					},
				});
			} else {
				window.location.href = "/";
			}
		} finally {
			setProps({
				popout: null,
				modal: null,
				filmId: null,
			});
		}
	};

	return (
		<>
			<PanelHeader>Авторизация</PanelHeader>

			<Group>
				<FormLayout onSubmit={onSubmit}>
					<FormItem
						top="Email"
						status={error.email ? "error" : "default"}
						bottom={
							error.email
								? error.email.type === "required"
									? "Укажите Email"
									: error.email.message
								: null
						}
					>
						<Input value={email} onChange={handleEmailChange} />
					</FormItem>
					<FormItem
						top="Пароль"
						status={error.password ? "error" : "default"}
						bottom={
							error.password
								? error.password.type === "required"
									? "Укажите пароль"
									: error.password.message
								: null
						}
					>
						<Input
							type="password"
							value={password}
							onChange={handlePasswordChange}
						/>
					</FormItem>
					<FormItem>
						<Button type="submit" size="l" stretched>
							Войти
						</Button>
					</FormItem>
					<FormItem>
						<Text>
							Нет аккаунта?{" "}
							<Link onClick={() => setActiveView("register")}>Регистрация</Link>
						</Text>
					</FormItem>
				</FormLayout>
			</Group>
		</>
	);
}

export default Login;

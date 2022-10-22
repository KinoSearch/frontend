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
import { register as RegisterHook } from "../../hooks/auth";
import { AppContext } from "../../providers/AppProvider";

export type ErrorType = {
	type: "required" | "custom";
	message: string;
} | null;

function Register({ setActiveView }: { setActiveView: any }) {
	const [email, setEmail] = React.useState<string>("");
	const [password, setPassword] = React.useState<string>("");
	const [repeat_password, setRepeatPassword] = React.useState<string>("");
	const [error, setError] = React.useState<{
		email: ErrorType;
		password: ErrorType;
		repeat_password: ErrorType;
	}>({ email: null, password: null, repeat_password: null });

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

	const handleRepeatPasswordChange = (e: any) => {
		setRepeatPassword(e.target.value);

		let newError = error;
		newError["repeat_password"] = null;
		setError(newError);

		if (password.trim() !== e.target.value.trim()) {
			let newError = error;
			newError["password"] = {
				type: "custom",
				message: "Пароли не совпадают",
			};
			newError["repeat_password"] = {
				type: "custom",
				message: "Пароли не совпадают",
			};
			setError(newError);
		} else {
			let newError = error;
			newError["password"] = null;
			newError["repeat_password"] = null;
			setError(newError);
		}

		if (e.target.value.trim() === "") {
			let newError = error;
			newError["repeat_password"] = {
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

			if (password.trim() !== repeat_password.trim()) {
				let newError = error;
				newError["password"] = {
					type: "custom",
					message: "Пароли не совпадают",
				};
				newError["repeat_password"] = {
					type: "custom",
					message: "Пароли не совпадают",
				};
				setError(newError);
				formError = true;
			}

			if (repeat_password.trim() === "") {
				let newError = error;
				newError["repeat_password"] = {
					type: "required",
					message: "Email введен некорректно",
				};
				setError(newError);
				formError = true;
			}

			if (formError) return;

			const res = await RegisterHook(email, password, repeat_password);

			if (res.errors) {
				let newErrors = error;
				let resErrors: { field: "email" | "password"; message: string }[] =
					res.errors;
				for (const err of resErrors) {
					newErrors[err.field] = {
						type: "custom",
						message: err.message,
					};
				}

				setError(newErrors);
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
			<PanelHeader>Регистрация</PanelHeader>

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
					<FormItem
						top="Повторите пароль"
						status={error.password ? "error" : "default"}
						bottom={
							error.repeat_password
								? error.repeat_password.type === "required"
									? "Повторите пароль"
									: error.repeat_password.message
								: null
						}
					>
						<Input
							type="password"
							value={repeat_password}
							onChange={handleRepeatPasswordChange}
						/>
					</FormItem>
					<FormItem>
						<Button type="submit" size="l" stretched>
							Зарегистрироваться
						</Button>
					</FormItem>
					<FormItem>
						<Text>
							Уже есть аккаунт?{" "}
							<Link onClick={() => setActiveView("login")}>Войти</Link>
						</Text>
					</FormItem>
				</FormLayout>
			</Group>
		</>
	);
}

export default Register;

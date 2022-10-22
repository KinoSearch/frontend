import { Icon24Dismiss } from "@vkontakte/icons";
import {
	ANDROID,
	Button,
	FormItem,
	FormLayout,
	Input,
	IOS,
	ModalPage,
	ModalPageHeader,
	PanelHeaderButton,
	PanelHeaderClose,
	ScreenSpinner,
	useAdaptivity,
	usePlatform,
	ViewWidth,
} from "@vkontakte/vkui";
import React, { FormEvent } from "react";
import { changePassword } from "../hooks/api";
import { ErrorType } from "../pages/auth/Login";
import { AppContext } from "../providers/AppProvider";

function ChangePassword() {
	const { setProps } = React.useContext(AppContext);

	const [error, setError] = React.useState<{
		current_password: ErrorType;
		new_password: ErrorType;
	}>({ current_password: null, new_password: null });
	const [current_password, setCurrentPassword] = React.useState<string>("");
	const [new_password, setNewPassword] = React.useState<string>("");

	const { viewWidth } = useAdaptivity();
	const isMobile = viewWidth <= ViewWidth.MOBILE;
	const platform = usePlatform();

	const onClose = () => {
		setProps({
			popout: null,
			modal: null,
			filmId: null,
		});
		setCurrentPassword("");
		setNewPassword("");
		setError({ current_password: null, new_password: null });
	};

	const handleCurrentPasswordChange = (e: any) => {
		setCurrentPassword(e.target.value);

		let newError = error;
		newError["current_password"] = null;
		setError(newError);

		if (e.target.value.trim() === "") {
			let newError = error;
			newError["current_password"] = {
				type: "required",
				message: "",
			};
			setError(newError);
		}
	};

	const handleNewPasswordChange = (e: any) => {
		setNewPassword(e.target.value);

		let newError = error;
		newError["new_password"] = null;
		setError(newError);

		if (e.target.value.trim() === "") {
			let newError = error;
			newError["new_password"] = {
				type: "required",
				message: "",
			};
			setError(newError);
		}
	};

	const onSubmit = async (e: FormEvent<HTMLFormElement>) => {
		e.preventDefault();
		setProps({
			popout: <ScreenSpinner state="loading" />,
			modal: "change_password",
			filmId: null,
		});
		try {
			let formError: boolean = false;

			if (current_password.trim() === "") {
				let newError = error;

				newError["current_password"] = {
					type: "required",
					message: "Введите текущий пароль",
				};
				setError(newError);
				formError = true;
			}

			if (new_password.trim() === "") {
				let newError = error;

				newError["new_password"] = {
					type: "required",
					message: "Введите новый пароль",
				};
				setError(newError);
				formError = true;
			}

			if (formError) return;

			try {
				const res = await changePassword(current_password, new_password);

				if (res.errors) {
					setError({
						current_password: {
							type: "custom",
							message: "Неправильный пароль",
						},
						new_password: null,
					});
					setProps({
						popout: null,
						modal: "change_password",
						filmId: null,
					});
				} else {
					setProps({
						popout: <ScreenSpinner state="done" />,
						modal: "change_password",
						filmId: null,
					});
				}
			} catch {
				setError({
					current_password: {
						type: "custom",
						message: "Неправильный пароль",
					},
					new_password: null,
				});
				setProps({
					popout: null,
					modal: "change_password",
					filmId: null,
				});
			}
		} finally {
			setTimeout(() => {
				setProps({
					popout: null,
					modal: "change_password",
					filmId: null,
				});
			}, 1000);
		}
	};

	return (
		<ModalPage
			id="change_password"
			header={
				<ModalPageHeader
					before={
						isMobile &&
						platform === ANDROID && <PanelHeaderClose onClick={onClose} />
					}
					after={
						isMobile &&
						platform === IOS && (
							<PanelHeaderButton onClick={onClose}>
								<Icon24Dismiss />
							</PanelHeaderButton>
						)
					}
				>
					Сменить пароль
				</ModalPageHeader>
			}
			onClose={onClose}
			dynamicContentHeight
		>
			<FormLayout onSubmit={onSubmit}>
				<FormItem
					top="Текущий пароль"
					status={error.current_password ? "error" : "default"}
					bottom={
						error.current_password
							? error.current_password.type === "required"
								? "Укажите текущий пароль"
								: error.current_password.message
							: null
					}
				>
					<Input
						type="password"
						value={current_password}
						onChange={handleCurrentPasswordChange}
					/>
				</FormItem>
				<FormItem
					top="Пароль"
					status={error.new_password ? "error" : "default"}
					bottom={
						error.new_password
							? error.new_password.type === "required"
								? "Укажите новый пароль"
								: error.new_password.message
							: null
					}
				>
					<Input
						type="password"
						value={new_password}
						onChange={handleNewPasswordChange}
					/>
				</FormItem>
				<FormItem>
					<Button type="submit" size="l" stretched>
						Сохранить
					</Button>
				</FormItem>
			</FormLayout>
		</ModalPage>
	);
}

export default ChangePassword;

import {
	Button,
	FormItem,
	FormLayout,
	Group,
	Input,
	Link,
	PanelHeader,
	PanelHeaderBack,
	ScreenSpinner,
} from "@vkontakte/vkui";
import React, { FormEvent } from "react";
import { changeEmail } from "../../hooks/api";
import { getUser } from "../../hooks/auth";
import { AppContext } from "../../providers/AppProvider";
import { ErrorType } from "../auth/Login";

function Edit({ onClose }: { onClose: () => void }) {
	const [error, setError] = React.useState<{
		email: ErrorType;
	}>({ email: null });
	const user = getUser();
	const [email, setEmail] = React.useState<string>(user?.email || "");

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

	const { setProps } = React.useContext(AppContext);

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

			if (formError) return;

			try {
				const res = await changeEmail(email);

				if (res.errors) {
					setError({
						email: {
							type: "custom",
							message: "Email занят",
						},
					});
					setProps({
						popout: null,
						modal: null,
						filmId: null,
					});
				} else {
					setProps({
						popout: <ScreenSpinner state="done" />,
						modal: null,
						filmId: null,
					});
				}
			} catch {
				setError({
					email: {
						type: "custom",
						message: "Email занят",
					},
				});
				setProps({
					popout: null,
					modal: null,
					filmId: null,
				});
			}
		} finally {
			setTimeout(() => {
				setProps({
					popout: null,
					modal: null,
					filmId: null,
				});
			}, 1000);
		}
	};

	return (
		<>
			<PanelHeader before={<PanelHeaderBack onClick={onClose} />}>
				Редактировать профиль
			</PanelHeader>

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
					<FormItem>
						<Button type="submit" size="l" stretched>
							Сохранить
						</Button>
					</FormItem>
					<FormItem>
						<Link
							onClick={() =>
								setProps({
									popout: null,
									modal: "change_password",
									filmId: null,
								})
							}
						>
							Сменить пароль
						</Link>
					</FormItem>
				</FormLayout>
			</Group>
		</>
	);
}

export default Edit;

import {
	FormItem,
	FormLayout,
	Group,
	PanelHeader,
	PanelHeaderBack,
	Radio,
	ScreenSpinner,
} from "@vkontakte/vkui";
import React from "react";
import { changeTheme, getTheme } from "../../lib/theme";
import { AppContext } from "../../providers/AppProvider";

function Theme({ onClose }: { onClose: () => void }) {
	const { setProps } = React.useContext(AppContext);

	const onChange = (theme: "dark" | "light") => {
		changeTheme(theme);
		setProps({
			popout: <ScreenSpinner state="loading" />,
			modal: null,
			filmId: null,
		});
		setTimeout(() => {
			window.location.href = "/";
		}, 1000);
	};

	return (
		<>
			<PanelHeader before={<PanelHeaderBack onClick={onClose} />}>
				Тема оформления
			</PanelHeader>

			<Group>
				<FormLayout>
					<FormItem top="Тема оформления">
						<Radio
							name="theme"
							onChange={() => onChange("light")}
							defaultChecked={getTheme() === "light" ? true : false}
						>
							Светлая
						</Radio>
						<Radio
							name="theme"
							onChange={() => onChange("dark")}
							defaultChecked={getTheme() === "dark" ? true : false}
						>
							Темная
						</Radio>
					</FormItem>
				</FormLayout>
			</Group>
		</>
	);
}

export default Theme;

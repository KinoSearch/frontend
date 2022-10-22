import React from "react";
import {
	Avatar,
	Button,
	CellButton,
	Div,
	Footer,
	Group,
	Panel,
	PanelHeader,
	Root,
	SimpleCell,
	Snackbar,
	Title,
	View,
} from "@vkontakte/vkui";
import {
	Icon16Done,
	Icon28ClearDataOutline,
	Icon28UserOutline,
	Icon28Users3Outline,
	Icon28PaletteOutline,
} from "@vkontakte/icons";
import { getUser, logout, updateAuth } from "../../hooks/auth";
import { clearHistory } from "../../hooks/api";
import { AppContext } from "../../providers/AppProvider";
import Theme from "./Theme";
import Contacts from "./Contacts";
import Edit from "./Edit";

function Settings() {
	const [activeView, setActiveView] =
		React.useState<"settings" | "contacts" | "edit_profile" | "theme">(
			"settings"
		);

	const { setProps } = React.useContext(AppContext);

	let user = getUser();
	if (!user) {
		window.location.href = "/";
	}

	return (
		<Root activeView={activeView}>
			<View id="settings" activePanel="settings">
				<Panel id="settings">
					<PanelHeader>Настройки</PanelHeader>

					<Group>
						<Div
							style={{
								display: "flex",
								flexDirection: "column",
								alignItems: "center",
								justifyContent: "center",
								textAlign: "center",
							}}
						>
							<Avatar size={96}>
								<Icon28UserOutline width={76} height={76} />
							</Avatar>
							<Title
								style={{ marginBottom: 8, marginTop: 20 }}
								level="2"
								weight="2"
							>
								{user?.email}
							</Title>

							<Button
								onClick={async () => {
									await updateAuth();
									user = getUser();
									setActiveView("edit_profile");
								}}
								size="m"
								mode="secondary"
							>
								Редактировать
							</Button>
						</Div>
					</Group>
					<Group>
						<SimpleCell
							onClick={() => setActiveView("theme")}
							before={<Icon28PaletteOutline />}
						>
							Тема оформления
						</SimpleCell>
						<SimpleCell
							onClick={async () => {
								await clearHistory();
								setProps({
									popout: (
										<Snackbar
											onClose={() =>
												setProps({ popout: null, modal: null, filmId: null })
											}
											before={
												<Avatar
													size={24}
													style={{
														background: "var(--vkui--color_background_accent)",
													}}
												>
													<Icon16Done fill="#fff" width={14} height={14} />
												</Avatar>
											}
										>
											История очищена
										</Snackbar>
									),
									modal: null,
									filmId: null,
								});
							}}
							before={<Icon28ClearDataOutline />}
						>
							Очистить историю просмотра
						</SimpleCell>
						<SimpleCell
							onClick={() => setActiveView("contacts")}
							before={<Icon28Users3Outline />}
						>
							Контакты
						</SimpleCell>
						<CellButton mode="danger" onClick={logout}>
							Выйти из аккаунта
						</CellButton>
					</Group>
					<Footer>v{process.env.REACT_APP_VERSION}</Footer>
				</Panel>
			</View>
			<View id="theme" activePanel="theme">
				<Panel id="theme">
					<Theme onClose={() => setActiveView("settings")} />
				</Panel>
			</View>
			<View id="contacts" activePanel="contacts">
				<Panel id="contacts">
					<Contacts onClose={() => setActiveView("settings")} />
				</Panel>
			</View>
			<View id="edit_profile" activePanel="edit_profile">
				<Panel id="edit_profile">
					<Edit
						onClose={async () => {
							await updateAuth();
							user = getUser();
							setActiveView("settings");
						}}
					/>
				</Panel>
			</View>
		</Root>
	);
}

export default Settings;

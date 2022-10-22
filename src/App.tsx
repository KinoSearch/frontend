import {
	Cell,
	Epic,
	Group,
	Panel,
	PanelHeader,
	ScreenSpinner,
	SplitCol,
	SplitLayout,
	Tabbar,
	TabbarItem,
	usePlatform,
	View,
	ViewWidth,
	VKCOM,
	withAdaptivity,
} from "@vkontakte/vkui";
import {
	Icon28DoorArrowLeftOutline,
	Icon28HomeOutline,
	Icon28Search,
	Icon28SettingsOutline,
	Icon28VideoSquareOutline,
} from "@vkontakte/icons";
import React, { useContext } from "react";
import { getAuth } from "./hooks/auth";
import Main from "./pages/Main";
import Catalog from "./pages/Catalog";
import Search from "./pages/Search";
import { AppContext } from "./providers/AppProvider";
import Auth from "./pages/auth";
import Settings from "./pages/settings";
import Modals from "./modals";

const App = withAdaptivity(
	({ viewWidth }) => {
		const platform = usePlatform();
		const [activeStory, setActiveStory] =
			React.useState<"home" | "catalog" | "search" | "settings" | "login">(
				"home"
			);
		const onStoryChange = (e: any) =>
			setActiveStory(e.currentTarget.dataset.story);
		const isDesktop = viewWidth ? viewWidth >= ViewWidth.TABLET : true;
		const hasHeader = platform !== VKCOM;
		const [auth, setAuth] = React.useState<"loading" | boolean>("loading");

		React.useEffect(() => {
			const getData = async () => {
				const data = await getAuth();
				setAuth(data);
			};

			getData();
		}, []);

		const { props } = useContext(AppContext);

		return auth !== "loading" ? (
			<SplitLayout
				header={hasHeader && <PanelHeader separator={false} />}
				style={{ justifyContent: "center" }}
				popout={props.popout}
				modal={<Modals />}
			>
				{isDesktop && (
					<SplitCol fixed width={280} maxWidth={280}>
						<Panel>
							{hasHeader && <PanelHeader />}
							<Group>
								<Cell
									disabled={activeStory === "home"}
									style={
										activeStory === "home"
											? {
													backgroundColor:
														"var(--vkui--color_background_secondary)",
													borderRadius: 8,
											  }
											: {}
									}
									data-story="home"
									onClick={onStoryChange}
									before={<Icon28HomeOutline />}
								>
									Главная
								</Cell>
								<Cell
									disabled={activeStory === "catalog"}
									style={
										activeStory === "catalog"
											? {
													backgroundColor:
														"var(--vkui--color_background_secondary)",
													borderRadius: 8,
											  }
											: {}
									}
									data-story="catalog"
									onClick={onStoryChange}
									before={<Icon28VideoSquareOutline />}
								>
									Каталог
								</Cell>
								<Cell
									disabled={activeStory === "search"}
									style={
										activeStory === "search"
											? {
													backgroundColor:
														"var(--vkui--color_background_secondary)",
													borderRadius: 8,
											  }
											: {}
									}
									data-story="search"
									onClick={onStoryChange}
									before={<Icon28Search />}
								>
									Поиск
								</Cell>
								{(auth && (
									<Cell
										disabled={activeStory === "settings"}
										style={
											activeStory === "settings"
												? {
														backgroundColor:
															"var(--vkui--color_background_secondary)",
														borderRadius: 8,
												  }
												: {}
										}
										data-story="settings"
										onClick={onStoryChange}
										before={<Icon28SettingsOutline />}
									>
										Настройки
									</Cell>
								)) || (
									<Cell
										disabled={activeStory === "login"}
										style={
											activeStory === "login"
												? {
														backgroundColor:
															"var(--vkui--color_background_secondary)",
														borderRadius: 8,
												  }
												: {}
										}
										data-story="login"
										onClick={onStoryChange}
										before={<Icon28DoorArrowLeftOutline />}
									>
										Войти
									</Cell>
								)}
							</Group>
						</Panel>
					</SplitCol>
				)}

				<SplitCol
					animate={!isDesktop}
					spaced={isDesktop}
					width={isDesktop ? "560px" : "100%"}
					maxWidth={isDesktop ? "560px" : "100%"}
				>
					<Epic
						activeStory={activeStory}
						tabbar={
							!isDesktop && (
								<Tabbar>
									<TabbarItem
										onClick={onStoryChange}
										selected={activeStory === "home"}
										data-story="home"
										text="Главная"
									>
										<Icon28HomeOutline />
									</TabbarItem>
									<TabbarItem
										onClick={onStoryChange}
										selected={activeStory === "catalog"}
										data-story="catalog"
										text="Каталог"
									>
										<Icon28VideoSquareOutline />
									</TabbarItem>
									<TabbarItem
										onClick={onStoryChange}
										selected={activeStory === "search"}
										data-story="search"
										text="Поиск"
									>
										<Icon28Search />
									</TabbarItem>
									{(auth && (
										<TabbarItem
											onClick={onStoryChange}
											selected={activeStory === "settings"}
											data-story="settings"
											text="Настройки"
										>
											<Icon28SettingsOutline />
										</TabbarItem>
									)) || (
										<TabbarItem
											onClick={onStoryChange}
											selected={activeStory === "login"}
											data-story="login"
											text="Войти"
										>
											<Icon28DoorArrowLeftOutline />
										</TabbarItem>
									)}
								</Tabbar>
							)
						}
					>
						<View id="home" activePanel="home">
							<Panel id="home">
								<Main />
							</Panel>
						</View>
						<View id="catalog" activePanel="catalog">
							<Panel id="catalog">
								<Catalog setActiveStory={setActiveStory} />
							</Panel>
						</View>
						<View id="search" activePanel="search">
							<Panel id="search">
								<Search />
							</Panel>
						</View>
						<View id="login" activePanel="login">
							<Panel id="login">
								<Auth />
							</Panel>
						</View>
						<View id="settings" activePanel="settings">
							<Panel id="settings">
								<Settings />
							</Panel>
						</View>
					</Epic>
				</SplitCol>
			</SplitLayout>
		) : (
			<ScreenSpinner state="loading" />
		);
	},
	{
		viewWidth: true,
	}
);

export default App;

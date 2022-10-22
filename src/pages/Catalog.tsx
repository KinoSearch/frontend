import {
	Button,
	Group,
	Header,
	HorizontalScroll,
	Panel,
	PanelHeader,
	Placeholder,
	PullToRefresh,
	Root,
	ScreenSpinner,
	View,
} from "@vkontakte/vkui";
import React from "react";
import Error from "../components/Error";
import Film, { FilmType } from "../components/Film";
import { getFavorite, getHistory } from "../hooks/api";
import { getUser } from "../hooks/auth";
import Watch from "./Watch";
import FilmPage from "./Film";

function Catalog({ setActiveStory }: { setActiveStory: any }) {
	const user = getUser();

	const [isLoading, setIsLoading] = React.useState<boolean>(true);
	const [isRefreshing, setIsRefreshing] = React.useState<boolean>(false);
	const [error, setError] = React.useState<boolean>(false);

	const [favorite, setFavorite] = React.useState<FilmType[]>([]);
	const [history, setHistory] = React.useState<FilmType[]>([]);

	const [activeView, setActiveView] = React.useState<string>("main");

	const getData = async (type?: "refresh" | "fetch") => {
		if (type === "refresh") {
			setIsRefreshing(true);
		} else {
			setIsLoading(true);
		}
		if (!user) {
			setTimeout(() => {
				if (type === "refresh") {
					setIsRefreshing(false);
				} else {
					setIsLoading(false);
				}
			}, 1000);
			return;
		}
		try {
			const history = await getHistory();
			setHistory(history.history);

			const favorite = await getFavorite();
			setFavorite(favorite.favorite);

			setError(false);
		} catch {
			setError(true);
		} finally {
			if (type === "refresh") {
				setIsRefreshing(false);
			} else {
				setIsLoading(false);
			}
		}
	};

	React.useEffect(() => {
		getData();
	}, []);

	return (
		<Root activeView={activeView}>
			<View id="main" activePanel="main">
				<Panel id="main">
					<PanelHeader>Каталог</PanelHeader>

					<PullToRefresh
						isFetching={isRefreshing}
						onRefresh={() => getData("refresh")}
					>
						{(!error && (
							<>
								{(!isLoading && (
									<>
										<Group header={<Header mode="secondary">Избранное</Header>}>
											{(favorite.length === 0 && (
												<Placeholder
													header="Тут пока пусто"
													action={
														!user ? (
															<Button
																size="m"
																onClick={() => setActiveStory("login")}
															>
																Войти
															</Button>
														) : null
													}
												>
													Добавляйте фильмы в избранное, и они появятся тут
												</Placeholder>
											)) || (
												<HorizontalScroll
													showArrows
													getScrollToLeft={(i) => i - 120}
													getScrollToRight={(i) => i + 120}
												>
													<div className="films" style={{ display: "flex" }}>
														{favorite.map((film) => (
															<Film setActiveView={setActiveView} film={film} />
														))}
													</div>
												</HorizontalScroll>
											)}
										</Group>

										<Group header={<Header mode="secondary">История</Header>}>
											{(history.length === 0 && (
												<Placeholder
													header="Тут пока пусто"
													action={
														!user ? (
															<Button
																size="m"
																onClick={() => setActiveStory("login")}
															>
																Войти
															</Button>
														) : null
													}
												>
													Смотрите фильмы, и история просмотра появятся тут
												</Placeholder>
											)) || (
												<HorizontalScroll
													showArrows
													getScrollToLeft={(i) => i - 120}
													getScrollToRight={(i) => i + 120}
												>
													<div className="films" style={{ display: "flex" }}>
														{history.map((film) => (
															<Film setActiveView={setActiveView} film={film} />
														))}
													</div>
												</HorizontalScroll>
											)}
										</Group>
									</>
								)) || <ScreenSpinner state="loading" />}
							</>
						)) || <Error />}
					</PullToRefresh>
				</Panel>
			</View>
			<View id="film" activePanel="film">
				<Panel id="film">
					<FilmPage
						watch={() => setActiveView("watch")}
						onClose={async () => {
							await getData("refresh");
							setActiveView("main");
						}}
					/>
				</Panel>
			</View>
			<View id="watch" activePanel="watch">
				<Panel id="watch">
					<Watch onClose={() => setActiveView("film")} />
				</Panel>
			</View>
		</Root>
	);
}

export default Catalog;

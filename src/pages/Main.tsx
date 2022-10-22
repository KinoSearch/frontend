import {
	Group,
	Header,
	HorizontalScroll,
	Panel,
	PanelHeader,
	PullToRefresh,
	Root,
	ScreenSpinner,
	View,
} from "@vkontakte/vkui";
import React from "react";
import Error from "../components/Error";
import Film, { FilmType } from "../components/Film";
import FilmPage from "./Film";
import { getNewFilms, getTopFilms, getBestFilms } from "../hooks/api";
import Watch from "./Watch";

function Main() {
	const [isLoading, setIsLoading] = React.useState<boolean>(true);
	const [isRefreshing, setIsRefreshing] = React.useState<boolean>(false);
	const [error, setError] = React.useState<boolean>(false);

	const [newFilms, setNewFilms] = React.useState<FilmType[] | null>(null);
	const [topFilms, setTopFilms] = React.useState<FilmType[] | null>(null);
	const [bestFilms, setBestFilms] = React.useState<FilmType[] | null>(null);

	const [activeView, setActiveView] = React.useState<string>("main");

	const getData = async (type?: "refresh" | "fetch") => {
		if (type === "refresh") {
			setIsRefreshing(true);
		} else {
			setIsLoading(true);
		}
		try {
			const newFilms = await getNewFilms();
			setNewFilms(newFilms.releases);

			const topFilms = await getTopFilms();
			setTopFilms(topFilms.films);

			const bestFilms = await getBestFilms();
			setBestFilms(bestFilms.films);

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
					<PanelHeader>Главная</PanelHeader>
					<PullToRefresh
						onRefresh={() => getData("refresh")}
						isFetching={isRefreshing}
					>
						{(!error && (
							<>
								{(!isLoading && (
									<>
										<Group header={<Header mode="secondary">Новинки</Header>}>
											<HorizontalScroll
												showArrows
												getScrollToLeft={(i) => i - 120}
												getScrollToRight={(i) => i + 120}
											>
												<div className="films" style={{ display: "flex" }}>
													{newFilms?.map((film) => (
														<Film setActiveView={setActiveView} film={film} />
													))}
												</div>
											</HorizontalScroll>
										</Group>

										<Group
											header={<Header mode="secondary">Популярное</Header>}
										>
											<HorizontalScroll
												showArrows
												getScrollToLeft={(i) => i - 120}
												getScrollToRight={(i) => i + 120}
											>
												<div className="films" style={{ display: "flex" }}>
													{topFilms?.map((film) => (
														<Film setActiveView={setActiveView} film={film} />
													))}
												</div>
											</HorizontalScroll>
										</Group>

										<Group header={<Header mode="secondary">Лучшее</Header>}>
											<HorizontalScroll
												showArrows
												getScrollToLeft={(i) => i - 120}
												getScrollToRight={(i) => i + 120}
											>
												<div className="films" style={{ display: "flex" }}>
													{bestFilms?.map((film) => (
														<Film setActiveView={setActiveView} film={film} />
													))}
												</div>
											</HorizontalScroll>
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
						onClose={() => setActiveView("main")}
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

export default Main;

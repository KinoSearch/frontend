import { Icon56BlockOutline } from "@vkontakte/icons";
import {
	Group,
	Header,
	HorizontalScroll,
	Panel,
	PanelHeader,
	Placeholder,
	Root,
	ScreenSpinner,
	Search as VKSearch,
	View,
} from "@vkontakte/vkui";
import React, { FormEvent, useContext } from "react";
import Film, { FilmType } from "../components/Film";
import { searchFilms } from "../hooks/api";
import { AppContext } from "../providers/AppProvider";
import FilmPage from "./Film";
import Watch from "./Watch";

function Search() {
	const [search, setSearch] = React.useState<string>("");
	const [results, setResults] = React.useState<FilmType[] | null>(null);

	const [activeView, setActiveView] = React.useState<string>("main");

	const { setProps } = useContext(AppContext);

	const onSearch = async (e: FormEvent<HTMLFormElement>) => {
		e.preventDefault();

		setProps({
			popout: <ScreenSpinner state="loading" />,
			modal: null,
			filmId: null,
		});
		try {
			const results = await searchFilms(search);
			setResults(results.films);
		} catch {
			setResults([]);
		} finally {
			setProps({ popout: null, modal: null, filmId: null });
		}
	};

	return (
		<Root activeView={activeView}>
			<View id="main" activePanel="main">
				<Panel id="main">
					<PanelHeader>Поиск</PanelHeader>
					<Group separator={"hide"}>
						<form onSubmit={onSearch}>
							<VKSearch
								value={search}
								onChange={(e) => setSearch(e.target.value)}
							/>
						</form>
					</Group>

					{results !== null && (
						<>
							{(results.length !== 0 && (
								<Group
									header={<Header mode="secondary">Результаты поиска</Header>}
								>
									<HorizontalScroll
										showArrows
										getScrollToLeft={(i) => i - 120}
										getScrollToRight={(i) => i + 120}
									>
										<div className="films" style={{ display: "flex" }}>
											{results?.map((film) => (
												<Film setActiveView={setActiveView} film={film} />
											))}
										</div>
									</HorizontalScroll>
								</Group>
							)) || (
								<Group>
									<Placeholder icon={<Icon56BlockOutline />}>
										Ничего не найдено
									</Placeholder>
								</Group>
							)}
						</>
					)}
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

export default Search;

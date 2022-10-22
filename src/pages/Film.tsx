import { Icon28Like, Icon28LikeOutline } from "@vkontakte/icons";
import {
	Button,
	Div,
	Group,
	Header,
	HorizontalScroll,
	InfoRow,
	PanelHeader,
	PanelHeaderBack,
	PanelHeaderButton,
	PanelSpinner,
	SimpleCell,
	Text,
	Title,
} from "@vkontakte/vkui";
import React, { useContext } from "react";
import Error from "../components/Error";
import FilmComponent, { FilmType } from "../components/Film";
import {
	getFilmById,
	getSequelsAndPrequels,
	getSimilars,
	checkFavorite,
	removeFavorite,
	addFavorite,
} from "../hooks/api";
import { getUser } from "../hooks/auth";
import { ucFirst } from "../lib/helpers";
import { AppContext } from "../providers/AppProvider";

function Film({ onClose, watch }: { onClose: () => void; watch: () => void }) {
	const context = useContext(AppContext);
	const [filmId, setFilmId] = React.useState<number | null>(
		context.props.filmId
	);
	const [film, setFilm] = React.useState<FilmType | null>(null);
	const [isLoading, setIsLoading] = React.useState<boolean>(true);
	const [isFavorite, setIsFavorite] = React.useState<boolean | null>(null);

	const [similars, setSimilars] = React.useState<FilmType[]>([]);
	const [sequelsAndPrequels, setSequelsAndPrequels] = React.useState<
		FilmType[]
	>([]);

	const user = getUser();

	React.useEffect(() => {
		const getData = async () => {
			setIsLoading(true);
			try {
				const res = await getFilmById(filmId || 0);
				setFilm(res);

				try {
					const res = await getSimilars(filmId || 0);
					setSimilars(res.items);
				} catch {
					setSimilars([]);
				}

				try {
					const res = await getSequelsAndPrequels(filmId || 0);
					setSequelsAndPrequels(res);
				} catch {
					setSequelsAndPrequels([]);
				}

				try {
					const res = await checkFavorite(filmId || 0);
					setIsFavorite(res.favorite);
				} catch {
					setIsFavorite(null);
				}
			} catch {
				setFilm(null);
			} finally {
				setIsLoading(false);
			}
		};

		getData();
	}, [filmId]);

	return (
		<>
			<PanelHeader
				before={<PanelHeaderBack onClick={onClose} />}
				after={
					user ? (
						isFavorite !== null ? (
							<PanelHeaderButton
								onClick={async () => {
									if (isFavorite) {
										setIsFavorite(false);
										try {
											await removeFavorite(filmId || 0);
										} catch {
											setIsFavorite(true);
										}
									} else {
										setIsFavorite(true);
										try {
											await addFavorite(filmId || 0);
										} catch {
											setIsFavorite(false);
										}
									}
								}}
								aria-label="Добавить или убрать из избранного"
							>
								{(isFavorite && <Icon28Like />) || <Icon28LikeOutline />}
							</PanelHeaderButton>
						) : null
					) : null
				}
			>
				{film?.nameRu ||
					film?.nameEn ||
					film?.nameOriginal ||
					context.props.filmId}
			</PanelHeader>

			{(isLoading && <PanelSpinner />) || (
				<>
					{(!film && <Error />) || (
						<>
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
									<img
										width="256px"
										height="380px"
										style={{
											borderRadius: 8,
											border:
												"1px solid var(--vkui--color_image_placeholder_alpha)",
											objectFit: "cover",
										}}
										alt={
											film?.nameRu ||
											film?.nameEn ||
											film?.nameOriginal ||
											"error"
										}
										src={film?.posterUrl}
									/>

									<Title
										style={{ marginBottom: 8, marginTop: 20 }}
										level="2"
										weight="2"
									>
										{film?.nameRu ||
											film?.nameEn ||
											film?.nameOriginal ||
											context.props.filmId}
									</Title>
									{film?.shortDescription ||
									film?.slogan ||
									film?.description ? (
										<Text
											style={{
												marginBottom: 24,
												color: "var(--vkui--color_text_secondary)",
											}}
										>
											{film?.shortDescription ||
												film?.slogan ||
												film?.description}
										</Text>
									) : null}

									<Button onClick={watch} size="m" mode="secondary">
										Смотреть
									</Button>
								</Div>
							</Group>
							<Group>
								<Header mode="secondary">Информация о фильме</Header>
								<SimpleCell>
									<InfoRow header="Рейтинг фильма">
										{film?.ratingKinopoisk ||
											film?.ratingImdb ||
											film?.ratingFilmCritics ||
											"Неизвестно"}
									</InfoRow>
								</SimpleCell>
								<SimpleCell>
									<InfoRow header="Год выпуска">
										{film?.year || "Неизвестно"}
									</InfoRow>
								</SimpleCell>
								<SimpleCell>
									<InfoRow header="Страна">
										{film?.countries
											? film?.countries[0].country
											: "Неизвестно"}
									</InfoRow>
								</SimpleCell>
								<SimpleCell>
									<InfoRow header="Жанр">
										{film?.genres
											? ucFirst(film?.genres[0].genre)
											: "Неизвестно"}
									</InfoRow>
								</SimpleCell>
							</Group>

							{sequelsAndPrequels.length !== 0 && (
								<Group
									header={<Header mode="secondary">Сиквелы и приквелы</Header>}
								>
									<HorizontalScroll
										showArrows
										getScrollToLeft={(i) => i - 120}
										getScrollToRight={(i) => i + 120}
									>
										<div className="films" style={{ display: "flex" }}>
											{sequelsAndPrequels?.map((film) => (
												<FilmComponent onClick={setFilmId} film={film} />
											))}
										</div>
									</HorizontalScroll>
								</Group>
							)}

							{similars.length !== 0 && (
								<Group
									header={<Header mode="secondary">Похожие фильмы</Header>}
								>
									<HorizontalScroll
										showArrows
										getScrollToLeft={(i) => i - 120}
										getScrollToRight={(i) => i + 120}
									>
										<div className="films" style={{ display: "flex" }}>
											{similars?.map((film) => (
												<FilmComponent onClick={setFilmId} film={film} />
											))}
										</div>
									</HorizontalScroll>
								</Group>
							)}
						</>
					)}
				</>
			)}
		</>
	);
}

export default Film;

import { HorizontalCell } from "@vkontakte/vkui";
import React from "react";
import "../css/Film.css";
import { LazyLoadImage } from "react-lazy-load-image-component";
import "react-lazy-load-image-component/src/effects/opacity.css";
import { AppContext } from "../providers/AppProvider";

export interface Country {
	country: string;
}

export interface Genre {
	genre: string;
}

export interface FilmType {
	filmId?: number;
	kinopoiskId?: number;
	imdbId?: string;
	nameRu?: string;
	nameEn?: string;
	nameOriginal?: string;
	posterUrl: string;
	posterUrlPreview: string;
	coverUrl?: string;
	logoUrl?: string;
	ratingKinopoisk?: number;
	ratingImdb?: number;
	ratingFilmCritics?: number;
	webUrl: string;
	year?: number;
	filmLength?: any;
	slogan?: string;
	description?: string;
	shortDescription?: string;
	isTicketsAvailable: boolean;
	countries?: Country[];
	genres?: Genre[];
	startYear?: number;
	endYear?: number;
	serial: boolean;
	shortFilm: boolean;
	completed: boolean;
	hasImax: boolean;
	has3D: boolean;
	lastSync: Date;
}

function Film({
	film,
	setActiveView,
	onClick,
}: {
	film: FilmType;
	setActiveView?: any;
	onClick?: any;
}) {
	const { props, setProps } = React.useContext(AppContext);
	return (
		<HorizontalCell
			size="l"
			header={film.nameRu || film.nameEn || film.nameOriginal || "error"}
			onClick={() => {
				let newProps = props;
				newProps["filmId"] = film.filmId || film.kinopoiskId || 0;
				setProps(newProps);
				if (setActiveView) {
					setActiveView("film");
				}
				if (onClick) {
					onClick(film.filmId || film.kinopoiskId || 0);
				}
			}}
		>
			<LazyLoadImage
				width="128px"
				height="193px"
				style={{
					borderRadius: 8,
					border: "1px solid var(--vkui--color_image_placeholder_alpha)",
					objectFit: "cover",
				}}
				alt={film.nameRu || film.nameEn || film.nameOriginal || "error"}
				src={film.posterUrl}
				effect="opacity"
			/>
		</HorizontalCell>
	);
}

export default Film;

import {
	Div,
	Group,
	PanelHeader,
	PanelHeaderBack,
	PanelSpinner,
} from "@vkontakte/vkui";
import React from "react";
import Error from "../components/Error";
import { AppContext } from "../providers/AppProvider";
import { getPlayer, watchFilm } from "../hooks/api";
import { getUser } from "../hooks/auth";

function Watch({ onClose }: { onClose: () => void }) {
	const { props } = React.useContext(AppContext);
	const user = getUser();
	const [player, setPlayer] = React.useState<string | null>(null);
	const [isLoading, setIsLoading] = React.useState<boolean>(true);

	React.useEffect(() => {
		const getData = async () => {
			setIsLoading(true);
			try {
				const player = await getPlayer(props.filmId || 0);
				setPlayer(player.player);

				if (user && player.player) {
					await watchFilm(props.filmId || 0);
				}
			} catch {
				setPlayer(null);
			} finally {
				setIsLoading(false);
			}
		};

		getData();
	}, [props.filmId]);

	return (
		<>
			<PanelHeader before={<PanelHeaderBack onClick={onClose} />}>
				Просмотр фильма
			</PanelHeader>

			{(!isLoading && (
				<>
					{(!player && <Error />) || (
						<Group>
							<Div>
								<iframe
									title="player"
									src={player ? player : ""}
									frameBorder={0}
									allowFullScreen
									style={{ width: "100%", height: "100%" }}
								></iframe>
							</Div>
						</Group>
					)}
				</>
			)) || <PanelSpinner />}
		</>
	);
}

export default Watch;

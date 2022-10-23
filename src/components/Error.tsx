import { Icon56ErrorOutline } from "@vkontakte/icons";
import { Group, Link, Placeholder } from "@vkontakte/vkui";
import React from "react";

function Error() {
	return (
		<Group>
			<Placeholder icon={<Icon56ErrorOutline />} header="Произошла ошибка">
				Повторите попытку позже или обратитесь в{" "}
				<Link href="https://t.me/kirillsaint" target="_blank">
					поддержку
				</Link>
			</Placeholder>
		</Group>
	);
}

export default Error;

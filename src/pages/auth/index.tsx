import { Panel, Root, View } from "@vkontakte/vkui";
import React from "react";
import Login from "./Login";
import Register from "./Register";

function Auth() {
	const [activeView, setActiveView] =
		React.useState<"login" | "register">("login");

	return (
		<Root activeView={activeView}>
			<View id="login" activePanel="login">
				<Panel id="login">
					<Login setActiveView={setActiveView} />
				</Panel>
			</View>
			<View id="register" activePanel="register">
				<Panel id="register">
					<Register setActiveView={setActiveView} />
				</Panel>
			</View>
		</Root>
	);
}

export default Auth;

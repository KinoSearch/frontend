import {
	AdaptivityProvider,
	AppRoot,
	ConfigProvider,
	WebviewType,
} from "@vkontakte/vkui";
import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import "@vkontakte/vkui/dist/vkui.css";
import { getTheme } from "./lib/theme";
import AppProvider from "./providers/AppProvider";
import * as serviceWorkerRegistration from "./serviceWorkerRegistration";

const root = ReactDOM.createRoot(
	document.getElementById("root") as HTMLElement
);
root.render(
	<React.StrictMode>
		<AppProvider>
			<ConfigProvider
				appearance={getTheme()}
				webviewType={WebviewType.INTERNAL}
			>
				<AdaptivityProvider>
					<AppRoot>
						<App />
					</AppRoot>
				</AdaptivityProvider>
			</ConfigProvider>
		</AppProvider>
	</React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
serviceWorkerRegistration.register();

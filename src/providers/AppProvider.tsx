import { createContext, ReactNode, useState } from "react";

export type AppContextType = {
	props: PropsType;
	setProps?: any;
};

export type PropsType = {
	popout: ReactNode | null;
	modal: string | null;
	filmId: number | null;
};

const AppContext = createContext<AppContextType>({
	props: {
		popout: null,
		modal: null,
		filmId: null,
	},
});

export default function AppProvider({ children }: { children: ReactNode }) {
	const [props, setProps] = useState<PropsType>({
		popout: null,
		modal: null,
		filmId: null,
	});

	return (
		<AppContext.Provider value={{ props, setProps }}>
			{children}
		</AppContext.Provider>
	);
}

export { AppContext };

import { ModalRoot } from "@vkontakte/vkui";
import React from "react";
import { AppContext } from "../providers/AppProvider";
import ChangePassword from "./ChangePassword";

function Modals() {
	const { props } = React.useContext(AppContext);

	return <ModalRoot activeModal={props.modal}>{ChangePassword()}</ModalRoot>;
}

export default Modals;

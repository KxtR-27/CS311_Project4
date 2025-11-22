import { useContext } from "react";
import CRUDContext from "./CRUDContext";

const ExitUpdateButton = () => {
	const CRUD = useContext(CRUDContext);
	return CRUD.updateID ? (
		<button className="exit-update-button" onClick={() => CRUD.setUpdateID("")}>
			YOU ARE IN UPDATE MODE. CLICK HERE TO EXIT.
		</button>
	) : (
		<></>
	);
};

export default ExitUpdateButton;

import { useContext } from "react";
import CRUDContext from "../modules/CRUDContext.ts";
import "./ExitUpdateButton.css"

const ExitUpdateButton = () => {
	const CRUD = useContext(CRUDContext);
	return CRUD.updateTarget ? (
		<button className="exit-update-button" onClick={() => CRUD.setUpdateTarget(null)}>
			YOU ARE IN UPDATE MODE. CLICK HERE TO EXIT.
		</button>
	) : (
		<></>
	);
};

export default ExitUpdateButton;

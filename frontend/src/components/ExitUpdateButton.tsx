import { useContext } from "react";
import CRUDContext from "../modules/CRUDContext.ts";
import "./ExitUpdateButton.css"

/** A component that "stops" an update process issued by CRUD */
const ExitUpdateButton = () => {
	/** Get global CRUD object */
	const CRUD = useContext(CRUDContext);

	/** Show exit update button only if a document is being updated */
	return CRUD.updateTarget ? (
		<button className="exit-update-button" onClick={() => CRUD.setUpdateTarget(null)}>
			YOU ARE IN UPDATE MODE. CLICK HERE TO EXIT.
		</button>
	) : (
		<></>
	);
};

export default ExitUpdateButton;

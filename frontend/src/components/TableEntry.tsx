import { useContext } from "react";
import CRUDContext from "../modules/CRUDContext.ts";
import "./TableEntry.css";

/** A table row containing attributes of its given instrument */
const TableEntry = ({ instrument }: { instrument: InstrumentWithID }) => {
	const CRUD = useContext(CRUDContext);

	return (
		<tr
			className="table-entry"
			style={
				/* If CRUD is updating my document, turn orange. */
				{ backgroundColor: CRUD.updateTarget == instrument ? "peachpuff" : "" }
			}
		>
			<td>{instrument.instrument}</td>
			<td>{instrument.owner}</td>
			<td className={instrument.complete ? "complete" : "incomplete"}>
				{instrument.complete ? "Complete" : "Incomplete"}
			</td>
			<td>{`$${instrument.cost.toFixed(2)}`}</td>
			<td className="action">
				<button className="update" onClick={() => CRUD.setUpdateTarget(instrument)}>
					Update
				</button>
				<button className="delete" onClick={() => CRUD.DELETE(instrument._id)}>
					Delete
				</button>
			</td>
		</tr>
	);
};

export default TableEntry;

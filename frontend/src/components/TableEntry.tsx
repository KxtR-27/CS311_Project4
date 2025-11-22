import { useContext } from "react";
import CRUDContext from "./CRUDContext";

const TableEntry = ({ instrument }: { instrument: InstrumentWithID }) => {
	const CRUD = useContext(CRUDContext)

	return (
		<tr className="instrument-item">
			<td>{instrument.instrument}</td>
			<td>{instrument.owner}</td>
			<td>{instrument.complete ? "Complete" : "Incomplete"}</td>
			<td>{instrument.cost}</td>
			<td className="action">
				<button className="update">Update</button>
				<button className="delete" onClick={() => CRUD.DELETE(instrument._id)}>
					Delete
				</button>
			</td>
		</tr>
	);
};

export default TableEntry;

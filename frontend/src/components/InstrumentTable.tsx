import TableEntry from "./TableEntry";
import "./InstrumentTable.css";

/** A component holding a table element that automatically updates its rows for each document. */
const InstrumentTable = ({ instruments }: { instruments: InstrumentWithID[] }) => {
	return (
		<table className="instrument-table">
			<thead>
				<tr>
					<th>Instrument</th>
					<th>Owner</th>
					<th>Status</th>
					<th>Cost</th>
					<th>Action</th>
				</tr>
			</thead>
			<tbody>
				{instruments.length > 0 ? (
					instruments.map(instrument => {
						return <TableEntry instrument={instrument} key={instrument._id} />;
					})
				) : (
					<tr>
						<td className="none-found" colSpan={5}>
							No jobs yet.
						</td>
					</tr>
				)}
			</tbody>
		</table>
	);
};

export default InstrumentTable;

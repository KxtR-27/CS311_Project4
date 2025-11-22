import TableEntry from "./TableEntry";

const InstrumentTable = ({instruments}: {instruments: InstrumentWithID[]}) => {
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
				{instruments.map(instrument => {
					return <TableEntry instrument={instrument} key={instrument._id} />;
				})}
			</tbody>
		</table>
	);
};

export default InstrumentTable;

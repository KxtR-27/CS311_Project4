const InstrumentItem = ({ instrument }: { instrument: Instrument }) => {
	return <tr className="instrument-item">
		<td>{instrument.instrument}</td>
		<td>{instrument.owner}</td>
		<td>{instrument.complete}</td>
		<td>{instrument.cost}</td>
		<td className="action">
			<button className="update">Update</button>
			<button className="delete">Delete</button>
		</td>
	</tr>;
};

export default InstrumentItem;

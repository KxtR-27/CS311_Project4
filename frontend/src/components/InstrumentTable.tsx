import React from "react";
import InstrumentItem from "./TableInstrument";

const InstrumentTable = ({ instruments }: { instruments: Instrument[] }) => {
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
                {instruments.map((instrument) => {
                    return <InstrumentItem instrument={instrument}/>
                })}
            </tbody>
		</table>
	);
};

export default InstrumentTable;

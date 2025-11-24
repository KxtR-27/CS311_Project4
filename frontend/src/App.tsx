import { useEffect, useState } from "react";
import InstrumentForm from "./components/InstrumentForm";
import InstrumentTable from "./components/InstrumentTable";
import CRUDContext from "./components/CRUDContext";
import API from "./API";
import "./App.css";

const App = () => {
	const [instruments, setInstruments] = useState<InstrumentWithID[]>([]);
	const [updateTarget, setUpdateTarget] = useState<InstrumentWithID | null>(null);

	const createInstrument = async (instrument: Instrument) => {
		await API.create(instrument)
			.then(() => readInstruments())
			.catch(error => console.log(error));
	};

	const readInstruments = async () => {
		await API.read()
			.then(read => setInstruments(read))
			.catch(error => console.log(error));
	};

	const updateInstrument = async (instrument: Instrument, id: string) => {
		await API.update(instrument, id)
			.then(() => readInstruments())
			.catch(error => console.log(error));
	};

	const deleteInstrument = async (instrumentID: string) => {
		await API.delete(instrumentID)
			.then((deleted: InstrumentWithID) => {
				readInstruments();
				
				if (deleted?._id == updateTarget?._id)
					setUpdateTarget(null);
			})
			.catch(error => console.log(error));
		
		
	};

	useEffect(() => {
		readInstruments();
	}, []);

	const CRUD = {
		CREATE: createInstrument,
		READ: readInstruments,
		UPDATE: updateInstrument,
		DELETE: deleteInstrument,

		updateTarget: updateTarget,
		setUpdateTarget: setUpdateTarget,
	};

	return (
		<div className="app">
			<CRUDContext.Provider value={CRUD}>
				<h1>Instrument Refurbishing Orders</h1>
				<InstrumentForm />
				<InstrumentTable instruments={instruments} />
			</CRUDContext.Provider>
		</div>
	);
};

export default App;

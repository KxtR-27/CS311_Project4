import { useEffect, useState } from "react";
import InstrumentForm from "./components/InstrumentForm";
import InstrumentTable from "./components/InstrumentTable";
import CRUDContext from "./modules/CRUDContext.ts";
import API from "./modules/API.ts";
import "./App.css";

const App = () => {
	/** Live list of all documents */
	const [instruments, setInstruments] = useState<InstrumentWithID[]>([]);
	/** Which document is being updated via ID, if any */
	const [updateTarget, setUpdateTarget] = useState<InstrumentWithID | null>(null);

	/** Create new document, then refresh live list */
	const createInstrument = async (instrument: Instrument) => {
		await API.create(instrument)
			.then(() => readInstruments())
			.catch(error => console.log(error));
	};

	/** Set/refresh live list with all documents */
	const readInstruments = async () => {
		await API.read()
			.then(read => setInstruments(read))
			.catch(error => console.log(error));
	};

	/** Update document by ID, then refresh live list */
	const updateInstrument = async (instrument: Instrument, id: string) => {
		await API.update(instrument, id)
			.then(() => readInstruments())
			.catch(error => console.log(error));
	};

	/** Delete document by ID, then refresh live list */
	const deleteInstrument = async (instrumentID: string) => {
		await API.delete(instrumentID)
			.then((deleted: InstrumentWithID) => {
				readInstruments();
				
				if (deleted?._id == updateTarget?._id)
					setUpdateTarget(null);
			})
			.catch(error => console.log(error));
	};

	/** On first load/render, set live list. */
	useEffect(() => {
		readInstruments();
	}, []);

	/** Consolidate API-related methods into one object */
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
			{/** Pass CRUD object as global context */}
			<CRUDContext.Provider value={CRUD}>
				<h1>Instrument Refurbishing Orders</h1>
				<InstrumentForm />
				<InstrumentTable instruments={instruments} />
			</CRUDContext.Provider>
		</div>
	);
};

export default App;

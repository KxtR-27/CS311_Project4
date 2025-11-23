import { useEffect, useState } from "react";
import InstrumentForm from "./components/InstrumentForm";
import InstrumentTable from "./components/InstrumentTable";
import ExitUpdateButton from "./components/ExitUpdateButton";
import CRUDContext from "./components/CRUDContext";
import FetchModule from "./fetch-module";
import "./App.css";

const App = () => {
	const [instruments, setInstruments] = useState<InstrumentWithID[]>([]);
	const [updateTarget, setUpdateTarget] = useState<InstrumentWithID | null>(null);

	const createInstrument = async (instrument: Instrument) => {
		await FetchModule.create(instrument)
			.then(() => readInstruments())
			.catch(error => console.log(error));
	};

	const readInstruments = async () => {
		await FetchModule.read()
			.then(read => setInstruments(read))
			.catch(error => console.log(error));
	};

	const updateInstrument = async (instrument: Instrument, id: string) => {
		await FetchModule.update(instrument, id)
			.then(() => readInstruments())
			.catch(error => console.log(error));
	};

	const deleteInstrument = async (instrumentID: string) => {
		await FetchModule.delete(instrumentID)
			.then(() => readInstruments())
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
				<ExitUpdateButton />
				<InstrumentTable instruments={instruments} />
			</CRUDContext.Provider>
		</div>
	);
};

export default App;

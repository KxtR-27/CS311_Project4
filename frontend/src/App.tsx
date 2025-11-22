import InstrumentForm from "./components/InstrumentForm";
import InstrumentTable from "./components/InstrumentTable";
import "./App.css";
import { useEffect, useState } from "react";
import Fetching from "./fetch-module";
import CRUDContext from "./components/CRUDContext";

const App = () => {
	const [instruments, setInstruments] = useState<InstrumentWithID[]>([]);

	const createInstrument = async (instrument: Instrument) => {
		await Fetching.create(instrument)
			.then(() => readInstruments())
			.catch(error => {
				console.log(error);
			});
	};

	const readInstruments = async () => {
		await Fetching.read()
			.then(read => setInstruments(read))
			.catch(error => {
				console.log(error);
			});
	};

	const updateInstrument = async (instrument: InstrumentWithID) => {
		await Fetching.update(instrument)
			.then(() => readInstruments())
			.catch(error => console.log(error));
	};

	const deleteInstrument = async (instrumentID: string) => {
		await Fetching.delete(instrumentID)
			.then(() => readInstruments())
			.catch(error => console.log(error));
	};

	useEffect(() => {readInstruments()}, [])

	const CRUD = {
		CREATE: createInstrument,
		READ: readInstruments,
		UPDATE: updateInstrument,
		DELETE: deleteInstrument,
	}

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

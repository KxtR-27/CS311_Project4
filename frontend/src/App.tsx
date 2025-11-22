import InstrumentForm from "./components/InstrumentForm";
import InstrumentTable from "./components/InstrumentTable";
import "./App.css";
import { useState } from "react";
import Fetching from "./fetch-module";

const App = () => {
	const [instruments, setInstruments] = useState<Instrument[]>([]);

	const createInstrument = async (instrument: Instrument) => {
		await Fetching.create(instrument)
			.then(() => readInstruments())
			.catch(error => {console.log(error)});
	}

	const readInstruments = async () => {
		await Fetching.read()
			.then(read => setInstruments(read))
			.catch(error => {console.log(error)})
	}

	const updateInstrument = async (instrument: Instrument) => {
		await Fetching.update(instrument)
			.then(() => readInstruments())
			.catch(error => console.log(error));
	}

	const deleteInstrument = async (instrumentID: string) => {
		await Fetching.delete(instrumentID)
			.then(() => readInstruments())
			.catch(error => console.log(error));
	}

	return <div className="app">
		<h1>Instrument Refurbishing Orders</h1>
		<InstrumentForm />
		<InstrumentTable instruments={instruments}/>
	</div>;
};

export default App;

import InstrumentForm from "./components/InstrumentForm";
import InstrumentTable from "./components/InstrumentTable";
import "./App.css";

const App = () => {
	return <div className="app">
		<h1>Instrument Refurbishing Orders</h1>
		<InstrumentForm />
		<InstrumentTable instruments={[]}/>
	</div>;
};

export default App;

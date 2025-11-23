import { useState, useRef, useContext, useEffect } from "react";
import CRUDContext from "./CRUDContext";

const InstrumentForm = () => {
	// Data is bound to inputs dynamically.
	// Inputs are bound to data via `onChange()`
	const [instrument, setInstrument] = useState("");
	const [owner, setOwner] = useState("");
	const [complete, setComplete] = useState(false);
	const [cost, setCost] = useState<number>(150.00);

	const CRUD = useContext(CRUDContext);

	// Since the states are bound,
	// calling reset on the <HTMLFormElement> will have no effect.
	const resetForm = () => {
		setInstrument("");
		setOwner("");
		setComplete(false);
		setCost(150.00);
	}

	const submitForm = () => {
		const formInstrument = { instrument, owner, complete, cost };

		if (CRUD.updateTarget) {
			CRUD.UPDATE(formInstrument, CRUD.updateTarget._id);
			CRUD.setUpdateTarget(null);
		} else CRUD.CREATE(formInstrument);

		resetForm();
	};

	const autofillForUpdate = () => {
		if (!CRUD.updateTarget) return;
		const { instrument, owner, complete, cost } = CRUD.updateTarget;

		setInstrument(instrument);
		setOwner(owner);
		setComplete(complete);
		setCost(cost);
	};

	useEffect(() => {
		if (CRUD.updateTarget) autofillForUpdate();
		else resetForm();
	}, [CRUD.updateTarget]);

	return (
		<form
			className="instrument-form"
			onSubmit={e => {
				e.preventDefault();
				submitForm();
			}}
		>
			<input
				type="text"
				name="instrument"
				placeholder="Instrument"
				value={instrument}
				onChange={e => setInstrument(e.target.value)}
				required
			/>
			<input
				type="text"
				name="owner"
				placeholder="Owner"
				value={owner}
				onChange={e => setOwner(e.target.value)}
				required
			/>
			<div className="container">
				<input
					type="checkbox"
					name="complete"
					checked={complete}
					onChange={() => setComplete(!complete)}
				/>
				<label htmlFor="complete">Complete?</label>
			</div>
			<input
				type="number"
				name="cost"
				step={0.01}
				placeholder="ex. $150.00"
				value={cost}
				onChange={e => setCost(parseFloat(e.target.value))}
				required
			/>
			<input type="submit" value={CRUD.updateTarget ? "UPDATE" : "SUBMIT"} className={CRUD.updateTarget ? "update" : ""}/>
		</form>
	);
};

export default InstrumentForm;

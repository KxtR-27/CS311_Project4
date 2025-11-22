import { useState, useRef, useContext } from "react";
import CRUDContext from "./CRUDContext";

const InstrumentForm = () => {
	const [instrument, setInstrument] = useState("");
	const [owner, setOwner] = useState("");
	const [complete, setComplete] = useState(false);
	const [cost, setCost] = useState(0.0);

	// @ts-expect-error - official React documentation uses this method
	// https://react.dev/learn/manipulating-the-dom-with-refs
	const formRef: React.RefObject<HTMLFormElement> = useRef(null);
	const CRUD = useContext(CRUDContext);

	return (
		<form
			className="instrument-form"
			id="form"
			ref={formRef}
			onSubmit={e => {
				e.preventDefault();
				const formInstrument = { instrument, owner, complete, cost };

				if (CRUD.updateID) {
					CRUD.UPDATE(formInstrument, CRUD.updateID);
					CRUD.setUpdateID("");
				}
				else 
					CRUD.CREATE(formInstrument);

				formRef.current.reset();
			}}
		>
			<input
				type="text"
				name="instrument"
				placeholder="Instrument"
				onChange={e => setInstrument(e.target.value)}
				required
			/>
			<input type="text" name="owner" placeholder="Owner" onChange={e => setOwner(e.target.value)} required />
			<input type="checkbox" name="complete" onChange={e => setComplete(Boolean(e.target.value))} />
			<label htmlFor="complete">Complete?</label>
			<input
				type="number"
				name="cost"
				placeholder="ex. $150.00"
				onChange={e => setCost(parseFloat(e.target.value))}
				required
			/>
			<input type="submit" value="SUBMIT" />
		</form>
	);
};

export default InstrumentForm;

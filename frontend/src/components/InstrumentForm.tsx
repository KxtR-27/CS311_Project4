import { useState, useContext, useEffect } from "react";
import ExitUpdateButton from "./ExitUpdateButton";
import CRUDContext from "../modules/CRUDContext.ts";
import "./InstrumentForm.css";

/** A component containing all inputs necessary to create and update documents. */
const InstrumentForm = () => {
	/** States here are bound to form values. Therefore, state is live.
	 * States are passed directly into form element values.
	 * Form element values update states `onChange()`
	 */
	const [instrument, setInstrument] = useState("");
	const [owner, setOwner] = useState("");
	const [complete, setComplete] = useState(false);
	const [cost, setCost] = useState<number>(150.0);

	/** Get global CRUD object */
	const CRUD = useContext(CRUDContext);

	/** Reset all states, and therein reset all form values.
	 * Since the states are bound,
	 * calling reset on the <HTMLFormElement> will have no effect.
	 */
	const resetForm = () => {
		setInstrument("");
		setOwner("");
		setComplete(false);
		setCost(150.0);
	};

	/** Code to run on form submission instead of default event */
	const submitForm = () => {
		const formInstrument = { instrument, owner, complete, cost };

		// If submission was an update, update existing document
		if (CRUD.updateTarget) {
			CRUD.UPDATE(formInstrument, CRUD.updateTarget._id);
			CRUD.setUpdateTarget(null);
		}
		// Otherwise, create new document
		else CRUD.CREATE(formInstrument);

		resetForm();
	};

	/** When updating a document,
	 * autofill the form fields with the document's current values.
	 */
	const autofillForUpdate = () => {
		if (!CRUD.updateTarget) return;
		const target = CRUD.updateTarget;

		setInstrument(target.instrument);
		setOwner(target.owner);
		setComplete(target.complete);
		setCost(target.cost);
	};

	/** Every time CRUD's updating document changes,
	 * autofill fields if CRUD is updating a new document,
	 * or clear form fields if CRUD is no longer updating
	 */
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
			<div className="inputs">
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
						onChange={
							/* Matching the checkbox's `checked` attribute directly
							 * has no effect because of data binding.
							 */
							() => setComplete(!complete)
						}
					/>
					<label htmlFor="complete">Complete?</label>
				</div>
				<div className="container">
					<label htmlFor="cost">$</label>
					<input
						type="number"
						name="cost"
						step={0.01}
						placeholder="ex. 150.00"
						value={cost}
						onChange={e => setCost(parseFloat(e.target.value))}
						required
					/>
				</div>
			</div>
			<input
				type="submit"
				value={CRUD.updateTarget ? "UPDATE" : "SUBMIT"}
				className={CRUD.updateTarget ? "update" : ""}
			/>
			<ExitUpdateButton />
		</form>
	);
};

export default InstrumentForm;

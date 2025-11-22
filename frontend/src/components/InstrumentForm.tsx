const InstrumentForm = () => {
	return (
		<form className="instrument-form" onSubmit={e => e.preventDefault()}>
			<input type="text" name="instrument" placeholder="Instrument" required />
			<input type="text" name="owner" placeholder="Owner" required />
			<input type="checkbox" name="complete" />
			<label htmlFor="complete">Complete?</label>
			<input type="number" name="cost" placeholder="ex. $150.00" required />
		</form>
	);
};

export default InstrumentForm;

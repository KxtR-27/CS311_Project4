const BASE_URL = "http://localhost:8080";

// the line `.then(data => /* return */ data)` basically makes the code wait for `response.text()` to resolve

const fetchCreate = async ({ instrument, owner, complete, cost }: Instrument) => {
	return await fetch(`${BASE_URL}/create`, {
		method: "POST",
		headers: { "Content-type": "application.json" },
		body: JSON.stringify({ instrument, owner, complete, cost }),
	})
		.then(response => response.text())
		.then(data => /* return */ data);

	// not catching here because it's important for the App to handle the error
};

const fetchRead = async () => {
	return await fetch(`${BASE_URL}/read`)
		.then(response => response.json())
		.then(data => /* return */ data);
};

const fetchUpdate = async ({ instrument, owner, complete, cost, _id: id }: Instrument) => {
	if (!id) return null;

	return await fetch(`${BASE_URL}/update`, {
		method: "POST",
		headers: { "Content-type": "application/json" },
		body: JSON.stringify({ id, instrument, owner, complete, cost }),
	})
		.then(response => response.text())
		.then(data => /* return */ data);
};

const fetchDelete = async (id: string) => {
	return await fetch(`${BASE_URL}/delete`, {
		method: "POST",
		headers: { "Content-type": "application/json" },
		body: JSON.stringify({ id }),
	})
		.then(response => response.text())
		.then(data => /* return */ data);
};

const Fetching = {
	create: fetchCreate,
	read: fetchRead,
	update: fetchUpdate,
	delete: fetchDelete,
};

export default Fetching;

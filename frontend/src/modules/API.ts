const BASE_URL = "http://localhost:8080";

/** Create a MongoDB document */
const fetchCreate = async (instrument: Instrument) => {
	const response = await fetch(`${BASE_URL}/create`, {
		method: "POST",
		headers: { "Content-type": "application/json" },
		body: JSON.stringify(instrument),
	});
	const data = await response.text();
	return data;
};

/** Read all MongoDB documents */
const fetchRead = async () => {
	const response = await fetch(`${BASE_URL}/read`);
	const data = await response.json();
	return data;
};

/** Update a MongoDB document with matching ID */
const fetchUpdate = async ({ instrument, owner, complete, cost }: Instrument, id: string) => {
	const response = await fetch(`${BASE_URL}/update`, {
		method: "POST",
		headers: { "Content-type": "application/json" },
		body: JSON.stringify({ id, instrument, owner, complete, cost }),
	});
	const data = await response.text();
	return data;
};

/** Delete a MongoDB document with matching ID */
const fetchDelete = async (id: string) => {
	const response = await fetch(`${BASE_URL}/delete`, {
		method: "POST",
		headers: { "Content-type": "application/json" },
		body: JSON.stringify({ id }),
	});
	const data = await response.json();
	return data;
};

/** construct module object */
const API = {
	create: fetchCreate,
	read: fetchRead,
	update: fetchUpdate,
	delete: fetchDelete,
};

export default API;

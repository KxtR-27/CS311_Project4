const BASE_URL = "http://localhost:8080";

// the line `.then(data => /* return */ data)` basically makes the code wait for `response.text()` to resolve
// not catching here because it's important for the App to handle the error

const fetchCreate = async (instrument: Instrument) => {
	const response = await fetch(`${BASE_URL}/create`, {
		method: "POST",
		headers: { "Content-type": "application/json" },
		body: JSON.stringify(instrument),
	});
	const data = await response.text();
	return data;
};

const fetchRead = async () => {
	const response = await fetch(`${BASE_URL}/read`);
	const data = await response.json();
	return data;
};

const fetchUpdate = async ({ instrument, owner, complete, cost }: Instrument, id: string) => {
	const response = await fetch(`${BASE_URL}/update`, {
		method: "POST",
		headers: { "Content-type": "application/json" },
		body: JSON.stringify({ id, instrument, owner, complete, cost }),
	});
	const data = await response.text();
	return data;
};

const fetchDelete = async (id: string) => {
	const response = await fetch(`${BASE_URL}/delete`, {
		method: "POST",
		headers: { "Content-type": "application/json" },
		body: JSON.stringify({ id }),
	});
	const data = await response.json();
	return data;
};

const API = {
	create: fetchCreate,
	read: fetchRead,
	update: fetchUpdate,
	delete: fetchDelete,
};

export default API;

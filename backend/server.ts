// @ts-ignore - will certainly be used in database interaction
import express, { type Express, type Request, type Response } from "express";
import cors from "cors";
import mongoose from "mongoose";

/* *** Initialize express app *** */
const app: Express = express();

app.use(express.json());
app.use(cors());
app.listen(8080, () => {
	console.log(`Server started on port 8080`);
});

/* *** Initialize mongoose connection *** */
mongoose.connect("mongodb://localhost:27017/project4");

// An instrument refurbishing order list
const instrumentJob = new mongoose.Schema({
	instrument: String, // the instrument to refurbish
	owner: String, // the owner of the instrument
	ready: Boolean, // whether the instrument is refurbished and ready for return
});

const InstrumentJob = mongoose.model("document", instrumentJob);

/* *** Implement database interaction *** */

// Add instrument job
app.post("/addInstrument", (req, res) => {
	const { instrument, owner, ready } = req.body;

	InstrumentJob.create({ instrument, owner, ready })
		.then(() => res.status(200).send("Instrument logged!"))
		.catch(error => res.status(500).send(error));
});

// Get all instrument jobs (for table in frontend)
app.get("/getAllInstruments", async (_req, res) => {
	await InstrumentJob.find()
		.then(instrumentJob => res.status(200).send(instrumentJob))
		.catch(error => res.status(500).send(error));
});

// Update existing instrument job
app.post("/updateInstrument", async (req, res) => {
	const { id, name, email } = req.body;

	await InstrumentJob.findByIdAndUpdate(id, { name, email }, { new: true })
		.then(() => res.status(200).send("Instrument updated successfully."))
		.catch(error => res.status(500).send(error));
});

// Remove/delete an instrument job
app.post("/delete", async (req, res) => {
	const { id } = req.body;

	await InstrumentJob.findByIdAndDelete(id)
		.then(() => res.status(200).send("Instrument deleted successfully."))
		.catch(error => res.status(500).send(error));
});

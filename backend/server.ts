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

/* *** Initialize mongoose connection */
mongoose.connect("mongodb://localhost:27017/project4");

const projectItemSchema = new mongoose.Schema({ id: String });
// @ts-ignore - will certainly be used in database interaction
const projectItem = mongoose.model("document", projectItemSchema);

/* *** Implement database interaction *** */

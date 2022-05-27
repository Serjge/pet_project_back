import express, { Express, Request, Response } from "express";
import dotenv from "dotenv";
import cors from "cors";

dotenv.config();

const { PORT } = process.env;

const app: Express = express();

app.use(cors());

app.get("/", async (req: Request, res: Response) => {
	const message = "Hello";
	res.send(JSON.stringify(message));
});

app.use((req: Request, res: Response) => {
	res.sendStatus(404);
});

app.listen(PORT, () => {
	console.log(`Example app listening on port ${PORT}`);
});

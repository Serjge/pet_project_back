import express, { Express, Request, Response } from "express";
import cors from "cors";
import { json, urlencoded } from "body-parser";

import { CONFIG } from "config";
import { rootRoutes, authRoutes } from "routes";
import { handleError } from "utils/handleError";

const { port } = CONFIG.app;

const app: Express = express();

app.use(cors());
app.use(urlencoded({ extended: true }));
app.use(json());

app.use("/auth", authRoutes);
app.use("/", rootRoutes);

app.use((req: Request, res: Response) => {
	res.sendStatus(404);
});

app.use(handleError);

app.listen(port, () => {
	console.log(`Example app listening on port ${port}`);
});

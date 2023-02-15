import express, { Express, Request, Response } from "express";
import cors from "cors";

import { CONFIG } from "config";
import { rootRoutes, authRoutes } from "routes";

const { port } = CONFIG.app;

const app: Express = express();

app.use(cors());

app.use("/auth", authRoutes);
app.use("/", rootRoutes);

app.use((req: Request, res: Response) => {
	res.sendStatus(404);
});

app.listen(port, () => {
	console.log(`Example app listening on port ${port}`);
});

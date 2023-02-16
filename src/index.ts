import express, { Express, Request, Response } from "express";
import cors from "cors";

import { rootRoutes, authRoutes } from "routes";
import { CONFIG } from "config";

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

export default app;

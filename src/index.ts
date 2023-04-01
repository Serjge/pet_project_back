import { Routing } from "enum/routing";
import express, { Express, Request, Response } from "express";
import cors from "cors";
import { json, urlencoded } from "body-parser";

import { CONFIG } from "config";
import { rootRoutes, authRoutes } from "routes";
import { handleError } from "utils/handleError";
import { mailLog } from "utils/mailLog";

const { port } = CONFIG.app;

const app: Express = express();

app.use(cors());
app.use(urlencoded({ extended: true }));
app.use(json());

app.use(Routing.auth, authRoutes);
app.use(Routing.root, rootRoutes);

app.use((req: Request, res: Response) => {
	res.sendStatus(404);
});

app.use(handleError);

app.listen(port, async () => {
	console.log(`Example app listening on port ${port}`);
	await mailLog();
});

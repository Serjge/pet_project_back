import { Request, Response, Router } from "express";

export const rootRoutes = Router();

rootRoutes.use((req, res, next) => {
	console.log("Time: ", Date.now());
	next();
});

rootRoutes.post("/", async (req: Request, res: Response) => {
	const message = "Hello API";

	res.send(message);
});

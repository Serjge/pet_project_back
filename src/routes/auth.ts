import { Request, Response, Router } from "express";

export const authRoutes = Router();

authRoutes.use((req, res, next) => {
	console.log("Time: ", Date.now());
	next();
});

authRoutes.get("/", async (req: Request, res: Response) => {
	// const users = await getUsers();
	res.send("auth");
});

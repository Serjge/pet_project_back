import { Request, Response, Router } from "express";
import { mailer } from "utils";

export const rootRoutes = Router();

rootRoutes.use((req, res, next) => {
	console.log("Time: ", Date.now());
	next();
});

rootRoutes.post("/", async (req: Request, res: Response) => {
	const message = "Hello API";

	res.send(message);
});

rootRoutes.get("/send", async (req: Request, res: Response) => {
	const message = {
		from: "\"Node js\" <nodejs@example.com>",
		to: "serjge@yandex.ru",
		subject: "Congratulations! You are successfully registred on our site",
		html: `
        <h2>Поздравляем, Вы успешно зарегистрировались на нашем сайте!</h2>
        
        <i>данные вашей учетной записи:</i>
         <ul>
         
           <li>login: </li>
           <li>password:</li>
         </ul>

        <p>Данное письмо не требует ответа.<p>`
	};
	try {
		await mailer(message);
	} catch (e) {
		// console.log(e);
	}
	res.send(JSON.stringify(message));
});

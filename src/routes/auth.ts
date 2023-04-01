import { authController } from "db/authController";
import { Request, Response, Router, NextFunction } from "express";
import { DatabaseError } from "pg-errors";
import { mailer, CustomError, getErrorDB } from "utils";
import { registrationValidate } from "validations/register";

export interface RegisterBody {
	email:string,
	nickname:string,
	password:string
}

export const authRoutes = Router();

authRoutes.use((req, res, next) => {
	console.log("Time: ", Date.now());
	next();
});

authRoutes.post("/register", async (req: Request<{}, {}, RegisterBody >, res: Response, next:NextFunction) => {
	const { nickname, password, email } = req.body;

	const { validate, errors } = registrationValidate(req.body);

	if (!validate) {
		next(errors);
	}

	const html = `
        <h2>Поздравляем, Вы успешно зарегистрировались на нашем сайте!</h2>
        
        <i>данные вашей учетной записи:</i>
         <ul>
           <li>login: ${nickname}</li>
           <li>password: ${password}</li>
         </ul>

        <p>Данное письмо не требует ответа.<p>`;

	const subject = "Congratulations! You are successfully registred on our site";

	try {
		const result = await authController.register(email, nickname, password);

		await mailer(email, subject, html);

		res.status(200).send({ success: true, user: result.rows[0] });
	} catch (e) {
		if (e instanceof CustomError) {
			if (e.message === "email sending error") {
				await authController.deleteUserByEmail(email);
			}

			next(e);
		}
		next(getErrorDB(e as DatabaseError));
	}
});

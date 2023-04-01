import { CONFIG } from "config";
import { mailer } from "utils/mailer";

export const mailLog = async () => {
	const date = new Date().toLocaleString();
	const	to = CONFIG.log.email;
	const html = `<h2>${date}</h2>`;

	await mailer(to, "start server", html);

	setInterval(async () => {
		try {
			await mailer(to, "test", html);
		} catch (e) {
			// console.log(e);
		}
	}, 7200000);
};

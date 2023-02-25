import { createTransport } from "nodemailer";
import Mail from "nodemailer/lib/mailer";

import { CONFIG } from "config";
import { CustomError } from "utils/CustomError";

const { user, refreshToken, clientId, clientSecret } = CONFIG.gmail;

const createTransporter = createTransport({
	service: "gmail",
	auth: {
		type: "OAuth2",
		user,
		refreshToken,
		clientId,
		clientSecret
	}
});

export const mailer = async (message: Mail.Options) => {
	try {
		await createTransporter.sendMail(message);
	} catch (e) {
		throw new CustomError("email sending error", 400, "");
	}
};

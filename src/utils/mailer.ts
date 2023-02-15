import { createTransport } from "nodemailer";
import Mail from "nodemailer/lib/mailer";

import { CONFIG } from "config";

const { user, refreshToken, clientId, clientSecret } = CONFIG.gmail;

const createTransporter = createTransport({
	service: "Gmail",
	auth: {
		type: "OAuth2",
		user,
		refreshToken,
		clientId,
		clientSecret
	}
});

export const mailer = async (message: Mail.Options) => {
	await createTransporter.sendMail(message);
};

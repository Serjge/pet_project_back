import dotenv from "dotenv";

dotenv.config();

const { PORT, EMAIL, EMAIL_CLIENT_ID, EMAIL_CLIENT_SECRET, EMAIL_REFRESH_TOKEN, POSTGRESQL_HOST, POSTGRESQL_USER, POSTGRESQL_PASSWORD, POSTGRESQL_DATABASE, POSTGRESQL_PORT } = process.env;

export const CONFIG = {
	app: {
		port: PORT || 3000
	},
	db: {
		host: POSTGRESQL_HOST || "localhost",
		port: POSTGRESQL_PORT || 5432,
		name: POSTGRESQL_DATABASE || "db",
		user: POSTGRESQL_USER,
		password: POSTGRESQL_PASSWORD
	},
	gmail: {
		user: EMAIL,
		clientId: EMAIL_CLIENT_ID,
		clientSecret: EMAIL_CLIENT_SECRET,
		refreshToken: EMAIL_REFRESH_TOKEN
	}
};

import { DatabaseError } from "pg-errors";
import { CustomError } from "utils/CustomError";

export const getErrorDB = (error: DatabaseError) => {
	const { detail } = error;
	if (detail?.includes("already exists")) {
		const key = detail?.split(" ")[1];

		if (key.includes("email")) {
			return new CustomError("email already exists", 400, "");
		}
		if (key.includes("nickname")) {
			return new CustomError("nickname already exists", 400, "");
		}
	}
	return new CustomError("Unknown error", 400, "");
};

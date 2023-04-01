import { RegisterBody } from "routes/auth";
import { CustomError } from "utils";
import { object, string, ValidationError } from "yup";

export const registrationValidate = (obj:RegisterBody) => {
	const userSchema = object({
		nickname: string().nonNullable().min(3, "nickname min 3 characters").max(64, "nickname max 64 characters"),
		email: string().email().nonNullable().min(5, "email min 5 characters").max(64, "email max 64 characters"),
		password: string().nonNullable().min(8, "password min 8 characters").max(64, "password max 64 characters")
	});

	try {
		userSchema.validateSync(obj);
		return { validate: true, errors: null };
	} catch (e) {
		const err = e as ValidationError;
		const errors = new CustomError(err.errors[0], 400, "");
		return { validate: false, errors };
	}
};

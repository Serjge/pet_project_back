import { pool } from "db/config";
import { QueryConfig } from "pg";
import { getUuid } from "utils";

interface RegisterData {id:string, email:string, nickname:string, registerDate: Date}

export const authController = {
	register: async (email:string, nickname:string, password:string) => {
		const uuid = getUuid();
		const registerDate = new Date();

		const registerQuery:QueryConfig = {
			name: "register new user",
			text: `INSERT INTO user_test (id, email, nickname, register_date, password) 
						VALUES ($1, $2, $3, $4, $5) 
						RETURNING id, email, nickname, register_date`,
			values: [uuid, email, nickname, registerDate, password]
		};

		return pool.query<RegisterData>(registerQuery);
	},
	deleteUserByEmail: async (email:string) => {
		const deleteUser: QueryConfig = {
			name: "Delete user by email",
			text: `DELETE FROM user_test 
						WHERE email = ($1) 
						RETURNING id, email, nickname, register_date`,
			values: [email]
		};

		return pool.query(deleteUser);
	}
};

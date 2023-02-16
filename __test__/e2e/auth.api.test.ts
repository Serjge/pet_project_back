import request from "supertest";
import app from "../../src";

describe("/auth/", () => {
	it("auth text", async () => {
		await request(app).get("/").expect(200, "Hello");
		// expect(1).toBe(1);
	});
});

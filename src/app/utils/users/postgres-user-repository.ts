import postgres, { Sql } from "postgres";
import { User } from "./user";
import UserRepository from "./user-repository";

export default class PostgresUserRepository implements UserRepository {
    private readonly sql: Sql;
    constructor() {
        const connectionString = ''
        this.sql = postgres(connectionString);
    }

    async save(user: User) {
        try {
            const userdto = user.toPrimitives();
            const email = userdto.email;
            const dpi = userdto.dpi;
            const name = userdto.name;
            const age = Number(userdto.age);
            const isValid = userdto.isValid;
            const isValidBool = isValid.toLowerCase() === "true";


            await this.sql`INSERT INTO "Users" (email, dpi, name, age, isValid) VALUES ( ${email}, ${dpi}, ${name}, ${age}, ${isValidBool})`;
        } catch (err) {
            throw err
        }
    }

    async find(id: string) {
        try {
            const rows = await this.sql`SELECT * FROM "Users" WHERE id=${id}`;
            if (rows.length === 0) throw new Error("User not found");

            const row = rows[0];
            return new User(row.id, row.email, row.dpi, row.name, row.age, row.isValid);
        } catch {
            throw new Error("User not found");
        }
    }
}
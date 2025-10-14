import postgres, { Sql } from "postgres";
import { User } from "./user";
import UserRepository from "./user-repository";

export default class SupabaseUserRepository implements UserRepository{
    private readonly sql: Sql;
    constructor() {
        const connectionString = 'postgresql://postgres.nviffybhwodpqzwumhtx:IbanezGio28*@aws-0-us-east-1.pooler.supabase.com:6543/postgres'
        this.sql = postgres(connectionString);
    }

    async save(user: User){
        try{
            const userdto = user.toPrimitives();
            const id = Number(userdto.id);
            const email = userdto.email;
            const dpi = userdto.dpi;
            const name = userdto.name;
            const age = Number(userdto.age);
            const isValid = userdto.isValid;
            const isValidBool = isValid.toLowerCase() === "true";



            await this.sql`INSERT INTO "Users" (id, email, dpi, name, age, isValid) VALUES (${id}, ${email}, ${dpi}, ${name}, ${age}, ${isValidBool})`;
        }catch (err){
            throw err
        }
    }

    async find(id: string){
        try{
            await this.sql`SELECT * FROM "Users" WHERE id=${id}`;
        } catch {
            throw new Error("User not found");
        }
    }
}
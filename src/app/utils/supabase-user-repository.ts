import postgres, { Sql } from "postgres";
import { User } from "./user";
import UserRepository from "./user-repository";

export default class SupabaseUserRepository implements UserRepository{
    private readonly sql: Sql;
    constructor() {
        const connectionString = 
                'postgresql://postgres.nviffybhwodpqzwumhtx:IbanezGio2808*@aws-0-us-east-1.pooler.supabase.com:6543/postgres'
        this.sql = postgres(connectionString);
    }

    async save(user: User){
        try{
            await this.sql``;
        }catch{
            throw new Error("Failed to save email");
        }
    }

    async find(id: string){
        try{
        } catch {
            throw new Error("User not found");
        }
    }
}
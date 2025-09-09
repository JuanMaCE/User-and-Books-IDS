import { NextResponse } from "next/server";
import UserCreator from "../utils/user-creator";
import SupabaseUserRepository from "../utils/supabase-user-repository";

export async function POST(request: NextResponse) {
    try{
        const data = await request.json();

        const repository = new SupabaseUserRepository();
        
        const registrar = new UserCreator(repository);

        await registrar.run(data.id, data.email, data.dpi, data.name, data.age, data.isValid);

        NextResponse.json({
            message: 'User saved succesfully'
        });
    } catch (error){
        console.error('Error saving user:', error);
        return NextResponse.json({
            error: "Failed to save user"
        })
    }
    
}
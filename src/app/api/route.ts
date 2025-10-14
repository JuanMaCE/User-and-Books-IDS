import { NextRequest, NextResponse } from "next/server";
import UserCreator from "../utils/users/user-creator";
import PostgresUserRepository from "../utils/users/postgres-user-repository";
import PostgresRepositorySelector from "../utils/users/postgres-repository-selector";

export async function POST(request: NextRequest) {
    try{
        const data = await request.json();

        const selector = new PostgresRepositorySelector();

        const repository = await selector.getRepository();
        
        const registrar = new UserCreator(repository);

        await registrar.run(data.email, data.dpi, data.name, data.age, data.isValid);

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
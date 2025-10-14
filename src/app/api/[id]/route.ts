import PostgresUserRepository from "@/app/utils/postgres-user-repository";
import UserFinder from "@/app/utils/user-finder";
import { NextRequest, NextResponse } from "next/server";

export async function GET(request: NextRequest, { params }: { params: { id: string } }){
    try{
        const repository = new PostgresUserRepository;

        const finder = new UserFinder(repository);

        const user = await finder.run(params.id);

        NextResponse.json(user);
    } catch (err) {
        console.error(err);

        NextResponse.json(
            { error: "User not found" },
            { status: 404 }
        );
  }
}
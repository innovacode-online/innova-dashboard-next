
import { PrismaClient } from "@prisma/client";
import { NextRequest, NextResponse } from "next/server";

const prisma = new PrismaClient()

// LISTAR TAREAS
export async function GET(request:NextRequest) {
    const tasks = await prisma.task.findMany();
    return NextResponse.json( tasks )
}


// CREAR NUEVA TAREA
export async function POST(request:NextRequest){
    try {
        const body: { title:string, description: string } = await request.json();

        if( body.title.trim() === '' || body.description.trim() === '' ){
            return NextResponse.json({ 
                message: 'Todos los campos son obligatorios' 
            }, { status: 400 });
        }

        const task = await prisma.task.create({ data: body });

        return NextResponse.json( task )
    } catch (error) {
        return NextResponse.json( error, { status: 400 } )
    }
}
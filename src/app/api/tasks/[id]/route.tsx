import { NextRequest, NextResponse } from "next/server";
import { PrismaClient } from '@prisma/client';

interface Segments {
    params: { id: string }
}

const prisma = new PrismaClient()

export async function GET(request:NextRequest, segments: Segments) {
    const { id } = segments.params;
    const task = await prisma.task.findFirst({
        where: {
            id
        }
    });

    if( !task ){
        return NextResponse.json({
            message: 'Task not found'
        }, { status: 404 })
    }

    return NextResponse.json( task )
}

export async function PUT(request:NextRequest, segments: Segments) {
    const { id } = segments.params;

    const task = await prisma.task.findFirst({
        where: {
            id
        }
    });

    if( !task ){
        return NextResponse.json({
            message: 'Task not found'
        }, { status: 404 })
    }

    try {
        const body = await request.json();
        const updateTask = await prisma.task.update({
            where: { id },
            data: { ...body }
        })
        return NextResponse.json( updateTask )

    } catch (error) {
        return NextResponse.json( error, { status: 400 } )
    }

}
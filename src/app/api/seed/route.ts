import { PrismaClient } from "@prisma/client";
import { NextRequest, NextResponse } from 'next/server';
import bcrypt from "bcryptjs"


const prisma = new PrismaClient();

export async function GET( req: NextRequest, res: NextResponse ) {
    
    await prisma.task.deleteMany()
    await prisma.user.deleteMany()

    try {
        const user = await prisma.user.create({
            data: {
                name: 'Innova Code',
                email: 'admin@innovacode.com',
                password: bcrypt.hashSync('123456'),
                image: 'https://lh3.googleusercontent.com/a/AAcHTtfNj1wKEavkDynCql_1qI9opNtoUTDJr1uOfHYtbCCCmw=s96-c',
                tasks: {
                    createMany: {
                        data: [
                            {
                                title: 'Servidor de Discord',
                                description: 'Crear el servidor de Discord para la comunidad de Innova Code'
                            },
                            {
                                title: 'Crear plataforma de estudiante',
                                description: 'Crear la nueva plataforma online de estudiantes con Qwik JS y PostgreSQL',
                            },
                        ]
                    }
                }
            }
        });
        
        return NextResponse.json({
            message:'Success',
            user,
        });

    } catch (error) {
        console.log(error);
        return NextResponse.json(error);
    }



}
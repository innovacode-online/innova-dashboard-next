import { PrismaClient } from "@prisma/client";
import bcrypt from "bcryptjs";

const prisma = new PrismaClient();

export const signInWithEmailPassword = async ( email: string, password: string) => {
    
    if( !email || !password ) return null;

    const user = await prisma.user.findUnique({
        where: {
            email
        }
    })

    if( !user ) return null;

    const validatePassword = await bcrypt.compareSync( password, user!.password ?? '' );

    if( !validatePassword ) return null;

    return user;
}
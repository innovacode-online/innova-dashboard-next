import NextAuth from "next-auth/next";
import { NextAuthOptions } from "next-auth";
import GithubProvider from "next-auth/providers/github";
import CreadentialsProvider from "next-auth/providers/credentials";

import { PrismaClient } from '@prisma/client';
import { signInWithEmailPassword } from "@/auth";
import { PrismaAdapter } from "@auth/prisma-adapter";
import { Adapter } from "next-auth/adapters";



const prisma = new PrismaClient();

export const authOptions: NextAuthOptions = {

    adapter: PrismaAdapter(prisma) as Adapter,

    pages: {
        signIn: '/auth/login', 
    },

    session: {
        strategy: 'jwt'
    },

    providers: [
        GithubProvider({
            clientId: process.env.GITHUB_ID ?? '',
            clientSecret: process.env.GITHUB_SECRET ?? '',
        }),

        CreadentialsProvider({
            name: "Creadentials",
            credentials: {
                email: { label: "Email", type: "email", placeholder: "correo@correo.com" },
                password: { label: "Password", type: "password", placeholder: "*********"}
            },
            async authorize( credentials , req ){
                const user = await signInWithEmailPassword( credentials!.email, credentials!.password )
                return user;
            }
        }),
    ],

    callbacks: {
        async signIn({ user }) {
            // MENAJO DE ROLES - BLOQUEO DE USUARIOS
            return true;
        },

        async jwt({ token, user, account }) {
            // MANEJO DE INFORMACION DEL TOKEN
            const dbUser = await prisma.user.findUnique({
                where: {
                    email: token.email ?? 'not-available'
                }
            })

            token.id = dbUser?.id!;

            return token;
        },

        async session({ newSession, session, user, token }: any) {
            // MANEJA INFO DE LA SESSION EN EL PROYECTO

            if( session && session.user ){
                session.user.id = token.id;
            }

            return session;
        },
    }
}


const handler = NextAuth(authOptions);
export { handler as GET, handler as POST }
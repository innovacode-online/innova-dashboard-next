import { DefaultSession, DefaultUser } from "next-auth";

interface IUser extends DefaultSession {
    id?: string;
}


declare module "next-auth" {
    interface User extends IUser{}

    interface Session {
        user?: User;
    }
}

declare module "next-auth/jwt" {
    interface JWT extends IUser {} 
}
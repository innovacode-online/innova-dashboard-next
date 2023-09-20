import { redirect } from "next/navigation";
import { getServerSession } from "next-auth";

import { authOptions } from "../api/auth/[...nextauth]/route";

export default async function AuthLayout({ children }: { children: React.ReactNode }) {

    const session = await getServerSession(authOptions);

    if( session ){
        redirect('/')
    }

    return (
        <div>
            { children }
        </div>
    );
}
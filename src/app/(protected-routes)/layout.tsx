import { getServerSession } from "next-auth";
import { redirect } from "next/navigation";

import { authOptions } from "../api/auth/[...nextauth]/route";
import { BottomNavigation, SideMenu } from "@/shared";


interface Props{
    children: React.ReactNode ;
}

export default async function RootLayout({ children }: Props) {

    const session = await getServerSession(authOptions);

    if( !session ){
        redirect('/api/auth/signin')
    }
    
    return (
        <div className="flex flex-col md:flex-row relative">
            <SideMenu/>
            <main className="w-full  h-screen md:overflow-y-scroll p-10">
                {children}
            </main>
            <BottomNavigation/>
        </div>
    )
}
  
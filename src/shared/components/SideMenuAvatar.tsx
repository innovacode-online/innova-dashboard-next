
import Image from 'next/image';
import { getServerSession } from 'next-auth';
import { authOptions } from '@/app/api/auth/[...nextauth]/route';

export const SideMenuAvatar = async () => {

    const session = await getServerSession( authOptions );

    const image = session?.user?.image ?? 'https://images.pexels.com/photos/771742/pexels-photo-771742.jpeg?auto=compress&cs=tinysrgb&w=1600'
    const name = session?.user?.name ?? 'Nombre de usuario'
    const email = session?.user?.email ?? 'example@example.com'

    return (
        <div className='nav__menu--avatar'>
            <Image
                src={ image }
                className='rounded-full object-cover max-w-[80px]'
                height={ 100 }
                width={ 100 }
                alt={ name } 
            />
            <div>
                <p className='text-lg font-bold text-slate-500' >{ name }</p>
                <p className='text-md font-bold text-slate-400' >{ email }</p>
            </div>
        </div>
    )
}

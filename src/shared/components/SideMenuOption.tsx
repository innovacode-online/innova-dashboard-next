'use client'
import Link from 'next/link'
import { usePathname } from "next/navigation";


interface Props {
    option: {
        name: string;
        path: string;
        icon: JSX.Element;
    }
}

export const SideMenuOption = ({ option }: Props) => {

    const pathName = usePathname();

    return (
        <li>
            <Link href={ option.path } className={`nav__menu--item ${ pathName === option.path ? 'nav__link--active' : '' }`}>
                <span>
                    { option.icon }
                </span>
                <span className='hidden md:block'>
                    { option.name }
                </span>
            </Link>
        </li>
    )
}

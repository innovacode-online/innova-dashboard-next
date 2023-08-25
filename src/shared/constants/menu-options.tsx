import { BsJournalCheck } from "react-icons/bs";
import { GoDeviceDesktop } from "react-icons/go";
import { IoHomeOutline, IoServerOutline } from "react-icons/io5";

export const MENU_OPTIONS = [
    {
        name: 'Inicio',
        path: '/',
        icon: <IoHomeOutline size={ 20 }/>
    },
    {
        name: 'Server Side',
        path: '/server-side',
        icon: <IoServerOutline size={ 20 }/>
    },
    {
        name: 'Client Side',
        path: '/client-side',
        icon: <GoDeviceDesktop size={ 20 }/>
    },
    {
        name: 'Tasks',
        path: '/tasks',
        icon: <BsJournalCheck size={ 20 }/>
    },
]
import React from 'react'
import { MENU_OPTIONS } from '../constants/menu-options'
import { SideMenuOption } from '..'

export const BottomNavigation = () => {
    return (
        <nav className='bottom-nav'>
            <ul className='flex justify-center gap-6 items-center'>
                {
                    MENU_OPTIONS.map(option => (
                        <SideMenuOption key={ option.path } option={ option }/>
                    ))
                }   
            </ul>
        </nav>
    )
}

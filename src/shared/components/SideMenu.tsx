import { SideMenuOption } from ".."
import { MENU_OPTIONS } from "../constants/menu-options"

export const SideMenu = () => {
    return (
        <nav className="hidden md:block w-full shadow-xl shadow-indigo-100 rounded-3xl sm:w-3/12 lg:w-2/12 p-5 bg-white">
            {/* AVATAR */}

            {/* MENU OPTIONS */}
            <ul>
                {
                    MENU_OPTIONS.map(option => (
                        <SideMenuOption key={ option.name } option={ option }/>
                    ))
                }
            </ul>
        </nav>
    )
}

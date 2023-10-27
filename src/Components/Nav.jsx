import icons from "../../public/icons/icons";
import { Link, NavLink } from "react-router-dom";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getMenusData } from "../Redux/Slices/menus";

function Nav() {

    const menus = useSelector(store => store.Menus)
    const dispatch = useDispatch()
    useEffect(() => {
        dispatch(getMenusData(`http://localhost:3000/menu`))
    }, [])

    return (
        <nav className="hidden lg:block sticky top-0 z-40 bg-white">
            {/* menu list */}
            <ul className="flex items-center justify-center gap-8">
                {/* menu list items */}
                {menus.map(menu => (
                    <li key={menu.id} className="relative hover:text-lime-700 py-5 transotion-color duration-300 group">
                        {/* item title */}
                        <NavLink className={({ isActive }) => isActive ? 'text-lime-500 flex items-center gap-1 text-xs font-extrabold' : 'text-gray-800 flex items-center gap-1 text-xs font-extrabold'} to={menu.href}>
                            {/* <div className=" "> */}
                            {menu.title}
                            {menu.subMenu && <icons.ArrowDown />}
                            {/* </div> */}
                        </NavLink>
                        {/* sub menu */}
                        {menu.subMenu && (
                            <div className="flex flex-col absolute top-full right-1/2 bg-white shadow-xl rounded-md py-2 pl-2 pr-28 text-stone-700 invisible group-hover:visible opacity-300 group-hover:opacity-95 transition-all">
                                <ul>
                                    {menu.subMenu.map(sub => (
                                        <li className="hover:text-lime-700 gap-4" key={sub.id}>
                                            <Link to={sub.href}>{sub.title}</Link>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        )}
                    </li>
                ))}
            </ul>
        </nav>
    )
}

export default Nav
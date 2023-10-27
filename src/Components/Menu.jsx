import ReactDOM from "react-dom"
import { useEffect } from "react"
import { Link } from "react-router-dom"
import icons from "../../public/icons/icons"
import Media_Icons_v1 from "./Media_Icons_v1"

import { useDispatch, useSelector } from "react-redux"
import { getMenusData } from "../Redux/Slices/menus"

function Menu({ isShowMenu, setIsShowMenu }) {

    const dispatch = useDispatch()
    const menus = useSelector(store => store.Menus)
    
    useEffect(() => {
        dispatch(getMenusData(`http://localhost:3000/menu`))
    }, [])

    return (
        <div className={`lg:hidden fixed top-0 right-0 bottom-0 left-0 z-50 450px] transition-all duration-1000 ${isShowMenu ? 'translate-x-0' : '-translate-x-[1450px]'}`}>
            <div className='h-screen  w-full p-5 bg-gray-100'>
                {/* close menu */}
                <div onClick={() => setIsShowMenu(false)} className="flex justify-end mb-5 text-gray-900">
                    <icons.Close />
                </div>
                {/* menu search box */}
                <div className="bg-gray-300 flex items-center justify-between px-3 py-1 rounded-2xl">
                    <input className="bg-transparent text-gray-900 outline-none" type="text" placeholder='search...' />
                    <div className="text-gray-900">
                        <icons.Search />
                    </div>
                </div>
                {/* menu list */}
                <ul className="mt-5 space-y-5 divide-y-[1px] divide-gray-600 mb-10">
                    {menus.map(menu => (
                        <li key={menu.id} className="relative hover:text-green-700 transotion-color duration-300">
                            {/*menu item title */}
                            <Link className="flex items-center gap-1 text-gray-900 text-xs font-bold mt-5" onClick={() => setIsShowMenu(false)} to={menu.href}>
                                {menu.title}
                            </Link>
                        </li>
                    ))}
                </ul>
                {/* menu media */}
                <div className="text-gray-900">
                    <Media_Icons_v1 />
                </div>
            </div>
        </div>
    )
}

export default Menu
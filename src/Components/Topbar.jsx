import { Link } from "react-router-dom"
import icons from "../../public/icons/icons"
import Media_Icons_v1 from "./Media_Icons_v1"

function Topbar() {
    return (
        <>
            <div className="py-2 border border-gray-300">
                <div className="container flex items-center justify-between text-[11px] text-gray-500 font-medium">
                    <div className="flex gap-3">
                        <div className="flex items-center gap-1"><icons.Usa /> ENG <icons.ArrowDown /></div>
                        <div className="flex items-center gap-1">USD <icons.ArrowDown /></div>
                    </div>
                    <div className="flex items-center gap-3 lg:gap-4 xl:gap-6">
                        <div className="divide-x  hidden md:inline-block">
                            FREE RETURNS. STANDARD SHIPPING ORDERS $99+
                        </div>
                        <div className="h-5 w-px bg-gray-300 hidden md:inline-block"></div>
                        <div className="items-center gap-4 hidden lg:flex">
                            <Link className="hover:text-gray-400 transition-colors" to={'/aboutUs'}>My Account</Link>
                            <Link className="hover:text-gray-400 transition-colors" to={'/contactUs'}>Contact Us</Link>
                            <Link className="hover:text-gray-400 transition-colors" to={'/blogs'}>Blog</Link>
                            <Link className="hover:text-gray-400 transition-colors" to={'/wishlist'}>Wishlist</Link>
                            <Link className="hover:text-gray-400 transition-colors" to={'/cart'}>Cart</Link>
                            <Link className="hover:text-gray-400 transition-colors" to={'/login'} >Log In</Link>
                        </div>
                        <div className="h-5 w-px bg-gray-300 hidden lg:inline-block"></div>
                        <Media_Icons_v1 />
                    </div>
                </div>
            </div>
        </>
    )
}

export default Topbar
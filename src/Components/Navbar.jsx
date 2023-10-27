import { useSelector } from "react-redux"
import { Link } from "react-router-dom";
import { useState } from "react";
import Topbar from "./Topbar"
import icons from "../../public/icons/icons";
import Menu from "./Menu";
import NavBar__ViewCart from "./NavBar__ViewCart";


function Navbar() {
  const { cart } = useSelector(state => state.Cart)
  const [isShowMenu, setIsShowMenu] = useState(false)
  const { wishlist } = useSelector(state => state.Wishlist)

  const handleShowMenu = () => {
    setIsShowMenu(prevState => !prevState)
  }

  return (
    <>
      <div>
        {/* top navbar - topbar */}
        <Topbar />
        {/* navbar main content */}
        <div className="border-b border-gray-300">
          {/* wrapper navbar */}
          <div className="container flex items-center justify-between py-8">
            {/* left navbar - search box */}
            <div className="hidden lg:flex items-center justify-center">
              <input className="w-28 outline-0 bg-gray-200 py-1.5 pl-3 rounded-s-3xl" type="text" placeholder="search..." />
              <select className="bg-gray-200 py-1.5 px-1 ml-[.1rem] text-gray-400">
                <option value="All Categories">All Categories</option>
                <option value="Accessories">Accessories</option>
                <option value="Dress">Dress</option>
                <option value="Electronics">Electronics</option>
                <option value="Fashion">Fashion</option>
              </select>
              <div className="bg-gray-200 py-1.5 px-3 ml-[.1rem] rounded-e-3xl text-[1.42rem] text-gray-400"><icons.Search /></div>
            </div>
            {/* logo */}
            <div className="w-24 flex items-start gap-2">
              {/* icon menu in small size */}
              <div onClick={handleShowMenu} className="inline-block lg:hidden text-3xl">
                <icons.Menu />
              </div>
              <Link to={'/'}>
                <img src="/Logos/logo_ecomblack_lg.png" alt="logo web site" />
              </Link>
            </div>
            {/* right navbar - list */}
            <div className="flex items-center justify-center gap-5">
              {/* icon phone */}
              <Link to={''} className="hidden sm:inline-block text-3xl text-gray-600">
                <icons.Phone />
              </Link>
              {/* Contacts */}
              <div className="hidden sm:flex flex-col">
                <Link to={''} className="text-gray-500 text-xs">Call Us Now</Link>
                <Link to={''} className="text-lg font-extrabold">+123 5678 890</Link>
              </div>
              {/* icon person */}
              <Link to={'/login'} className="text-gray-600 text-3xl ">
                <icons.Person />
              </Link>
              {/* icon heart */}
              <Link to={'/wishlist'} className="relative text-gray-600 text-3xl">
                <icons.heart />
                <span className="flex items-center justify-center absolute top-0 -right-1 text-xs bg-red-600 text-slate-50 w-4 h-4 rounded-full">
                  {wishlist.length}
                </span>
              </Link>
              {/* icon cart */}
              <div className="relative text-gray-600 text-3xl group">
                <icons.Cart /> 
                  <span className="flex items-center justify-center absolute top-0 -right-1 text-xs bg-red-500 text-slate-50 w-4 h-4 rounded-full">
                    {cart.length}
                  </span>
                {/* View cart box */}
                <NavBar__ViewCart cartData={cart} />
              </div>
            </div>
          </div>
        </div>
      </div>
      <div>
        <Menu isShowMenu={isShowMenu} setIsShowMenu={setIsShowMenu} />
      </div>
    </>
  )
}

export default Navbar;
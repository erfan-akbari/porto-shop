import Home__banner_v2 from "../Components/Home__banner_v2";
import Breadcrumb from "../Components/Breadcrumb"
import { useState } from "react";
import icons from "../../public/icons/icons";
import Shop__aside from "../Components/Shop__aside";
import Shop__Main from "../Components/Shop__Main";
import Shop__topbar from "../Components/Shop__topbar";
import Categories__accordion from "../Components/Categories__accordion";

function Shop() {

  const [showModeProducts, setShowModeProducts] = useState('grid')
  const [isShowMenu, setIsShowMenu] = useState(false)
  const [numberShows, setNumberShows] = useState(9)


  return (
    <div>
      {/* home banner V2 */}
      <Home__banner_v2 />
      {/* breadcrumb */}
      <div className="container mt-5">
        <Breadcrumb />
      </div>
      {/* cntainer */}
      <div className="container py-5 flex flex-col md:flex-row gap-5 relative">
        {/* sidebar */}
        <Shop__aside />
        {/* wrapper & topbar */}
        <div className="lg:basis-[75%] flex flex-col">
          {/* topbar */}
          <Shop__topbar
            showModeProducts={showModeProducts}
            setShowModeProducts={setShowModeProducts}
            setNumberShows={setNumberShows}
            numberShows={numberShows}
          />
          {/* wrapper */}
          <Shop__Main showModeProducts={showModeProducts} numberShows={numberShows} />
        </div>
      </div>
      {/* setting icon */}
      <div
        onClick={() => setIsShowMenu(prev => !prev)}
        className="flex items-center justify-center lg:hidden fixed top-[30%] left-0 bg-slate-50 p-2 text-xl shadow-xl rounded-e-md">
        <icons.Settings />
      </div>
      {/* menu categoris */}
      <div className={`lg:hidden fixed p-2 bg-gray-100 shadow-lg border-r-8  border-t-8 border-gray-300 text-gray-50 left-0 top-0 bottom-0 -translate-x-72 transition-all duration-300 ${isShowMenu && 'translate-x-0'}`}>
        <div className="border-b pb-2 flex justify-end">
          <div onClick={() => setIsShowMenu(false)} className="bg-gray-500 w-fit text-gray-50 p-1">
            <icons.Close />
          </div>
        </div>
        <Categories__accordion />
      </div>
    </div>
  )
}

export default Shop;
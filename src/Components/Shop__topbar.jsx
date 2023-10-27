import { useEffect, useState } from "react"
import icons from "../../public/icons/icons"
import { getAllProducts } from "../Redux/Slices/products"
import { useDispatch } from "react-redux"

function Shop__topbar({ setShowModeProducts, showModeProducts, numberShows, setNumberShows }) {

    const [sortValue, setSortValue] = useState('?_sort=id&_order=desc')
    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(getAllProducts(`http://localhost:3000/allProducts${sortValue}`))
    }, [sortValue])


    return (
        <div className="md:flex md:items-center md:justify-between text-gray-500">
            {/* <= left */}
            <div className="flex items-center gap-2">
                <span className="">Sort By: </span>
                <select className="border w-fit outline-none py-1.5" onChange={e => setSortValue(e.target.value)}>
                    <option value="?_sort=id&_order=desc">Default sorting</option>
                    <option value="?_sort=views&_order=desc">Sort by most viewed</option>
                    <option value="?_sort=id&_order=desc">Sort by latest</option>
                    <option value="?_sort=price&_order=asc">Sort by price: low to high</option>
                    <option value="?_sort=price&_order=desc">Sort by price: high to low</option>
                </select>
            </div>
            {/* => right */}
            <div className="hidden md:flex items-center gap-2">
                {/* select number products */}
                <span className="">Show: </span>
                <select className="border w-fit outline-none py-1.5 px-2" value={numberShows} onChange={e => setNumberShows(e.target.value)}>
                    <option value="3">3</option>
                    <option value="6">6</option>
                    <option value="9">9</option>
                </select>
                {/* mode show products */}
                <div
                    onClick={() => setShowModeProducts('grid')}
                    className={`text-gray-900 text-2xl border p-1.5 ${showModeProducts === 'grid' && 'border-gray-950'}`}>
                    <icons.MenuGrid />
                </div>
                <div
                    onClick={() => setShowModeProducts('row')}
                    className={`text-gray-900 text-2xl border p-1.5 ${showModeProducts === 'row' && 'border-gray-950'}`}>
                    <icons.MenuAlt />
                </div>
            </div>
        </div>
    )
}

export default Shop__topbar
import { useDispatch } from "react-redux";
import { removeInCart } from "../Redux/Slices/cart.js"
import icons from "../../public/icons/icons";

function NavBar__ViewCart_Box({ Categories, img, price, title, count, id }) {
    const dispatch = useDispatch()

    return (
        <div className="p-3 flex items-start justify-between border rounded-md">
            <div className="w-[160px]">
                {/* title */}
                <p className="font-bold text-black">{title} {Categories[0]} - {Categories[1]}</p>
                {/* count */}
                <p className="text-gray-400 font-medium">{count} * ${price}</p>
            </div>
            {/* image */}
            <div className="relative">
                <span
                     onClick={() => dispatch(removeInCart(id))}
                    className="inline-block bg-white shadow-lg p-1 cursor-pointer rounded-full text-sm text-gray-950 absolute -top-2 -right-2">
                    <icons.Close />
                </span>
                <img className='w-20 h-20 rounded-md' src={img} alt="banner product" />
            </div>
        </div>
    )
}

export default NavBar__ViewCart_Box
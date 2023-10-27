import icons from "../../public/icons/icons";
import { useDispatch } from "react-redux";
import { addCartData } from "../Redux/Slices/cart";
import { Link } from "react-router-dom";
import { removeInWishlist } from "../Redux/Slices/wishlist";
import { useState } from "react";
import toast from "react-hot-toast";

function Wishlist__card(props) {
    const { img, title, Categories, price, id } = props

    const dispatch = useDispatch()
    const [loading, setLoading] = useState(false)

    const handleClick = () => {
        setLoading(true)
        setTimeout(() => {
            setLoading(false)
            dispatch(addCartData({ ...props }))
            toast.success("Product Added to Cart")
        }, 2000);
    }

    return (
        <>
            <div className="w-full py-10 flex flex-col items-center gap-5 border shadow" >
                <div className="relative">
                    <span
                        onClick={() => dispatch(removeInWishlist(id))}
                        className="inline-block bg-white shadow-lg p-1 cursor-pointer rounded-full text-sm text-gray-950 absolute -top-2 -right-2">
                        <icons.Close />
                    </span>
                    <img className='w-20 h-20 rounded-md' src={img} alt="banner product" />
                </div>
                <p className="text-sm font-bold">{title} - {Categories[0]}, {Categories[1]}</p>
                <p className="text-sm text-gray-400 font-bold py-3">${price}</p>
                <p className="text-sm font-bold py-3">In Stock</p>
                <div className="flex flex-col gap-2 py-3">
                    <button
                        onClick={handleClick}
                        className={`px-3 py-1 rounded-md transition-colors ${loading ? 'bg-gray-300 text-gray-800' : 'bg-gray-800 hover:bg-gray-700 text-gray-50'}`}>
                        {!loading ? 'ADD TO CART' : 'Loading...'}
                    </button>
                    <Link to={'/cart'} className='bg-gray-100 px-3 py-1 text-center hover:text-gray-50 rounded-md hover:bg-lime-600 transition-colors'>
                        QUICK VIEW
                    </Link>
                </div>
            </div >
        </>
    )
}

export default Wishlist__card;
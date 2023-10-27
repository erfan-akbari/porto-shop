import { useState } from "react";
import icons from "../../public/icons/icons";
import { useDispatch } from "react-redux"
import { removeInCart } from "../Redux/Slices/cart"


function Wishlist__card({ title, Categories, price, img, count }) {
    const [cardNumber, setCardNumber] = useState(count)
    const dispatch = useDispatch()

    return (
        <>
            <div div className="w-full py-10 flex flex-col items-center gap-5 border shadow" >
                <div className="relative">
                    <span
                        onClick={() => dispatch(removeInCart(id))}
                        className="inline-block bg-white shadow-lg p-1 cursor-pointer rounded-full text-sm text-gray-950 absolute -top-2 -right-2">
                        <icons.Close />
                    </span>
                    <img className='w-20 h-20 rounded-md' src={img} alt="" />
                </div>
                <p className="text-sm font-bold">{title} - {Categories[0]}, {Categories[1]}</p>
                <p className="text-sm text-gray-400 font-bold py-3">${price}</p>
                <input className="border p-1 sm:p-2" type="number" min={1} max={10} value={cardNumber} onChange={e => setCardNumber(e.target.value)} />
                <p className="text-lg text-gray-950 font-bold py-3">${price * cardNumber}</p>
            </div >
        </>
    )
}

export default Wishlist__card
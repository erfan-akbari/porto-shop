import { useEffect, useState } from "react"
import icons from "../../public/icons/icons"
import { useDispatch } from "react-redux"
import { removeInCart } from "../Redux/Slices/cart"

function Cart__table_item({ id, title, Categories, price, img, count }) {

    const [cardNumber, setCardNumber] = useState(count)
    const dispatch = useDispatch()

    const changeHandler = (e) => {
        setCardNumber(e.target.value)
    }
    

    return (
        <>
            <tr>
                <td>
                    <div className="flex items-center gap-5 py-3">
                        <div className="relative">
                            <span onClick={() => dispatch(removeInCart(id))} className="inline-block bg-white shadow-lg p-1 cursor-pointer rounded-full text-sm text-gray-950 absolute -top-2 -right-2">
                                <icons.Close />
                            </span>
                            <img className='w-20 h-20 rounded-md' src={img} alt="image product" />
                        </div>
                        <p className="text-sm font-bold">{title} - {Categories[0]} {Categories[1]}</p>
                    </div>
                </td>
                <td>
                    <p className="text-sm text-gray-400 font-bold py-3">${price}</p>
                </td>
                <td>
                    <input className="border p-1 sm:p-2" type="number" min={1} max={10} value={cardNumber} onChange={e => changeHandler(e)} />
                </td>
                <td>
                    <p className="text-lg text-gray-950 font-bold py-3">${price * cardNumber}</p>
                </td>
            </tr>
        </>
    )
}

export default Cart__table_item;
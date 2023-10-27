import icons from "../../public/icons/icons"
import { useDispatch } from "react-redux";
import { addCartData } from "../Redux/Slices/cart";
import toast from 'react-hot-toast';

export default function Btn__addCard({ title, Categories, price, priceOff, img, id, cardNumber, onSetLoading, onLoading }) {

    const dispatch = useDispatch()

    const addToCartHandler = () => {
        if (!onLoading) {
            const data = { title, Categories, price, priceOff, img, id, count: cardNumber }
            onSetLoading(true)
            setTimeout(() => {
                dispatch(addCartData(data))
                onSetLoading(false)
                toast.success('Product Added Cart');
            }, 3000);
        }
    }

    return <button
        className={`flex items-center justify-center gap-2 ${onLoading ? 'bg-lime-300 text-gray-900' : 'bg-lime-600 text-gray-100 hover:bg-lime-700'} p-2 w-full transition-all duration-300 rounded-sm`}
        onClick={addToCartHandler}
    >
        {!onLoading && <icons.Cart />}
        {onLoading ? 'Loading...' : 'ADD TO CART'}
    </button>
}

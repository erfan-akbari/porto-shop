import { useState } from "react";
import icons from "../../public/icons/icons";
import { Link } from "react-router-dom";
import StarBox from "./StarBox"
import Btn__addCard from "./Btn__addCard";
import Loader from "./Loader"
import useAddedToWishlist from "../Hooks/useAddedToWishlist";

function Product__Card_v3(props) {
    const { title, Categories, price, priceOff, img, id, caption } = props


    const [cardNumber, setCardNumber] = useState(1)
    const [loading, setLoading] = useState(false)
    const [addToWishlistHandler, loadingWishlist, isInWishlist] = useAddedToWishlist(props)

    
    return (
        <div className="relative">
            <div className={`w-full font-semibold text-center flex items-center flex-row gap-5 mt-5 relative group ${loading || loadingWishlist ? 'blur-sm' : ''}`}>

                {/* <= left box */}
                <Link to={`/product/${id}`} className="overflow-hidden max-w-[270px]">
                    {/* banner card */}
                    <img src={img} alt="product image" className="hover:scale-125 transition-all" />
                </Link>
                {/* => right box */}
                <div className="flex flex-col items-start gap-2">
                    {/* Categories */}
                    <div>
                        {Categories.map((cat, index) => (
                            <Link key={index} className="text-gray-400 text-xs hover:text-gray-500" to={''}>{cat}</Link>
                        ))}
                    </div>
                    {/* title */}
                    <h3>
                        <Link to={`/product/${id}`}>{title}</Link>
                    </h3>
                    {/* score */}
                    <StarBox />
                    {/* caption */}
                    <p className="text-gray-500 text-sm text-start">
                        {caption}
                    </p>
                    {/* price */}
                    <div className="text-xl font-bold">
                        {priceOff && <span className="line-through text-sm text-gray-400 pr-2" >${priceOff}</span>}
                        <span>${price}</span>
                    </div>
                    {/* footer card */}
                    <div className="flex items-center gap-2">
                        {/* input number */}
                        <input className="border p-2" type="number" min={1} max={10} value={cardNumber} onChange={e => setCardNumber(e.target.value)} />
                        {/* card btn */}
                        <Btn__addCard {...props} cardNumber={cardNumber} onSetLoading={setLoading} />
                        {/* icons */}
                        <div
                            onClick={addToWishlistHandler}
                            className={`text-xl rounded-full p-1 border hover:bg-red-400 hover:text-gray-100 transition-all duration-300 ${isInWishlist ? "bg-red-600 text-gray-50" : "bg-white text-gray-500"}`}>
                            <icons.heart />
                        </div>
                        <div className="text-xl text-gray-500 bg-white rounded-full p-1 border hover:bg-blue-700 hover:text-gray-100 transition-all duration-300">
                            <icons.Search />
                        </div>
                    </div>
                    {/* box fixe */}
                    <span className="inline-block px-2 absolute top-1 left-1 text-xs text-gray-300 bg-lime-600">HOT</span>
                    <span className="inline-block px-2 absolute top-6 left-1 text-xs text-gray-300 bg-red-400">-13%</span>
                </div>
            </div>
            {/* loder */}
            {loading || loadingWishlist ?
                <Loader position={'left-1/2 right-1/2 top-[35%]'} />
                : ''
            }
        </div>
    )
}

export default Product__Card_v3
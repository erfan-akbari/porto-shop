import { useState } from "react"
import StarBox from "../Components/StarBox"
import Btn__addCard from "../Components/Btn__addCard"
import Media_Icons_v2 from "./Media_Icons_v2"
import icons from "../../public/icons/icons"
import useAddedToWishlist from "../Hooks/useAddedToWishlist"

function Product__infos(props) {
    const { img, Categories, title, price, priceOff, caption, SKU, id } = props

    const [cardNumber, setCardNumber] = useState(1)
    const [loading, setLoading] = useState(false)
    const [addToWishlistHandler, loadingWishlist] = useAddedToWishlist(props)


    return (
        <section className='py-5 flex gap-10 flex-col md:flex-row'>
            {/* left box */}
            <div className="basis-[45%] flex flex-col gap-5">
                {/* product banner */}
                <div className="max-w-full border border-stone-200">
                    <img src={img} alt="banner" />
                </div>
                {/* small product banner */}
                <div className="flex items-center justify-between gap-5">
                    <div onClick={() => { }} className="xl:w-28 xl:h-28 border border-stone-200">
                        <img src="/Images/shop14_product10.jpg" alt="small banner" />
                    </div>
                    <div onClick={() => { }} className="xl:w-28 xl:h-28 border border-stone-200">
                        <img src="/Images/shop14_product8.jpg" alt="small banner" />
                    </div>
                    <div onClick={() => { }} className="xl:w-28 xl:h-28 border border-stone-200">
                        <img src="/Images/shop14_product11.jpg" alt="small banner" />
                    </div>
                    <div onClick={() => { }} className="xl:w-28 xl:h-28 border border-stone-200">
                        <img src="/Images/shop14_product9.jpg" alt="small banner" />
                    </div>
                </div>
            </div>
            {/* right box */}
            <div className="basis-[55%] flex flex-col items-start gap-8">
                {/* title &  score */}
                <div className="border-b border-gray-200 pb-6 flex flex-col items-start gap-2">
                    {/* title part */}
                    <h2 className="text-2xl md:text-3xl font-bold">{title}</h2>
                    {/* score part */}
                    <div className="flex items-center gap-2">
                        <StarBox />
                        <span className="text-sm text-gray-400">( There are no reviews yet. )</span>
                    </div>
                </div>
                {/* price & caption & descriptions */}
                <div className="border-b border-gray-200 pb-6 flex flex-col gap-5">
                    {/* price part */}
                    <div className="flex items-end font-semibold gap-2">
                        {priceOff && <span className="text-sm text-gray-400 line-through">${priceOff}</span>}
                        <span className="text-2xl font-bold">${price}</span>
                    </div>
                    {/* caption part */}
                    <p className="font-semibold text-gray-700">{caption}</p>
                    {/* descriptions part */}
                    <div className="flex flex-col gap-2">
                        <div className="font-semibold flex items-center gap-2">SKU:
                            <span className="text-sm text-gray-400">{SKU}</span>
                        </div>
                        <div className="font-semibold flex items-center gap-2">Categories:
                            <span className="text-sm text-gray-400">Toys, Watches</span>
                        </div>
                        <div className="font-semibold flex items-center gap-5">Size:
                            <div className="flex items-center gap-2">
                                <span className="inline-block text-gray-400 text-sm py-0.5 px-3 border border-gray-400 hover:bg-lime-600 hover:text-slate-50 transition-colors duration-300 cursor-pointer ">Large</span>
                            </div>
                            <div className="flex items-center gap-2">
                                <span className="inline-block text-gray-400 text-sm py-0.5 px-3 border border-gray-400 hover:bg-lime-600 hover:text-slate-50 transition-colors duration-300 cursor-pointer ">Mediume</span>
                            </div>
                            <div className="flex items-center gap-2">
                                <span className="inline-block text-gray-400 text-sm py-0.5 px-3 border border-gray-400 hover:bg-lime-600 hover:text-slate-50 transition-colors duration-300 cursor-pointer ">Small</span>
                            </div>
                        </div>
                    </div>
                </div>
                {/* add to card */}
                <div className="border-b border-gray-200 pb-6 w-full">
                    <div className="w-fit flex items-center gap-5">
                        <input className="w-16 px-1 py-1.5 border border-gray-400 outline-none" type="number" min={1} max={10} value={cardNumber} onChange={e => setCardNumber(e.target.value)} />
                        <Btn__addCard {...props} cardNumber={cardNumber} onSetLoading={setLoading} onLoading={loading} />
                    </div>
                </div>
                {/* media icons */}
                <div className="flex items-center gap-2">
                    <Media_Icons_v2 />
                    <button
                        onClick={addToWishlistHandler}
                        className={`flex items-center justify-center text-lg  ${loadingWishlist ? 'bg-slate-100 text-slate-400' : 'hover:bg-gradient-to-r text-gray-400 from-red-500 to-rose-700 hover:text-slate-50'}  rounded-full py-1 px-3 transition-colors duration-300`}>
                        {!loadingWishlist && <icons.heart />}
                        {loadingWishlist ? "Loading..." : "ADD TO WISHLIST"}
                    </button>
                </div>
            </div>
        </section>
    )
}

export default Product__infos
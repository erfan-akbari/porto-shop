import { useEffect, useState } from "react";
import icons from "../../public/icons/icons";
import { Link } from "react-router-dom";
import AOS from "aos";
import "aos/dist/aos.css";
import StarBox from "./StarBox"
import Btn__addCard from "./Btn__addCard";
import Loader from "./Loader";
import useAddedToWishlist from "../Hooks/useAddedToWishlist";


function Product__Card_v1(props) {
    const { title, Categories, price, priceOff, img, id } = props

    const [cardNumber, setCardNumber] = useState(1)
    const [loading, setLoading] = useState(false)
    const [addToWishlistHandler, loadingWishlist, isInWishlist] = useAddedToWishlist(props)

    useEffect(() => {
        AOS.init();
        AOS.refresh();
    }, []);


    return (
        <div className="relative" data-aos="fade-up" data-aos-duration="1000" data-aos-once="true">
            {/* content */}
            <div className={`w-full font-semibold text-center flex flex-col gap-2 mt-5 relative group ${loading || loadingWishlist ? 'blur-sm' : ''}`}>
                {/* banner card */}
                <Link to={`/product/${id}`} className="overflow-hidden">
                    <img src={img} alt="product image" className="hover:scale-125 transition-all" />
                </Link>
                {/* Categories */}
                <div>
                    {Categories.map((cat, index) => (
                        <Link key={index} className="text-gray-400 text-xs hover:text-gray-500" to={''}>{cat}</Link>
                    ))}
                </div>
                {/* title */}
                <h3 className="">
                    <Link to={`/product/${id}`}>{title}</Link>
                </h3>
                <StarBox />
                {/* price */}
                <div className="text-xl font-bold">
                    <span className={priceOff && 'line-through text-sm text-gray-400 pr-2'}>${price}</span>
                    {priceOff && <span>${priceOff}</span>}
                </div>
                {/* footer card */}
                <div className="flex flex-col sm:flex-row items-center gap-2">
                    {/* input number */}
                    <input className="border p-1 sm:p-2" type="number" min={1} max={10} value={cardNumber} onChange={e => setCardNumber(e.target.value)} />
                    {/* card btn */}
                    <Btn__addCard {...props} cardNumber={cardNumber} onSetLoading={setLoading} />
                </div>
                {/* box fixe */}
                <span className="inline-block px-1 lg:px-2 absolute top-1 left-1 text-xs text-gray-300 bg-lime-600">HOT</span>
                <span className="inline-block px-1 lg:px-2 absolute top-6 left-1 text-xs text-gray-300 bg-red-600">-13%</span>
                <div className="lg:hidden group-hover:inline-block absolute top-0.5 right-0.5 lg:top-1 lg:right-1 text-xl lg:text-3xl text-gray-500 bg-white rounded-full p-1 border hover:bg-lime-900 hover:text-gray-100 transition-all duration-300">
                    <icons.Search />
                </div>
                <div
                    onClick={addToWishlistHandler}
                    className={`lg:hidden group-hover:inline-block absolute top-9 right-0.5 lg:top-12 lg:right-1 text-xl lg:text-3xl rounded-full p-1 border hover:bg-red-400 hover:text-gray-100 transition-all duration-300 ${isInWishlist ? "bg-red-600 text-gray-50" : "bg-white text-gray-500"}`}>
                    <icons.heart />
                </div>
            </div>
            {/* loder */}
            {loading || loadingWishlist ?
                <Loader position={'left-1/2 right-1/2 top-[35%]'}/>
                : ''
            }
        </div>
    )
}

export default Product__Card_v1
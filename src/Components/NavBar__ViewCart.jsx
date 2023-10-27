import { Link } from "react-router-dom";
import icons from "../../public/icons/icons";
import NavBar__ViewCart_Box from "./NavBar__ViewCart_Box";
import useTotalPrice from "../Hooks/useTotalPrice";

function NavBar__ViewCart({ cartData }) {

    const [sumPrice] = useTotalPrice(cartData)

    return (
        <div className="z-50 p-3 w-80 text-base border opacity-0 invisible group-hover:visible transition-all duration-300 group-hover:opacity-100 absolute top-[150%] right-0 bg-white shadow-xl rounded-md">
            {/* nav */}
            <nav className="flex items-center justify-between font-bold border-b pb-2">
                <p>items {cartData.length}</p>
                <Link to={'/cart'} className="cursor-pointer hover:text-gray-300 transition-colors">View cart</Link>
            </nav>
            {/* wrapper box */}
            {cartData.length ? (
                <>
                    <div className="flex flex-col gap-2 max-h-[300px] overflow-y-scroll">
                        {/* box */}
                        {cartData?.map(product => (
                            <NavBar__ViewCart_Box key={product.id} {...product} />
                        ))}
                    </div>
                    {/* footer */}
                    <div className="flex items-center justify-between font-bold border-t pt-2">
                        <p>SUBTOTAL:</p>
                        <p>${sumPrice}</p>
                    </div>
                </>
            ) : (
                <div className="flex justify-center items-center">
                    <p className="text-lg text-gray-800 py-2">No products in the cart.</p>
                </div>
            )}

        </div >
    )
}

export default NavBar__ViewCart
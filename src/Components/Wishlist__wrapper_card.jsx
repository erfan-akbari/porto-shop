import Wishlist__card from "../Components/Wishlist__card";

function Wishlist__wrapper_card({ wishlistData }) {
    return (
        // wrapper
        <div className='flex md:hidden flex-col items-center justify-center gap-5'>
            {wishlistData?.map(product => (
                <Wishlist__card key={product.id} {...product} />
            ))}
        </div>
    )
}

export default Wishlist__wrapper_card
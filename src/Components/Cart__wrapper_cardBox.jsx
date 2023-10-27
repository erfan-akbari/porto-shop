import Cart__cardBox from "../Components/Cart__cardBox";

function Cart__wrapper_cardBox({ cartData }) {
    return (
        <div className='flex md:hidden flex-col items-center justify-center gap-5'>
            {cartData.length && cartData.map(product => (
                <Cart__cardBox key={product.id} {...product} />
            ))}
        </div>
    )
}

export default Cart__wrapper_cardBox
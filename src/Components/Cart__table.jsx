import Cart__table_item from './Cart__table_item'

function Cart__table({ cartData }) {
    return (
        <div className="hidden md:block relative overflow-x-auto">
            <table className="w-full text-sm text-left text-gray-500 dark:text-gray-400">
                <thead className="text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400 h-10">
                    <tr>
                        <th>PRODUCT</th>
                        <th>PRICE</th>
                        <th>QUANTITY</th>
                        <th>SUBTOTAL</th>
                    </tr>
                </thead>
                <tbody>
                    {cartData && cartData.map(product => (
                        <Cart__table_item key={product.id} {...product} />
                    ))}
                </tbody>
            </table>
        </div>
    )
}

export default Cart__table
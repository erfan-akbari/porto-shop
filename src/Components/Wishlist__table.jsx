import Wishlist__wrapper_table from "./Wishlist__table_item"

function Wishlist__table({ wishlistData }) {
    return (
        <div className="hidden md:block relative overflow-x-auto">
            <table className="w-full text-sm text-left text-gray-500 dark:text-gray-400">
                <thead className="text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400 h-10">
                    <tr>
                        <th>PRODUCT</th>
                        <th>PRICE</th>
                        <th>STOCK STATUS</th>
                        <th>ACTIONS</th>
                    </tr>
                </thead>
                <tbody>
                    {wishlistData?.map(product => (
                        <Wishlist__wrapper_table key={product.id} {...product} />
                    ))}
                </tbody>
            </table>
        </div>
    )
}

export default Wishlist__table
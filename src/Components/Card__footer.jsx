
function Card__footer() {
    return (
        <div className="flex flex-wrap gap-3 items-center justify-between border-t pt-5">
            <div className="flex gap-2  flex-wrap items-center">
                <input type="text" placeholder="Coupon code" className="px-2 py-2 outline-none border" />
                <button className="px-2 py-2 rounded-lg outline-none border bg-gray-100 text-gray-900 font-bold hover:bg-gray-200 transition-colors">Apply coupon</button>
            </div>
            <div className="">
                <button className="px-2 py-2 rounded-lg outline-none border bg-gray-100 text-gray-900 font-bold hover:bg-gray-200 transition-colors">Update cart</button>
            </div>
        </div>
    )
}

export default Card__footer
import React from 'react'
import useTotalPrice from '../Hooks/useTotalPrice'
import { useSelector } from 'react-redux'

function Card__aside() {

    const { cart } = useSelector(state => state.Cart)
    const [sumPrice] = useTotalPrice(cart)


    return (
        <aside className="w-full lg:basis-[35%] p-8 border font-semibold rounded-lg">
            {/* title */}
            <h2 className="pb-5 text-xl">CART TOTALS</h2>
            {/* Sub total */}
            <div className="py-5 flex items-center justify-between border-b">
                <h3>Subtotal</h3>
                <p className="text-gray-400">${sumPrice}</p>
            </div>
            {/* Shipping */}
            <div className="flex flex-col gap-2 border-b py-4">
                {/* title */}
                <h3>Shipping</h3>
                {/* radio box */}
                <div className="mb-[0.125rem] block min-h-[1.5rem]">
                    <input
                        className="mr-2 mt-[0.3rem] h-3.5 w-8 appearance-none rounded-[0.4375rem] bg-neutral-300 before:pointer-events-none before:absolute before:h-3.5 before:w-3.5 before:rounded-full before:bg-transparent before:content-[''] after:absolute after:z-[2] after:-mt-[0.1875rem] after:h-5 after:w-5 after:rounded-full after:border-none after:bg-neutral-100 after:shadow-[0_0px_3px_0_rgb(0_0_0_/_7%),_0_2px_2px_0_rgb(0_0_0_/_4%)] after:transition-[background-color_0.2s,transform_0.2s] after:content-[''] checked:bg-lime-600 checked:after:absolute checked:after:z-[2] checked:after:-mt-[3px] checked:after:ml-[1.0625rem] checked:after:h-5 checked:after:w-5 checked:after:rounded-full checked:after:border-none checked:after:bg-lime-600 checked:after:shadow-[0_3px_1px_-2px_rgba(0,0,0,0.2),_0_2px_2px_0_rgba(0,0,0,0.14),_0_1px_5px_0_rgba(0,0,0,0.12)] checked:after:transition-[background-color_0.2s,transform_0.2s] checked:after:content-[''] hover:cursor-pointer focus:outline-none focus:ring-0 focus:before:scale-100 focus:before:opacity-[0.12] focus:before:shadow-[3px_-1px_0px_13px_rgba(0,0,0,0.6)] focus:before:transition-[box-shadow_0.2s,transform_0.2s] focus:after:absolute focus:after:z-[1] focus:after:block focus:after:h-5 focus:after:w-5 focus:after:rounded-full focus:after:content-[''] checked:focus:border-primary checked:focus:bg-primary checked:focus:before:ml-[1.0625rem] checked:focus:before:scale-100 checked:focus:before:shadow-[3px_-1px_0px_13px_#3b71ca] checked:focus:before:transition-[box-shadow_0.2s,transform_0.2s] dark:bg-neutral-600 dark:after:bg-neutral-400 dark:checked:bg-primary dark:checked:after:bg-primary dark:focus:before:shadow-[3px_-1px_0px_13px_rgba(255,255,255,0.4)] dark:checked:focus:before:shadow-[3px_-1px_0px_13px_#3b71ca]"
                        type="checkbox"
                        role="switch"
                        id="Flatrate" />
                    <label
                        className="text-gray-400 text-sm mt-px inline-block pl-[0.15rem] hover:cursor-pointer"
                        htmlFor="Flatrate">
                        Flat rate
                    </label>
                </div>
                {/* radio box */}
                <div className="mb-[0.125rem] block min-h-[1.5rem]">
                    <input
                        className="mr-2 mt-[0.3rem] h-3.5 w-8 appearance-none rounded-[0.4375rem] bg-neutral-300 before:pointer-events-none before:absolute before:h-3.5 before:w-3.5 before:rounded-full before:bg-transparent before:content-[''] after:absolute after:z-[2] after:-mt-[0.1875rem] after:h-5 after:w-5 after:rounded-full after:border-none after:bg-neutral-100 after:shadow-[0_0px_3px_0_rgb(0_0_0_/_7%),_0_2px_2px_0_rgb(0_0_0_/_4%)] after:transition-[background-color_0.2s,transform_0.2s] after:content-[''] checked:bg-lime-600 checked:after:absolute checked:after:z-[2] checked:after:-mt-[3px] checked:after:ml-[1.0625rem] checked:after:h-5 checked:after:w-5 checked:after:rounded-full checked:after:border-none checked:after:bg-lime-600 checked:after:shadow-[0_3px_1px_-2px_rgba(0,0,0,0.2),_0_2px_2px_0_rgba(0,0,0,0.14),_0_1px_5px_0_rgba(0,0,0,0.12)] checked:after:transition-[background-color_0.2s,transform_0.2s] checked:after:content-[''] hover:cursor-pointer focus:outline-none focus:ring-0 focus:before:scale-100 focus:before:opacity-[0.12] focus:before:shadow-[3px_-1px_0px_13px_rgba(0,0,0,0.6)] focus:before:transition-[box-shadow_0.2s,transform_0.2s] focus:after:absolute focus:after:z-[1] focus:after:block focus:after:h-5 focus:after:w-5 focus:after:rounded-full focus:after:content-[''] checked:focus:border-primary checked:focus:bg-primary checked:focus:before:ml-[1.0625rem] checked:focus:before:scale-100 checked:focus:before:shadow-[3px_-1px_0px_13px_#3b71ca] checked:focus:before:transition-[box-shadow_0.2s,transform_0.2s] dark:bg-neutral-600 dark:after:bg-neutral-400 dark:checked:bg-primary dark:checked:after:bg-primary dark:focus:before:shadow-[3px_-1px_0px_13px_rgba(255,255,255,0.4)] dark:checked:focus:before:shadow-[3px_-1px_0px_13px_#3b71ca]"
                        type="checkbox"
                        role="switch"
                        id="Freeshipping" />
                    <label
                        className="text-gray-400 text-sm mt-px inline-block pl-[0.15rem] hover:cursor-pointer"
                        htmlFor="Freeshipping">
                        Free shipping
                    </label>
                </div>
                {/* sub title */}
                <div className="text-gray-600">Shipping to Iran.</div>
                {/* slect */}
                <select className="border px-2 py-1 text-gray-400 rounded-md">
                    <option value="1">iran</option>
                    <option value="2">Two</option>
                    <option value="3">Three</option>
                    <option value="4">Four</option>
                    <option value="5">Five</option>
                    <option value="6">Six</option>
                    <option value="7">Seven</option>
                    <option value="8">Eight</option>
                </select>
                {/* slect */}
                <select className="border px-2 py-1 text-gray-400 rounded-md">
                    <option value="1">fars</option>
                    <option value="2">Two</option>
                    <option value="3">Three</option>
                    <option value="4">Four</option>
                    <option value="5">Five</option>
                    <option value="6">Six</option>
                    <option value="7">Seven</option>
                    <option value="8">Eight</option>
                </select>
                <input className="outline-none border px-2 py-1 rounded-md" type="text" placeholder="city" />
                <input className="outline-none border px-2 py-1 rounded-md" type="text" placeholder="Postcode / ZIP" />
                <button className="px-3 py-1 w-fit bg-gray-200 text-gray-700 hover:bg-gray-300 transition rounded-md">Update totals</button>
            </div>
            {/* Total */}
            <div className="flex items-center justify-between py-4">
                <h3 className="font-bold">Total</h3>
                <p className="font-bold text-xl">${sumPrice}</p>
            </div>
            {/* btn */}
            <button className="w-full rounded-lg px-3 py-2 bg-gray-800 text-gray-100 hover:bg-gray-700 transition-colors">Proceed to checkout</button>
        </aside>
    )
}

export default Card__aside
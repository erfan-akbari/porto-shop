import icons from "../../public/icons/icons"

function Product__description() {
    return (
        <section className='py-5 flex flex-col gap-10 text-sm md:text-base'>
            <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                Ut enim ad minim veniam, nostrud ipsum consectetur sed do, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
                commodo consequat.
                Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
                Excepteur sint occaecat
            </p>
            <ul className="pl-8 flex flex-col gap-2">
                <li className="flex items-center gap-2"><icons.Tick className="text-slate-950" /> Any Product types that You want – Simple, Configurable</li>
                <li className="flex items-center gap-2"><icons.Tick className="text-slate-950" /> Downloadable/Digital Products, Virtual Products</li>
                <li className="flex items-center gap-2"><icons.Tick className="text-slate-950" /> Inventory Management with Backordered items</li>
            </ul>
            <p>
                Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                Ut enim ad minim veniam, quis nostrud exercitation ullamco
                laboris nisi ut aliquip ex ea commodo consequat.
            </p>
        </section>
    )
}

export default Product__description
import {
    Accordion,
    AccordionHeader,
    AccordionBody,
} from "@material-tailwind/react";
import { useState } from "react";

function Icon({ id, open }) {
    return (
        <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={2}
            stroke="currentColor"
            className={`${id === open ? "rotate-180" : ""} h-5 w-5 transition-transform`}
        >
            <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 8.25l-7.5 7.5-7.5-7.5" />
        </svg>
    );
}

function Categories__accordion() {

    const [maxPrice, setMaxPrice] = useState(1);
    const [minPrice, setMinPrice] = useState(5000);

    const [open, setOpen] = useState(0);
    const handleOpen = (value) => setOpen(open === value ? 0 : value);;

    const [alwaysOpen, setAlwaysOpen] = useState(true);
    const handleAlwaysOpen = () => setAlwaysOpen((cur) => !cur);

    return (
        <>
            {/* accordion 1 */}
            <Accordion open={alwaysOpen}>
                {/* title */}
                <AccordionHeader onClick={handleAlwaysOpen}>
                    <h3 className="text-slate-900 text-base font-semibold">CATEGORIES</h3>
                </AccordionHeader>
                {/* content */}
                <AccordionBody>
                    <ul className="space-y-3 text-gray-500 font-medium">
                        <li>Watches (7)</li>
                        <li>Toys (3)</li>
                        <li>Headphone (3)</li>
                        <li>Shoes (3)</li>
                        <li>T-Shirts (2)</li>
                        <li>Trousers (2)</li>
                    </ul>
                </AccordionBody>
            </Accordion>
            {/* accordion 2 */}
            <Accordion open={open === 2} icon={<Icon id={2} open={open} />}>
                {/* title */}
                <AccordionHeader onClick={() => handleOpen(2)}>
                    <h3 className="text-slate-900 text-base font-semibold">PRICE</h3>
                </AccordionHeader>
                {/* content */}
                <AccordionBody>
                    {/* max */}
                    <div className="">max: </div>
                    <input className="block" type="range" min={2} max={5000} value={maxPrice} onChange={e => setMaxPrice(e.target.value)} />
                    <div className="">min: </div>
                    <input className="block" type="range" min={1} max={4999} value={minPrice} onChange={e => setMinPrice(e.target.value)} />

                    <span className="block mt-3 text-gray-500 font-medium text-xs">Min price: ${minPrice} Max price: ${maxPrice}</span>
                    <button className="bg-lime-600 p-1 text-slate-50 font-medium block mt-5 hover:bg-lime-900 transition-colors duration-300">FILTER</button>
                </AccordionBody>
            </Accordion>
            {/* accordion 3 */}
            <Accordion open={open === 3} icon={<Icon id={3} open={open} />}>
                {/* title */}
                <AccordionHeader onClick={() => handleOpen(3)}>
                    <h3 className="text-slate-900 text-base font-semibold">SIZE</h3>
                </AccordionHeader>
                {/* content */}
                <AccordionBody>
                    <div className="flex items-center gap-2">

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
                </AccordionBody>
            </Accordion>
            {/* accordion 4 */}
            <Accordion open={open === 4} icon={<Icon id={4} open={open} />}>
                {/* title */}
                <AccordionHeader onClick={() => handleOpen(4)}>
                    <h3 className="text-slate-900 text-base font-semibold">BRAND</h3>
                </AccordionHeader>
                {/* content */}
                <AccordionBody>
                    <span className="text-sm text-gray-500 font-medium">Adidas</span>
                </AccordionBody>
            </Accordion>
            {/* accordion 5 */}
            <Accordion open={open === 5} icon={<Icon id={5} open={open} />}>
                {/* title */}
                <AccordionHeader onClick={() => handleOpen(5)}>
                    <h3 className="text-slate-900 text-base font-semibold">COLOR</h3>
                </AccordionHeader>
                {/* content */}
                <AccordionBody>
                    <div className="flex items-center flex-wrap gap-3">
                        <span className="w-7 h-7 bg-black rounded-full"></span>
                        <span className="w-7 h-7 bg-red-700 rounded-full"></span>
                        <span className="w-7 h-7 bg-blue-700 rounded-full"></span>
                        <span className="w-7 h-7 bg-yellow-400 rounded-full"></span>
                        <span className="w-7 h-7 bg-green-700 rounded-full"></span>
                        <span className="w-7 h-7 bg-pink-500 rounded-full"></span>
                        <span className="w-7 h-7 bg-fuchsia-900 rounded-full"></span>
                    </div>
                </AccordionBody>
            </Accordion>
        </>
    )
}

export default Categories__accordion
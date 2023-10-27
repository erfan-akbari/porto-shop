import React from 'react'
import Media_Icons_v1 from './Media_Icons_v1'
import { Link } from 'react-router-dom'

function Footer() {
    return (
        <footer className="bg-zinc-800 text-white p-10 mt-20">
            {/* footer wrapper - conteiner  */}
            <div className="container">
                {/* footer top section */}
                <div className="flex flex-col xl:flex-row xl:items-center justify-between border-b border-zinc-700 pb-5">
                    {/* <= the left part of this section - contact info */}
                    <div className="flex flex-col gap-3">
                        {/* title this part */}
                        <h2 className="font-bold text-slate-50">CONTACT INFO</h2>
                        {/* list & items */}
                        <ul className="font-thin">
                            <li className="py-1">
                                <div className="text-slate-100">ADDRESS:</div>
                                <span className='text-sm text-gray-400'>1234 Street Name, City, England</span>
                            </li>
                            <li className="py-1">
                                <div className="text-slate-100">PHONE:</div>
                                <span className='text-sm text-gray-400'>(123) 456-7890</span>
                            </li>
                            <li className="py-1">
                                <div className="text-slate-100">EMAIL:</div>
                                <span className='text-sm text-gray-400'>mail@example.com</span>
                            </li>
                            <li className="py-1">
                                <div className="text-slate-100">WORKING DAYS/HOURS:</div>
                                <span className='text-sm text-gray-400'>Mon - Sun / 9:00 AM - 8:00 PM</span>
                            </li>
                        </ul>
                        {/* media icons & links */}
                        <Media_Icons_v1 />
                    </div>
                    {/* => The right part of this section */}
                    <div>
                        {/* top part - footer newsletter */}
                        <div className="flex flex-col lg:flex-row gap-5 lg:items-end border-b border-zinc-700 py-10">
                            {/* newsletter content */}
                            <div className="max-w-lg">
                                <h2 className="font-bold text-slate-50">SUBSCRIBE NEWSLETTER</h2>
                                <p className="text-sm text-gray-400 mt-5">
                                    Get all the latest information on Events, Sales and Offers. Sign up for newsletter today.
                                </p>
                            </div>
                            {/* newsletter input */}
                            <div className='flex max-w-lg'>
                                <input className='bg-zinc-700 text-gray-400 py-3 px-5 w-full rounded-s-full outline-none' type="text" placeholder='Email address' />
                                <button className='bg-lime-700 px-5 font-thin rounded-e-full hover:bg-lime-600 transition-colors duration-300'>SUBSCRIBE</button>
                            </div>
                        </div>
                        {/* bottom part - fooetr customerService & aboutUs */}
                        <div className="py-7 text-sm text-gray-400 flex flex-col md:flex-row gap-5 md:items-center justify-between">
                            {/* customerService */}
                            <div>
                                <h2 className="font-bold text-slate-50">CUSTOMER SERVICE</h2>
                                <div className="max-w-sm flex items-center gap-16 mt-5">
                                    <div>
                                        <Link className='block' to={'/aboutUs'}>About us</Link>
                                        <Link className='block' to={'/contactUs'}>Contact us</Link>
                                        <Link className='block' to={'/login'}>My Account</Link>
                                    </div>
                                    <div>
                                        <Link className='block' to={'/aboutUs'}>Order history</Link>
                                        <Link className='block' to={'/contactUs'}>Advanced search</Link>
                                        <Link className='block' to={'/login'}>Login</Link>
                                    </div>
                                </div>
                            </div>
                            {/* aboutUs */}
                            <div>
                                <h2 className="font-bold text-slate-50">ABOUT US</h2>
                                <div className="max-w-sm flex items-center gap-16 mt-5">
                                    <div>
                                        <Link to={''}>Super Fast Wordpress Theme</Link>
                                        <Link to={''}>1st Fully working Ajax Theme</Link>
                                        <Link to={''}>42 Unique Shop Layouts</Link>
                                    </div>
                                    <div>
                                        <Link to={''}>Powerful Admin Panel</Link>
                                        <Link to={''}>Mobile & Retina Optimized</Link>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                {/* footer bottom section */}
                <div className="flex items-center flex-col sm:flex-row gap-5 justify-center sm:justify-between pt-10">
                    {/* left */}
                    <h2 className="text-xs text-gray-400">
                        © copyright 2023. All Rights Reserved.
                    </h2>
                    {/* right */}
                    <h2 className="bg-zinc-700 p-2 rounded-md">
                        WeB StAr..
                    </h2>
                </div>
            </div>
        </footer>
    )
}

export default Footer
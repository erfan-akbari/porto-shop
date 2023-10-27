import React from 'react'

function Product__sizeGuide() {
    return (
        <section className="py-5 flex flex-col md:flex-row gap-10 md:gap-0 items-center justify-around">
            {/* left box */}
            <div className="basis-[40%]">
                <img className="" src="/Images/size_guide.png" alt="size image" />
            </div>
            {/* right box */}
            <div className="md:basis-[60%] flex flex-col shadow-md">
                <div className="overflow-x-auto sm:-mx-6 lg:-mx-8">
                    <div className="inline-block min-w-full py-2 sm:px-6 lg:px-8">
                        <div className="overflow-hidden">
                            <table className="min-w-full text-left text-sm font-light">
                                <thead
                                    className="border-b bg-gray-800 font-medium dark:border-neutral-500 dark:bg-neutral-600">
                                    <tr>
                                        <th scope="col" className="px-4 py-4">SIZE</th>
                                        <th scope="col" className="px-4 py-4">CHEST(IN.)</th>
                                        <th scope="col" className="px-4 py-4">WAIST(IN.)</th>
                                        <th scope="col" className="px-4 py-4">HIPS(IN.)</th>
                                    </tr>
                                </thead>
                                <tbody className="text-slate-950 font-semibold">
                                    <tr
                                        className="border-b bg-neutral-100 dark:border-neutral-500 dark:bg-neutral-700">
                                        <td className="whitespace-nowrap px-4 py-4 font-medium">XS</td>
                                        <td className="whitespace-nowrap px-4 py-4">34-36</td>
                                        <td className="whitespace-nowrap px-4 py-4">	27-29</td>
                                        <td className="whitespace-nowrap px-4 py-4">34.5-36.5</td>
                                    </tr>
                                    <tr
                                        className="border-b bg-white dark:border-neutral-500 dark:bg-neutral-600">
                                        <td className="whitespace-nowrap px-4 py-4 font-medium">S</td>
                                        <td className="whitespace-nowrap px-4 py-4">36-38</td>
                                        <td className="whitespace-nowrap px-4 py-4">29-31</td>
                                        <td className="whitespace-nowrap px-4 py-4">36.5-38.5</td>
                                    </tr>
                                    <tr
                                        className="border-b bg-white dark:border-neutral-500 dark:bg-neutral-600">
                                        <td className="whitespace-nowrap px-4 py-4 font-medium">M</td>
                                        <td className="whitespace-nowrap px-4 py-4">36-38</td>
                                        <td className="whitespace-nowrap px-4 py-4">29-31</td>
                                        <td className="whitespace-nowrap px-4 py-4">36.5-38.5</td>
                                    </tr>
                                    <tr
                                        className="border-b bg-white dark:border-neutral-500 dark:bg-neutral-600">
                                        <td className="whitespace-nowrap px-4 py-4 font-medium">L</td>
                                        <td className="whitespace-nowrap px-4 py-4">36-38</td>
                                        <td className="whitespace-nowrap px-4 py-4">29-31</td>
                                        <td className="whitespace-nowrap px-4 py-4">36.5-38.5</td>
                                    </tr>
                                    <tr
                                        className="border-b bg-white dark:border-neutral-500 dark:bg-neutral-600">
                                        <td className="whitespace-nowrap px-4 py-4 font-medium">Xl</td>
                                        <td className="whitespace-nowrap px-4 py-4">36-38</td>
                                        <td className="whitespace-nowrap px-4 py-4">29-31</td>
                                        <td className="whitespace-nowrap px-4 py-4">36.5-38.5</td>
                                    </tr>
                                    <tr
                                        className="border-b bg-white dark:border-neutral-500 dark:bg-neutral-600">
                                        <td className="whitespace-nowrap px-4 py-4 font-medium">XXl</td>
                                        <td className="whitespace-nowrap px-4 py-4">36-38</td>
                                        <td className="whitespace-nowrap px-4 py-4">29-31</td>
                                        <td className="whitespace-nowrap px-4 py-4">36.5-38.5</td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Product__sizeGuide
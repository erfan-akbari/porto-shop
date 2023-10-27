import React from 'react'

function Product__additional_Information() {
    return (
        <section classNameName="py-10 flex items-center justify-center">
            <div className="flex flex-col w-full">
                <div className="overflow-x-auto sm:-mx-6 lg:-mx-8">
                    <div className="inline-block min-w-full py-2 sm:px-6 lg:px-8">
                        <div className="overflow-hidden">
                            <table className="min-w-full text-left text-sm font-light">
                                <tbody>
                                    <tr
                                        className="border-b bg-neutral-100 dark:border-neutral-500 dark:bg-ne5tral-700">
                                        <td className="whitespace-nowrap px-6 py-4 text-lg font-bold text-gray-700">Weight</td>
                                        <td className="whitespace-nowrap px-6 py-4 text-gray-700 font-semibold">23 kg</td>
                                    </tr>
                                    <tr
                                        className="border-b bg-white dark:border-neutral-500 dark:bg-neutral-500">
                                        <td className="whitespace-nowrap px-6 py-4 text-lg font-bold text-gray-700">Dimensions</td>
                                        <td className="whitespace-nowrap px-6 py-4 text-gray-700 font-semibold">12 × 23 × 56 cm</td>
                                    </tr>
                                    <tr
                                        className="border-b bg-white dark:border-neutral-500 dark:bg-neutral-500">
                                        <td className="whitespace-nowrap px-6 py-4 text-lg font-bold text-gray-700">color</td>
                                        <td className="whitespace-nowrap px-6 py-4 text-gray-700 font-semibold">Green, Indigo</td>
                                    </tr>
                                    <tr
                                        className="border-b bg-white dark:border-neutral-500 dark:bg-neutral-500">
                                        <td className="whitespace-nowrap px-6 py-4 text-lg font-bold text-gray-700">size</td>
                                        <td className="whitespace-nowrap px-6 py-4 text-gray-700 font-semibold">Extra Large</td>
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

export default Product__additional_Information
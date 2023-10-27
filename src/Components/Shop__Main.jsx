import { useEffect, useState } from "react";
import Card__product_v1 from "../Components/Card__product_v1"
import Card__product_v3 from "../Components/Card__product_v3"

import { getAllProducts } from "../Redux/Slices/products";
import { useDispatch, useSelector } from "react-redux";
import Loader from "./Loader";
import LoaderShimmer from "./LoaderShimmer";

function Shop__Main({ showModeProducts, numberShows }) {

    const allProducts = useSelector(state => state.Products)
    const dispatch = useDispatch()
    const [loading, setLoading] = useState(false)

    useEffect(() => {
        dispatch(getAllProducts('http://localhost:3000/allProducts?_sort=id&_order=desc'))
    }, [])

    useEffect(() => {
        setLoading(true)
        setTimeout(() => {
            setLoading(false)
        }, 2000);
    }, [allProducts])


    return (
        <main className={`grid py-8 ${showModeProducts === 'grid' ? 'grid-cols-2 xl:grid-cols-3' : 'grid-cols-1'} gap-5 `}>
            {loading ? (
                <>
                    <LoaderShimmer />
                    <LoaderShimmer />
                    <LoaderShimmer />
                    <LoaderShimmer />
                    <LoaderShimmer />
                    <LoaderShimmer />
                </>
            ) : (
                showModeProducts === 'grid' ? (
                    allProducts?.slice(0, numberShows).map(product => (
                        <Card__product_v1 key={product.id} {...product} />
                    ))
                ) : (
                    allProducts?.slice(0, numberShows).map(product => (
                        <Card__product_v3 key={product.id} {...product} />
                    ))
                )
            )}

        </main>
    )
}

export default Shop__Main
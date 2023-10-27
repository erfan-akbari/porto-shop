import Card__product_v1 from "./Card__product_v1"
import { useEffect, useState } from "react";
import axios from "axios";

// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';

import { getAllProducts } from "../Redux/Slices/products";
import { useSelector, useDispatch } from "react-redux";

function Product__related_products() {

    const allProducts = useSelector(state => state.Products)
    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(getAllProducts('http://localhost:3000/allProducts?_sort=id&_order=desc'))
    }, [])


    return (
        <section>
            <h2 className="text-xl font-bold border-b pb-5">RELATED PRODUCTS</h2>
            {/* wrapper products */}
            <Swiper
                slidesPerView={2}
                spaceBetween={30}
                breakpoints={{
                    768: {
                        slidesPerView: 3
                    },
                    1300: {
                        slidesPerView: 4
                    },
                }}
                className="mySwiper"
            >
                {allProducts?.map(product => (
                    <SwiperSlide key={product.id}>
                        <Card__product_v1 key={product.id} {...product} />
                    </SwiperSlide>
                ))}
            </Swiper>
        </section>
    )
}

export default Product__related_products
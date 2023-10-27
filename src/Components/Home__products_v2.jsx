import { useEffect } from "react"
import Card__product_v2 from "./Card__product_v2"
import AOS from "aos";
import "aos/dist/aos.css";

import { getAllCatProducts } from "../Redux/Slices/catProducts";
import { useDispatch, useSelector } from "react-redux";

function Home__products_v2() {

    const catProducts = useSelector(store => store.CatProducts)
    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(getAllCatProducts('http://localhost:3000/three_categories_products'))
    }, [])

    useEffect(() => {
        AOS.init();
        AOS.refresh();
    }, []);

    return (
        <section data-aos="fade-up" data-aos-duration="1000" data-aos-once="true" className="container flex flex-col sm:flex-row sm:items-center gap-10 sm:gap-0 justify-between py-8">
            {/*  colmn products Grouping */}
            {catProducts.length && catProducts.map((cat, index) => (
                <div key={index} className="text-base font-bold flex items-start flex-col gap-6">
                    <h3 className="mb-5">{cat[0]}</h3>
                    {/* products card boxes */}
                    {cat[1].map(product => (
                        <Card__product_v2 key={product.id} {...product} />
                    ))}
                </div>
            ))}
        </section>
    )
}

export default Home__products_v2;
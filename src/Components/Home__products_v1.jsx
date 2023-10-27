import { useEffect, useState } from "react";
import Card__product_v1 from "../Components/Card__product_v1"
import LoaderShimmer from "./LoaderShimmer";
import { getAllProducts } from "../Redux/Slices/products";
import { useSelector, useDispatch } from "react-redux";

function Home__products_v1() {

  const [filterValue, setFilterValue] = useState('LATEST')
  const [loading, setLoading] = useState(false)
  const allProducts = useSelector(satet => satet.Products)
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(getAllProducts('http://localhost:3000/allProducts?_sort=id&_order=desc'))
  }, [])

  const visitedHandler = () => {
    dispatch(getAllProducts('http://localhost:3000/allProducts?_sort=views&_order=desc'))
    setFilterValue("VISITED")
  }
  const lastedHandler = () => {
    dispatch(getAllProducts('http://localhost:3000/allProducts?_sort=id&_order=desc'))
    setFilterValue("LATEST")
  }

  useEffect(() => {
    setLoading(true)
    setTimeout(() => {
      setLoading(false)
    }, 2000);
  }, [allProducts])

  return (
    <>
      <div className="border-b">
        {/* sub menu section */}
        <ul className="container font-semibold flex items-center justify-start gap-5 text-gray-700">
          <li className={`${filterValue === "LATEST" && 'text-lime-700 border-b border-lime-700'} pb-5 cursor-pointer`} onClick={lastedHandler}>LATEST PRODUCTS</li>
          <li className={`${filterValue === "VISITED" && 'text-lime-700 border-b border-lime-700'} pb-5 cursor-pointer`} onClick={visitedHandler}>MOST VISITED PRODUCTS</li>
        </ul>
      </div>
      {/* wrapper products */}
      <div className="container py-8 grid grid-cols-2 xl:grid-cols-4 gap-5 grid-row-2 xl:grid-rows-1">
        {!loading ? (
          <>
            {/* product card */}
            {allProducts?.slice(0, 4).map(product => (
              <Card__product_v1 key={product.id} {...product} />
            ))}
          </>
        ) : (
          <>
            <LoaderShimmer />
            <LoaderShimmer />
            <LoaderShimmer />
            <LoaderShimmer />
          </>
        )}
      </div>
    </>
  )
}

export default Home__products_v1
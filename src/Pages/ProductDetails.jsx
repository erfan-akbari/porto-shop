import { useState, useEffect } from "react"
import { useParams } from "react-router-dom"
import axios from "axios";
import Product__infos from "../Components/Product__infos"
import Breadcrumb from "../Components/Breadcrumb"
import Product__more_information from "../Components/Product__more_information";
import Product__related_products from "../Components/Product__related_products";
import Comments from "../Components/Comments"

import { getSingleProduct } from "../Redux/Slices/singleProduct";
import { useDispatch, useSelector } from "react-redux";

function ProductDetails() {

  const productID = useParams().ID
  const productData = useSelector(store => store.SingleProduct)
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(getSingleProduct(`http://localhost:3000/allProducts/${productID}`))
  }, [])
  
  return (
    <main className="container py-10">
      {/* breadcrumb */}
      <Breadcrumb />
      {/* product infos */}
      <Product__infos {...productData} />
      {/* more information */}
      <Product__more_information />
      {/* related products */}
      <Product__related_products />
      {/* comments */}
      <Comments />
    </main>
  )
}

export default ProductDetails
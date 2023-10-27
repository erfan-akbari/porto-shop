import { useEffect, useState } from "react"
import Product__description from "./Product__description";
import Product__sizeGuide from "./Product__sizeGuide";
import Product__additional_Information from "./Product__additional_Information";
import Product__reviews from "./Product__reviews";

function Product__more_information() {

  const [showMainDetails, setShowMainDetails] = useState('Description')

  return (
    <section className="py-5 text-gray-400 font-semibold text-base/7">
      {/* Tab bar */}
      <ul className="flex items-center gap-8 flex-wrap text-gray-500 font-semibold border-b border-gray-200 pb-5">
        <li onClick={e => setShowMainDetails(e.target.innerHTML)} className={`cursor-pointer ${showMainDetails === 'Description' && 'text-gray-950'}`}>Description</li>
        <li onClick={e => setShowMainDetails(e.target.innerHTML)} className={`cursor-pointer ${showMainDetails === 'Size Guide' && 'text-gray-950'}`}>Size Guide</li>
        <li onClick={e => setShowMainDetails(e.target.innerHTML)} className={`cursor-pointer ${showMainDetails === 'Additional information' && 'text-gray-950'}`}>Additional information</li>
        <li onClick={e => setShowMainDetails(e.target.innerHTML)} className={`cursor-pointer ${showMainDetails === 'Reviews' && 'text-gray-950'}`}>Reviews</li>
      </ul>
      {/* Description */}
      {showMainDetails === 'Description' && <Product__description />}
      {/* Size Guide */}
      {showMainDetails === 'Size Guide' && <Product__sizeGuide />}
      {/* Additional information */}
      {showMainDetails === 'Additional information' && <Product__additional_Information />}
      {/* Reviews */}
      {showMainDetails === 'Reviews' && <Product__reviews />}
    </section>
  )
}

export default Product__more_information
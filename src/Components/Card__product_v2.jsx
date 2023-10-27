import { Link } from 'react-router-dom'
import StarBox from './StarBox'

function Card__product_v2({ title, src, price, offPrice, category, id }) {
  return (
    <div className="flex flex-row sm:flex-col xl:flex-row items-start gap-3">
      {/* left card - banner */}
      <Link to={`/product/${id}`} className="max-w-[110px] max-h-[110px] lg:max-w-[175px] lg:max-h-[175px] overflow-hidden">
        <img className='hover:scale-125 transition-all duration-300 w-full h-full' src={src} alt="product imgage" />
      </Link>
      {/* right card - content */}
      <div className="flex flex-col items-start gap-2">
        {/* card links */}
        <div className="text-gray-500 font-thin">
          <Link className='hover:text-lime-500 transition-colors duration-300' to={''}>{category[0]}, </Link>
          <Link className='hover:text-lime-500 transition-colors duration-300' to={''}>{category[1]}</Link>
        </div>
        {/* card title */}
        <div className="font-semibold">
          <Link to={`/product/${id}`}>{title}</Link>
        </div>
        {/* card star product */}
        <StarBox />
        {/* card price */}
        <div className="text-lg flex items-center gap-2">
          <div className={`${offPrice ? 'line-through text-gray-300 text-base' : "text-lime-600"}`}>{price}</div>
          {offPrice && <div className='text-lime-600'>{offPrice}</div>}
        </div>
      </div>
    </div>
  )
}

export default Card__product_v2
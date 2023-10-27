import { Link } from "react-router-dom";
import Card__aside from "../Components/Card__aside";
import Card__footer from "../Components/Card__footer";
import Cart__table from "../Components/Cart__table";
import Cart__wrapper_cardBox from "../Components/Cart__wrapper_cardBox";
import { useSelector } from "react-redux"

function Cart() {

  const { cart } = useSelector(state => state.Cart)

  return (
    <div className="container">
      {/* bradcrumb */}
      <div className="flex text-sm md:text-base lg:text-2xl font-bold items-center justify-center py-10 text-gray-400"> <span className="text-lime-600 mr-2">ShoppingCart</span> / Checkout / OrderComplete </div>
      {/* main content page */}
      {cart.length ? (
        <div className="flex flex-col lg:flex-row items-start gap-8">
          <main className="w-full lg:basis-[65%]">
            {/* show type table data for big scren */}
            <Cart__table cartData={cart} />
            {/* show type card data for small scren */}
            <Cart__wrapper_cardBox cartData={cart} />
            {/* bottom table products */}
            <Card__footer />
          </main>
          {/* sidebar */}
          <Card__aside cartData={cart} />
        </div>
      ) : (
        <div id="alert-additional-content-1" className="p-4 mb-4 text-blue-800 border border-blue-300 rounded-lg bg-blue-50 dark:bg-gray-800 dark:text-blue-400 dark:border-blue-800" role="alert">
          <div className="flex items-center">
            <svg className="flex-shrink-0 w-4 h-4 mr-2" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
              <path d="M10 .5a9.5 9.5 0 1 0 9.5 9.5A9.51 9.51 0 0 0 10 .5ZM9.5 4a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3ZM12 15H8a1 1 0 0 1 0-2h1v-3H8a1 1 0 0 1 0-2h2a1 1 0 0 1 1 1v4h1a1 1 0 0 1 0 2Z" />
            </svg>
            <span className="sr-only">Info</span>
            <h3 className="text-lg font-medium">No products added to the cart</h3>
          </div>
          <div className="mt-2 mb-4 text-sm">
            More info about this info alert goes here. This example text is going to run a bit longer so that you can see how spacing within an alert works with this kind of content.
          </div>
          <div className="flex">
            <Link to={'/shop'} className="text-white bg-blue-800 hover:bg-blue-900 focus:ring-4 focus:outline-none focus:ring-blue-200 font-medium rounded-lg text-xs px-3 py-1.5 mr-2 text-center inline-flex items-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
              <svg className="-ml-0.5 mr-2 h-3 w-3" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 14">
                <path d="M10 0C4.612 0 0 5.336 0 7c0 1.742 3.546 7 10 7 6.454 0 10-5.258 10-7 0-1.664-4.612-7-10-7Zm0 10a3 3 0 1 1 0-6 3 3 0 0 1 0 6Z" />
              </svg>
              View Shop
            </Link>
            <Link to={'/'} className="text-blue-800 bg-transparent border border-blue-800 hover:bg-blue-900 hover:text-white focus:ring-4 focus:outline-none focus:ring-blue-200 font-medium rounded-lg text-xs px-3 py-1.5 text-center dark:hover:bg-blue-600 dark:border-blue-600 dark:text-blue-400 dark:hover:text-white dark:focus:ring-blue-800" data-dismiss-target="#alert-additional-content-1" aria-label="Close">
              Home
            </Link>
          </div>
        </div>
      )
      }
    </div >
  )
}

export default Cart
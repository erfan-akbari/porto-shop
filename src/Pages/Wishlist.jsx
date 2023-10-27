import { Link } from "react-router-dom";
import Wishlist__table from "../Components/Wishlist__table";
import Wishlist__wrapper_card from "../Components/Wishlist__wrapper_card";
import { useSelector } from "react-redux";

function Wishlist() {
  const { wishlist } = useSelector(state => state.Wishlist)

  return (
    <>
      {/* header */}
      <header className='bg-gray-100 w-full h-44 flex flex-col gap-2 items-center justify-center'>
        <div className="text-xs font-semibold ">
          <span className='text-lime-600 px-2'>HOME</span> /
          <span className='text-gray-400 px-2'>WISHLIST</span>
        </div>
        <h1 className="font-extrabold text-3xl">Wishlist</h1>
      </header>
      <main className='container py-10'>
        {wishlist.length ? (
          <div className="py-5">
            <h2 className="font-bold text-3xl mb-10">My wishlist on Demo Shop 14</h2>
            {/* show type table data for big scren */}
            <Wishlist__table wishlistData={wishlist} />
            {/* show type card data for small scren */}
            <Wishlist__wrapper_card wishlistData={wishlist} />
          </div>
        ) : (
          <div id="alert-additional-content-1" className="p-4 mb-4 text-blue-800 border border-blue-300 rounded-lg bg-blue-50 dark:bg-gray-800 dark:text-blue-400 dark:border-blue-800" role="alert">
            <div className="flex items-center">
              <svg className="flex-shrink-0 w-4 h-4 mr-2" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
                <path d="M10 .5a9.5 9.5 0 1 0 9.5 9.5A9.51 9.51 0 0 0 10 .5ZM9.5 4a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3ZM12 15H8a1 1 0 0 1 0-2h1v-3H8a1 1 0 0 1 0-2h2a1 1 0 0 1 1 1v4h1a1 1 0 0 1 0 2Z" />
              </svg>
              <span className="sr-only">Info</span>
              <h3 className="text-lg font-medium">No products added to the wishlist</h3>
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
        )}
      </main>
    </>
  )
}

export default Wishlist;

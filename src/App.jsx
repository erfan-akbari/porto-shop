import { useRoutes } from "react-router-dom"
import routes from "./routes"
import Navbar from "./Components/NavBar"
import Footer from "./Components/Footer"
import Nav from "./Components/nav"
import { useEffect } from "react"
import { useDispatch } from "react-redux"
import { setCartInit } from "./Redux/Slices/cart"
import { setWishlistInit } from "./Redux/Slices/wishlist"
import { Toaster } from 'react-hot-toast';

function App() {

  const router = useRoutes(routes)
  const dispatch = useDispatch()

  useEffect(() => {
    const cartDatalocalStorage = localStorage.getItem("cartData")
    const wishlistDatalocalStorage = localStorage.getItem("wishlistData")

    if (cartDatalocalStorage) {
      dispatch(setCartInit(JSON.parse(cartDatalocalStorage)))
    } else {
      localStorage.setItem("cartData", [])
    }

    if (wishlistDatalocalStorage) {
      dispatch(setWishlistInit(JSON.parse(wishlistDatalocalStorage)))
    } else {
      localStorage.setItem("wishlistData", [])
    }
  }, [])

  return (
    <>
      <Toaster
        position="top-right"
      />
      <Navbar />
      <Nav />
      {router}
      <Footer />
    </>
  )
}

export default App

import Home from './Pages/Home';
import Cart from './Pages/Cart';
import ProductDetails from './Pages/ProductDetails';
import Shop from './Pages/Shop';
import Blogs from './Pages/Blogs';
import BlogDetails from './Pages/BlogDetails';
import AboutUs from './Pages/AboutUs';
import ContactUs from './Pages/ContactUs';
import Login from './Pages/Login';
import Register from './Pages/Register';
import Wishlist from './Pages/Wishlist';
// import Categories from './Pages/Categories';

const routes = [
    { path: '/', element: <Home /> },
    { path: '/home', element: <Home /> },
    { path: '/cart', element: <Cart /> },
    { path: '/shop', element: <Shop /> },
    { path: '/offer', element: <Shop /> },
    { path: '/product/:ID', element: <ProductDetails /> },
    { path: '/blog/:ID', element: <BlogDetails /> },
    { path: '/blogs', element: <Blogs /> },
    { path: '/aboutUs', element: <AboutUs /> },
    { path: '/categories', element: <Shop /> },
    { path: '/contactUs', element: <ContactUs /> },
    { path: '/login', element: <Login /> },
    { path: '/register', element: <Register /> },
    { path: '/wishlist', element: <Wishlist /> }
]

export default routes;
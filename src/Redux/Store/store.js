import { configureStore } from "@reduxjs/toolkit";

import cartReducer from "../Slices/cart.js"
import wishlistReducer from "../Slices/wishlist.js"
import productsReducer from "../Slices/products.js"
import singleProductReducer from "../Slices/singleProduct.js";
import CatProductsReducer from "../Slices/catProducts.js";
import MenusReducer from "../Slices/menus.js";
import blogsReducer from "../Slices/blogs.js"
import singleBlogReducer from "../Slices/singleBlog.js";

const store = configureStore({
    reducer: {
        Cart: cartReducer,
        Wishlist: wishlistReducer,
        Products: productsReducer,
        SingleProduct: singleProductReducer,
        CatProducts: CatProductsReducer,
        Menus: MenusReducer,
        Blogs: blogsReducer,
        SingleBlog: singleBlogReducer
    }
})

export default store;
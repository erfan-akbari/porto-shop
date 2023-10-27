import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addToWishlist } from "../Redux/Slices/wishlist"
import toast from "react-hot-toast"

function useAddedToWishlist(props) {

    const { wishlist } = useSelector(state => state.Wishlist)
    const [isInWishlist, setIsInWishlist] = useState(false)
    const [loadingWishlist, setLoadingWishlist] = useState(false)
    const dispatch = useDispatch()

    useEffect(() => {
        setIsInWishlist(wishlist.some(item => item.id === props.id))
    }, []);

    const addToWishlistHandler = () => {
        if (!isInWishlist) {
            setLoadingWishlist(true)
            setTimeout(() => {
                dispatch(addToWishlist(props))
                setLoadingWishlist(false)
                toast.success("Added to Wishlist")
            }, 2000);
            setIsInWishlist(true)
        } else {
            toast.error("Already Added")
        }
    }

    return [addToWishlistHandler, loadingWishlist, isInWishlist]
}

export default useAddedToWishlist
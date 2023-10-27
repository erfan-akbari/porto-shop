import icons from "../../public/icons/icons"
import { Link } from "react-router-dom"

export default function Media_Icons_v1() {
    return (
        <div className="flex items-center gap-1 lg:gap-4">
            <Link className="flex items-center justify-center text-lg hover:bg-blue-700 hover:text-slate-50 rounded-full p-1 transition-colors duration-300"> <icons.Facebook /> </Link>
            <Link className="flex items-center justify-center text-lg hover:bg-blue-500 hover:text-slate-50 rounded-full p-1 transition-colors duration-300"> <icons.Telegram /> </Link>
            <Link className="flex items-center justify-center text-lg hover:bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 hover:text-slate-50 rounded-full p-1 transition-colors duration-300"> <icons.Instagram /> </Link>
        </div>
    )
}

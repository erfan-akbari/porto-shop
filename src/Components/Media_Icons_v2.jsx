import Media_Icons_v1 from "./Media_Icons_v1"
import icons from "../../public/icons/icons"
import { Link } from "react-router-dom"

function Media_Icons_v2() {
    return (
        <div className="flex items-center gap-1 lg:gap-4">
            <Media_Icons_v1 />
            <Link className="flex items-center justify-center text-lg hover:bg-gradient-to-r from-green-400  to-blue-800 hover:text-slate-50 rounded-full p-1 transition-colors duration-300">
                <icons.Google />
            </Link>
            <Link className="flex items-center justify-center text-lg hover:bg-orange-500 hover:text-slate-50 rounded-full p-1 transition-colors duration-300">
                <icons.Gmail />
            </Link>
        </div>
    )
}

export default Media_Icons_v2
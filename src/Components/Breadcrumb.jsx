import { Link } from "react-router-dom"
import icons from "../../public/icons/icons"

function Breadcrumb() {
    return (

        <nav className="flex" aria-label="Breadcrumb">
            <ol className="inline-flex items-center space-x-1 md:space-x-3">
                <li className="inline-flex items-center">
                    <Link to={''} className="inline-flex items-center text-sm font-medium text-gray-700 hover:text-blue-600 dark:text-gray-400 dark:hover:text-white">
                        <div className="text-2xl text-gray-500 ">
                            <icons.Home />
                        </div>
                        <span className="inline-block pl-3">Home</span>
                    </Link>
                </li>
                <li>
                    <div className="flex items-center">
                        <div className="text-2xl text-gray-500 ">
                            <icons.ArrowRight />
                        </div>
                        <Link to={''} className="ml-1 text-sm font-medium text-gray-700 hover:text-blue-600 md:ml-2 dark:text-gray-400 dark:hover:text-white">
                            Shop
                        </Link>
                    </div>
                </li>
                <li aria-current="page">
                    <div className="flex items-center">
                        <div className="text-2xl text-gray-500 ">
                            <icons.ArrowRight />
                        </div>
                        <span className="ml-1 text-sm font-medium text-gray-500 md:ml-2 dark:text-gray-400">HEADPHONE, TROUSERS</span>
                    </div>
                </li>
            </ol>
        </nav>

    )
}

export default Breadcrumb
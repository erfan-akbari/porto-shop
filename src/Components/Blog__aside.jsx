import { Link } from "react-router-dom"

export default function Blog__aside() {
    return (
        <aside className="basis-[25%]">
            <h3 className="text-2xl font-bold mb-5">Blog Categories</h3>
            <ul className="space-y-2 text-gray-500">
                <li className="hover:text-lime-600 transition-colors">
                    <Link to={''}>Articles</Link>
                </li>
                <li className="hover:text-lime-600 transition-colors">
                    <Link to={''} className="ml-5">Asides</Link>
                </li>
                <li className="hover:text-lime-600 transition-colors">
                    <Link to={''}>Bag</Link>
                </li>
                <li className="hover:text-lime-600 transition-colors">
                    <Link to={''} className="text-lg font-bold text-gray-600">Fashion</Link>
                </li>
                <li className="hover:text-lime-600 transition-colors">
                    <Link to={''}>Model</Link>
                </li>
                <li className="hover:text-lime-600 transition-colors">
                    <Link to={''}>Traveling</Link>
                </li>
                <li className="hover:text-lime-600 transition-colors">
                    <Link to={''}>Uncategorized</Link>
                </li>
            </ul>
            <h3 className="my-4 text-2xl font-bold">Tags</h3>
            <div className="flex items-center gap-5">
                <Link to={''} className="bg-black px-3 text-white rounded-xl">ARTICLES</Link>
                <Link to={''} className="bg-black px-3 text-white rounded-xl">CHAT</Link>
            </div>
        </aside>
    )
}

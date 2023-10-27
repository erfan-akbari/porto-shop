import icons from '../../public/icons/icons'
import { Link } from 'react-router-dom'

export default function Blog__related_post_box() {
    return (
        <div
            className="block max-w-[28rem] rounded-lg bg-white shadow-[0_2px_15px_-3px_rgba(0,0,0,0.07),0_10px_20px_-2px_rgba(0,0,0,0.04)] dark:bg-neutral-700">
            <div className="relative overflow-hidden bg-cover bg-no-repeat">
                <img
                    className="rounded-t-lg"
                    src="/Images/shop1_post4.jpg"
                    alt="" />
            </div>
            <div className="p-6">
                <h5 className="mb-2 text-xl font-medium leading-tight text-neutral-800 dark:text-neutral-50">
                    Post Format Image
                </h5>
                <p className="text-base text-neutral-400 dark:text-neutral-200">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras non placerat mi. Etiam non tellus sem. Aenean pretium convallis lorem,...
                </p>
            </div>
            <ul className="w-full text-gray-400">
                <li
                    className="w-full flex items-center gap-2 border-b-2 border-neutral-100 border-opacity-100 px-6 py-3 dark:border-opacity-50">
                    <span>
                        <icons.Folder />
                    </span>
                    <Link to={''}>Fashion</Link>
                    <Link to={''}>Model</Link>

                </li>
                <li
                    className="w-full flex items-center gap-2 border-b-2 border-neutral-100 border-opacity-100 px-6 py-3 dark:border-opacity-50">
                    <span className="flex items-center gap-1">
                        <icons.User /> BY
                    </span>
                    <Link to={''}>JOE DOE</Link>

                </li>
                <li
                    className="w-full flex items-center gap-2 border-neutral-100 border-opacity-100 px-6 py-3 dark:border-opacity-50">
                    <icons.Chat />
                    No Comments
                </li>
            </ul>
            <div className="p-6">
                <Link
                    to={''}
                    className="text-gray-100 bg-lime-600  hover:bg-lime-700 px-3 pointer-events-auto mr-5 inline-block cursor-pointer rounded text-base font-normal leading-normal text-primary transition duration-150 ease-in-out hover:text-primary-600 focus:text-primary-600 focus:outline-none focus:ring-0 active:text-primary-700">
                    Read more...
                </Link>
            </div>
        </div>
    )
}

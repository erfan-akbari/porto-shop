import { Link } from "react-router-dom"
import icons from "../../public/icons/icons"

function Blog__box_v1({ src, title, caption, comments, date, id }) {

    return (
        <div className="w-full flex flex-col font-semibold gap-5">
            {/* image */}
            <Link to={`/blog/${id}`}>
                {src && <img className="w-full" src={src} alt="banner blog" />}
            </Link>
            {/* content */}
            <div className="flex items-start gap-5">
                {/* data box */}
                <div className="border flex flex-col items-center justify-center w-40">
                    <div className="p-2 text-2xl">{date[0]}</div>
                    <div className="bg-lime-600 text-gray-100 w-full text-center p-px">{date[1]}</div>
                </div>
                {/* descriptions */}
                <div className="flex flex-col gap-4">
                    {/* title */}
                    <Link to={`/blog/${id}`} className="text-2xl text-gray-800">{title}</Link>
                    {/* caption */}
                    <p className="text-gray-500 font-normal">{caption}</p>
                    {/* footer box */}
                    <div className="flex flex-col sm:flex-row gap-5 items-center justify-between border-y py-5 mt-6">
                        {/* footer items */}
                        <div className="flex flex-col sm:flex-row items-center justify-center gap-5 text-gray-500">
                            {/* item */}
                            <div className="flex items-center gap-1">
                                <span className="flex items-center gap-1 text-lg">
                                    <icons.User /> BY
                                </span>
                                <Link to={''}>JOE DOE</Link>
                            </div>
                            {/* item */}
                            <div className="flex items-center gap-1">
                                <span className="text-lg">
                                    <icons.Folder />
                                </span>
                                <Link to={''}>Fashion</Link>
                                <Link to={''}>Model</Link>
                            </div>
                            {/* item */}
                            <div className="flex items-center gap-1">
                                <span className="text-lg">
                                    <icons.Chat />
                                </span>
                                <Link to={''}>No Comments</Link>
                            </div>
                        </div>
                        {/* more... btn */}
                        <Link to={`/blog/${id}`} className="bg-lime-600 py-1 px-3 hover:bg-lime-700 text-gray-100 transition-colors rounded-sm">Read More...</Link>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Blog__box_v1
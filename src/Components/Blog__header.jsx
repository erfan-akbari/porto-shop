import { Link } from 'react-router-dom'

function Blog__header({ src, video }) {
    return (
        <>
            {/* img blog & video */}
            <div className="w-full">
                {src && <img className="w-full" src={src} alt="image blog" />}
                {video && <video className="w-full" controls src={video}></video>}
            </div>
            {/* caption */}
            <ul className="flex items-center justify-between flex-wrap border-b pb-5">
                <li className="flex items-center justify-center gap-2">
                    <span className="text-gray-400">Post Date:</span>
                    <Link to={''} className="">Joe Doe</Link>
                </li>
                <li className="flex items-center justify-center gap-2">
                    <span className="text-gray-400">Comments:</span>
                    <Link to={''} className="text-lime-600">Fashion, Model</Link>
                </li>
                <li className="flex items-center justify-center gap-2">
                    <span className="text-gray-400">Category:</span>
                    <Link to={''} className="text-lime-600">0 Comments </Link>
                </li>
                <li className="flex items-center justify-center gap-2">
                    <span className="text-gray-400">Posted by:</span>
                    <Link to={''} className="text-gray-500">February 26, 2018</Link>
                </li>
            </ul>
        </>
    )
}

export default Blog__header
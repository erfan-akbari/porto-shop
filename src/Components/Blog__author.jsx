import { Link } from "react-router-dom"
import icons from "../../public/icons/icons"

function Blog__author() {
    return (
        <div className="py-5">
            <h3 className="flex items-center gap-2 text-xl font-bold">
                <icons.Person />
                Author
            </h3>
            <div className="mt-2 flex items-start py-5 justify-between gap-5">
                <div className="flex items-center justify-center text-5xl bg-neutral-300 text-white p-2 rounded-full">
                    <icons.User2 />
                </div>
                <div className="">
                    <Link to={''} className="font-bold text-lime-600 text-xl">Joe Doe</Link>
                    <p className="text-gray-400 pt-2">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                        Nam viverra euismod odio, gravida pellentesque urna varius vitae.
                        Sed dui lorem, adipiscing in adipiscing et, interdum nec metus. Mauris ultricies,
                        justo eu convallis placerat, felis enim ornare nisi, vitae mattis nulla ante id dui.
                    </p>
                </div>
            </div>
        </div>
    )
}

export default Blog__author
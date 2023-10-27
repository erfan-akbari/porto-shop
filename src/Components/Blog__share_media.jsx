import icons from "../../public/icons/icons"
import Media__Icons_v2 from "../Components/Media_Icons_v2"

function Blog__share_media() {
    return (
        <div className="flex flex-col items-start gap-5 py-5">
            <h3 className="txet-xl font-bold flex items-center gap-2 justify-center text-xl">
                <icons.ArrowBackOutline />
                Share this post
            </h3>
            {/* media icons */}
            <Media__Icons_v2 />
        </div>
    )
}

export default Blog__share_media
import Breadcrumb from "../Components/Breadcrumb"
import { useEffect, useState } from "react"
import Blog__aside from "../Components/Blog__aside"
import { useParams } from "react-router-dom"
import Blog__author from "../Components/Blog__author"
import Blog__description from "../Components/Blog__description"
import Blog__header from "../Components/Blog__header"
import Blog__share_media from "../Components/Blog__share_media"
import Comments from "../Components/Comments"
import Blog__related_post from "../Components/Blog__related_post"

import { getSingleBlog } from "../Redux/Slices/singleBlog";
import { useDispatch, useSelector } from "react-redux";

function BlogDetails() {

  const blogID = useParams().ID
  const blogDetails = useSelector(store => store.SingleBlog)
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(getSingleBlog(`http://localhost:3000/blogs/${blogID}`))
  }, [])

  return (
    <div>
      {/* breadcrumb */}
      <div className="container pt-5">
        <Breadcrumb />
      </div>
      {/* container */}
      <div className="container py-5 flex items-start gap-8">
        {/* <= left - main contrnt pag */}
        <main className="lg:basis-[75%] flex flex-col gap-6 font-semibold">
          {/* header */}
          <Blog__header {...blogDetails} />
          {/* description */}
          <Blog__description />
          {/* shar media */}
          <Blog__share_media />
          {/* author */}
          <Blog__author />
          {/* comments */}
          <Comments />
          {/* related post */}
          <Blog__related_post />
        </main>
        {/* => right - sidebar */}
        <div className="hidden lg:block sticky top-20">
          <Blog__aside />
        </div>
      </div>
    </div>
  )
}

export default BlogDetails
import Breadcrumb from "../Components/Breadcrumb"
import Blog__box_v1 from "../Components/Blog__box_v1"
import axios from "axios"
import { useEffect, useState } from "react"
import Blog__aside from "../Components/Blog__aside"

import { getAllBlogs } from "../Redux/Slices/blogs";
import { useDispatch, useSelector } from "react-redux";

function Blogs() {

  const blogs = useSelector(store => store.Blogs)
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(getAllBlogs('http://localhost:3000/blogs'))
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
        <main className="w-full lg:basis-[75%] flex flex-col gap-10">
          {/* blog box */}
          {blogs?.map(blog => (
            <Blog__box_v1 key={blog.id} {...blog} />
          ))}
        </main>
        {/* => right - sidebar */}
        <div className="hidden lg:block sticky top-20">
          <Blog__aside />
        </div>
      </div>
    </div>
  )
}

export default Blogs
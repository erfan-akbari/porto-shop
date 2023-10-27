import React from 'react'
import Blog__related_post_box from './Blog__related_post_box'

function Blog__related_post() {
  return (
    <div className='border-t py-5'>
        <h3 className="text-gray-500">RELATED
            <span className='font-bold text-gray-900 pl-2'>POSTS</span>
        </h3>
        <div className="flex items-start pt-5">
            <Blog__related_post_box />
        </div>
    </div>
  )
}

export default Blog__related_post
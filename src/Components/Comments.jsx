import Comments__box_v1 from "./Comments__box_v1"
import Comments__box_v2 from "./Comments__box_v2"

function Comments() {
  return (
    <section className="bg-white dark:bg-gray-900 py-8 lg:py-16 antialiased" >
      <div className="max-w-2xl px-4">
        <div className="flex justify-between items-start mb-6">
          <h2 className="text-lg lg:text-2xl font-bold text-gray-900 dark:text-white">Discussion (20)</h2>
        </div>
        <form className="mb-6">
          <div className="py-2 px-4 mb-4 bg-white rounded-lg rounded-t-lg border border-gray-200 dark:bg-gray-800 dark:border-gray-700">
            <label htmlFor="comment" className="sr-only">Your comment</label>
            <textarea id="comment" rows="6"
              className="px-0 w-full text-sm text-gray-900 border-0 focus:ring-0 focus:outline-none dark:text-white dark:placeholder-gray-400 dark:bg-gray-800"
              placeholder="Write a comment..." required></textarea>
          </div>
          <button type="submit"
            className="inline-flex items-center py-2.5 px-4 text-xs font-medium text-center text-white bg-primary-700 rounded-lg focus:ring-4 focus:ring-primary-200 dark:focus:ring-primary-900 hover:bg-primary-800">
            Post comment
          </button>
        </form>
        <Comments__box_v1 />
        <Comments__box_v2 />
        <Comments__box_v1 />
        <Comments__box_v2 />
        <Comments__box_v1 />
        <Comments__box_v2 />
        <Comments__box_v1 />
        <Comments__box_v1 />
      </div>
    </ section>
  )
}

export default Comments
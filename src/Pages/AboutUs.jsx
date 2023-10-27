import AboutUs__accordion from '../Components/AboutUs__accordion'
import AboutUs__header from '../Components/AboutUs__header'
import Breadcrumb from "../Components/Breadcrumb"
import icons from '../../public/icons/icons'

function AboutUs() {
  return (
    <div>
      {/* header */}
      <AboutUs__header />
      {/* breadcrumb */}
      <div className='container pt-4 pb-10'>
        <Breadcrumb />
      </div>
      {/* caption */}
      <p className="text-center max-w-3xl mx-auto py-10">
        Lorem Ipsum is simply dummy text of the printing and typesetting industry.
        Lorem Ipsum has been the industry’s standard dummy text ever since the 1500s,
        when an unknown printer took a galley of type and scrambled it to make a type specimen book.
        It has survived not only five centuries, but also the leap into electronic typesetting
        , remaining essentially unchanged.
        It was popularised in the 1960s with the release of Letraset sheets containing.
      </p>
      {/* OUR HISTORY */}
      <div className="container flex flex-col lg:flex-row gap-5 h-fit items-center py-10">
        <div className="basis-1/2 h-full">
          <img className='h-full' src="/Images/shop14_about_us_history.jpg" alt="banner section" />
        </div>
        <div className="basis-1/2 p-5 bg-neutral-300 shadow-lg ">
          <h2 className="text-lg font-bold">OUR HISTORY</h2>
          <AboutUs__accordion />
        </div>
      </div>
      {/* OUR FEATURES */}
      <div className="container pt-10">
        {/* title */}
        <h2 className="text-lg font-bold">OUR FEATURES</h2>
        {/* wrapper */}
        <div className="flex flex-col lg:flex-row items-start gap-5 py-6">
          {/* box 1 */}
          <div className="flex items-center justify-center gap-5">
            {/* icons */}
            <div className="text-4xl text-lime-500 p-2 rounded-full border-2 border-lime-500">
              <icons.Star />
            </div>
            {/* content */}
            <div className="flex flex-col">
              <h3 className="font-bold">DEDICATED SERVICE</h3>
              <p className='text-gray-500 text-sm/7 max-w-[20rem]'>
                Consult our specialists for help with an order, customization, or design advice
              </p>
            </div>
          </div>
          {/* box 2 */}
          <div className="flex items-center justify-center gap-5">
            {/* icons */}
            <div className="text-4xl text-lime-500 p-2 rounded-full border-2 border-lime-500">
              <icons.ArrowBackOutline />
            </div>
            {/* content */}
            <div className="flex flex-col">
              <h3 className="font-bold">FREE RETURNS</h3>
              <p className='text-gray-500 text-sm/7 max-w-[20rem]'>
                We stand behind our goods and services and want you to be satisfied with them.
              </p>
            </div>
          </div>
          {/* box 3 */}
          <div className="flex items-center justify-center gap-5">
            {/* icons */}
            <div className="text-4xl text-lime-500 p-2 rounded-full border-2 border-lime-500">
              <icons.Telegram />
            </div>
            {/* content */}
            <div className="flex flex-col">
              <h3 className="font-bold">INTERNATIONAL SHIPPING</h3>
              <p className='text-gray-500 text-sm/7 max-w-[20rem]'>
                Currently over 50 countries qualify for express international shipping.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default AboutUs
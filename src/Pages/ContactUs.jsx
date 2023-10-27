import React from 'react'
import ContactUs__header from '../Components/ContactUs__header'
import icons from "../../public/icons/icons"
import ContactUs__form_submit from '../Components/ContactUs__form_submit'
import ContactUs__accordion from '../Components/ContactUs__accordion'

function ContactUs() {
  return (
    <div>
      {/* header */}
      <ContactUs__header />
      <main className="container py-10">
        {/* Contact Info */}
        <div>
          {/* title */}
          <h2 className="text-3xl font-bold">
            Contact Info
          </h2>
          {/* caption */}
          <p className="text-gray-400 mt-5">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed imperdiet libero id nisi euismod, sed porta est consectetur. Vestibulum auctor felis eget orci semper vestibulum. Pellentesque ultricies nibh gravida, accumsan libero luctus, molestie nunc.L orem ipsum dolor sit amet, consectetur adipiscing elit.
          </p>
        </div>
        {/* Ways of communication */}
        <div className="py-10">
          {/* wrapper */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 py-6">
            {/* box 1 */}
            <div className="flex flex-col items-center justify-center gap-5">
              {/* icons */}
              <div className="text-4xl text-lime-500 p-2 rounded-full border-2 border-lime-500">
                <icons.Location />
              </div>
              {/* content */}
              <div className="flex flex-col items-center justify-center">
                <h3 className="font-bold">Address</h3>
                <p className='text-gray-500'>
                  123 Wall Street, New York / NY
                </p>
              </div>
            </div>
            {/* box 2 */}
            <div className="flex flex-col items-center justify-center gap-5">
              {/* icons */}
              <div className="text-4xl text-lime-500 p-2 rounded-full border-2 border-lime-500">
                <icons.Phone />
              </div>
              {/* content */}
              <div className="flex flex-col items-center justify-center ">
                <h3 className="font-bold">Phone Number</h3>
                <p className='text-gray-500'>
                  (800) 123-4567
                </p>
              </div>
            </div>
            {/* box 3 */}
            <div className="flex flex-col items-center justify-center gap-5">
              {/* icons */}
              <div className="text-4xl text-lime-500 p-2 rounded-full border-2 border-lime-500">
                <icons.Gmail />
              </div>
              {/* content */}
              <div className="flex flex-col items-center justify-center ">
                <h3 className="font-bold">E-mail Address</h3>
                <p className='text-gray-500'>
                  porto@portotheme.com
                </p>
              </div>
            </div>
            {/* box 4 */}
            <div className="flex flex-col items-center justify-center gap-5">
              {/* icons */}
              <div className="text-4xl text-lime-500 p-2 rounded-full border-2 border-lime-500">
                <icons.Time />
              </div>
              {/* content */}
              <div className="flex flex-col items-center justify-center ">
                <h3 className="font-bold">Working Days/Hours</h3>
                <p className='text-gray-500'>
                  Mon - Sun / 9:00AM - 8:00PM
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="flex flex-col lg:flex-row border-t gap-10 pt-10">
          {/* <= left - form submit message */}
          <div className="basis-[40%]">
            <ContactUs__form_submit />
          </div>
          {/* => right - accordion  */}
          <div className="basis-[60%]">
            <h3 className='text-3xl font-bold'>Frequently Asked Questions</h3>
            <ContactUs__accordion />
          </div>
        </div>
      </main>
    </div>
  )
}

export default ContactUs
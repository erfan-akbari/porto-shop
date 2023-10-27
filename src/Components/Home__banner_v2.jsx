import React from 'react'

function Home__banner_v2() {
  return (
    <section className="bg-[url('/Images/shop14_home_parallax1.png')] bg-no-repeat bg-center w-full h-80 flex items-center justify-center">
      <div className="container flex flex-col md:flex-row items-center gap-5 justify-center md:justify-evenly font-bold">
        <h2 className='w-80 text-4xl'>TOP ELECTRONIC DEALS</h2>
        <button className='bg-lime-600 h-14 max-w-[300px] px-10 text-gray-100'>View Sale</button>
        <div className="-rotate-6 flex flex-col gap-5 md:gap-2">
          <h6 className='bg-gray-950 text-gray-100 text-xl p-2 max-w-[200px]'>Exclusive COUPON</h6>
          <div className="flex">
            <span className='-rotate-90 text-[10px] text-gray-400'>UP TO</span>
            <h5 className="px-2 bg-red-400 text-gray-200 w-20 text-2xl">$100</h5>
            <h6 className="">OFF</h6>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Home__banner_v2
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import { Autoplay } from 'swiper/modules';


function Home__brands() {
    return (
        <section className="border-b mb-5">
            <div className="container py-10 flex items-center justify-center">
                <Swiper
                    slidesPerView={2}
                    spaceBetween={30}
                    autoplay={{
                        delay: 2500,
                        disableOnInteraction: false,
                    }}
                    modules={[Autoplay]}
                    breakpoints={{
                        640: {
                            slidesPerView: 2
                        },
                        768: {
                            slidesPerView: 4
                        },
                        1200: {
                            slidesPerView: 6
                        },
                    }}
                    className="mySwiper"
                >
                    {/* items -1- */}
                    <SwiperSlide>
                        <div className="flex items-center justify-center">
                            <img src="/Logos/new_brand1.png" alt="logo brands" className='cursor-pointer' />
                        </div>
                    </SwiperSlide>
                    {/* items -2- */}
                    <SwiperSlide>
                        <div className="flex items-center justify-center">
                            <img src="/Logos/new_brand2.png" alt="logo brands" className='cursor-pointer' />
                        </div>
                    </SwiperSlide>
                    {/* items -3- */}
                    <SwiperSlide>
                        <div className="flex items-center justify-center">
                            <img src="/Logos/new_brand3.png" alt="logo brands" className='cursor-pointer' />
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div className="flex items-center justify-center">
                            <img src="/Logos/new_brand4.png" alt="logo brands" className='cursor-pointer' />
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div className="flex items-center justify-center">
                            <img src="/Logos/new_brand5.png" alt="logo brands" className='cursor-pointer' />
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div className="flex items-center justify-center">
                            <img src="/Logos/new_brand6.png" alt="logo brands" className='cursor-pointer' />
                        </div>
                    </SwiperSlide>
                </Swiper>
            </div>
        </section>
    )
}

export default Home__brands
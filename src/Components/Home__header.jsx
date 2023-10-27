import { Link } from "react-router-dom";
import icons from "../../public/icons/icons";
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay } from 'swiper/modules';
import 'swiper/css';

function Header__Home() {
    return (
        <>
            <header className="bg-gray-100 bg-[url('/Images/shop_home_slider1.jpg')] bg-center bg-no-repeat">
                <div className="container  h-[500px] flex items-center justify-center lg:justify-end">
                    <div className="flex flex-col gap-3">
                        <h3 className="text-gray-500 text-xl lg:text-2xl ">Totally Wireless High-Performance</h3>
                        <h2 className="text-3xl lg:text-4xl font-bold">SELECT HEADPHONES</h2>
                        <h3 className="text-6xl lg:text-8xl font-bold">30% OFF</h3>
                        <div className="flex flex-wrap items-center gap-3 font-bold">
                            <h5>STARTING AT</h5>
                            <h4 className="text-slate-50 text-3xl bg-red-400 p-1 -rotate-6">$199<span className="text-sm">99</span> </h4>
                            <Link className="bg-black text-slate-50 py-2 lg:py-4 px-5 lg:px-14" to={''}>Shop Now!</Link>
                        </div>
                    </div>
                </div>
            </header>
            {/* bottom header */}
            <div className="bg-gray-100 border-t">
                <div className="container py-8 flex items-center justify-center">
                    <Swiper
                        slidesPerView={1}
                        spaceBetween={30}
                        autoplay={{
                            delay: 2500,
                            disableOnInteraction: false,
                        }}
                        modules={[Autoplay]}
                        breakpoints={{
                            640: {
                                slidesPerView: 1
                            },
                            768: {
                                slidesPerView: 2
                            },
                            1200: {
                                slidesPerView: 3
                            },
                        }}
                        className="mySwiper"
                    >
                        {/* items -1- */}
                        <SwiperSlide>
                            <div className="flex items-center justify-center gap-3">
                                <div className="text-4xl text-gray-600">
                                    <icons.Truck />
                                </div>
                                <div>
                                    <h3 className="text-gray-800 font-extrabold">FREE SHIPPING & RETURN</h3>
                                    <p className="text-sm text-gray-500">Free shipping on all orders over $99</p>
                                </div>
                            </div>
                        </SwiperSlide>
                        {/* items -2- */}
                        <SwiperSlide>
                            <div className="flex items-center justify-center gap-3">
                                <div className="text-4xl text-gray-600">
                                    <icons.Money />
                                </div>
                                <div>
                                    <h3 className="text-gray-800 font-extrabold">MONEY BACK GUARANTEE</h3>
                                    <p className="text-sm text-gray-500">100% money back guarantee</p>
                                </div>
                            </div>
                        </SwiperSlide>
                        {/* items -3- */}
                        <SwiperSlide>
                            <div className="flex items-center justify-center gap-3">
                                <div className="text-4xl text-gray-600">
                                    <icons.Hours24 />
                                </div>
                                <div>
                                    <h3 className="text-gray-800 font-extrabold">ONLINE SUPPORT 24/7</h3>
                                    <p className="text-sm text-gray-500">Lorem ipsum dolor sit amet.</p>
                                </div>
                            </div>
                        </SwiperSlide>
                    </Swiper>
                </div>
            </div>
        </>
    )
}

export default Header__Home
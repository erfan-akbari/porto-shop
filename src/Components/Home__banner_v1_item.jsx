import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";

function Home__Banner_item({ title, price, img, duration }) {

  useEffect(() => {
    AOS.init();
    AOS.refresh();
  }, []);

  return (
    <div data-aos="fade-up" data-aos-duration={duration} data-aos-once="true" className="max-w-[360px] relative">
      <img src={img} alt="banner" />
      <div className="bg-zinc-800 text-white flex flex-col items-center justify-center py-3 w-80 absolute -bottom-16 left-5">
        <h5 className="text-lime-600 font-semibold">Save Up To</h5>
        <h3 className="text-5xl font-extrabold">{price}</h3>
        <h5 className="font-semibold">{title}</h5>
      </div>
    </div>
  )
}

export default Home__Banner_item
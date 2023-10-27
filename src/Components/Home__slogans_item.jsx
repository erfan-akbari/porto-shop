import icons from "../../public/icons/icons"
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";

function Home__slogans_item({ icon, title, subTitle, caption }) {

    const mainIcon = () => {
        if (icon === 'HeadPhone') {
            return <icons.HeadPhone />
        } else if (icon === 'CreditCard') {
            return <icons.CreditCard />
        } else if (icon === 'ArrowBackOutline') {
            return <icons.ArrowBackOutline />
        }
    }

    useEffect(() => {
        AOS.init();
        AOS.refresh();
    }, []);

    return (
        <div data-aos="zoom-in" data-aos-duration="1000" data-aos-once="true" className="flex flex-col justify-center items-center gap-2">
            <div className="text-5xl text-lime-600 border-2 border-gray-300 p-4 rounded-full">{mainIcon()}</div>
            {/* title */}
            <h3 className="font-bold text-gray-900">{title}</h3>
            {/* sub title */}
            <div className="text-gray-600">{subTitle}</div>
            {/* caption */}
            <p className="text-gray-400 max-w-xs text-center">{caption}</p>
        </div>
    )
}

export default Home__slogans_item
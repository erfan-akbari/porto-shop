import {
    Accordion,
    AccordionHeader,
    AccordionBody,
} from "@material-tailwind/react";
import { useState } from "react";

function Icon({ id, open }) {
    return (
        <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={2}
            stroke="currentColor"
            className={`${id === open ? "rotate-180" : ""} h-5 w-5 transition-transform`}
        >
            <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 8.25l-7.5 7.5-7.5-7.5" />
        </svg>
    );
}

function ContactUs__accordion() {

    const [open, setOpen] = useState(0);
    const handleOpen = (value) => setOpen(open === value ? 0 : value);;

    const [alwaysOpen, setAlwaysOpen] = useState(true);
    const handleAlwaysOpen = () => setAlwaysOpen((cur) => !cur);

    return (
        <>
            {/* accordion 1 */}
            <Accordion open={alwaysOpen}>
                {/* title */}
                <AccordionHeader className="text-slate-900 text-base font-semibold" onClick={handleAlwaysOpen}>
                    Curabitur eget leo at velit imperdiet viaculis vitaes?
                </AccordionHeader>
                {/* content */}
                <AccordionBody className="text-gray-500 text-lg">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur eget leo at velit imperdiet varius. In eu ipsum vitae velit congue iaculis vitae at risus. Nullam tortor nunc, bibendum vitae semper a, volutpat eget massa.
                </AccordionBody>
            </Accordion>
            {/* accordion 2 */}
            <Accordion open={open === 2} icon={<Icon id={2} open={open} />}>
                {/* title */}
                <AccordionHeader className="text-slate-900 text-base font-semibold" onClick={() => handleOpen(2)}>
                    Curabitur eget leo at velit imperdiet vague iaculis vitaes?
                </AccordionHeader>
                {/* content */}
                <AccordionBody className="text-gray-500 text-lg">
                    Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry’s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make .
                </AccordionBody>
            </Accordion>
            {/* accordion 3 */}
            <Accordion open={open === 3} icon={<Icon id={3} open={open} />}>
                {/* title */}
                <AccordionHeader className="text-slate-900 text-base font-semibold" onClick={() => handleOpen(3)}>
                    Curabitur eget leo at velit imperdiet viaculis vitaes?
                </AccordionHeader>
                {/* content */}
                <AccordionBody className="text-gray-500 text-lg">
                    Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry’s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make .
                </AccordionBody>
            </Accordion>
            {/* accordion 4 */}
            <Accordion open={open === 4} icon={<Icon id={4} open={open} />}>
                {/* title */}
                <AccordionHeader className="text-slate-900 text-base font-semibold" onClick={() => handleOpen(4)}>
                    Curabitur eget leo at velit imperdiet vague iaculis vitaes?
                </AccordionHeader>
                {/* content */}
                <AccordionBody className="text-gray-500 text-lg">
                    Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry’s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make .
                </AccordionBody>
            </Accordion>
            {/* accordion 5 */}
            <Accordion open={open === 5} icon={<Icon id={5} open={open} />}>
                {/* title */}
                <AccordionHeader className="text-slate-900 text-base font-semibold" onClick={() => handleOpen(5)}>
                    Curabitur eget leo at velit imperdiet varius iaculis vitaes?
                </AccordionHeader>
                {/* content */}
                <AccordionBody className="text-gray-500 text-lg">
                    Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry’s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make .
                </AccordionBody>
            </Accordion>
        </>
    )
}

export default ContactUs__accordion
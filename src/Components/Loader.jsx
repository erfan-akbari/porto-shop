import { Spinner } from "@material-tailwind/react";

function Loader({ position }) {
    return (
        <Spinner className={`${position} absolute h-10 w-10`}/>
    )
}

export default Loader
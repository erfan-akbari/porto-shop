import { useEffect, useState } from "react"
import Home__Banner_v1_item from "./Home__banner_v1_item"
import axios from "axios"

function Banner__Home() {

  const [dataBanner, setDataBanner] = useState()

  useEffect(() => {
    axios.get('http://localhost:3000/banner_home')
      .then(({ data }) => setDataBanner(data))
  }, [])

  return (
    <section className="container py-10 mb-32 flex flex-col xl:flex-row gap-24 xl:gap-1 items-center justify-between">
      {/* handle items */}
      {dataBanner && dataBanner.map(data => (
        <Home__Banner_v1_item key={data.id} {...data} />
      ))}
    </section>
  )
}

export default Banner__Home
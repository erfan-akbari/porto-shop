import Home__slogans_item from "./Home__slogans_item"
import axios from "axios"
import { useState, useEffect } from "react"

function Home__Slogans() {
  const [slogansData, setSlogansData] = useState([])

  useEffect(() => {
    axios.get('http://localhost:3000/slogans')
      .then(({ data }) => setSlogansData(data))
  }, [])


  return (
    <div className="py-12 border-t">
      <div className="container flex items-center justify-between flex-col md:flex-row gap-5">
        {
          slogansData.length && slogansData.map(data => (
            <Home__slogans_item key={data.id} {...data} />
          ))
        }
      </div>
    </div>
  )
}

export default Home__Slogans
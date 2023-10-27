import Header__Home from "../Components/Home__header";
import Home_banner_v1 from "../Components/Home__banner_v1"
import Home__products_v1 from "../Components/Home__products_v1";
import Home__slogans from "../Components/Home__Slogans";
import Home__banner_v2 from "../Components/Home__banner_v2";
import Home__brands from "../Components/Home__brands";
import Home__products_v2 from "../Components/Home__products_v2";

export default function Home() {

  return (
    <main>
      {/* header home page */}
      <Header__Home />
      {/* home banner V1 */}
      <Home_banner_v1 />
      {/* FEATURED PRODUCTS --- LATEST PRODUCTS */}
      <Home__products_v1 />
      {/* Website slogans */}
      <Home__slogans />
      {/* home banner V2 */}
      <Home__banner_v2 />
      {/* brands */}
      <Home__brands />
      {/* products Grouping */}
      <Home__products_v2 />
    </main>
  )
}
import { useContext, useState, useEffect } from "react"
import RestaurantSlider from "../components/ResturantSlider"
import { FiltersContext } from "../../Context"
import Filters from "../components/Filters"
import Banner from "../components/Banner"

const Home = () => {
  const { filters } = useContext(FiltersContext);
  const [appearOnMd, setAppearOnMd] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY >= (window.innerHeight * 0.9)) {
        setAppearOnMd(true);
      } else {
        setAppearOnMd(false);
      }
    };

      window.addEventListener("scroll", handleScroll);
    
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <>
      <Banner />
      <div className="relative">
        {(filters && appearOnMd) && <Filters/>}
        <div className={filters && window.matchMedia("(min-width: 768px)").matches ? "ms-[260px] pt-22" : "pt-22"}>
          <RestaurantSlider title="Top Resturants"/>
          <RestaurantSlider title="Near You Area"/>
        </div>
      </div>
    </>
  )
}

export default Home

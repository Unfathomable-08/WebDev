import { useContext } from "react"
import RestaurantSlider from "../components/ResturantSlider"
import { FiltersContext } from "../../Context"
import Filters from "../components/Filters"

const Home = () => {
  const { filters } = useContext(FiltersContext);

  return (
    <>
      {filters && <Filters/>}
      <div className={filters && window.matchMedia("(min-width: 768px)").matches ? "ms-[260px] pt-22" : "pt-22"}>
        <RestaurantSlider title="Top Resturants"/>
        <RestaurantSlider title="Near You Area"/>
      </div>
    </>
  )
}

export default Home

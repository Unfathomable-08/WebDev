import { useContext } from "react"
import RestaurantSlider from "../components/ResturantSlider"
import { FiltersContext } from "../../Context"
import Filters from "../components/Filters"

const Home = () => {
  const { filters } = useContext(FiltersContext);

  return (
    <>
      {filters && <Filters/>}
      <div className={filters ? "ms-[260px]" : ""}>
        <RestaurantSlider />
      </div>
    </>
  )
}

export default Home

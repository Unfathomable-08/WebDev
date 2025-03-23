import React, { useEffect, useState } from "react";
import axios from "axios";

const RestaurantSlider = () => {
  const [restaurants, setRestaurants] = useState([]);

  useEffect(() => {
    const fetchRestaurants = async () => {
      try {
        const response = await axios.get("https://jsonplaceholder.typicode.com/photos?_limit=10");
        const data = response.data.map((item) => ({
          id: item.id,
          name: `Restaurant ${item.id}`,
          image: item.url,
        }));
        setRestaurants(data);
      } catch (error) {
        console.error("Error fetching restaurant data:", error);
      }
    };

    fetchRestaurants();
  }, []);

  return (
    <div className="relative w-full pt-22">
      <div className="flex gap-4 overflow-x-auto no-scrollbar px-4 py-6">
        {restaurants.map((restaurant) => (
          <div
            key={restaurant.id}
            className="flex-none w-36 h-36 rounded-2xl bg-white shadow-lg overflow-hidden"
          >
            {/* <img
              src={restaurant.image}
              alt={restaurant.name}
              className="w-full h-3/4 object-cover"
            /> */}
            <div className="p-3 text-lg font-semibold text-center">
              {restaurant.name}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default RestaurantSlider;

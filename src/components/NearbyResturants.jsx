import { FaMapMarkerAlt, FaClock, FaStar } from "react-icons/fa";

const NearbyRestaurants = ({ restaurants, distances }) => {

    return (
        <div className="mt-14 mb-14 mx-4 sm:mx-8 bg-white shadow-xl rounded-2xl p-6">
            <h1 className="text-3xl font-medium text-gray-900 mb-6 text-center sm:text-left">
                Nearby Restaurants
            </h1>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                {restaurants.map((restaurant, index) => (
                    <div 
                        key={index} 
                        className="flex items-center justify-between bg-gray-100 p-5 rounded-xl shadow-md transition-all transform hover:scale-105 hover:shadow-lg"
                    >
                        {/* Restaurant Name & Details */}
                        <div className="flex flex-col">
                            <h2 className="text-lg font-semibold text-gray-900">{restaurant.name}</h2>
                            <div className="flex items-center gap-3 text-sm text-gray-600 mt-1">
                                <span className="flex items-center gap-1">
                                    <FaMapMarkerAlt className="text-red-500 text-base" /> {distances[index]?.distance || "Loading..."}
                                </span>
                                <span className="flex items-center gap-1">
                                    <FaClock className="text-blue-500 text-base" /> {distances[index]?.duration || "Loading..."}
                                </span>
                            </div>
                        </div>

                        {/* Ratings */}
                        <div className="flex items-center gap-1">
                            {Array.from({ length: 5 }).map((_, i) => (
                                <FaStar 
                                    key={i} 
                                    className={`text-lg ${i < restaurant.rating ? "text-yellow-400" : "text-gray-300"}`} 
                                />
                            ))}
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default NearbyRestaurants;

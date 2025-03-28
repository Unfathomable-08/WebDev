import { useState, useEffect } from "react";
import { FaMapMarkerAlt, FaClock, FaStar } from "react-icons/fa";

const restaurants = [
    { name: "Pizza Hut", lat: 40.7306, lon: -73.9352, rating: 4 },
    { name: "Noman Restaurant", lat: 40.7527, lon: -73.9772, rating: 3 },
    { name: "Friends", lat: 40.758, lon: -73.9855, rating: 5 },
    { name: "Zouq Biryani Center", lat: 40.7681, lon: -73.9819, rating: 3 },
    { name: "Subway", lat: 40.7769, lon: -73.9763, rating: 4 },
    { name: "KFC", lat: 40.7829, lon: -73.9654, rating: 4 },
];

const getMatrixDistance = async (locations) => {
    const apiKey = import.meta.env.VITE_ORS_API_KEY;
    const url = "https://api.openrouteservice.org/v2/matrix/driving-car";

    const body = {
        locations,
        metrics: ["distance", "duration"],
        units: "m",
    };

    try {
        const response = await fetch(url, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                "Authorization": apiKey,
            },
            body: JSON.stringify(body),
        });

        if (!response.ok) throw new Error(`API Error: ${response.status}`);

        const data = await response.json();

        return data.distances.map((distance, index) => ({
            distance: (distance[0] / 1000).toFixed(2) + " Km", // Convert meters to km
            duration: Math.round(data.durations[index][0] / 60) + " min", // Convert seconds to minutes
        }));
    } catch (error) {
        console.error("Error fetching distances:", error);
        return Array(locations.length - 1).fill({ distance: "N/A", duration: "N/A" });
    }
};

const NearbyRestaurants = () => {
    const [distances, setDistances] = useState([]);

    useEffect(() => {
        const fetchDistances = async () => {
            const currentLocation = [-74.0060, 40.7128]; // [lon, lat]
            const destinations = restaurants.map((r) => [r.lon, r.lat]);
            const locations = [currentLocation, ...destinations];

            const results = await getMatrixDistance(locations);
            setDistances(results.slice(1)); // Remove self-distance (first item)
        };

        fetchDistances();
    }, []);

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

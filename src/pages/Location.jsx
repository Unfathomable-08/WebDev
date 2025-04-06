import Map from '../components/Map';
import NearbyResturants from '../components/NearbyResturants';
import { useState, useEffect } from "react";

const restaurants = [
    { name: "Kolachi", lat: 24.8138, lon: 67.0325, rating: 5 },
    { name: "BBQ Tonight", lat: 24.8136, lon: 67.0296, rating: 4 },
    { name: "Cafe Flo", lat: 24.8215, lon: 67.0371, rating: 4 },
    { name: "Okra", lat: 24.8293, lon: 67.0432, rating: 5 },
    { name: "The Deli", lat: 24.8298, lon: 67.0480, rating: 4 },
    { name: "Ginsoy Extreme Chinese", lat: 24.8543, lon: 67.0361, rating: 4 },
];

const getMatrixDistance = async (locations) => {
    const apiKey = import.meta.env.VITE_ORS_API_KEY;
    const url = "https://api.openrouteservice.org/v2/matrix/cycling-regular";

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

const Location = () => {
    const [position, setPosition] = useState([51.505, -0.09]); // Default: London
    const [distances, setDistances] = useState([]);

    useEffect(() => {
        if (navigator.geolocation && JSON.stringify(position) == JSON.stringify([51.505, -0.09])) {
            navigator.geolocation.getCurrentPosition(
                (pos) => {
                setPosition([pos.coords.latitude, pos.coords.longitude]);
                },
                (err) => console.error("Geolocation error:", err),
                { enableHighAccuracy: true }
            );
        }

        const fetchDistances = async () => {
            const destinations = restaurants.map((r) => [r.lon, r.lat]);
            const locations = [position, ...destinations];

            const results = await getMatrixDistance(locations);
            setDistances(results.slice(1)); // Remove self-distance (first item)
        };

        fetchDistances();
    }, [position]);

    return (
        <div className='mt-24'>
            <NearbyResturants restaurants={restaurants} distances={distances} />
            <Map restaurants={restaurants} distances={distances} position={position} />
        </div>
    )
}

export default Location;
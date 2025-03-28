import { useState, useEffect } from "react";
import { MapContainer, TileLayer, Marker, Popup, Polyline, useMap } from "react-leaflet";

// Component to recenter the map when position changes
const RecenterMap = ({ position }) => {
  const map = useMap();
  useEffect(() => {
    map.setView(position, 13); // Update the map center
  }, [position, map]);
  return null;
};

const Map = ({ restaurants, distances, position }) => {

  return (
    <div className="flex justify-center items-center relative z-5 p-8 pt-0">
      <MapContainer center={position} zoom={13} className="h-[400px] max-w-[900px] w-full rounded-2xl shadow-2xl border border-gray-300">
        <TileLayer
          url="https://mt1.google.com/vt/lyrs=m&x={x}&y={y}&z={z}"
          attribution="&copy; Google Maps"
        />
        <RecenterMap position={position} />

        {/* User Location Marker */}
        <Marker position={position}>
          <Popup>Your Location</Popup>
        </Marker>

        {/* Restaurant Markers & Routes */}
        {restaurants.map((restaurant, index) => {
          const restaurantPosition = [restaurant.lat, restaurant.lon];

          return (
            <Marker key={index} position={restaurantPosition}>
              <Popup>
                <b>{restaurant.name}</b>
                <br />
                Distance: {distances[index]?.distance || "Calculating..."}
                <br />
                Time: {distances[index]?.duration || "Calculating..."}
              </Popup>
            </Marker>
          );
        })}

        {/* Routes using existing coordinates */}
        {restaurants.map((restaurant, index) => (
          <Polyline
            key={`route-${index}`}
            positions={[position, [restaurant.lat, restaurant.lon]]}
            color="blue"
            weight={4}
            opacity={0.7}
          />
        ))}
      </MapContainer>
    </div>
  );
};

export default Map;

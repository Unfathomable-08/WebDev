import { useState, useEffect } from "react";
import { MapContainer, TileLayer, Marker, Popup, useMap } from "react-leaflet";

// Component to recenter the map when position changes
const RecenterMap = ({ position }) => {
  const map = useMap();
  useEffect(() => {
    map.setView(position, 13); // Update the map center
  }, [position, map]);
  return null;
};

const Map = () => {
  const [position, setPosition] = useState([51.505, -0.09]); // Default: London

  useEffect(() => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        (pos) => {
          setPosition([pos.coords.latitude, pos.coords.longitude]);
        },
        (err) => console.error("Geolocation error:", err),
        { enableHighAccuracy: true }
      );
    }
  }, []);

  return (
    <div className="flex justify-center items-center relative z-5 p-8 pt-0">
        <MapContainer center={position} zoom={13} className="h-[400px] max-w-[900px] w-full rounded-2xl shadow-2xl border border-gray-300">
        <TileLayer
            url="https://mt1.google.com/vt/lyrs=m&x={x}&y={y}&z={z}"
            attribution="&copy; Google Maps"
            />
        <RecenterMap position={position} />
        <Marker position={position}>
            <Popup>Your Location</Popup>
        </Marker>
        </MapContainer>
    </div>
  );
};

export default Map;
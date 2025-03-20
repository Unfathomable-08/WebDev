import { useState, useEffect } from "react";
import { RxCross1 } from "react-icons/rx";
import { FaStar } from "react-icons/fa";
import Slider from "@mui/material/Slider";
import axios from "axios";

export default function FilterModal({ onClose }) {
    const [price, setPrice] = useState([0, 2000]);
    const [priceSel, setPriceSel] = useState([500, 1200]);
    const [selectedCategories, setSelectedCategories] = useState([]);
    const [rating, setRating] = useState(null);
    const [categories, setCategories] = useState([]);
    const [products, setProducts] = useState([]);

    const fetchProducts = async () => {
        try {
            const response = await axios.get("https://jsonserver.reactbd.com/phone");
            console.log("Fetched Products:", response.data);
            setProducts(response.data);

            // Extract unique categories
            const uniqueCategories = [...new Set(response.data.map(product => product.brand))];
            setCategories(uniqueCategories);

            // Determine price range
            const prices = response.data.map(product => product.price);
            setPrice([Math.min(...prices), Math.max(...prices)]);
        } catch (error) {
            console.error("Error Fetching Data", error);
        }
    };

    useEffect(() => {
        fetchProducts();
    }, []);

    const handleCategoryClick = (category) => {
        setSelectedCategories((prev) =>
            prev.includes(category) ? prev.filter((c) => c !== category) : [...prev, category]
        );
    };

    return (
        <div className="fixed bottom-0 bg-white h-[70vh] p-4 w-screen shadow-[0_-10px_10px_#00000055] rounded-tl-3xl rounded-tr-3xl">
            <div className="flex justify-between items-center mb-4">
                <h1 className="font-medium text-lg">Filters</h1>
                <RxCross1 className="text-lg font-bold cursor-pointer" onClick={onClose} />
            </div>

            {/* Price Range */}
            <div className="mb-6">
                <h1 className="font-medium text-base mb-2">Price Range</h1>
                <Slider
                    value={priceSel}
                    onChange={(e, newValue) => setPriceSel(newValue)}
                    valueLabelDisplay="auto"
                    min={price[0]}
                    max={price[1]}
                    sx={{ color: "#ffa75f" }}
                />
                <div className="flex justify-between text-sm text-gray-600">
                    <span>${price[0]}</span>
                    <span>${price[1]}</span>
                </div>
            </div>

            {/* Categories */}
            <div className="mb-6">
                <h1 className="font-medium text-base mb-2">Categories</h1>
                <div className="flex flex-wrap gap-2">
                    {categories.map((category) => (
                        <button
                            key={category}
                            className={`px-4 py-2 rounded-full border ${
                                selectedCategories.includes(category) ? "bg-[var(--primary)] border-[var(--primary)] text-white" : "border-gray-300"
                            } transition-all`}
                            onClick={() => handleCategoryClick(category)}
                        >
                            {category}
                        </button>
                    ))}
                </div>
            </div>

            {/* Rating */}
            <div>
                <h1 className="font-medium text-base mb-2">Rating</h1>
                <div className="flex gap-4">
                    {[1, 2, 3, 4, 5].map((star) => (
                        <FaStar
                            key={star}
                            className={`text-2xl cursor-pointer ${rating >= star ? "text-[var(--primary)]" : "text-gray-300"}`}
                            onClick={() => setRating(star)}
                        />
                    ))}
                </div>
            </div>
        </div>
    );
}

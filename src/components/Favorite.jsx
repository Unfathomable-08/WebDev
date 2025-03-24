import React from "react";
import { Link } from "react-router-dom";
import { FaTrash } from "react-icons/fa";


const Favorite = ({ FavItem, handleRemoveFromFav }) => {
  return (
    <div className="max-w-4xl mx-auto mt-6">
      <h2 className="text-2xl font-bold text-gray-900 mb-4">Favorite Products</h2>
      {FavItem.length === 0 ? (
        <p className="text-gray-500">No favorite products yet.</p>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {FavItem.map((product) => (
            <div
              key={product._id}
              className="bg-white shadow-lg rounded-lg p-4 border border-gray-200"
            >
              <img
                src={product.image}
                alt={product.title}
                className="w-full h-40 object-cover rounded-md"
              />
              <h3 className="text-lg font-bold mt-2">{product.title}</h3>
              <p className="text-sm text-gray-500">{product.brand}</p>
              <p className="text-orange-600 font-semibold">${product.price}</p>
              <div className="flex justify-between mt-3">
                <Link
                  to={`/Product/${product._id}`}
                  className="text-orange-600 underline"
                >
                  View Details
                </Link>
                <FaTrash
                  className="text-red-500 cursor-pointer"
                  onClick={() => handleRemoveFromFav(product._id)}
                />
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default Favorite;

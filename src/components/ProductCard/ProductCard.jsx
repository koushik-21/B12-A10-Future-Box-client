import React from "react";
import { Star } from "lucide-react";
import { Link } from "react-router";

const ProductCard = ({ product }) => {
  const {
    _id,
    productImage,
    productName,
    price,
    originCountry,
    rating,
    availableQuantity,
  } = product;

  return (
    <div>
      <div
        //classname : group relative
        className=" relative w-full sm:w-72 md:w-80 bg-white shadow-md rounded-2xl 
    overflow-hidden 
    hover:shadow-2xl transition-all duration-100 border border-gray-100"
      >
        {/* Product Image */}
        <figure className="overflow-hidden bg-gray-50">
          <img
            src={productImage}
            alt={productName}
            className="w-full h-44 sm:h-52 md:h-56 object-cover group-hover:scale-110 transition-transform duration-500"
          />
        </figure>

        {/* Content */}
        <div className="p-3 sm:p-4">
          <h2 className="text-base sm:text-lg font-bold text-gray-800 group-hover:text-blue-600 transition-colors line-clamp-1">
            {productName}
          </h2>

          {/* Info Row */}
          <div className="flex justify-between text-xs sm:text-sm text-gray-600 mt-2">
            <p>
              <span className="font-semibold text-gray-800">Price:</span> $
              {price}
            </p>
            <p>
              <span className="font-semibold text-gray-800">Stock:</span>{" "}
              {availableQuantity} pcs
            </p>
          </div>

          <p className="text-xs sm:text-sm text-gray-600 mt-1">
            <span className="font-semibold text-gray-800">Origin:</span>{" "}
            {originCountry}
          </p>

          {/* Rating */}
          <div className="flex items-center mt-2">
            {[...Array(5)].map((_, i) => (
              <Star
                key={i}
                size={14}
                className={`${
                  i < rating
                    ? "text-yellow-400 fill-yellow-400"
                    : "text-gray-300"
                }`}
              />
            ))}
            <span className="ml-1 text-xs sm:text-sm text-gray-500">
              {rating.toFixed(1)}
            </span>
          </div>

          {/* Button */}
          <div className="mt-3 sm:mt-4">
            <Link
              to={`/latestProduct/${_id}`}
              className="w-full btn bg-gradient-to-r from-blue-600 to-cyan-500
           text-white font-semibold py-1.5 sm:py-2 rounded-lg shadow-md hover:from-blue-700
            hover:to-cyan-600 transition-all duration-300 text-sm sm:text-base"
            >
              See Details
            </Link>
          </div>
        </div>

        {/* Hover Overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/30 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"></div>
      </div>
    </div>
  );
};

export default ProductCard;

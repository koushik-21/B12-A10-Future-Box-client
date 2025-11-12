import React from "react";
import AllProductCard from "./AllProductCard";

const allProductsPromise = fetch("http://localhost:3000/products").then((res) =>
  res.json()
);

const AllProducts = () => {
  return (
    <div>
      <title>IEBD - All Products</title>
      <p className="text-center relative z-999 overflow-hidden font-semibold text-gray-700 py-2 md:py-4">
        Our All Products
      </p>

      <div>
        <AllProductCard allProductsPromise={allProductsPromise} />
      </div>
    </div>
  );
};

export default AllProducts;

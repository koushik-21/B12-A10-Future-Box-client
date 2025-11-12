import ProductCard from "../ProductCard/ProductCard";
import { use } from "react";

const AllProductCard = ({ allProductsPromise }) => {
  const products = use(allProductsPromise); // এখন এটা একটা promise
  console.log(products);

  return (
    // <div className="relative z-999 overflow-hidden">
    <div
      className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3
     gap-6 justify-items-center"
    >
      {products.map((product) => (
        <ProductCard key={product._id} product={product} />
      ))}
    </div>
    // </div>
  );
};

export default AllProductCard;

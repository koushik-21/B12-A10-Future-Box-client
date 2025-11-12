// import ProductCard from "../ProductCard/ProductCard";
// import { use, useState } from "react";

// const AllProductCard = ({ allProductsPromise }) => {
//   const products = use(allProductsPromise);
//   console.log(products);

//   return (
//     <div>
//       <div className="flex justify-between p-4 ">
//         <div>
//           <p className="text-xl font-semibold pl-4">
//             Total Products : {products.length}
//           </p>
//         </div>
//         <div>
//           <input
//             type="email"
//             name=""
//             id=""
//             className="outline p-2"
//             placeholder="search your product"
//           />
//         </div>
//       </div>
//       <div
//         className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3
//      gap-6 justify-items-center"
//       >
//         {products.map((product) => (
//           <ProductCard key={product._id} product={product} />
//         ))}
//       </div>
//     </div>
//   );
// };

// export default AllProductCard;
import ProductCard from "../ProductCard/ProductCard";
import { use, useState } from "react";

const AllProductCard = ({ allProductsPromise }) => {
  const products = use(allProductsPromise);
  const [searchQuery, setSearchQuery] = useState("");

  // Filter products by name
  const filteredProducts = products.filter((product) =>
    product.productName.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div>
      <div className="flex justify-between p-4 ">
        <div>
          <p className="text-xl font-semibold pl-4">
            Total Products : {filteredProducts.length}
          </p>
        </div>
        <div>
          <input
            type="text"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            placeholder="🔍 Search your product..."
            className="w-64 sm:w-80 px-4 py-2 rounded-full border border-gray-300 shadow-sm 
             focus:outline-none focus:ring-2 focus:ring-indigo-400 focus:border-transparent 
             transition duration-200"
          />
        </div>
      </div>

      <div
        className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3
     gap-6 justify-items-center"
      >
        {filteredProducts.map((product) => (
          <ProductCard key={product._id} product={product} />
        ))}
      </div>
    </div>
  );
};

export default AllProductCard;

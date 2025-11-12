import React from "react";
import BannerSlider from "../BannerSlider/BannerSlider";
import LatestProducts from "../LatestProducts/LatestProducts";
const latestProductsPromise = fetch("http://localhost:3000/latestProduct").then(
  (res) => res.json()
);
const Home = () => {
  return (
    <div>
      <title>IEBD-home</title>
      {/* Banner section */}
      <BannerSlider></BannerSlider>

      {/* latest 6 products */}
      <p className="py-2 md:py-4 font-semibold text-gray-700 text-center text-2xl">
        Latest Products
      </p>
      <LatestProducts
        latestProductsPromise={latestProductsPromise}
      ></LatestProducts>

      {/* {Offer section} */}
      <p className="text-center bg-amber-700">
        November <span className="text-3xl text-blue-950">11.11</span> Offer For
        Whole Month
      </p>
      <p className="text-sm py-2 text-center bg-amber-300 ">
        click on the emoji to know more...
      </p>
      <div className="flex items-center justify-center   p-6">
        <label className="swap swap-flip w-full max-w-sm text-center">
          {/* Hidden checkbox controls the state */}
          <input type="checkbox" />

          {/* On State */}
          <div className="swap-off bg-white rounded-3xl shadow-2xl p-6 flex flex-col items-center gap-4 transition-transform transform hover:scale-105">
            <div className="text-8xl md:text-9xl">😈</div>
            <div className="text-lg md:text-xl font-semibold text-gray-700">
              Want to know an exciting news?
            </div>
          </div>

          {/* Off State */}
          <div className="swap-on bg-white rounded-3xl shadow-2xl p-6 flex flex-col items-center gap-4 transition-transform transform hover:scale-105">
            <div className="text-8xl md:text-9xl">😇</div>
            <div className="text-lg md:text-xl font-semibold text-gray-700">
              50% off on selected products
            </div>
          </div>
        </label>
      </div>

      {/* WHy using our product section */}
      <div className="flex flex-col md:flex-row items-center justify-between gap-6 p-6 bg-gradient-to-r from-blue-50 to-cyan-50 rounded-2xl shadow-md border border-gray-200">
        {/* Image Section */}
        <div className="flex-shrink-0 w-full md:w-1/2 flex justify-center">
          <img
            src="https://i.ibb.co.com/4Z53r9J2/lego-classing-brick.webp"
            alt="Product"
            className="rounded-xl shadow-lg object-cover w-80 h-64 md:w-96 md:h-72"
          />
        </div>

        {/* Text Section */}
        <div className="w-full md:w-1/2">
          <h2 className="text-2xl md:text-3xl font-bold text-gray-800 mb-4 text-center md:text-left">
            Why Choose Our Product?
          </h2>
          <ul className="list-disc list-inside space-y-2 text-gray-700 text-sm md:text-base">
            <li>High-quality materials ensuring durability and reliability.</li>
            <li>Affordable price with unmatched value for money.</li>
            <li>Modern design with attention to user comfort and style.</li>
            <li>Eco-friendly and sustainably sourced components.</li>
            <li>24/7 customer support and hassle-free warranty policy.</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Home;

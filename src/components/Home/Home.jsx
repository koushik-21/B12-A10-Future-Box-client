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
      <BannerSlider></BannerSlider>
      <p className="py-2 md:py-4 font-semibold text-gray-700 text-center text-2xl">
        Latest Products
      </p>
      <LatestProducts
        latestProductsPromise={latestProductsPromise}
      ></LatestProducts>
    </div>
  );
};

export default Home;

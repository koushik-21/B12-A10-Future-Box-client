import React, { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
// import { div } from "framer-motion/client";

const slides = [
  {
    id: 1,
    img: "https://i.ibb.co.com/b5ScWyB6/macbook-coffee-desk-box.jpg",
    title: "Empowering Exporters & Importers",
    subtitle: "Manage your global business efficiently with IEBD.",
  },

  {
    id: 2,
    img: "https://i.ibb.co.com/wNCjFF42/1564416.jpg",
    title: "Global Logistics Network",
    subtitle: "Air, Sea, and Land — we deliver worldwide with reliability.",
  },
  {
    id: 3,
    img: "https://images.unsplash.com/photo-1505839673365-e3971f8d9184?auto=format&fit=crop&w=1600&q=80",
    title: "Connecting Bangladesh to the World",
    subtitle: "Seamless Import & Export Solutions for Growing Businesses",
  },
];

const BannerSlider = () => {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent((prev) => (prev + 1) % slides.length);
    }, 5000); // change slide every 5 seconds

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="relative z-999 overflow-hidden">
      <div className="relative w-full h-[300px] overflow-hidden rounded shadow-md">
        <AnimatePresence>
          {slides.map(
            (slide, index) =>
              index === current && (
                <motion.div
                  key={slide.id}
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 1 }}
                  className="absolute w-full h-full"
                >
                  <img
                    src={slide.img}
                    alt={slide.title}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute bottom-10 left-2 md:left-10 text-white bg-black/50 p-4 rounded-lg max-w-lg">
                    <h2 className="text-xl md:text-3xl font-bold">
                      {slide.title}
                    </h2>
                    <p className="mt-2 text-sm md:text-lg">{slide.subtitle}</p>
                  </div>
                </motion.div>
              )
          )}
        </AnimatePresence>

        {/* Navigation Buttons */}
        <div className="absolute flex justify-between top-1/2  w-full px-4 transform -translate-y-1/2">
          <button
            className="btn btn-circle bg-black/40 text-white hover:bg-black/70"
            onClick={() =>
              setCurrent((prev) => (prev === 0 ? slides.length - 1 : prev - 1))
            }
          >
            ❮
          </button>
          <button
            className="btn btn-circle bg-black/40 text-white hover:bg-black/70"
            onClick={() => setCurrent((prev) => (prev + 1) % slides.length)}
          >
            ❯
          </button>
        </div>
      </div>
    </div>
  );
};

export default BannerSlider;

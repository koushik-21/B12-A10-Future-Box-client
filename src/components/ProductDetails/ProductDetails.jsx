import React, { useState, useContext } from "react";
import { useLoaderData } from "react-router";
import { Star } from "lucide-react";
import Swal from "sweetalert2";
import { AuthContext } from "../../contexts/AuthContext";

const ProductDetails = () => {
  const product = useLoaderData();
  const {
    _id,
    productName,
    productImage,
    price,
    originCountry,
    rating,
    availableQuantity,
  } = product;
  const { user } = useContext(AuthContext);

  const [isModalOpen, setIsModalOpen] = useState(false);
  const [quantity, setQuantity] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!quantity || quantity <= 0) return;

    setIsSubmitting(true);

    const importData = {
      productId: _id,
      quantity: parseInt(quantity),
      userEmail: user.email,
    };

    try {
      const res = await fetch("https://iebd-api-server.vercel.app/import", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(importData),
      });

      const data = await res.json();

      if (res.ok) {
        Swal.fire({
          icon: "success",
          title: "Import Successful!",
          text: `${quantity} pcs of ${productName} imported successfully.`,
          confirmButtonColor: "#2563eb",
        }).then(() => {
          // ✅ Reload the page after user clicks "OK" on the alert
          window.location.reload();
        });
        setIsModalOpen(false);
        setQuantity("");
      } else {
        Swal.fire({ icon: "error", title: "Failed!", text: data.message });
      }
    } catch (err) {
      console.error(err);
      Swal.fire({ icon: "error", title: "Error!", text: "Server error." });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div
      className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 flex 
    justify-center items-center px-0 py-0  m-0"
    >
      <title>IEBD - Product Details</title>

      <div className="max-w-5xl w-full bg-white/70 backdrop-blur-md shadow-2xl rounded-3xl grid md:grid-cols-2 overflow-hidden border border-gray-100">
        {/* Left - Product Image */}
        <div className="relative overflow-hidden group">
          <img
            src={productImage}
            alt={productName}
            className="w-full h-80 md:h-full object-cover transform group-hover:scale-105 transition-transform duration-500"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/1 to-transparent"></div>
        </div>

        {/* Right - Details */}
        <div className="p-8 flex flex-col justify-between">
          <div>
            <h1 className="text-3xl font-extrabold text-gray-800 mb-3">
              {productName}
            </h1>
            <div className="flex items-center mb-4">
              {[...Array(5)].map((_, i) => (
                <Star
                  key={i}
                  size={20}
                  className={`${
                    i < rating ? "text-yellow-400" : "text-gray-300"
                  }`}
                />
              ))}
              <span className="ml-2 text-gray-600 font-medium">
                {rating ? rating.toFixed(1) : "N/A"}
              </span>
            </div>

            <div className="space-y-3 text-gray-700">
              <p>
                <span className="font-semibold text-gray-800">Origin:</span>{" "}
                {originCountry}
              </p>
              <p>
                <span className="font-semibold text-gray-800">Available:</span>{" "}
                {availableQuantity} pcs
              </p>
              <p>
                <span className="font-semibold text-gray-800">Price:</span>{" "}
                <span className="text-2xl font-bold text-indigo-600">
                  ${price}
                </span>
              </p>
            </div>
          </div>

          {/* Buttons */}
          <div className="mt-8 flex gap-4">
            <button
              onClick={() => setIsModalOpen(true)}
              disabled={!user}
              className={`flex-1 py-3 rounded-xl text-white font-semibold 
                transition-all duration-300 ${
                  user
                    ? "bg-indigo-600 hover:bg-indigo-700 hover:shadow-md"
                    : "bg-gray-400 cursor-not-allowed"
                }`}
            >
              Import Now
            </button>
            <button
              onClick={() => window.history.back()}
              className="flex-1 border border-gray-300 py-3 rounded-xl hover:bg-gray-100 transition-all"
            >
              Back
            </button>
          </div>
        </div>
      </div>

      {/* Import Modal */}
      {isModalOpen && (
        <div className="fixed inset-0 bg-black/40 backdrop-blur-sm flex justify-center items-center z-50">
          <div className="bg-white p-8 rounded-2xl shadow-2xl w-80 sm:w-96 animate-fadeIn">
            <h2 className="text-2xl font-semibold mb-4 text-center text-indigo-700">
              Import Quantity
            </h2>
            <form onSubmit={handleSubmit}>
              <input
                type="number"
                value={quantity}
                onChange={(e) => setQuantity(e.target.value)}
                min="1"
                max={availableQuantity}
                className="w-full p-3 rounded-md border border-gray-300 mb-5 focus:ring-2 focus:ring-indigo-400 outline-none transition"
                placeholder="Enter quantity..."
              />
              <div className="flex justify-end gap-3">
                <button
                  type="button"
                  onClick={() => setIsModalOpen(false)}
                  className="px-4 py-2 rounded-md bg-gray-200 hover:bg-gray-300 transition"
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  disabled={
                    isSubmitting ||
                    quantity <= 0 ||
                    quantity > availableQuantity
                  }
                  className={`px-5 py-2 rounded-md text-white font-semibold transition-all ${
                    quantity > availableQuantity
                      ? "bg-gray-400 cursor-not-allowed"
                      : "bg-indigo-600 hover:bg-indigo-700"
                  }`}
                >
                  {isSubmitting ? "Importing..." : "Confirm"}
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
};

export default ProductDetails;

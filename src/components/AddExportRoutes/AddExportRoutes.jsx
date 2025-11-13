import React, { useState, useContext } from "react";
import { AuthContext } from "../../contexts/AuthContext";
import Swal from "sweetalert2";

const AddExportRoutes = () => {
  const { user } = useContext(AuthContext);
  const [loading, setLoading] = useState(false);
  // const [successMsg, setSuccessMsg] = useState("");

  const handleAddProduct = async (e) => {
    e.preventDefault();
    setLoading(true);
    // setSuccessMsg("");

    const form = e.target;
    const newProduct = {
      productName: form.productName.value,
      productImage: form.productImage.value,
      price: parseFloat(form.price.value),
      originCountry: form.originCountry.value,
      rating: parseFloat(form.rating.value),
      availableQuantity: parseInt(form.availableQuantity.value),
      email: user?.email || "anonymous",
      createdAt: new Date(),
    };

    try {
      const res = await fetch("https://iebd-api-server.vercel.app/products", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(newProduct),
      });
      const data = await res.json();

      if (data.insertedId) {
        Swal.fire({
          icon: "success",
          title: "Product Added!",
          text: "✅ Product added successfully!",
          showConfirmButton: false,
          timer: 3000,
        });

        form.reset();
        setTimeout(() => {
          window.location.reload();
        }, 3000);
      } else {
        Swal.fire({
          icon: "error",
          title: "Failed!",
          text: "❌ Failed to add product.",
        });
      }
    } catch (err) {
      console.error(err);
      // setSuccessMsg("❌ Failed to add product.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div>
      <title>IEBD-addExports</title>
      <div className="flex justify-center items-center min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 px-4">
        <div className="bg-white shadow-lg rounded-2xl w-full max-w-lg p-8">
          <h2 className="text-2xl font-bold text-center mb-6 text-indigo-600">
            Add Export / Product
          </h2>
          <form onSubmit={handleAddProduct} className="space-y-5">
            <div>
              <label className="block text-sm font-medium mb-1">
                Product Name
              </label>
              <input
                type="text"
                name="productName"
                required
                className="input input-bordered w-full"
                placeholder="Enter product name"
              />
            </div>

            <div>
              <label className="block text-sm font-medium mb-1">
                Product Image URL
              </label>
              <input
                type="text"
                name="productImage"
                required
                className="input input-bordered w-full"
                placeholder="https://example.com/image.jpg"
              />
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-medium mb-1">
                  Price ($)
                </label>
                <input
                  type="number"
                  name="price"
                  step="0.01"
                  required
                  className="input input-bordered w-full"
                  placeholder="e.g., 49.99"
                />
              </div>
              <div>
                <label className="block text-sm font-medium mb-1">
                  Origin Country
                </label>
                <input
                  type="text"
                  name="originCountry"
                  required
                  className="input input-bordered w-full"
                  placeholder="e.g., Bangladesh"
                />
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-medium mb-1">
                  Rating (0-5)
                </label>
                <input
                  type="number"
                  name="rating"
                  step="0.1"
                  min="0"
                  max="5"
                  required
                  className="input input-bordered w-full"
                  placeholder="e.g., 4.8"
                />
              </div>
              <div>
                <label className="block text-sm font-medium mb-1">
                  Available Quantity
                </label>
                <input
                  type="number"
                  name="availableQuantity"
                  required
                  className="input input-bordered w-full"
                  placeholder="e.g., 150"
                />
              </div>
            </div>

            <button
              type="submit"
              className="btn btn-info w-full mt-4"
              disabled={loading}
            >
              {loading ? "Adding..." : "Add Export / Product"}
            </button>
          </form>

          {/* {successMsg && (
            <p className="text-center mt-4 font-semibold text-green-600">
              {successMsg}
            </p>
          )} */}
        </div>
      </div>
    </div>
  );
};

export default AddExportRoutes;

import React, { useEffect, useState, useContext } from "react";
import { AuthContext } from "../../contexts/AuthContext";
import Swal from "sweetalert2";

const MyExports = () => {
  const { user } = useContext(AuthContext);
  const [exportsData, setExportsData] = useState([]);
  const [selectedProduct, setSelectedProduct] = useState(null);
  const [loading, setLoading] = useState(false);

  // Fetch all exports for the logged-in user
  useEffect(() => {
    if (!user?.email) return;

    fetch(`http://localhost:3000/products/myexports/${user.email}`)
      .then((res) => res.json())
      .then((data) => setExportsData(data))
      .catch((err) => console.error(err));
  }, [user]);

  // Delete export
  const handleDelete = async (id) => {
    Swal.fire({
      title: "Are you sure?",
      text: "This product will be permanently deleted!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#d33",
      cancelButtonColor: "#3085d6",
      confirmButtonText: "Yes, delete it!",
    }).then(async (result) => {
      if (result.isConfirmed) {
        try {
          const res = await fetch(`http://localhost:3000/products/${id}`, {
            method: "DELETE",
          });
          const data = await res.json();

          if (res.ok) {
            Swal.fire("Deleted!", data.message, "success");
            setExportsData((prev) => prev.filter((item) => item._id !== id));
            window.location.reload();
          } else {
            Swal.fire("Error!", data.message, "error");
          }
        } catch (err) {
          console.error(err);
          Swal.fire("Error!", "Server error occurred.", "error");
        }
      }
    });
  };

  // Update export
  const handleUpdate = (product) => {
    setSelectedProduct(product);
  };

  const handleUpdateSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    const updatedProduct = {
      productName: e.target.productName.value,
      productImage: e.target.productImage.value,
      price: Number(e.target.price.value),
      originCountry: e.target.originCountry.value,
      rating: Number(e.target.rating.value),
      availableQuantity: Number(e.target.availableQuantity.value),
    };

    try {
      const res = await fetch(
        `http://localhost:3000/products/${selectedProduct._id}`,
        {
          method: "PUT",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(updatedProduct),
        }
      );

      const data = await res.json();
      if (res.ok) {
        Swal.fire("Updated!", "Product updated successfully.", "success");
        // Update UI
        setExportsData((prev) =>
          prev.map((item) =>
            item._id === selectedProduct._id
              ? { ...item, ...updatedProduct }
              : item
          )
        );
        setSelectedProduct(null);
      } else {
        Swal.fire("Error!", data.message, "error");
      }
    } catch (err) {
      console.error(err);
      Swal.fire("Error!", "Server error occurred.", "error");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div>
      <title>IEBD-MyExports</title>
      <div className="p-4 min-h-screen bg-gray-50">
        <h1 className="text-2xl font-bold mb-6 text-center">My Exports</h1>
        <p className="font-semibold">Total Exports: {exportsData.length}</p>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 mt-4">
          {exportsData.length ? (
            exportsData.map((item) => (
              <div
                key={item._id}
                className="bg-white p-4 rounded-xl shadow-md flex flex-col"
              >
                <img
                  src={item.productImage}
                  alt={item.productName}
                  className="w-full h-40 object-cover rounded-lg mb-3"
                />
                <div className="flex justify-between items-center mb-2">
                  <h2 className="font-bold text-lg">{item.productName}</h2>
                  <span className="badge badge-accent text-white font-semibold">
                    <span>⭐</span>
                    {item.rating}
                  </span>
                </div>
                <p>Price: ${item.price}</p>
                <p>Origin: {item.originCountry}</p>
                <p>Available: {item.availableQuantity}</p>

                <div className="flex justify-between mt-4">
                  <button
                    className="btn btn-error text-white"
                    onClick={() => handleDelete(item._id)}
                  >
                    Delete
                  </button>
                  <button
                    className="btn btn-primary text-white"
                    onClick={() => handleUpdate(item)}
                  >
                    Update
                  </button>
                </div>
              </div>
            ))
          ) : (
            <p>No exports found.</p>
          )}
        </div>

        {/* Update Modal */}
        {selectedProduct && (
          <div className="fixed inset-0 bg-gray-50 bg-opacity-25 flex justify-center items-center z-50 p-4 overflow-y-auto">
            <div className="bg-white p-6 rounded-2xl w-full max-w-md shadow-lg flex flex-col overflow-y-auto max-h-[90vh]">
              <h2 className="text-2xl font-bold mt-4 text-center">
                Update Product
              </h2>
              <form
                onSubmit={handleUpdateSubmit}
                className="flex flex-col gap-4"
              >
                <div className="flex flex-col">
                  <label className="mb-1 font-semibold">Product Name</label>
                  <input
                    type="text"
                    name="productName"
                    defaultValue={selectedProduct.productName}
                    placeholder="Product Name"
                    className="input input-bordered w-full"
                    required
                  />
                </div>
                <div className="flex flex-col">
                  <label className="mb-1 font-semibold">
                    Product Image URL
                  </label>
                  <input
                    type="text"
                    name="productImage"
                    defaultValue={selectedProduct.productImage}
                    placeholder="Product Image URL"
                    className="input input-bordered w-full"
                    required
                  />
                </div>
                <div className="flex flex-col">
                  <label className="mb-1 font-semibold">Price</label>
                  <input
                    type="number"
                    name="price"
                    defaultValue={selectedProduct.price}
                    placeholder="Price"
                    className="input input-bordered w-full"
                    required
                  />
                </div>
                <div className="flex flex-col">
                  <label className="mb-1 font-semibold">Origin Country</label>
                  <input
                    type="text"
                    name="originCountry"
                    defaultValue={selectedProduct.originCountry}
                    placeholder="Origin Country"
                    className="input input-bordered w-full"
                    required
                  />
                </div>
                <div className="flex flex-col">
                  <label className="mb-1 font-semibold">Rating</label>
                  <input
                    type="number"
                    step="0.1"
                    name="rating"
                    defaultValue={selectedProduct.rating}
                    placeholder="Rating"
                    className="input input-bordered w-full"
                    required
                  />
                </div>
                <div className="flex flex-col">
                  <label className="mb-1 font-semibold">
                    Available Quantity
                  </label>
                  <input
                    type="number"
                    name="availableQuantity"
                    defaultValue={selectedProduct.availableQuantity}
                    placeholder="Available Quantity"
                    className="input input-bordered w-full"
                    required
                  />
                </div>
                <div className="flex flex-col sm:flex-row justify-end gap-3 mt-4">
                  <button
                    type="button"
                    className="btn btn-ghost w-full sm:w-auto"
                    onClick={() => setSelectedProduct(null)}
                  >
                    Cancel
                  </button>
                  <button
                    type="submit"
                    className={`btn btn-success text-white w-full sm:w-auto ${
                      loading ? "loading" : ""
                    }`}
                  >
                    Submit
                  </button>
                </div>
              </form>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default MyExports;

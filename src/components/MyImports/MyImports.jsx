import React, { useEffect, useState, useContext } from "react";
import { AuthContext } from "../../contexts/AuthContext";
import { Link } from "react-router";

const MyImports = () => {
  const { user } = useContext(AuthContext);
  const [imports, setImports] = useState([]);

  useEffect(() => {
    if (!user?.email) return;

    fetch(`http://localhost:3000/imports/${user.email}`)
      .then((res) => res.json())
      .then((data) => setImports(data))
      .catch((err) => console.error(err));
  }, [user]);

  // const handleViewDetails = () => {};
  return (
    <div className="p-4 min-h-screen bg-gray-50">
      <h1 className="text-2xl font-bold mb-6 text-center">My Imports</h1>
      <p className="font-semibold">
        Total imported Products: {imports.length}{" "}
      </p>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {imports.length ? (
          imports.map((item) => (
            <div key={item._id} className="bg-white p-4 rounded-xl shadow-md">
              <img
                src={item.productImage}
                alt={item.productName}
                className="w-full h-40 object-cover rounded-lg mb-3"
              />
              <h2 className="font-bold text-lg">{item.productName}</h2>
              <p>Quantity: {item.importQuantity}</p>
              <p>Price: ${item.price}</p>
              <p>Origin: {item.originCountry}</p>
              <p className="text-sm text-gray-500">
                Imported At: {new Date(item.importedAt).toLocaleString()}
              </p>
              <div className="flex justify-between pt-4 ">
                <div>
                  <Link className="btn btn-error text-white">Remove</Link>
                </div>
                <div>
                  <Link
                    className="btn btn-success text-white"
                    to={`/latestProduct/${item.productId}`}
                  >
                    See Details
                  </Link>
                </div>
              </div>
            </div>
          ))
        ) : (
          <p>No imports found.</p>
        )}
      </div>
    </div>
  );
};

export default MyImports;

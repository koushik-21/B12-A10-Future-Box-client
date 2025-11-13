// import React, { useEffect, useState, useContext } from "react";
// import { AuthContext } from "../../contexts/AuthContext";
// import { Link } from "react-router";
// import Swal from "sweetalert2";

// const MyImports = () => {
//   const { user } = useContext(AuthContext);
//   const [imports, setImports] = useState([]);

//   useEffect(() => {
//     if (!user?.email) return;

//     fetch(`http://localhost:3000/imports/${user.email}`)
//       .then((res) => res.json())
//       .then((data) => setImports(data))
//       .catch((err) => console.error(err));
//   }, [user]);

//   const handleDeleteImports = async (id) => {
//     Swal.fire({
//       title: "Are you sure?",
//       text: "This import record will be permanently deleted!",
//       icon: "warning",
//       showCancelButton: true,
//       confirmButtonColor: "#d33",
//       cancelButtonColor: "#3085d6",
//       confirmButtonText: "Yes, delete it!",
//     }).then(async (result) => {
//       if (result.isConfirmed) {
//         try {
//           const res = await fetch(`http://localhost:3000/imports/${id}`, {
//             method: "DELETE",
//           });

//           const data = await res.json();

//           if (res.ok) {
//             Swal.fire("Deleted!", data.message, "success");
//             // Update UI instantly without reload
//             setImports((prev) => prev.filter((imp) => imp._id !== id));
//           } else {
//             Swal.fire("Error!", data.message, "error");
//           }
//         } catch (err) {
//           console.error(err);
//           Swal.fire("Error!", "Server error occurred.", "error");
//         }
//       }
//     });
//   };
//   // const handleViewDetails = () => {};
//   return (
//     <div className="p-4 min-h-screen bg-gray-50 text-gray-500">
//       <h1 className="text-2xl font-bold mb-6 text-center text-gray-500">
//         My Imports
//       </h1>
//       <p className="font-semibold">
//         Total imported Products: {imports.length}{" "}
//       </p>
//       <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
//         {imports.length ? (
//           imports.map((item) => (
//             <div key={item._id} className="bg-white p-4 rounded-xl shadow-md">
//               <img
//                 src={item.productImage}
//                 alt={item.productName}
//                 className="w-full h-40 object-cover rounded-lg mb-3"
//               />
//               <div className="flex justify-between">
//                 <div>
//                   {" "}
//                   <h2 className="font-bold text-lg">{item.productName}</h2>
//                 </div>
//                 <div className="badge badge-accent">
//                   <span className="text-white font-semibold">
//                     ⭐{item.rating}
//                   </span>
//                 </div>
//               </div>
//               <p>Quantity: {item.importQuantity}pcs</p>
//               <p>
//                 Price: $
//                 <span className="text-lg font-semibold text-blue-500">
//                   {item.price}
//                 </span>
//               </p>
//               <p>Origin: {item.originCountry}</p>
//               <p className="text-sm text-gray-500">
//                 Imported At: {new Date(item.importedAt).toLocaleString()}
//               </p>
//               <div className="flex justify-between pt-4 ">
//                 <div>
//                   <Link
//                     className="btn btn-error text-white"
//                     onClick={() => handleDeleteImports(item._id)}
//                   >
//                     Remove
//                   </Link>
//                 </div>
//                 <div>
//                   <Link
//                     className="btn btn-success text-white"
//                     to={`/latestProduct/${item.productId}`}
//                   >
//                     See Details
//                   </Link>
//                 </div>
//               </div>
//             </div>
//           ))
//         ) : (
//           <p>No imports found.</p>
//         )}
//       </div>
//     </div>
//   );
// };

// export default MyImports;
import React, { useEffect, useState, useContext } from "react";
import { AuthContext } from "../../contexts/AuthContext";
import { Link } from "react-router-dom";
import Swal from "sweetalert2";

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

  const handleDeleteImports = async (id) => {
    Swal.fire({
      title: "Are you sure?",
      text: "This import record will be permanently deleted!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#d33",
      cancelButtonColor: "#3085d6",
      confirmButtonText: "Yes, delete it!",
    }).then(async (result) => {
      if (result.isConfirmed) {
        try {
          const res = await fetch(`http://localhost:3000/imports/${id}`, {
            method: "DELETE",
          });

          const data = await res.json();

          if (res.ok) {
            Swal.fire("Deleted!", data.message, "success");
            // Remove from UI instantly
            setImports((prev) => prev.filter((imp) => imp._id !== id));
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

  return (
    <div className="p-4 min-h-screen bg-gray-50 text-gray-700">
      <h1 className="text-3xl font-bold mb-6 text-center text-gray-600">
        My Imports
      </h1>
      <p className="font-semibold mb-4">
        Total imported Products: {imports.length}
      </p>

      {imports.length ? (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {imports.map((item) => (
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
                <div className="badge badge-accent">
                  <span className="text-white font-semibold">
                    ⭐ {item.rating}
                  </span>
                </div>
              </div>
              <p>Quantity: {item.importQuantity} pcs</p>
              <p>
                Price:{" "}
                <span className="text-lg font-semibold text-blue-500">
                  ${item.price}
                </span>
              </p>
              <p>Origin: {item.originCountry}</p>
              <p className="text-sm text-gray-500">
                Imported At: {new Date(item.importedAt).toLocaleString()}
              </p>
              <div className="flex justify-between pt-4 mt-auto">
                <button
                  className="btn btn-error text-white"
                  onClick={() => handleDeleteImports(item._id)}
                >
                  Remove
                </button>
                <Link
                  className="btn btn-success text-white"
                  to={`/latestProduct/${item.productId}`}
                >
                  See Details
                </Link>
              </div>
            </div>
          ))}
        </div>
      ) : (
        <p className="text-center mt-6 text-gray-500">No imports found.</p>
      )}
    </div>
  );
};

export default MyImports;

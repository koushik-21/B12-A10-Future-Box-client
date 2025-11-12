import React, { useContext } from "react";
import { AuthContext } from "../../contexts/AuthContext";
import { Navigate, useLocation } from "react-router";

const PrivateRoute = ({ children }) => {
  const { user, loading } = useContext(AuthContext);

  const location = useLocation();
  //   console.log(location);

  if (loading) {
    return <span className="loading loading-spinner text-success"></span>;
  }

  if (user) {
    return children;
  }

  //   return <Navigate state={location?.pathname} to="/login"></Navigate>;
  // Save the current page user was trying to visit
  return <Navigate to="/login" state={{ from: location }} replace />;
};

export default PrivateRoute;

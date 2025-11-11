import React, { use } from "react";
import { Link, NavLink } from "react-router";
import "./Navbar.css";
import { AuthContext } from "../../contexts/AuthContext";
const Navbar = () => {
  const { user, signOutUser } = use(AuthContext);
  //   console.log(user);
  const handleSignOutUser = (e) => {
    e.preventDefault();
    signOutUser();
  };
  const navLinks = (
    <>
      <li>
        <NavLink to={"/allProducts"}>All Products</NavLink>
      </li>
      <li>
        <NavLink to={"/myExports"}>My Exports</NavLink>
      </li>
      <li>
        <NavLink to={"/myImports"}>My Imports</NavLink>
      </li>
      <li>
        <NavLink to={"/addExportRoutes"}>Add Export routes</NavLink>
      </li>
    </>
  );
  return (
    <div>
      <div className="navbar bg-base-100 shadow-sm">
        <div className="navbar-start">
          <div className="dropdown">
            <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                {" "}
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />{" "}
              </svg>
            </div>
            <ul
              tabIndex="-1"
              className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow"
            >
              {navLinks}
            </ul>
          </div>
          <Link to={"/"} className="btn btn-ghost text-xl">
            IEBD
          </Link>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1 font-semibold">
            {navLinks}
          </ul>
        </div>
        <div className="navbar-end">
          {user ? (
            <>
              {user.photoURL && (
                <img
                  src={user.photoURL}
                  alt={user.displayName}
                  className="w-10 h-10 rounded-full mr-2"
                  title={user.displayName}
                />
              )}
              <button
                className="btn btn-info font-bold text-white"
                onClick={handleSignOutUser}
              >
                SignOut
              </button>
            </>
          ) : (
            <Link className="btn btn-info font-bold text-white" to={"/login"}>
              SignIn
            </Link>
          )}
        </div>
      </div>
    </div>
  );
};

export default Navbar;

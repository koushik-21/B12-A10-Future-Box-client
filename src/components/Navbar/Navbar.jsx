import React, { use, useEffect, useState } from "react";
import { Link, NavLink } from "react-router";
import "./Navbar.css";
import { AuthContext } from "../../contexts/AuthContext";
const Navbar = () => {
  const { user, signOutUser } = use(AuthContext);
  const [theme, setTheme] = useState("light");

  // set <html data-theme="...">
  useEffect(() => {
    document.querySelector("html").setAttribute("data-theme", theme);
  }, [theme]);

  const toggleTheme = (e) => {
    setTheme(e.target.checked ? "dark" : "light");
  };
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
    <div className="relative z-999 overflow-hidden">
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
              tabIndex={0}
              className="menu menu-sm dropdown-content bg-base-100 rounded-box 
              z-999 mt-3 w-52 p-2 shadow"
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
          {/* Theme toggle */}
          <label className="swap swap-rotate px-3">
            {/* Hidden checkbox controls the theme */}
            <input
              type="checkbox"
              onChange={toggleTheme}
              checked={theme === "dark"}
            />

            {/* Sun icon */}
            <svg
              className="swap-on h-8 w-8 fill-current text-yellow-400"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
            >
              <path d="M5.64,17l-.71.71a1,1,0,0,0,1.41,1.41l.71-.71A1,1,0,0,0,5.64,17ZM12,5a1,1,0,0,0,1-1V3a1,1,0,0,0-2,0V4A1,1,0,0,0,12,5Zm7,7a1,1,0,0,0,1-1h1a1,1,0,0,0,0,2H20A1,1,0,0,0,19,12ZM12,19a1,1,0,0,0-1,1v1a1,1,0,0,0,2,0V20A1,1,0,0,0,12,19ZM17.66,7.34a1,1,0,0,0,.7-.29l.71-.71a1,1,0,1,0-1.41-1.41L17,5.64A1,1,0,0,0,17.66,7.34ZM12,6.5A5.5,5.5,0,1,0,17.5,12,5.51,5.51,0,0,0,12,6.5Z" />
            </svg>

            {/* Moon icon */}
            <svg
              className="swap-off h-8 w-8 fill-current text-indigo-500"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
            >
              <path d="M21.64,13a1,1,0,0,0-1.05-.14,8,8,0,0,1-3.37.73A8,8,0,0,1,9.08,5.49a8.5,8.5,0,0,1,.25-2A1,1,0,0,0,8,2.36,10,10,0,1,0,22,14.05,1,1,0,0,0,21.64,13Z" />
            </svg>
          </label>
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

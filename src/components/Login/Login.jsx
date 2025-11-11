import React from "react";
import { Link } from "react-router";

const Login = () => {
  return (
    <div>
      <title>IEBD-login</title>
      <div className="card bg-base-100 mt-10 w-full mx-auto max-w-sm shrink-0 shadow-2xl">
        <h1 className="text-3xl font-bold text-center py-2">Login now!</h1>
        <div className="card-body">
          <fieldset className="fieldset">
            <label className="label">Email</label>
            <input type="email" className="input" placeholder="Email" />
            <label className="label">Password</label>
            <input type="password" className="input" placeholder="Password" />
            <div>
              <p className="font-semibold text-md text-gray-600">
                New to this website?{" "}
                <Link className="link underline" to={"/register"}>
                  Register here
                </Link>
              </p>
            </div>
            <button className="btn btn-neutral mt-4">Login</button>
          </fieldset>
        </div>
      </div>
    </div>
  );
};

export default Login;

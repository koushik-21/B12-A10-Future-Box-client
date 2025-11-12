import React, { use } from "react";
import { Link, useNavigate, useLocation } from "react-router";
import { AuthContext } from "../../contexts/AuthContext";
import Swal from "sweetalert2";

const Login = () => {
  const { signInUser, signInWithGoogle } = use(AuthContext);
  const navigate = useNavigate();
  const location = useLocation();
  const from = location.state?.from?.pathname || "/";

  // Handle normal email-password login
  const handleLogin = (e) => {
    e.preventDefault();
    const email = e.target.email.value;
    const password = e.target.password.value;

    signInUser(email, password)
      .then((result) => {
        // console.log("logging in result:", result);
        Swal.fire({
          icon: "success",
          title: "Login Successful!",
          showConfirmButton: false,
          timer: 1500,
        });
        navigate(from, { replace: true });
      })
      .catch((error) => {
        console.log(error);
        Swal.fire({
          icon: "error",
          title: "Login Failed!",
          text: error.message,
        });
      });
  };

  // Handle Google Login
  const handleGoogleLogin = () => {
    signInWithGoogle()
      .then(() => {
        Swal.fire({
          icon: "success",
          title: "Logged in with Google!",
          showConfirmButton: false,
          timer: 1500,
        });
        navigate(from, { replace: true });
      })
      .catch((error) => {
        Swal.fire({
          icon: "error",
          title: "Google Login Failed!",
          text: error.message,
        });
      });
  };

  return (
    <div>
      <title>IEBD - Login</title>
      <div className="card bg-base-100 mt-10 w-full mx-auto max-w-sm shrink-0 shadow-2xl">
        <h1 className="text-3xl font-bold text-center py-1">Login now!</h1>
        <div className="card-body">
          <form onSubmit={handleLogin}>
            <fieldset className="fieldset">
              <label className="label">Email</label>
              <input
                type="email"
                name="email"
                className="input input-bordered"
                placeholder="Email"
                required
              />

              <label className="label">Password</label>
              <input
                type="password"
                name="password"
                className="input input-bordered"
                placeholder="Password"
                required
              />

              <div className="mt-2">
                <Link className="text-sm text-blue-600 hover:underline" to="#">
                  Forget Password?
                </Link>
              </div>

              <button type="submit" className="btn btn-neutral mt-4 w-full">
                Login
              </button>
            </fieldset>
          </form>

          {/* Divider */}
          {/* <div className="divider">OR</div> */}

          {/* Google Login */}
          <button
            onClick={handleGoogleLogin}
            className="btn btn-outline btn-ghost w-full"
          >
            <svg
              aria-label="Google logo"
              width="16"
              height="16"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 512 512"
            >
              <g>
                <path d="m0 0H512V512H0" fill="#fff"></path>
                <path
                  fill="#34a853"
                  d="M153 292c30 82 118 95 171 60h62v48A192 192 0 0190 341"
                ></path>
                <path
                  fill="#4285f4"
                  d="m386 400a140 175 0 0053-179H260v74h102q-7 37-38 57"
                ></path>
                <path
                  fill="#fbbc02"
                  d="m90 341a208 200 0 010-171l63 49q-12 37 0 73"
                ></path>
                <path
                  fill="#ea4335"
                  d="m153 219c22-69 116-109 179-50l55-54c-78-75-230-72-297 55"
                ></path>
              </g>
            </svg>
            Continue with Google
          </button>

          {/* Register link */}
          <p className="font-semibold text-md text-gray-600 mt-3 text-center">
            New to this website?{" "}
            <Link className="link underline" to={"/register"}>
              Register here
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Login;

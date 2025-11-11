import React, { useState, useContext } from "react";
import { Link, useLocation, useNavigate } from "react-router";
import { AuthContext } from "../../contexts/AuthContext";
import Swal from "sweetalert2";
import { updateProfile } from "firebase/auth";

const Registration = () => {
  const { createUser, signInWithGoogle, setUser } = useContext(AuthContext);
  const navigate = useNavigate();
  const location = useLocation();
  const from = location.state?.from?.pathname || "/";
  const [passwordError, setPasswordError] = useState("");

  // --- Normal Registration ---
  const handleSignIn = (e) => {
    e.preventDefault();
    const name = e.target.name.value;
    const email = e.target.email.value;
    const photoURL = e.target.photoURL.value;
    const password = e.target.password.value;

    // Password validation
    if (password.length < 6) {
      setPasswordError("Password must be at least 6 characters long.");
      return;
    } else if (!/[A-Z]/.test(password)) {
      setPasswordError("Password must contain at least one uppercase letter.");
      return;
    } else if (!/[a-z]/.test(password)) {
      setPasswordError("Password must contain at least one lowercase letter.");
      return;
    } else {
      setPasswordError("");
    }

    createUser(email, password)
      .then((result) => {
        // Update Firebase Profile
        updateProfile(result.user, { displayName: name, photoURL: photoURL })
          .then(() => {
            // Update AuthContext state
            setUser({
              ...result.user,
              displayName: name,
              photoURL: photoURL,
            });

            // Save user to backend
            const newUser = { name, email, photoURL, password };
            fetch("http://localhost:3000/users", {
              method: "POST",
              headers: { "content-type": "application/json" },
              body: JSON.stringify(newUser),
            })
              .then((res) => res.json())
              .then((data) => {
                if (data.message) {
                  Swal.fire({
                    icon: "info",
                    title: "Info",
                    text: data.message,
                    confirmButtonColor: "#3085d6",
                  });
                } else if (data.insertedId) {
                  Swal.fire({
                    icon: "success",
                    title: "Registration Successful 🎉",
                    text: "Your account has been created successfully!",
                    confirmButtonColor: "#3085d6",
                  });
                }
                navigate(from, { replace: true });
              });
          })
          .catch((err) => console.error("Profile update error:", err));
      })
      .catch((error) => {
        Swal.fire({
          icon: "error",
          title: "Oops...",
          text: error.message,
          confirmButtonColor: "#d33",
        });
      });
  };

  // --- Google Sign-In ---
  const handleSignInWithGoogle = () => {
    signInWithGoogle()
      .then((result) => {
        const googleUser = {
          name: result.user.displayName,
          email: result.user.email,
          photoURL: result.user.photoURL,
        };

        // Update AuthContext state
        setUser(result.user);

        // Save user to backend
        fetch("http://localhost:3000/users", {
          method: "POST",
          headers: { "content-type": "application/json" },
          body: JSON.stringify(googleUser),
        })
          .then((res) => res.json())
          .then((data) => {
            if (data.message) {
              Swal.fire({
                icon: "info",
                title: "Info",
                text: data.message,
                confirmButtonColor: "#3085d6",
              });
            } else if (data.insertedId) {
              Swal.fire({
                icon: "success",
                title: "Welcome 🎉",
                text: "You have signed in with Google successfully!",
                confirmButtonColor: "#3085d6",
              });
            }
            navigate(from, { replace: true });
          });
      })
      .catch((error) => {
        Swal.fire({
          icon: "error",
          title: "Google Sign-In Failed 😢",
          text: error.message,
          confirmButtonColor: "#d33",
        });
      });
  };

  return (
    <div>
      <title>IEBD-registration</title>
      <div className="card bg-base-100 mt-10 w-full mx-auto max-w-sm shadow-2xl">
        <h1 className="text-3xl font-bold text-center pt-2">Register now!</h1>
        <div className="card-body">
          <form onSubmit={handleSignIn}>
            <fieldset>
              <label className="label">Name</label>
              <input
                type="text"
                className="input"
                placeholder="Name"
                name="name"
                required
              />

              <label className="label">Email</label>
              <input
                type="email"
                className="input"
                placeholder="Email"
                name="email"
                required
              />

              <label className="label">PhotoURL</label>
              <input
                type="text"
                className="input"
                placeholder="PhotoURL"
                name="photoURL"
                required
              />

              <label className="label">Password</label>
              <input
                type="password"
                className="input"
                placeholder="Password"
                name="password"
                required
              />

              {passwordError && (
                <p className="text-red-500 text-sm mt-1">{passwordError}</p>
              )}

              <p className="mt-2">
                Already have an account?{" "}
                <Link to="/login" className="link underline">
                  Login
                </Link>
              </p>

              <button className="btn btn-neutral mt-4  w-full">Register</button>
            </fieldset>
          </form>

          {/* Google */}
          <button
            className="btn bg-white text-black border-[#e5e5e5]"
            onClick={handleSignInWithGoogle}
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
            Login with Google
          </button>
        </div>
      </div>
    </div>
  );
};

export default Registration;

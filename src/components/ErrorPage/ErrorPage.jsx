import React from "react";
import { Link } from "react-router-dom";

const ErrorPage = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gradient-to-b from-base-200 to-base-300 text-center px-4">
      <h1 className="text-3xl sm:text-4xl md:text-5xl font-semibold text-blue-900 mb-4 animate-bounce">
        Are you lost? 😢
      </h1>
      <p className="text-base sm:text-lg md:text-xl text-gray-600 mb-6">
        The page you’re looking for doesn’t exist or might have been moved.
      </p>

      <div className="w-full max-w-md">
        <img
          src="https://i.ibb.co.com/bjK02JLP/error-404.png"
          alt="Error 404"
          className="w-full rounded-lg shadow-lg transition-transform duration-300 hover:scale-105"
        />
      </div>

      <Link
        to="/"
        className="mt-8 btn btn-info text-white text-lg rounded-full px-8"
      >
        Back to Home
      </Link>
    </div>
  );
};

export default ErrorPage;

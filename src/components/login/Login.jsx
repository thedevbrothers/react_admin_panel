import React from "react";
import { useNavigate } from "react-router-dom";

export default function Login() {
  const navigate = useNavigate();

  const handleRedirectToProductCat = () => {
    navigate("/product-category");
  };
  return (
    <div
      className=""
      style={{
        backgroundImage: "url('/images/login-bg.jpg')",
        backgroundSize: "cover",
        backgroundPosition: "center",
        height: "100vh",
      }}
    >
      <div className="rounded-lg w-50 m-auto p-5 ">
        <h2 className="text-2xl text-white font-bold text-center mb-6">
          Log In
        </h2>
        <form>
          <div className="mb-4">
            <label
              htmlFor="username"
              className="block text-gray-700 font-medium mb-2 text-white "
            >
              Username /Email Address
            </label>
            <input
              type="text"
              id="username"
              className="form-control block w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="Enter your username or email"
            />
          </div>
          <div className="mb-4">
            <label
              htmlFor="password"
              className="block text-gray-700 font-medium mb-2 text-white "
            >
              Password
            </label>
            <div className="relative">
              <input
                type="password"
                id="password"
                className="form-control block w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                placeholder="Enter your password"
              />
            </div>
          </div>
          <div className="flex items-center justify-between mb-4">
            <label className="flex items-center text-gray-700">
              <input
                type="checkbox"
                className="form-checkbox border-gray-300 rounded h-4 w-4"
              />
              <span className="ml-2 text-white ml-3">Remember Me</span>
            </label>
            <a href="#0" className="text-blue-500 text-sm  hover:underline">
              Forgot Password?
            </a>
          </div>
          <button
            type="submit"
            className="w-full bg-green-500  py-2 px-4 rounded-lg hover:bg-green-600 focus:ring-2 focus:ring-green-500 focus:outline-none"
            onClick={handleRedirectToProductCat}
          >
            Log In
          </button>
        </form>
        <p className="text-center text-sm mt-4 text-white ">
          Don’t have an account?{" "}
          <a href="#0" className="text-blue-500 hover:underline">
            Request Log In
          </a>
        </p>
      </div>
    </div>
    // </div>
  );
}

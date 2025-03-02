import React, { useState } from "react";

const Login = () => {
  const [isLogin, setIsLogin] = useState(true);

  return (
    <div className="flex justify-center items-center h-screen bg-blue-700 font-roboto">
      <div className="bg-white p-8 rounded-xl shadow-lg w-3/4 flex">
        {/* Left Div with Welcome Message */}
        <div className="w-1/2 p-8 flex flex-col justify-center items-center bg-gradient-to-r from-blue-600 to-blue-800 text-white rounded-l-xl bg-opacity-50">
          <h2 className="text-4xl font-bold mb-4">Welcome to bitbybit!🎉</h2>
          <p className="text-lg mb-4">Explore, learn, and grow at your own pace. Let’s make learning fun and exciting together! 🚀📚</p>
        </div>

        {/* Right Div with Login/Signup Form */}
        <div className="w-1/2 p-4 rounded-r-xl bg-white bg-opacity-50">
          {/* Tabs for Login & Signup */}
          <div className="flex justify-around mb-4">
            <button
              className={`w-1/2 py-2 rounded-t-lg ${isLogin ? "bg-blue-700 text-white" : "bg-gray-200 text-gray-700"}`}
              onClick={() => setIsLogin(true)}
            >
              Login
            </button>
            <button
              className={`w-1/2 py-2 rounded-t-lg ${!isLogin ? "bg-blue-700 text-white" : "bg-gray-200 text-gray-700"}`}
              onClick={() => setIsLogin(false)}
            >
              Signup
            </button>
          </div>

          {/* Form Section */}
          <div className="bg-blue-100 p-4 rounded-lg bg-opacity-75">
            <form>
              <div className="mb-4">
                <label className="block text-gray-700">Email Address</label>
                <input
                  type="email"
                  className="w-full px-3 py-2 border rounded focus:outline-none focus:ring-2 focus:ring-blue-400"
                  required
                />
              </div>

              <div className="mb-4">
                <label className="block text-gray-700">Password</label>
                <input
                  type="password"
                  className="w-full px-3 py-2 border rounded focus:outline-none focus:ring-2 focus:ring-blue-400"
                  required
                />
              </div>

              {/* Extra field for Signup */}
              {!isLogin && (
                <div className="mb-4">
                  <label className="block text-gray-700">Confirm Password</label>
                  <input
                    type="password"
                    className="w-full px-3 py-2 border rounded focus:outline-none focus:ring-2 focus:ring-blue-400"
                    required
                  />
                </div>
              )}

              {/* Forgot Password Link */}
              {isLogin && (
                <div className="text-right text-sm text-blue-500 hover:underline mb-4">
                  Forgot password?
                </div>
              )}

              {/* Submit Button */}
              <button
                type="submit"
                className="w-full bg-blue-700 text-white py-2 rounded hover:bg-blue-800 transition"
              >
                {isLogin ? "Login" : "Signup"}
              </button>
            </form>
          </div>

          {/* Switch between Login & Signup */}
          <p className="text-center text-sm mt-4">
            {isLogin ? "Didn't you sign up?" : "Already have an account?"}{" "}
            <span
              className="text-blue-500 cursor-pointer hover:underline"
              onClick={() => setIsLogin(!isLogin)}
            >
              {isLogin ? "Signup now" : "Login"}
            </span>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Login;
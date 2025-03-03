import React, { useState } from "react";

const Login = () => {
  const [isLogin, setIsLogin] = useState(true);

  return (
    <div className="flex justify-center items-center h-screen bg-[#0F52BA] font-roboto">
      <div className="p-8 rounded-xl shadow-lg w-3/4 flex">
        {/* Left Div with Welcome Message */}
        <div className="w-1/2 p-8 flex flex-col justify-center items-center bg-transparent text-white rounded-l-xl">
          <h2 className="text-4xl font-bold mb-4">Welcome to bitbybit!🎉</h2>
          <p className="text-lg mb-4">Explore, learn, and grow at your own pace. Let’s make learning fun and exciting together! 📚</p>
        </div>

        {/* Right Div with Login/Signup Form */}
        <div className="w-1/2 p-4 rounded-r-xl bg-white bg-opacity-10 border border-white backdrop-blur-lg">
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
          <div className="p-4 rounded-lg">
            <form>
              <div className="mb-4">
                <label className="block text-white">Email Address</label>
                <input
                  type="email"
                  className="w-full px-3 py-2 border rounded focus:outline-none focus:ring-2 focus:ring-blue-400 bg-transparent text-white border-white"
                  required
                />
              </div>

              <div className="mb-4">
                <label className="block text-white">Password</label>
                <input
                  type="password"
                  className="w-full px-3 py-2 border rounded focus:outline-none focus:ring-2 focus:ring-blue-400 bg-transparent text-white border-white"
                  required
                />
              </div>

              {/* Extra field for Signup */}
              {!isLogin && (
                <div className="mb-4">
                  <label className="block text-white">Confirm Password</label>
                  <input
                    type="password"
                    className="w-full px-3 py-2 border rounded focus:outline-none focus:ring-2 focus:ring-blue-400 bg-transparent text-white border-white"
                    required
                  />
                </div>
              )}

              {/* Forgot Password Link */}
              {isLogin && (
                <div className="text-right text-sm text-blue-300 hover:underline mb-4">
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
          <p className="text-center text-sm mt-4 text-white">
            {isLogin ? "Didn't you sign up?" : "Already have an account?"} {" "}
            <span
              className="text-blue-300 cursor-pointer hover:underline"
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

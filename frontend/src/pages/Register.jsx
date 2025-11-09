import React, { useEffect, useState } from "react";
import signup from "../assets/signup.png";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { registerUser } from "../redux/slices/authSlice";
import { useDispatch, useSelector } from "react-redux";
import { mergeCart } from "../redux/slices/cartSlice";

const Register = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [name, setName] = useState("");
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const location = useLocation();
  const { user, guestId, loading } = useSelector((state) => state.auth);
  const { cart } = useSelector((state) => state.cart);

  //get redirect paramter
  const redirect = new URLSearchParams(location.search).get("redirect") || "/";
  const isCheckoutRedirect = redirect.includes("checkout");

  useEffect(() => {
    if (user) {
      if (cart?.products.length > 0 && guestId) {
        dispatch(mergeCart({ guestId, user })).then(() => {
          navigate(isCheckoutRedirect ? "/checkout" : "/");
        });
      } else {
        navigate(isCheckoutRedirect ? "/checkout" : "/");
      }
    }
  }, [user, guestId, cart, navigate, isCheckoutRedirect, dispatch]);

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(registerUser({ name, email, password }));
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-amber-50 via-white to-amber-100/50 relative overflow-hidden">
      {/* Background Elements - Hidden on mobile for better performance */}
      <div className="absolute inset-0 overflow-hidden hidden md:block">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-amber-200/30 rounded-full blur-3xl"></div>
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-amber-300/20 rounded-full blur-3xl"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-amber-100/40 rounded-full blur-3xl"></div>
      </div>

      <div className="relative z-10 min-h-screen flex items-center justify-center p-4 sm:p-6 lg:p-8">
        <div className="w-full max-w-6xl grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-8 lg:gap-12 items-center">
          {/* Form Section */}
          <div className="order-2 lg:order-1 w-full">
            <div className="max-w-md mx-auto px-4 sm:px-0">
              {/* Brand */}
              <div className="text-center mb-6 sm:mb-8">
                <h1 className="text-3xl sm:text-4xl font-bold text-amber-600 tracking-wider mb-2">
                  STYLEHYPE
                </h1>
                <div className="w-16 h-1 bg-gradient-to-r from-amber-500 to-amber-600 mx-auto rounded-full"></div>
              </div>

              {/* Form Card */}
              <div className="bg-white/80 backdrop-blur-sm p-6 sm:p-8 rounded-2xl sm:rounded-3xl shadow-2xl border border-amber-100/50 relative">
                {/* Decorative Elements - Hidden on mobile */}
                <div className="absolute -top-4 -right-4 w-8 h-8 bg-amber-400 rounded-full opacity-60 hidden sm:block"></div>
                <div className="absolute -bottom-4 -left-4 w-6 h-6 bg-amber-300 rounded-full opacity-40 hidden sm:block"></div>

                <div className="relative z-10">
                  <h2 className="text-xl sm:text-2xl font-bold text-gray-800 text-center mb-2">
                    👋 Hey there, welcome!
                  </h2>
                  <p className="text-gray-600 text-center mb-6 sm:mb-8 text-sm">
                    Sign up to start your fashion journey
                  </p>

                  <form
                    onSubmit={handleSubmit}
                    className="space-y-4 sm:space-y-6"
                  >
                    <div className="group">
                      <label className="block text-sm font-semibold mb-2 sm:mb-3 text-gray-700 tracking-wide">
                        Name
                      </label>
                      <input
                        type="text"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        className="w-full p-3 sm:p-4 border border-amber-200/70 rounded-xl sm:rounded-2xl focus:outline-none focus:ring-2 focus:ring-amber-400/50 focus:border-amber-400 transition-all duration-300 bg-amber-50/30 placeholder-gray-500 group-hover:bg-amber-50/50"
                        placeholder="Enter your name"
                      />
                    </div>
                    <div className="group">
                      <label className="block text-sm font-semibold mb-2 sm:mb-3 text-gray-700 tracking-wide">
                        Email Address
                      </label>
                      <input
                        type="email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        className="w-full p-3 sm:p-4 border border-amber-200/70 rounded-xl sm:rounded-2xl focus:outline-none focus:ring-2 focus:ring-amber-400/50 focus:border-amber-400 transition-all duration-300 bg-amber-50/30 placeholder-gray-500 group-hover:bg-amber-50/50"
                        placeholder="Enter your email"
                      />
                    </div>

                    <div className="group">
                      <label className="block text-sm font-semibold mb-2 sm:mb-3 text-gray-700 tracking-wide">
                        Password
                      </label>
                      <input
                        type="password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        className="w-full p-3 sm:p-4 border border-amber-200/70 rounded-xl sm:rounded-2xl focus:outline-none focus:ring-2 focus:ring-amber-400/50 focus:border-amber-400 transition-all duration-300 bg-amber-50/30 placeholder-gray-500 group-hover:bg-amber-50/50"
                        placeholder="Enter your password"
                      />
                    </div>

                    <button
                      type="submit"
                      className="w-full cursor-pointer bg-gradient-to-r from-amber-500 to-amber-500 text-white p-3 sm:p-4 rounded-xl sm:rounded-2xl font-semibold uppercase tracking-wider shadow-lg hover:shadow-xl hover:from-amber-600 hover:to-amber-700 transition-all duration-300 transform hover:scale-[1.02] active:scale-[0.98]"
                    >
                      {loading ? "Signing up..." : "Sign Up"}
                    </button>
                  </form>


                  <p className="mt-4 sm:mt-6 text-center text-sm text-gray-600">
                    Don't have an account?{" "}
                    <Link
                      to={`/login?redirect=${encodeURIComponent(redirect)}`}
                      className="text-amber-600 hover:text-amber-700 font-semibold transition-colors duration-300"
                    >
                      Login
                    </Link>
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Image Section */}
          <div className="order-1 lg:order-2 w-full">
            <div className="relative px-4 sm:px-0">
              {/* Image Container with Effects */}
              <div className="relative group">
                <div className="absolute -inset-2 sm:-inset-4 bg-gradient-to-r from-amber-400 to-amber-600 rounded-2xl sm:rounded-3xl blur-lg opacity-30 group-hover:opacity-50 transition-opacity duration-500"></div>
                <div className="relative bg-white/90 backdrop-blur-sm p-4 sm:p-6 rounded-2xl sm:rounded-3xl shadow-2xl">
                  <img
                    src={signup}
                    alt="Signup image"
                    className="w-full h-[300px] sm:h-[400px] lg:h-[500px] object-cover rounded-xl sm:rounded-2xl shadow-lg group-hover:scale-105 transition-transform duration-500"
                  />
                </div>
              </div>

              {/* Floating Elements - Hidden on mobile */}
              <div className="absolute -top-6 -right-6 w-12 h-12 bg-amber-400 rounded-full shadow-lg animate-pulse hidden sm:block"></div>
              <div className="absolute -bottom-6 -left-6 w-8 h-8 bg-amber-300 rounded-full shadow-lg animate-pulse delay-1000 hidden sm:block"></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Register;

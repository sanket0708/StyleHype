import React, { useEffect } from "react";
import MyOrdersPage from "./MyOrdersPage";
import { HiOutlineUser, HiOutlineMail, HiOutlineLogout } from "react-icons/hi";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import { logout } from "../redux/slices/authSlice";
import { clearCart } from "../redux/slices/cartSlice";



const Profile = () => {
  const { user } = useSelector((state) => state.auth);
  const navigate = useNavigate();
  const dispatch = useDispatch();

  useEffect(() => {
    if (!user) {
      navigate("/login");
    }
  }, [user, navigate]);

  const handleLogout = () => {
    dispatch(logout());
    dispatch(clearCart());
    navigate("/login");
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-amber-50 via-white to-amber-100/50 relative overflow-hidden">
      {/* Background Elements - Hidden on mobile for better performance */}
      <div className="absolute inset-0 overflow-hidden hidden md:block">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-amber-200/30 rounded-full blur-3xl"></div>
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-amber-300/20 rounded-full blur-3xl"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-amber-100/40 rounded-full blur-3xl"></div>
      </div>

      <div className="relative z-10 min-h-screen flex flex-col">
        <div className="flex-grow container mx-auto px-3 py-4 sm:px-4 sm:py-6 md:px-6 md:py-8 lg:px-8">
          {/* Page Header */}
          <div className="text-center mb-6 sm:mb-8">
            <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-2">
              My Profile
            </h1>
            <div className="w-12 sm:w-16 h-1 bg-gradient-to-r from-amber-500 to-amber-600 mx-auto rounded-full"></div>
            <p className="text-gray-600 mt-3 sm:mt-4 text-xs sm:text-sm md:text-base px-4">
              Manage your account and view your order history
            </p>
          </div>

          <div className="flex flex-col lg:flex-row lg:space-x-6 xl:space-x-8 space-y-6 sm:space-y-8 lg:space-y-0">
            {/* User Info Section */}
            <div className="w-full lg:w-1/3">
              <div className="bg-white/80 backdrop-blur-sm p-4 sm:p-6 md:p-8 rounded-xl sm:rounded-2xl md:rounded-3xl shadow-xl sm:shadow-2xl border border-amber-100/50 relative">
                {/* Decorative Elements */}
                <div className="absolute -top-2 -right-2 sm:-top-4 sm:-right-4 w-6 h-6 sm:w-8 sm:h-8 bg-amber-400 rounded-full opacity-60"></div>
                <div className="absolute -bottom-2 -left-2 sm:-bottom-4 sm:-left-4 w-4 h-4 sm:w-6 sm:h-6 bg-amber-300 rounded-full opacity-40"></div>

                <div className="relative z-10">
                  {/* User Avatar */}
                  <div className="flex justify-center mb-4 sm:mb-6">
                    <div className="relative group">
                      <div className="absolute -inset-1 sm:-inset-2 bg-gradient-to-r from-amber-400 to-amber-600 rounded-full blur-lg opacity-30 group-hover:opacity-50 transition-opacity duration-500"></div>
                      <div className="relative w-16 h-16 sm:w-20 sm:h-20 md:w-24 md:h-24 bg-gradient-to-br from-amber-400 to-amber-600 rounded-full flex items-center justify-center shadow-lg">
                        <HiOutlineUser className="w-8 h-8 sm:w-10 sm:h-10 md:w-12 md:h-12 text-white" />
                      </div>
                    </div>
                  </div>

                  {/* User Details */}
                  <div className="text-center mb-4 sm:mb-6">
                    <h2 className="text-lg sm:text-xl md:text-2xl font-bold text-gray-900 mb-2">
                      {user?.name}
                    </h2>
                    <div className="flex items-center justify-center text-gray-600 mb-3 sm:mb-4">
                      <HiOutlineMail className="w-3 h-3 sm:w-4 sm:h-4 mr-1 sm:mr-2 flex-shrink-0" />
                      <span className="text-xs sm:text-sm md:text-base truncate">
                        {user?.email}
                      </span>
                    </div>
                    <div className="inline-block bg-amber-100 text-amber-800 px-2 sm:px-3 py-1 rounded-full text-xs font-semibold uppercase tracking-wide">
                      Member
                    </div>
                  </div>

                  {/* Action Buttons */}
                  <div className="space-y-2 sm:space-y-3">
                    <button
                      onClick={handleLogout}
                      className="w-full bg-red-500 hover:bg-red-600 text-white py-2.5 sm:py-3 px-3 sm:px-4 rounded-lg sm:rounded-xl font-semibold uppercase tracking-wider shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-[1.02] active:scale-[0.98] cursor-pointer flex items-center justify-center text-sm sm:text-base"
                    >
                      <HiOutlineLogout className="w-3 h-3 sm:w-4 sm:h-4 mr-1 sm:mr-2 flex-shrink-0" />
                      Logout
                    </button>
                  </div>
                </div>
              </div>
            </div>

            {/* Orders Section */}
            <div className="w-full lg:w-2/3">
              <div className="bg-white/80 backdrop-blur-sm rounded-xl sm:rounded-2xl md:rounded-3xl shadow-xl sm:shadow-2xl border border-amber-100/50 overflow-hidden">
                <MyOrdersPage />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Profile;

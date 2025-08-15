import React from "react";
import Topbar from "../Layout/Topbar";
import Navbar from "./Navbar";

const Header = () => {
  return (
    <header className="">
      <Topbar />
      {/* navbar */}
      <Navbar />
      {/* cartdrawer */}
    </header>
  );
};

export default Header;

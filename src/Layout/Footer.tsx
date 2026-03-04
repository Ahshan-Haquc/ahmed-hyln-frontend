import React from "react";
import { Link, useNavigate } from "react-router-dom";

const Footer: React.FC = () => {
  const navigate = useNavigate();
  return (
    <footer className="bg-[#212a31] text-white py-2">
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-center md:justify-between  items-center min-h-16">

          {/* Logo */}
          <div className="flex flex-col md:flex-row items-center gap-3 xl:gap-5">
            <div className="h-14 w-14" onClick={() => navigate("/")}>
              <img src="/Logo1.png" alt="Logo" className="h-full w-full object-contain" />
            </div>
            <span className="text-[10px] md:text-xs ">Smart voice agents for your business.</span>
          </div>


          {/* Desktop Menu */}
          <div className="mt-8 md:mt-0 flex flex-col md:flex-row items-center gap-1 md:gap-4 2xl:gap-8 text-white text-xs md:text-sm">
            <Link to="/contact">Privacy Policy</Link>
            <Link to="/login">Terms of Services</Link>
            <Link to="/login">@ 2026 Hyln. All rights reserved.</Link>
          </div>

        </div>
      </div>
    </footer>
  );
};

export default Footer;

import { Button } from "@/components/ui/button";
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const navigate = useNavigate();

  return (
    <nav className="fixed top-0 left-0 w-full bg-black  shadow-md z-50">
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex justify-between items-center h-16">

            {/* Desktop Menu section */}
            <div className="hidden md:flex items-center space-x-4">
              {navLinks.map((link) => (
                <Link
                  key={link.to}
                  to={link.to}
                  className="text-white hover:bg-website-color-lightGray hover:text-black px-3 py-2 rounded-md text-[16px] font-geist font-normal leading-normal"
                >
                  {link.label}
                </Link>
              ))}

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-6 text-white">
            <Link to="/contact">Contact Us</Link>
            <Link to="/login">Login</Link>
            <Link to="/contact">
               <Button variant="default" className="bg-white text-black">Book a Demo</Button>
            </Link>
          </div>

          {/* Mobile Button */}
          <div className="md:hidden text-white">
            <button onClick={() => setIsOpen(!isOpen)}>
              ☰
            </button>
          </div>

        {/* Mobile Menu */}
        {isOpen && (
          <div className="md:hidden px-2 pt-2 pb-3 space-y-1 sm:px-3">
            {navLinks.map((link) => (
              <Link
                key={link.to}
                to={link.to}
                className="text-white block hover:bg-purple-700 px-3 py-2 rounded-md text-[16px] font-geist font-normal leading-normal"
              >
                {link.label}
              </Link>
            ))}
            {user && (
              <Button
                onClick={handleLogout}
                className="mt-3 bg-website-color-lightGray text-black w-full"
              >
                Logout
              </Button>
            )}
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
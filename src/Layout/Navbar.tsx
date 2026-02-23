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

          {/* Logo */}
          <div className="h-14 w-14" onClick={()=> navigate("/")}>
            <img src="/Logo1.png" alt="Logo" className="h-full w-full object-contain" />
          </div>

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

        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden bg-white shadow-md">
          <div className="flex flex-col p-4 space-y-4">
            <Link to="/contact" onClick={() => setIsOpen(false)}>Contact Us</Link>
            <Link to="/login" onClick={() => setIsOpen(false)}>Login</Link>
            <Link to="/contact" onClick={() => setIsOpen(false)}>
            <Button variant="outline" className="bg-white text-black">Book a Demo</Button></Link>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
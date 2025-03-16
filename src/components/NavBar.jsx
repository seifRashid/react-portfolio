import { useState, useEffect } from "react";
import gsap from "gsap";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    if (isOpen) {
      gsap.fromTo(".mobile-menu", { opacity: 0, y: -20 }, { opacity: 1, y: 0, duration: 2, ease: "elastic" });
    }
  }, [isOpen]);

  return (
    <nav className="bg-blue-600 text-white p-4 shadow-md">
      <div className="container mx-auto flex justify-between items-center">
        <h1 className="text-4xl font-bold">Rashid</h1>
        
        {/* Desktop Menu */}
        <ul className="hidden md:flex space-x-6">
          <li><a href="#" className="hover:text-gray-200">Home</a></li>
          <li><a href="#" className="hover:text-gray-200">About</a></li>
          <li><a href="#" className="hover:text-gray-200">Services</a></li>
          <li><a href="#" className="hover:text-gray-200">Contact</a></li>
        </ul>

        {/* Mobile Menu Button */}
        <button className="md:hidden text-2xl" onClick={() => setIsOpen(!isOpen)}>
          <i className={isOpen ? "fas fa-times" : "fas fa-bars"}></i>
        </button>
      </div>
      
      {/* Mobile Menu */}
      {isOpen && (
        <div className="mobile-menu md:hidden flex flex-col items-center mt-4 space-y-4">
          <a href="#" className="hover:text-gray-200 hover:bg-blue-400 px-16 py-2 rounded-sm">Home</a>
          <a href="#" className="hover:text-gray-200 hover:bg-blue-400 px-16 py-2 rounded-sm">About</a>
          <a href="#" className="hover:text-gray-200 hover:bg-blue-400 px-16 py-2 rounded-sm">Services</a>
          <a href="#" className="hover:text-gray-200 hover:bg-blue-400 px-16 py-2 rounded-sm">Contact</a>
        </div>
      )}
    </nav>
  );
}

import { useState } from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };
  return (
    <nav className="bg-primary">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex-shrink-0">
            <Link className="text-2xl font-bold text-[#fff165]" to="/">
              BoiPooka
            </Link>
          </div>
          <div className="hidden md:block">
            <div className="ml-4 flex space-x-4 text-[#fff165] uppercase">
              <Link to="/">Home</Link>
              <Link to="/books">Books</Link>
              <Link to="/">About</Link>
              <Link to="/login">Login</Link>
            </div>
          </div>
          <div className="md:hidden">
            <button
              className="flex items-center px-3 py-2 border rounded text-gray-300 border-gray-400   hover:border-white"
              onClick={toggleMenu}
            >
              <svg
                className="w-6 h-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16M4 18h16"
                ></path>
              </svg>
            </button>
          </div>
        </div>
      </div>
      {isMenuOpen && (
        <div className="md:hidden">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 flex flex-col">
            <button className="text-gray-300 " onClick={toggleMenu}>
              Home
            </button>
            <button className="text-gray-300 " onClick={toggleMenu}>
              Books
            </button>
            <button className="text-gray-300 " onClick={toggleMenu}>
              Contact
            </button>
            <button className="text-gray-300 " onClick={toggleMenu}>
              Login
            </button>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;

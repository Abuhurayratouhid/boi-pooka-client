import { useState } from "react";
import { Link } from "react-router-dom";
import { useAppDispatch, useAppSelector } from "../redux/hook";
import { signOut } from "firebase/auth";
import { auth } from "../firebase/firebase.config";
import { setUser } from "../redux/feature/user/userSlice";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const { user } = useAppSelector((state) => state.user);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const dispatch = useAppDispatch();

  const handleLogout = () => {
    console.log("log out");
    signOut(auth).then(() => {
      // Sign-out successful.
      dispatch(setUser(null));
    });
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
              <Link to="/addBook">Add book</Link>
              {user?.email ? (
                <p onClick={handleLogout} className="cursor-pointer">
                  Logout
                </p>
              ) : (
                <Link to="/login">Login</Link>
              )}
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
          <div className="px-2 pt-2 pb-3 text-[#fff165] text-center uppercase space-y-1 sm:px-3 flex flex-col">
            <Link to="/" onClick={toggleMenu}>
              Home
            </Link>
            <Link to="/books" onClick={toggleMenu}>
              Books
            </Link>
            <Link to="/addBook" onClick={toggleMenu}>
              Add book
            </Link>
            {user?.email ? (
              <p onClick={handleLogout} className="cursor-pointer">
                Logout
              </p>
            ) : (
              <Link to="/login" onClick={toggleMenu}>
                Login
              </Link>
            )}
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;

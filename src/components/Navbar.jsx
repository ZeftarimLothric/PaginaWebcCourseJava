import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../context/AuthContext";
import { UserDropdown } from "../components/UserDropdown";
import { Coffee, User, Menu, X } from "lucide-react";

export default function Navbar() {
  const navigate = useNavigate();
  const { user, signInWithGoogle, isLoading } = useAuth();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const handleNavigation = (path) => {
    navigate(path);
    setIsMenuOpen(false);
  };

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav className="navbar shadow bg-[#ffd5bd] p-4">
      <div className="container mx-auto flex justify-between items-center">
        {/* Logo */}
        <div className="flex items-center">
          <a
            className="link text-orange-600 hover:text-black text-3xl font-bold font-montserrat no-underline flex items-center"
            onClick={() => handleNavigation("/")}
          >
            <Coffee className="w-8 h-8 text-orange-600 mr-2" />
            JavaCourse
          </a>
        </div>

        <div className="flex items-center space-x-4">
          {/* Navigation menu for desktop */}
          <div className="hidden lg:flex space-x-2 ml-auto">
            <button
              className="btn bg-[#ff6a25] hover:bg-[#944e2d] rounded-full text-black border-0 shadow-none"
              onClick={() => handleNavigation("/comienzo")}
            >
              Comienzo
            </button>
            <button
              className="btn bg-[#ff6a25] hover:bg-[#944e2d] rounded-full text-black border-0 shadow-none"
              onClick={() => handleNavigation("/ejercicios")}
            >
              Ejercicios
            </button>
          </div>

          {/* Mobile menu button */}
          <button
            className="lg:hidden text-orange-600"
            onClick={toggleMenu}
            aria-label="Toggle menu"
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>

          {/* User authentication section */}
          {isLoading ? (
            <div className="size-9.5 flex items-center justify-center">
              <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-orange-600"></div>
            </div>
          ) : user ? (
            <UserDropdown user={user} />
          ) : (
            <button
              onClick={signInWithGoogle}
              className="btn bg-[#ff6a25] hover:bg-[#944e2d] rounded-full text-black border-0 p-2"
              aria-label="Iniciar sesión"
            >
              <User size={24} />
            </button>
          )}
        </div>
      </div>

      {/* Mobile menu */}
      <div
        className={`lg:hidden ${
          isMenuOpen ? "block" : "hidden"
        } absolute top-16 left-0 w-full bg-[#ffd5bd] z-10`}
      >
        <div className="flex flex-col space-y-2 p-4">
          <button
            className="btn bg-[#ff6a25] hover:bg-[#944e2d] rounded-full text-black border-0 shadow-none w-full"
            onClick={() => handleNavigation("/comienzo")}
          >
            Comienzo
          </button>
          <button
            className="btn bg-[#ff6a25] hover:bg-[#944e2d] rounded-full text-black border-0 shadow-none w-full"
            onClick={() => handleNavigation("/ejercicios")}
          >
            Ejercicios
          </button>
        </div>
      </div>
    </nav>
  );
}

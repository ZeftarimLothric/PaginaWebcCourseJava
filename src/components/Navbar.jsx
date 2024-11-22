import { useNavigate } from "react-router-dom";
import { useAuth } from "../context/AuthContext";
import { UserDropdown } from "../components/UserDropdown";
import { Coffee, LogIn } from "lucide-react";

export default function Navbar() {
  const navigate = useNavigate();
  const { user, signInWithGoogle, isLoading } = useAuth();

  const handleNavigation = (path) => {
    navigate(path);
  };

  return (
    <nav className="navbar gap-4 shadow bg-[#ffd5bd]">
      <div className="navbar-start items-center">
        <a
          className="link text-orange-600 hover:text-black text-3xl font-bold font-montserrat no-underline flex"
          onClick={() => handleNavigation("/")}
        >
          <Coffee className="w-8 h-8 text-orange-600 mr-2" />
          JavaCourse
        </a>
      </div>
      <div className="navbar-end flex items-center gap-4 font-montserrat">
        <button className="btn btn-sm btn-text btn-circle size-[2.125rem] sm:hidden">
          <span className="icon-[tabler--search] size-[1.375rem]"></span>
        </button>
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

        {isLoading ? (
          <div className="size-9.5 flex items-center justify-center">
            <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-orange-600"></div>
          </div>
        ) : user ? (
          <UserDropdown user={user} />
        ) : (
          <button
            onClick={signInWithGoogle}
            className="btn bg-[#ff6a25] hover:bg-[#944e2d] rounded-full text-black border-0 flex items-center gap-2"
          >
            <LogIn className="w-4 h-4" />
            Iniciar sesión
          </button>
        )}
      </div>
    </nav>
  );
}

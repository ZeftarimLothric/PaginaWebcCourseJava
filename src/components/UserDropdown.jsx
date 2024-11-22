import { useState, useRef, useEffect } from "react";
import { useAuth } from "../context/AuthContext";
import { LogOut, User as UserIcon, Settings } from "lucide-react";
import { useNavigate } from "react-router-dom";

export function UserDropdown({ user }) {
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef(null);
  const { signOut } = useAuth();
  const navigate = useNavigate();

  const handleNavigation = (path) => {
    navigate(path);
  };

  // Get profile picture from Google metadata
  const profilePicture =
    user.user_metadata.picture ||
    user.user_metadata.avatar_url ||
    "https://cdn.flyonui.com/fy-assets/avatar/avatar-1.png";

  // Handle click outside to close dropdown
  useEffect(() => {
    function handleClickOutside(event) {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setIsOpen(false);
      }
    }

    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const handleSignOut = async () => {
    try {
      await signOut();
      setIsOpen(false);
    } catch (error) {
      console.error("Error signing out:", error);
    }
  };

  return (
    <div ref={dropdownRef} className="relative">
      <button
        onClick={() => setIsOpen(!isOpen)}
        type="button"
        className="flex items-center focus:outline-none"
        aria-expanded={isOpen}
        aria-label="User menu"
      >
        <div className="avatar">
          <div className="w-10 h-10 rounded-full overflow-hidden">
            <img
              src={profilePicture}
              alt="Profile"
              className="w-full h-full object-cover"
              referrerPolicy="no-referrer"
            />
          </div>
        </div>
      </button>

      {isOpen && (
        <div className="absolute right-0 mt-2 w-64 rounded-lg shadow-lg py-1 bg-[#ffd5bd] ring-1 ring-black ring-opacity-5 z-50">
          <div className="px-4 py-3  ">
            <div className="flex items-center">
              <div className="flex-shrink-0">
                <img
                  src={profilePicture}
                  alt="Profile"
                  className="w-10 h-10 rounded-full object-cover"
                  referrerPolicy="no-referrer"
                />
              </div>
              <div className="ml-3">
                <p className="text-sm font-medium text-gray-700">
                  {user.user_metadata.full_name ||
                    user.user_metadata.name ||
                    "Usuario"}
                </p>
              </div>
            </div>
          </div>

          <div className="px-2">
            <button
              onClick={() => {
                setIsOpen(false);
                handleNavigation("/profil");
              }}
              className="hover:bg-[#e9bb93] dropdown-item text-black rounded-full"
            >
              <UserIcon className="w-4 h-4" />
              Mi Progreso
            </button>
          </div>
          <div className="px-2">
            <button
              onClick={() => {
                setIsOpen(false);
                /* Add settings navigation */
              }}
              className="hover:bg-[#e9bb93]  dropdown-item text-black rounded-full"
            >
              <Settings className="w-4 h-4" />
              Configuración
            </button>
          </div>

          <div className="dropdown-footer gap-2">
            <button
              onClick={handleSignOut}
              className="btn btn-error btn-soft btn-block rounded-full"
            >
              <LogOut className="w-4 h-4" />
              Cerrar sesión
            </button>
          </div>
        </div>
      )}
    </div>
  );
}

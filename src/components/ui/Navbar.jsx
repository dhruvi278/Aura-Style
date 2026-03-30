import { useState, useRef, useEffect } from "react";
import Button from "./Button";
import { Menu, X, LogOut } from "lucide-react";
import { NavLink, useNavigate } from "react-router-dom";
import Logo from "./Logo";
import { useDispatch, useSelector } from "react-redux";
import { logout } from "../../store/slices/authSlice";
import { getToken, removeToken } from "../../utils/accessTokenStorage";

function Navbar() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [isOpen, setIsOpen] = useState(false);
  const sidebarRef = useRef(null);

  const { user } = useSelector((state) => state.auth);
  const isLoggedIn = !!user || !!getToken();

  const publicLinks = [
    { name: "Home", path: "/" },
    // { name: 'Our story', path: '/ourstory' },
    { name: "Support", path: "/support" },
  ];
  const privateLinks = [
    { name: "Dashboard", path: "/dashboard" },
    { name: "Wardrobe", path: "/wardrobe" },
    { name: "Outfit Generate", path: "/generate_outfit" },
    { name: "Profile", path: "/profile" },
    { name: "History", path: "/history" },
    { name: "Support", path: "/support" },
    { name: "Pricing", path: "/pricing" },
  ];

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (sidebarRef.current && !sidebarRef.current.contains(event.target)) {
        setIsOpen(false);
      }
    };

    if (isOpen) {
      document.addEventListener("mousedown", handleClickOutside);
    }

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [isOpen]);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 768) {
        setIsOpen(!isOpen);
      }
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  const handleLogout = async () => {
    await dispatch(logout());
    setIsOpen(false);
    dispatch({ type: "auth/logout/fulfilled" });
    navigate("/login", { replace: true });
  };

  return (
    <>
      <nav className="bg-[#faf2e5]/80 backdrop-blur-md shadow-[0_2px_16px_rgba(28,28,26,0.08)] sticky top-0 w-full z-50">
        <div className="min-w-full mx-auto px-6 py-4 flex justify-between items-center">
          <div onClick={() => navigate("/")} className="cursor-pointer">
            <Logo />
          </div>
          {/* Desktop view */}
          <ul className="hidden lg:flex gap-7 font-medium">
            {(isLoggedIn ? privateLinks : publicLinks).map((link) => (
              <li key={link.path}>
                <NavLink
                  to={link.path}
                  className={({ isActive }) =>
                    `jost text-base tracking-wide pb-1 transition-colors duration-200 ${
                      isActive
                        ? "border-b-2 border-[#BF9A5E] text-[#1C1C1A]"
                        : "text-[#6B6460] hover:text-[#1C1C1A]"
                    }`
                  }
                >
                  {link.name}
                </NavLink>
              </li>
            ))}
          </ul>
          {/* LogOut option for Logged In user  */}

          <div className="hidden lg:flex items-center gap-4 ">
            {isLoggedIn ? (
              <>
                <Button
                  onClick={handleLogout}
                  type="submit"
                  variant="transparent"
                  className="flex items-center gap-2"
                >
                  <LogOut size={18} aria-hidden="true" />
                  <span className="jost text-sm tracking-widest uppercase">
                    Logout
                  </span>
                </Button>
              </>
            ) : (
              <>
                <Button
                  type={"button"}
                  variant="transparent"
                  onClick={() => navigate("/login")}
                >
                  <span className="jost text-base">Sign In</span>
                </Button>

                <Button
                  type="button"
                  variant="primary"
                  onClick={() => navigate("/signup")}
                >
                  <span className="jost text-base tracking-wide">
                    Get Started
                  </span>
                </Button>
              </>
            )}
          </div>

          <div className="lg:hidden flex items-center">
            <button
              type="button"
              onClick={() => setIsOpen(!isOpen)}
              aria-label={isOpen ? "Close menu" : "Open menu"}
              aria-expanded={isOpen}
              className="p-2 rounded-lg hover:bg-[#EDE9E2] text-[#1C1C1A] transition-colors duration-200"
            >
              {isOpen ? (
                <X size={24} aria-hidden="true" />
              ) : (
                <Menu size={24} aria-hidden="true" />
              )}
            </button>
          </div>
        </div>
      </nav>

      {isOpen &&<div
        ref={sidebarRef}
        className={`lg:hidden fixed top-[72px] right-0 h-[calc(100dvh-72px)] w-64 bg-[#F5F0E8]/95 backdrop-blur-md
            z-40 transition-transform duration-300 ease-in-out
            shadow-[-4px_0_24px_rgba(28,28,26,0.08)]
            flex flex-col justify-between
            ${isOpen ? "translate-x-0" : "translate-x-full"}`}
      >
        {/* Mobile view */}
        <ul className="flex flex-col gap-1 p-6">
          {(isLoggedIn ? privateLinks : publicLinks).map((link) => (
            <li onClick={() => setIsOpen(false)} key={link.path}>
              <NavLink
                to={link.path}
                className={({ isActive }) =>
                  `block px-3 py-2.5 rounded-lg jost text-sm font-medium transition-colors duration-200 ${
                    isActive
                      ? "bg-[#BF9A5E]/10 text-[#1C1C1A] border-l-2 border-[#BF9A5E]"
                      : "text-[#6B6460] hover:bg-[#EDE9E2] hover:text-[#1C1C1A]"
                  }`
                }
              >
                {link.name}
              </NavLink>
            </li>
          ))}
        </ul>
        <div className="p-6 border-t border-[#E2D9C4] flex flex-col gap-3">
          {isLoggedIn ? (
            <>
              <Button
                onClick={handleLogout}
                type="submit"
                children="LOGOUT"
                variant="transparent"
                className="w-full flex items-center justify-center gap-2"
              >
                <LogOut size={16} aria-hidden="true" />
                <span className="jost text-sm tracking-widest uppercase">
                  Logout
                </span>
              </Button>
            </>
          ) : (
            <>
              <Button
                onClick={() => {
                  navigate("/login");
                  setIsOpen(false);
                }}
                variant="transparent"
                className={"w-full"}
              >
                <span className="jost text-base">Sign In</span>
              </Button>

              <Button
                onClick={() => {
                  navigate("/signup");
                  setIsOpen(false);
                }}
                variant="primary"
                className={`w-full`}
              >
                <span className="jost text-base tracking-wide">
                  Get Started
                </span>
              </Button>
            </>
          )}
        </div>
      </div>}
    </>
  );
}

export default Navbar;

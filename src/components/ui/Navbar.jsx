import { useState, useRef, useEffect } from "react";
import Button from "./Button";
import { Menu, X, LogOut } from "lucide-react";
import { NavLink, useNavigate } from "react-router-dom";
import Logo from "./Logo";
import { useDispatch, useSelector } from "react-redux";
import { logout } from "../../store/slices/authSlice";
import { getToken, removeToken } from "../../utils/accessTokenStorage";

function Navbar() {
    const dispatch = useDispatch()
    const navigate = useNavigate();
    const [isOpen, setIsOpen] = useState(false);
    const sidebarRef = useRef(null);

    const { user } = useSelector(state => state.auth)
    const isLoggedIn = !!user || !!getToken()


    const publicLinks = [
        { name: 'Home', path: '/' },
        // { name: 'Our story', path: '/ourstory' },
        { name: 'Support', path: '/support' }
    ];
    const privateLinks = [
        { name: 'Dashboard', path: '/dashboard' },
        { name: 'Wardrobe', path: '/wardrobe' },
        { name: 'Outfit Generate', path: '/generate_outfit' },
        { name: 'Profile', path: '/profile' },
        { name: 'History', path: '/history' },
        { name: 'Support', path: '/support' },
        { name: 'Pricing', path: '/pricing' }
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
                setIsOpen(false);
            }
        };

        window.addEventListener("resize", handleResize);

        return () => {
            window.removeEventListener("resize", handleResize);
        };
    }, []);

    const handleLogout = async () => {
        await dispatch(logout())
        dispatch({ type: 'auth/logout/fulfilled' })
        navigate('/login', { replace: true })
    }

    return (
        <>
            <nav className="bg-[#faf2e5]/80 backdrop-blur-sm shadow-md sticky top-0 w-full z-50">

                <div className="min-full mx-auto px-6 py-4 flex justify-between items-center">

                    <div onClick={() => navigate('/')} className="cursor-pointer">
                        <Logo />
                    </div>
                    {/* Desktop view */}
                    <ul className="hidden lg:flex gap-7 text-gray-700 font-medium">

                        {(isLoggedIn ? privateLinks : publicLinks).map((link) => (
                            <li key={link.path}>
                                <NavLink to={link.path}
                                    className={({ isActive }) => `pb-1 transition-colors duration-200 ${isActive
                                        ? "border-b-2 border-gray-700"
                                        : "hover: text-black"
                                        }`}
                                >{link.name}</NavLink>

                            </li>
                        ))}
                    </ul>
                    {/* LogOut option for Logged In user  */}

                    <div className="hidden lg:flex gap-4 ">
                        {isLoggedIn ? (
                            <>
                                <Button
                                    onClick={handleLogout}
                                    type="submit"
                                    children="LOGOUT"
                                    variant="transparent"
                                    className="flex items-center gap-2"
                                >
                                    <LogOut size={18} />
                                    LOGOUT
                                </Button>

                            </>
                        ) : (
                            <>
                                <Button
                                    type={'button'}
                                    children="Sign In"
                                    variant="transparent"
                                    onClick={() => navigate('/login')}
                                />

                                <Button
                                    type="button"
                                    children="Get Start"
                                    variant="primary"
                                    onClick={() => navigate('/signup')}
                                />
                            </>
                        )}

                    </div>

                    <div className="lg:hidden flex items-center">
                        <button
                            onClick={() => setIsOpen(!isOpen)}
                            className="p-2 rounded-md hover:bg-gray-200 transition-colors duration-200"
                        >
                            {isOpen ? <X size={24} /> : <Menu size={24} />}
                        </button>
                    </div>

                </div>
            </nav>

            {isOpen && (
                <div
                    className="fixed inset-0 bg-black/30 z-50"
                    onClick={() => setIsOpen(false)}
                />
            )}

            <div
                ref={sidebarRef}
                className={`lg:hidden fixed  right-0 h-screen w-55 bg-[#faf2e5]/80 backdrop-blur-md p-6 
                z-60 transform transition-transform duration-300 shadow-lg flex flex-col justify-between 
                ${isOpen ? "translate-x-0" : "translate-x-full"}`}
            >

                {/* Mobile view */}
                <ul className="flex flex-col gap-6 text-gray-700 font-medium ">

                    {(isLoggedIn ? privateLinks : publicLinks).map((link) => (
                        <li onClick={() => setIsOpen(false)} key={link.path}>
                            <NavLink to={link.path}

                                className={({ isActive }) =>
                                    `pb-1 transition-colors duration-200 ${isActive
                                        ? "border-b-2 border-gray-700"
                                        : "text-black"
                                    }`}>{link.name}</NavLink>
                        </li>
                    ))}

                </ul>
                <div className="mb-15 pt-2 border-t border-[#c0c0b391] text-center">
                    {isLoggedIn ? (
                        <>
                            <Button
                                type="submit"
                                children="LOGOUT"
                                variant="transparent"
                                className="flex items-center gap-2"
                            >
                                <LogOut size={18} />
                                LOGOUT
                            </Button>
                        </>
                    ) : (
                        <>
                            <Button
                                children="Sign In"
                                variant="transparent"
                            />

                            <Button
                                children="Get Start"
                                variant="primary"
                            />
                        </>
                    )}
                </div>

            </div>
        </>
    );
}

export default Navbar;
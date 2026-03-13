import { useState, useRef, useEffect } from "react";
import Button from "./Button";
import { Menu, X } from "lucide-react";
import Card from "./Card";
import Logo from "./Logo";

function Navbar() {
    const [isOpen, setIsOpen] = useState(false);
    const sidebarRef = useRef();

    // Close sidebar when clicking outside
    useEffect(() => {
        const handleClickOutside = (event) => {
            if (sidebarRef.current && !sidebarRef.current.contains(event.target)) {
                setIsOpen(false);
            }
        };

        if (isOpen) document.addEventListener("mousedown", handleClickOutside);
        return () => document.removeEventListener("mousedown", handleClickOutside);
    }, [isOpen]);

    return (
        <div className="z-50 sticky top-0 w-full">
            <nav className="bg-[#faf2e5]/80 backdrop-blur-sm shadow-md w-full">
                <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
                    {/* Logo */}
                    <div>
                        <Logo />
                    </div>

                    {/* Desktop Menu */}
                    <ul className="hidden md:flex gap-8 text-gray-700 font-medium work-sans">
                        <li className="hover:text-black cursor-pointer transition-colors duration-200">Home</li>
                        <li className="hover:text-black cursor-pointer transition-colors duration-200">Our Story</li>
                        <li className="hover:text-black cursor-pointer transition-colors duration-200">Support</li>
                    </ul>

                    {/* Desktop Buttons */}
                    <div className="hidden md:flex gap-4">
                        <Button variant="whiten" className="jost font-medium ">Sign In</Button>
                        <Button

                            className="jost font-semibold transition-colors duration-200"
                        >Get Start</Button>
                    </div>

                    {/* Mobile Menu Button */}
                    <div className="md:hidden flex items-center z-40">
                        <button
                            onClick={() => setIsOpen(!isOpen)}
                            className="focus:outline-none p-2 rounded-md hover:bg-gray-200 transition-colors duration-200"
                        >
                            {isOpen ? <X size={24} /> : <Menu size={24} />}
                        </button>
                    </div>
                </div>

                {/* Mobile Menu */}
                {isOpen && <div
                    ref={sidebarRef}
                    className={`md:hidden fixed top-18 right-0 h-screen w-[200px] bg-[#faf2e5]/80 backdrop-blur-md p-6 
                    z-50 transform transition-transform duration-300 
                    ${isOpen ? "translate-x-0" : "translate-x-full"} flex flex-col justify-start shadow-lg rounded-l-lg`}
                >
                    <ul className="flex flex-col gap-6 text-gray-700 font-medium mt-5">
                        {/* Add hover effects: color + scale + smooth transition */}
                        <li className="hover:text-black hover:scale-105 cursor-pointer transition-transform transition-colors duration-200">
                            Home
                        </li>

                        <li className="hover:text-black hover:scale-105 cursor-pointer transition-transform transition-colors duration-200">
                            Our Story
                        </li>
                        <li className="hover:text-black hover:scale-105 cursor-pointer  transition-transform transition-colors duration-200">
                            Support
                        </li>
                        <li className="flex flex-col justify-center sticky right-0 bottom-0">
                            <Button variant="whiten" className="jost font-medium ">Sign In</Button>
                            <Button

                                className="jost font-semibold transition-colors duration-200"
                            >Get Start</Button>
                        </li>
                    </ul>
                </div>}
            </nav>

        </div>
    );
}

export default Navbar;
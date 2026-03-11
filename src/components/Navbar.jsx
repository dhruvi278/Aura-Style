import { useState, useRef, useEffect } from "react";
import Button from "./Button";
import { Menu, X } from "lucide-react";
import Card from "./Card";

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
        <div>
            <nav className="bg-[#faf2e5]/80 backdrop-blur-sm shadow-md fixed w-full z-50">
                <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
                    {/* Logo */}
                    <div>
                        <h2 className="text-xl font-bold">AuraStyle</h2>
                    </div>

                    {/* Desktop Menu */}
                    <ul className="hidden md:flex gap-8 text-gray-700 font-medium">
                        <li className="hover:text-black cursor-pointer transition-colors duration-200">Home</li>
                        <li className="hover:text-black cursor-pointer transition-colors duration-200">Our Story</li>
                        <li className="hover:text-black cursor-pointer transition-colors duration-200">Support</li>
                    </ul>

                    {/* Desktop Buttons */}
                    <div className="hidden md:flex gap-4">
                        <Button text="Sign In" className="hover:underline cursor-pointer transition-colors duration-200" />
                        <Button
                            text="Get Start"
                            className="hover:cursor-pointer bg-black rounded-3xl px-5 py-2 text-white hover:bg-gray-900 transition-colors duration-200"
                        />
                    </div>

                    {/* Mobile Menu Button */}
                    <div className="md:hidden flex items-center">
                        <button
                            onClick={() => setIsOpen(!isOpen)}
                            className="focus:outline-none p-2 rounded-md hover:bg-gray-200 transition-colors duration-200"
                        >
                            {isOpen ? <X size={24} /> : <Menu size={24} />}
                        </button>
                    </div>
                </div>

                {/* Mobile Menu */}
                <div
                    ref={sidebarRef}
                    className={`md:hidden fixed right-0 h-screen w-[200px] bg-[#faf2e5]/80 backdrop-blur-md p-6 
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
                        <li>
                            <Button
                                text="Sign In"
                                className="text-gray-700 font-medium hover:text-black hover:scale-105 cursor-pointer  transition-transform transition-colors duration-200 "
                            />
                        </li>
                        <li>
                            <Button
                                text="Get Start"
                                className="text-gray-700 font-medium  rounded-3xl  text-black hhover:text-black hover:scale-105 cursor-pointer  transition-transform transition-colors duration-200"
                            />
                        </li>
                    </ul>

                    <div className="flex flex-col gap-4 mt-8">


                    </div>
                </div>
            </nav>
            <div>
                {/* <Card /> */}
            </div>
        </div>
    );
}

export default Navbar;
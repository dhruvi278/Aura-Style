import { useState, useRef, useEffect } from "react";
import Button from "./Button";
import { Menu, X } from "lucide-react";

function Navbar() {
    const [isOpen, setIsOpen] = useState(false);
    const sidebarRef = useRef(null);

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

    return (
        <>
            <nav className="bg-[#faf2e5]/80 backdrop-blur-sm shadow-md sticky top-0 w-full z-50">

                <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">

                    <h2 className="text-xl font-bold">AuraStyle</h2>

                    <ul className="hidden md:flex gap-8 text-gray-700 font-medium">
                        <li className="hover:text-black cursor-pointer transition-colors duration-200">
                            Home
                        </li>
                        <li className="hover:text-black cursor-pointer transition-colors duration-200">
                            Our Story
                        </li>
                        <li className="hover:text-black cursor-pointer transition-colors duration-200">
                            Support
                        </li>
                    </ul>

                    <div className="hidden md:flex gap-4">
                        <Button
                            variant="whiten"
                            className="hover:underline cursor-pointer transition-colors duration-200 jost"
                        >Sign In</Button>

                        <Button
                            className="bg-black rounded-3xl px-5 py-2 text-white hover:bg-gray-900 cursor-pointer transition-colors duration-200 jost"
                        >Get Start</Button>
                    </div>

                    <div className="md:hidden flex items-center">
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
                    className="fixed inset-0 bg-black/30 z-40"
                    onClick={() => setIsOpen(false)}
                />
            )}

            <div
                ref={sidebarRef}
                className={`md:hidden fixed  right-0 h-screen w-[220px] bg-[#faf2e5]/90 backdrop-blur-md p-6 
                z-50 transform transition-transform duration-300 shadow-lg 
                ${isOpen ? "translate-x-0" : "translate-x-full"}`}
            >

                <ul className="flex flex-col gap-6 text-gray-700 font-medium mt-10">

                    <li className="hover:text-black hover:scale-105 cursor-pointer transition-all duration-200">
                        Home
                    </li>

                    <li className="hover:text-black hover:scale-105 cursor-pointer transition-all duration-200">
                        Our Story
                    </li>

                    <li className="hover:text-black hover:scale-105 cursor-pointer transition-all duration-200">
                        Support
                    </li>

                    <li>
                        <Button
                            text="Sign In"
                            className="hover:scale-105 transition-all duration-200"
                        />
                    </li>

                    <li>
                        <Button
                            text="Get Start"
                            className="bg-black text-white rounded-3xl px-5 py-2 hover:bg-gray-900 hover:scale-105 transition-all duration-200"
                        />
                    </li>

                </ul>

            </div>
        </>
    );
}

export default Navbar;




// Navbar.jsx – fixed & correct (no nested fixed)
import { useState } from "react";
import H2S from "../../assets/H2S.svg";

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);
    const toggleMenu = () => setIsOpen(!isOpen);

    return (
        <>
            {/* Single fixed navbar, centered, pill shape, white bg */}
            <nav
                className="fixed top-3 md:top-6 left-1/2 -translate-x-1/2 
                   w-[60%] max-w-6xl h-12 md:h-18 
                   rounded-full 
                   px-4 md:pl-12 md:pr-6 
                   bg-white shadow-md border border-gray-100 
                   flex items-center space-between 
                   z-50"
                role="navigation"
            >
                {/* Logo */}
                <div className="shrink-0 pr-6.5">
                    <img src={H2S} alt="H2S Logo" className="h-5 md:h-6 w-auto" />
                </div>

                {/* Desktop links */}
                <div className="hidden md:flex items-center gap-4 lg:gap-7.5 font-medium text-gray-700 whitespace-nowrap">
                    <a href="#about" className="hover:text-indigo-600 transition">About</a>
                    <a href="#how-to-participate" className="hover:text-indigo-600 transition">How to participate?</a>
                    <a href="#challenges" className="hover:text-indigo-600 transition">Challenges</a>
                    <a href="#schedules" className="hover:text-indigo-600 transition">Schedules</a>
                    <a href="#rewards" className="hover:text-indigo-600 transition">Rewards</a>
                    <a href="#faqs" className="hover:text-indigo-600 transition">FAQs</a>
                    <a
                        href="#signin"
                        className="inline-flex items-center justify-center bg-linear-to-r from-indigo-600 to-purple-600 hover:from-indigo-500 hover:to-purple-500 text-white font-semibold shadow-xl transition-all duration-300 hover:scale-105 active:scale-100
                        rounded-4xl
                         h-12          
                        w-25             
                                       
                         "
                    >
                        Sign In
                    </a>
                </div>

                {/* Mobile menu button */}
                <div className="md:hidden">
                    <button onClick={toggleMenu} className="text-gray-800 focus:outline-none">
                        {isOpen ? (
                            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                            </svg>
                        ) : (
                            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                            </svg>
                        )}
                    </button>
                </div>
            </nav>

            {/* Mobile overlay menu (only shown when isOpen true) */}
            {isOpen && (
                <div className="md:hidden fixed inset-0 z-40 bg-white/95 backdrop-blur-sm">
                    <div className="flex flex-col items-center justify-center h-full space-y-6 px-6">
                        <a href="#about" onClick={toggleMenu} className="text-xl text-gray-800 hover:text-indigo-600">About</a>
                        <a href="#how-to-participate" onClick={toggleMenu} className="text-xl text-gray-800 hover:text-indigo-600">How to participate?</a>
                        <a href="#challenges" onClick={toggleMenu} className="text-xl text-gray-800 hover:text-indigo-600">Challenges</a>
                        <a href="#schedules" onClick={toggleMenu} className="text-xl text-gray-800 hover:text-indigo-600">Schedules</a>
                        <a href="#rewards" onClick={toggleMenu} className="text-xl text-gray-800 hover:text-indigo-600">Rewards</a>
                        <a href="#faqs" onClick={toggleMenu} className="text-xl text-gray-800 hover:text-indigo-600">FAQs</a>
                        <a href="#signin" onClick={toggleMenu} className="text-xl text-gray-800 hover:text-indigo-600">Sign In</a>
                    </div>
                </div>
            )}
        </>
    );
};

export default Navbar;
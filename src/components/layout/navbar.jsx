import React from "react";
import { useState, useEffect, useCallback, useRef } from "react";
import H2S from "../../assets/H2S.svg";

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);
    const menuRef = useRef(null);

    const toggleMenu = useCallback(() => setIsOpen(prev => !prev), []);
    const closeMenu = useCallback(() => setIsOpen(false), []);

    useEffect(() => {
        if (isOpen) {
            document.body.style.overflow = 'hidden';
        } else {
            document.body.style.overflow = '';
        }
        return () => { document.body.style.overflow = ''; };
    }, [isOpen]);

    useEffect(() => {
        const handleEsc = (e) => {
            if (e.key === 'Escape') closeMenu();
        };
        document.addEventListener('keydown', handleEsc);
        return () => document.removeEventListener('keydown', handleEsc);
    }, [closeMenu]);

    const handleOverlayClick = (e) => {
        if (menuRef.current && !menuRef.current.contains(e.target)) {
            closeMenu();
        }
    };

    return (
        <>
            <nav
                className="fixed top-3 md:top-6 left-1/2 -translate-x-1/2 
                           w-[95%] sm:w-[90%] md:w-[85%] lg:w-[75%] xl:w-[70%] 2xl:w-[60%] max-w-6xl 
                           h-12 md:h-16 
                           rounded-full 
                           px-4 md:pl-6 md:pr-4 
                           bg-white shadow-md border border-gray-100 
                           flex items-center justify-between 
                           z-50"
                role="navigation"
                aria-label="Main navigation"
            >
                <div className="shrink-0 pr-3 md:pr-5">
                    <button
                        onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
                        className="rounded-md"
                        aria-label="Scroll to top"
                    >
                        <img
                            src={H2S}
                            alt="H2S Logo"
                            className="h-5 md:h-7 w-auto cursor-pointer"
                            loading="eager"
                        />
                    </button>
                </div>

                {/* Desktop links - responsive gaps */}
                <div className="hidden md:flex items-center gap-2 lg:gap-4 xl:gap-6 font-medium text-gray-700 whitespace-nowrap">
                    <a href="#about" className="hover:text-indigo-600 transition-colors duration-200 text-sm lg:text-base">About</a>
                    <a href="#how-to-participate" className="hover:text-indigo-600 transition-colors duration-200 text-sm lg:text-base">How to participate?</a>
                    <a href="#challenges" className="hover:text-indigo-600 transition-colors duration-200 text-sm lg:text-base">Challenges</a>
                    <a href="#schedules" className="hover:text-indigo-600 transition-colors duration-200 text-sm lg:text-base">Schedules</a>
                    <a href="#rewards" className="hover:text-indigo-600 transition-colors duration-200 text-sm lg:text-base">Rewards</a>
                    <a href="#faqs" className="hover:text-indigo-600 transition-colors duration-200 text-sm lg:text-base">FAQs</a>
                    
                    {/* Sign In button - fixed width issue */}
                    <a
                        href="#signin"
                        className="inline-flex items-center justify-center 
                                   bg-gradient-to-r from-indigo-600 to-purple-600 
                                   hover:from-indigo-500 hover:to-purple-500 
                                   text-white font-semibold 
                                   shadow-md hover:shadow-xl 
                                   transition-all duration-300 
                                   hover:scale-105 active:scale-100
                                   rounded-full h-9 md:h-10 px-3 lg:px-4 xl:px-5 text-sm lg:text-base whitespace-nowrap"
                    >
                        Sign In
                    </a>
                </div>

                {/* Mobile menu button */}
                <div className="md:hidden">
                    <button
                        onClick={toggleMenu}
                        className="text-gray-800 focus:outline-none focus:ring-2 focus:ring-indigo-500 rounded-md p-1"
                        aria-label={isOpen ? "Close menu" : "Open menu"}
                        aria-expanded={isOpen}
                    >
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

            {isOpen && (
                <div
                    className="md:hidden fixed inset-0 z-40 bg-white/95 backdrop-blur-sm transition-opacity duration-300"
                    onClick={handleOverlayClick}
                >
                    <div
                        ref={menuRef}
                        className="flex flex-col items-center justify-center h-full space-y-6 px-6"
                    >
                        <a href="#about" onClick={closeMenu} className="text-xl text-gray-800 hover:text-indigo-600 transition-colors">About</a>
                        <a href="#how-to-participate" onClick={closeMenu} className="text-xl text-gray-800 hover:text-indigo-600 transition-colors">How to participate?</a>
                        <a href="#challenges" onClick={closeMenu} className="text-xl text-gray-800 hover:text-indigo-600 transition-colors">Challenges</a>
                        <a href="#schedules" onClick={closeMenu} className="text-xl text-gray-800 hover:text-indigo-600 transition-colors">Schedules</a>
                        <a href="#rewards" onClick={closeMenu} className="text-xl text-gray-800 hover:text-indigo-600 transition-colors">Rewards</a>
                        <a href="#faqs" onClick={closeMenu} className="text-xl text-gray-800 hover:text-indigo-600 transition-colors">FAQs</a>
                        <a href="#signin" onClick={closeMenu} className="text-xl font-semibold bg-gradient-to-r from-indigo-600 to-purple-600 text-white px-6 py-2 rounded-full">Sign In</a>
                    </div>
                </div>
            )}
        </>
    );
};

export default React.memo(Navbar);
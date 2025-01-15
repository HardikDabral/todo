import React from 'react';
import { Menu, Search, LayoutGrid, Sun } from 'lucide-react';
import LogoImage from '../images/logo.png';
import Moon from '../images/moon.png';

const Navbar = ({ isDarkMode, toggleDarkMode }) => {
    return (
        <nav
            className={`w-full px-4 py-3 flex items-center justify-between fixed top-0 left-0 right-0 z-50 transition-colors duration-300 ${
                isDarkMode ? 'bg-[#242424]' : 'bg-white'
            }`}
        >
            <div className="flex items-center gap-4">
                <button
                    className={`p-2 rounded-lg ${
                        isDarkMode ? 'hover:bg-gray-700' : 'hover:bg-gray-100'
                    }`}
                >
                    <Menu className={`w-5 h-5 ${isDarkMode ? 'text-gray-300' : 'text-gray-600'}`} />
                </button>
                <div className="w-20 h-8">
                    <img src={LogoImage} alt="DoIt Logo" className="w-full h-full" />
                </div>
            </div>

            <div className="flex items-center gap-2">
                <button
                    className={`p-2 rounded-lg ${
                        isDarkMode ? 'hover:bg-gray-700' : 'hover:bg-gray-100'
                    }`}
                >
                    <Search className={`w-5 h-5 ${isDarkMode ? 'text-gray-300' : 'text-gray-600'}`} />
                </button>
                <button
                    className={`p-2 rounded-lg ${
                        isDarkMode ? 'hover:bg-gray-700' : 'hover:bg-gray-100'
                    }`}
                >
                    <LayoutGrid className={`w-5 h-5 ${isDarkMode ? 'text-gray-300' : 'text-gray-600'}`} />
                </button>
                <button
                    className={`p-2 rounded-lg ${
                        isDarkMode ? 'hover:bg-gray-700' : 'hover:bg-gray-100'
                    }`}
                    onClick={toggleDarkMode}
                >
                    {isDarkMode ? (
                        <Sun className="w-5 h-5 text-white" />
                    ) : (
                        <img src={Moon} alt="Moon Icon" className="w-5 h-5" />
                    )}
                </button>
            </div>
        </nav>
    );
};

export default Navbar;

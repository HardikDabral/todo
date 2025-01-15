import React, { useState } from 'react';
import Navbar from './component/Navbar';
import HomePage from './component/HomePage';
import './App.css';
import './index.css';

function App() {
    const [isDarkMode, setIsDarkMode] = useState(false);

    const toggleDarkMode = () => {
        setIsDarkMode(!isDarkMode);
    };

    return (
        <div className={`App ${isDarkMode ? 'bg-[#000000]' : 'bg-white'} min-h-screen`}>
            <Navbar isDarkMode={isDarkMode} toggleDarkMode={toggleDarkMode} />
            <HomePage isDarkMode={isDarkMode} />
        </div>
    );
}

export default App;

import React from 'react';
import { Sun, Moon } from 'lucide-react';

function Navbar({ darkMode, setDarkMode }) {
  return (
    <nav className="fixed w-full bg-white dark:bg-gray-800 shadow-md z-10">
      <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
        <div className="text-2xl font-bold tracking-wider">Tarun Juneja</div>
        <div className="flex items-center space-x-6">
          <a href="#home" className="hover:text-blue-500 transition">Home</a>
          <a href="#about" className="hover:text-blue-500 transition">About</a>
          <a href="#projects" className="hover:text-blue-500 transition">Projects</a>
          <a href="#skills" className="hover:text-blue-500 transition">Skills</a>
          <a href="#achievements" className="hover:text-blue-500 transition">Achievements</a>
          <a href="#contact" className="hover:text-blue-500 transition">Contact</a>
          <button
            onClick={() => setDarkMode(!darkMode)}
            className="ml-4 p-2 rounded-full bg-gray-100 dark:bg-gray-700 hover:bg-gray-200 dark:hover:bg-gray-600 transition"
            aria-label="Toggle Dark Mode"
          >
            {darkMode ? <Sun size={20} /> : <Moon size={20} />}
          </button>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;

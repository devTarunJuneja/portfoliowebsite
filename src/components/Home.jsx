import React, { useState, useEffect } from 'react';
import profile from '../assets/img.jpg';

const words = ['Front End Developer', 'AI/ML Enthusiast', 'Hackathon Winner'];

export default function Home() {
  const [wordIndex, setWordIndex] = useState(0);
  const [subIndex, setSubIndex] = useState(0);
  const [blink, setBlink] = useState(true);
  const [reverse, setReverse] = useState(false);

  // Typewriter logic
  useEffect(() => {
    if (subIndex === words[wordIndex].length + 1 && !reverse) {
      setTimeout(() => setReverse(true), 1000);
      return;
    }
    if (subIndex === 0 && reverse) {
      setReverse(false);
      setWordIndex((prev) => (prev + 1) % words.length);
      return;
    }
    const timeout = setTimeout(() => {
      setSubIndex((prev) => prev + (reverse ? -1 : 1));
    }, 150);
    return () => clearTimeout(timeout);
  }, [subIndex, wordIndex, reverse]);

  // Blinking cursor
  useEffect(() => {
    const blinkInterval = setInterval(() => setBlink((prev) => !prev), 500);
    return () => clearInterval(blinkInterval);
  }, []);

  return (
    <section
      id="home"
      className="min-h-screen flex flex-col-reverse lg:flex-row items-center justify-between px-6 lg:px-20 bg-white dark:bg-gray-900 py-8 lg:py-0"
    >
      {/* Left: Text */}
      <div className="w-full lg:w-1/2 text-center lg:text-left mt-8 lg:mt-0">
        <h1 className="text-4xl md:text-5xl font-extrabold mb-4 leading-tight">
          Hi, <br /> I'm <span className="text-blue-600">Tarun Juneja</span>
        </h1>

        <h2 className="text-xl md:text-2xl mb-4">
          <span className="text-gray-700 dark:text-gray-300">I'm a&nbsp;</span>
          <span className="text-blue-500 font-semibold">
            {words[wordIndex].substring(0, subIndex)}
            <span className="inline-block">{blink ? '|' : '\u00A0'}</span>
          </span>
        </h2>

        <p className="max-w-md mx-auto lg:mx-0 font-semibold text-gray-800 dark:text-gray-200 mb-6">
          I build responsive, user-friendly web applications using React, JavaScript, and Tailwind CSS—turning ideas into impactful digital experiences.
        </p>

        <a
          href="#contact"
          className="inline-block px-6 py-3 bg-blue-600 text-white rounded-lg shadow hover:bg-blue-700 transition"
        >
          Contact Me
        </a>
      </div>

      {/* Right: Image + blob */}
      <div className="w-full lg:w-1/2 flex justify-center lg:justify-center items-center relative mb-8 lg:mb-0 lg:pl-8">
        {/* Multiple blob backgrounds for impressive effect */}
        <div className="absolute w-72 h-72 sm:w-80 sm:h-80 lg:w-96 lg:h-96 bg-gradient-to-br from-blue-200 to-blue-300 dark:from-blue-800 dark:to-blue-900 rounded-full transform rotate-12 shadow-xl z-0 opacity-80" />
        <div className="absolute w-64 h-64 sm:w-72 sm:h-72 lg:w-80 lg:h-80 bg-gradient-to-tl from-purple-200 to-indigo-300 dark:from-purple-800 dark:to-indigo-900 rounded-full transform -rotate-6 translate-x-4 translate-y-4 shadow-lg z-0 opacity-60" />
        <div className="absolute w-56 h-56 sm:w-64 sm:h-64 lg:w-72 lg:h-72 bg-gradient-to-r from-cyan-200 to-blue-400 dark:from-cyan-800 dark:to-blue-700 rounded-full transform rotate-45 -translate-x-6 translate-y-2 shadow-md z-0 opacity-40" />
        
        {/* Profile image - moved slightly left */}
        <img
          src={profile}
          alt="Tarun Juneja"
          className="relative w-56 h-56 sm:w-64 sm:h-64 lg:w-72 lg:h-72 object-cover rounded-full shadow-2xl z-10 border-4 border-white dark:border-gray-800 transform hover:scale-105 transition-transform duration-300"
        />
      </div>
    </section>
  );
}
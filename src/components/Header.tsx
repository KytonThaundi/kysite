import React, { useState, useEffect } from 'react';
import { Menu, X, Moon, Sun, Home, Briefcase, User, Mail } from 'lucide-react';
import { useTheme } from '../hooks/useTheme';

const Header: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrollProgress, setScrollProgress] = useState(0);
  const { theme, toggleTheme } = useTheme();
  
  useEffect(() => {
    const handleScroll = () => {
      const totalScroll = document.documentElement.scrollHeight - window.innerHeight;
      const progress = (window.scrollY / totalScroll) * 100;
      setScrollProgress(progress);
    };
    
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const menuItems = [
    { icon: <Home className="w-5 h-5" />, label: 'Home', href: '#home' },
    { icon: <Briefcase className="w-5 h-5" />, label: 'Projects', href: '#projects' },
    { icon: <User className="w-5 h-5" />, label: 'About', href: '#about' },
    { icon: <Mail className="w-5 h-5" />, label: 'Contact', href: '#contact' }
  ];

  return (
    <div className="fixed right-16 top-1/2 -translate-y-1/2 z-50">
      <div className="relative">
        {/* Progress Circle */}
        <svg className="w-16 h-16 transform -rotate-90">
          <circle
            className="text-gray-200 dark:text-gray-700"
            strokeWidth="2"
            stroke="currentColor"
            fill="transparent"
            r="30"
            cx="32"
            cy="32"
          />
          <circle
            className="text-purple-600 dark:text-purple-400 transition-all duration-300"
            strokeWidth="2"
            strokeDasharray={188.4}
            strokeDashoffset={188.4 - (scrollProgress * 188.4) / 100}
            strokeLinecap="round"
            stroke="currentColor"
            fill="transparent"
            r="30"
            cx="32"
            cy="32"
          />
        </svg>

        {/* Menu Toggle Button */}
        <button
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 p-3 bg-white dark:bg-gray-800 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-110"
          aria-label={isMenuOpen ? 'Close menu' : 'Open menu'}
        >
          {isMenuOpen ? (
            <X className="w-5 h-5 text-purple-600 dark:text-purple-400" />
          ) : (
            <Menu className="w-5 h-5 text-purple-600 dark:text-purple-400" />
          )}
        </button>

        {/* Circular Menu */}
        <div className={`absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 transition-all duration-500 ${
          isMenuOpen ? 'scale-100 opacity-100' : 'scale-0 opacity-0'
        }`}>
          {menuItems.map((item, index) => {
            const angle = (index * 360) / menuItems.length;
            const radius = 55; // Reduced radius further
            const x = Math.cos((angle - 90) * (Math.PI / 180)) * radius;
            const y = Math.sin((angle - 90) * (Math.PI / 180)) * radius;
            
            return (
              <a
                key={item.label}
                href={item.href}
                onClick={() => setIsMenuOpen(false)}
                className="absolute p-3 bg-white dark:bg-gray-800 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-110 group"
                style={{
                  transform: `translate(${x}px, ${y}px)`,
                }}
                aria-label={item.label}
              >
                <span className="relative flex items-center">
                  {item.icon}
                  <span className="absolute right-full mr-2 px-2 py-1 bg-gray-900 dark:bg-gray-700 text-white text-sm rounded opacity-0 group-hover:opacity-100 transition-opacity duration-300 whitespace-nowrap">
                    {item.label}
                  </span>
                </span>
              </a>
            );
          })}
        </div>

        {/* Theme Toggle */}
        <button
          onClick={toggleTheme}
          className="absolute -left-16 top-1/2 -translate-y-1/2 p-3 bg-white dark:bg-gray-800 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-110"
          aria-label={theme === 'dark' ? 'Switch to light mode' : 'Switch to dark mode'}
        >
          {theme === 'dark' ? (
            <Sun className="w-5 h-5 text-yellow-400" />
          ) : (
            <Moon className="w-5 h-5 text-gray-600" />
          )}
        </button>
      </div>
    </div>
  );
};

export default Header;
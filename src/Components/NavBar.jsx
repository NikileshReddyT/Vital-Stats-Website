import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

const links = [
  { name: "Home", path: "/" },
  { name: "How It Works", path: "/how-it-works" },
  { name: "Features", path: "/features" },
  { name: "Contact", path: "/contact" },
  { name: "Join Team", path: "/join-team" }
];

const NavBar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  // Close mobile menu on route change
  useEffect(() => {
    setIsOpen(false);
  }, [location.pathname]);

  useEffect(() => {
    const handleScroll = () => {
      const offset = window.scrollY;
      setScrolled(offset > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleLinkClick = () => {
    setIsOpen(false);
  };

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      scrolled ? 'bg-white/10 backdrop-blur-md shadow-lg' : 'bg-transparent'
    }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <img src={"/navbar.png"} alt="NutriTech Logo" className="h-10" />
          <Link to="/" className="flex-shrink-0" onClick={handleLinkClick}>
            <motion.span 
              className="text-2xl font-bold bg-gradient-to-r from-red-600 to-red-400 bg-clip-text text-transparent"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              
            </motion.span>
            </Link>
          <div className="hidden md:flex md:items-center md:space-x-8">
            {links.map((link) => {
              const isActive = location.pathname === link.path;
              return (
                <Link
                  key={link.name}
                  to={link.path}
                  className="relative group"
                  onClick={handleLinkClick}
                >
                  <span className={`text-sm font-medium transition-colors duration-300 ${
                    isActive ? 'text-red-600' : 'text-gray-600 hover:text-red-600'
                  }`}>
                    {link.name}
                  </span>
                  {/* Animated underline */}
                  <span className={`absolute -bottom-1 left-0 w-full h-0.5 bg-gradient-to-r from-red-600 to-red-400 transform origin-left transition-transform duration-300 ${
                    isActive ? 'scale-x-100' : 'scale-x-0 group-hover:scale-x-100'
                  }`} />
                </Link>
              );
            })}
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <motion.button
              whileTap={{ scale: 0.95 }}
              onClick={() => setIsOpen(!isOpen)}
              className="inline-flex items-center justify-center p-2 rounded-md text-gray-600 hover:text-red-600 
                hover:bg-red-50 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-red-500 transition-colors"
            >
              <span className="sr-only">Open main menu</span>
              {isOpen ? <X className="block h-6 w-6" /> : <Menu className="block h-6 w-6" />}
            </motion.button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.2 }}
            className="md:hidden bg-white/90 backdrop-blur-lg shadow-lg"
          >
            <div className="px-2 pt-2 pb-3 space-y-1">
              {links.map((link) => (
                <Link
                  key={link.name}
                  to={link.path}
                  onClick={handleLinkClick}
                  className="block w-full px-3 py-2 text-base font-medium text-gray-700 hover:text-red-600 hover:bg-red-50 rounded-md transition-all duration-300"
                >
                  {link.name}
                </Link>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default NavBar;
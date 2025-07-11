import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, ChevronDown } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
  const location = useLocation();

  const products = [
    { name: 'Machine Room Elevator', path: '/machine-room-lift' },
    { name: 'MRL Elevator', path: '/mrl-elevator' },
    { name: 'Hydraulic Passenger Lift', path: '/hydraulic-passenger-lift' },
    { name: 'Car Lift', path: '/car-lift' },
    { name: 'Hydraulic Goods Lift', path: '/hydraulic-goods-lift' },
  ];

  const services = [
    { name: 'AMC Services', path: '/amc-services' },
    { name: 'Lift Modernization', path: '/lift-modernization' },
  ];

  const dropdownVariants = {
    hidden: { opacity: 0, y: 10, scale: 0.95 },
    visible: { opacity: 1, y: 0, scale: 1, transition: { duration: 0.2, ease: 'easeOut' } },
    exit: { opacity: 0, y: 10, scale: 0.95, transition: { duration: 0.15 } },
  };

  const mobileMenuVariants = {
    hidden: { opacity: 0, height: 0 },
    visible: {
      opacity: 1,
      height: 'auto',
      transition: {
        duration: 0.3,
        ease: 'easeOut',
        when: 'beforeChildren',
        staggerChildren: 0.05
      }
    },
    exit: {
      opacity: 0,
      height: 0,
      transition: {
        duration: 0.2,
        ease: 'easeIn'
      }
    },
  };

  const mobileMenuItemVariants = {
    hidden: { opacity: 0, x: -10 },
    visible: { opacity: 1, x: 0 },
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-md shadow-sm">
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <Link to="/" className="flex items-start">
            <img src="/logo.jpg" alt="Peak Elevator Group Logo" className="h-12 w-auto" />
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            <Link
              to="/"
              className={`text-gray-700 hover:text-blue-600 transition-colors duration-200 ${
                location.pathname === '/' ? 'text-blue-600 font-medium' : ''
              }`}
            >
              Home
            </Link>

            {/* Products Dropdown */}
            <div
              className="relative"
              onMouseEnter={() => setActiveDropdown('products')}
              onMouseLeave={() => setActiveDropdown(null)}
            >
              <button className="flex items-center text-gray-700 hover:text-blue-600 transition-colors duration-200">
                Products <ChevronDown className="ml-1 w-4 h-4" />
              </button>
              <AnimatePresence>
                {activeDropdown === 'products' && (
                  <motion.div
                    variants={dropdownVariants}
                    initial="hidden"
                    animate="visible"
                    exit="exit"
                    className="absolute top-full left-0 mt-3 w-64 bg-white rounded-xl shadow-lg border border-gray-100/50 py-2 overflow-hidden"
                  >
                    {products.map((product) => (
                      <Link
                        key={product.path}
                        to={product.path}
                        className="block px-4 py-2.5 text-gray-700 hover:bg-blue-50 hover:text-blue-600 transition-colors duration-150"
                      >
                        {product.name}
                      </Link>
                    ))}
                  </motion.div>
                )}
              </AnimatePresence>
            </div>

            {/* Services Dropdown */}
            <div
              className="relative"
              onMouseEnter={() => setActiveDropdown('services')}
              onMouseLeave={() => setActiveDropdown(null)}
            >
              <button className="flex items-center text-gray-700 hover:text-blue-600 transition-colors duration-200">
                Services <ChevronDown className="ml-1 w-4 h-4" />
              </button>
              <AnimatePresence>
                {activeDropdown === 'services' && (
                  <motion.div
                    variants={dropdownVariants}
                    initial="hidden"
                    animate="visible"
                    exit="exit"
                    className="absolute top-full left-0 mt-3 w-48 bg-white rounded-xl shadow-lg border border-gray-100/50 py-2 overflow-hidden"
                  >
                    {services.map((service) => (
                      <Link
                        key={service.path}
                        to={service.path}
                        className="block px-4 py-2.5 text-gray-700 hover:bg-blue-50 hover:text-blue-600 transition-colors duration-150"
                      >
                        {service.name}
                      </Link>
                    ))}
                  </motion.div>
                )}
              </AnimatePresence>
            </div>

            <Link
              to="/contact"
              className={`text-gray-700 hover:text-blue-600 transition-colors duration-200 ${
                location.pathname === '/contact' ? 'text-blue-600 font-medium' : ''
              }`}
            >
              Contact
            </Link>

            {/* Book Free Site Visit → Goes to Contact Page */}
            <Link to="/contact">
              <button className="bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700 transition-colors duration-200 font-medium">
                Book Free Site Visit
              </button>
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden p-2 rounded-lg hover:bg-gray-100 transition-colors duration-200"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Navigation */}
        <AnimatePresence>
          {isMenuOpen && (
            <motion.div
              variants={mobileMenuVariants}
              initial="hidden"
              animate="visible"
              exit="exit"
              className="md:hidden bg-white border-t border-gray-100/50"
            >
              <div className="py-4 space-y-2">
                <motion.div variants={mobileMenuItemVariants}>
                  <Link to="/" className="block px-4 py-2 text-gray-700 hover:bg-blue-50 transition-colors duration-150">Home</Link>
                </motion.div>
                <motion.div variants={mobileMenuItemVariants} className="px-4 py-2">
                  <div className="text-gray-900 font-medium mb-2">Products</div>
                  {products.map((product) => (
                    <motion.div key={product.path} variants={mobileMenuItemVariants}>
                      <Link
                        to={product.path}
                        className="block pl-4 py-1.5 text-gray-600 hover:text-blue-600 transition-colors duration-150"
                      >
                        {product.name}
                      </Link>
                    </motion.div>
                  ))}
                </motion.div>
                <motion.div variants={mobileMenuItemVariants} className="px-4 py-2">
                  <div className="text-gray-900 font-medium mb-2">Services</div>
                  {services.map((service) => (
                    <motion.div key={service.path} variants={mobileMenuItemVariants}>
                      <Link
                        to={service.path}
                        className="block pl-4 py-1.5 text-gray-600 hover:text-blue-600 transition-colors duration-150"
                      >
                        {service.name}
                      </Link>
                    </motion.div>
                  ))}
                </motion.div>
                <motion.div variants={mobileMenuItemVariants}>
                  <Link to="/contact" className="block px-4 py-2 text-gray-700 hover:bg-blue-50 transition-colors duration-150">Contact</Link>
                </motion.div>
                <motion.div variants={mobileMenuItemVariants} className="px-4 pt-2">
                  <Link to="/contact">
                    <button className="w-full bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700 transition-colors duration-200 font-medium">
                      Book Free Site Visit
                    </button>
                  </Link>
                </motion.div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </nav>
    </header>
  );
};

export default Header;

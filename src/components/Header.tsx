import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, ChevronDown } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

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

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      isScrolled ? 'bg-white/95 backdrop-blur-md shadow-lg' : 'bg-transparent'
    }`}>
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-2">
            <div className="w-10 h-10 bg-gradient-to-br from-blue-600 to-blue-800 rounded-lg flex items-center justify-center">
              <span className="text-white font-bold text-lg">P</span>
            </div>
            <span className="text-xl font-bold text-gray-900">Peak Elevator Group</span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            <Link 
              to="/" 
              className={`text-gray-700 hover:text-blue-600 transition-colors ${
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
              <button className="flex items-center text-gray-700 hover:text-blue-600 transition-colors">
                Products <ChevronDown className="ml-1 w-4 h-4" />
              </button>
              <AnimatePresence>
                {activeDropdown === 'products' && (
                  <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: 10 }}
                    className="absolute top-full left-0 mt-2 w-64 bg-white rounded-lg shadow-xl border border-gray-100 py-2"
                  >
                    {products.map((product) => (
                      <Link
                        key={product.path}
                        to={product.path}
                        className="block px-4 py-2 text-gray-700 hover:bg-blue-50 hover:text-blue-600 transition-colors"
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
              <button className="flex items-center text-gray-700 hover:text-blue-600 transition-colors">
                Services <ChevronDown className="ml-1 w-4 h-4" />
              </button>
              <AnimatePresence>
                {activeDropdown === 'services' && (
                  <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: 10 }}
                    className="absolute top-full left-0 mt-2 w-48 bg-white rounded-lg shadow-xl border border-gray-100 py-2"
                  >
                    {services.map((service) => (
                      <Link
                        key={service.path}
                        to={service.path}
                        className="block px-4 py-2 text-gray-700 hover:bg-blue-50 hover:text-blue-600 transition-colors"
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
              className={`text-gray-700 hover:text-blue-600 transition-colors ${
                location.pathname === '/contact' ? 'text-blue-600 font-medium' : ''
              }`}
            >
              Contact
            </Link>

            <button className="bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700 transition-colors font-medium">
              Book Free Site Visit
            </button>
          </div>

          {/* Mobile menu button */}
          <button
            className="md:hidden p-2"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Navigation */}
        <AnimatePresence>
          {isMenuOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              className="md:hidden bg-white border-t border-gray-100"
            >
              <div className="py-4 space-y-2">
                <Link to="/" className="block px-4 py-2 text-gray-700 hover:bg-blue-50">Home</Link>
                <div className="px-4 py-2">
                  <div className="text-gray-900 font-medium mb-2">Products</div>
                  {products.map((product) => (
                    <Link
                      key={product.path}
                      to={product.path}
                      className="block pl-4 py-1 text-gray-600 hover:text-blue-600"
                    >
                      {product.name}
                    </Link>
                  ))}
                </div>
                <div className="px-4 py-2">
                  <div className="text-gray-900 font-medium mb-2">Services</div>
                  {services.map((service) => (
                    <Link
                      key={service.path}
                      to={service.path}
                      className="block pl-4 py-1 text-gray-600 hover:text-blue-600"
                    >
                      {service.name}
                    </Link>
                  ))}
                </div>
                <Link to="/contact" className="block px-4 py-2 text-gray-700 hover:bg-blue-50">Contact</Link>
                <div className="px-4 pt-2">
                  <button className="w-full bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700 transition-colors font-medium">
                    Book Free Site Visit
                  </button>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </nav>
    </header>
  );
};

export default Header;
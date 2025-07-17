import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X } from 'lucide-react';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    setIsMenuOpen(false); // Close menu on route change
  }, [location]);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white shadow-sm border-b border-bottle-green-solid/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <Link to="/" className="text-xl font-bold text-bottle-green-solid">
            Lovable Elevators
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden md:flex space-x-6">
            <Link to="/" className="text-sm font-medium text-bottle-green-solid hover:text-emerald-700">Home</Link>
            <Link to="/products" className="text-sm font-medium text-bottle-green-solid hover:text-emerald-700">Products</Link>
            <Link to="/services" className="text-sm font-medium text-bottle-green-solid hover:text-emerald-700">Services</Link>
            <Link to="/contact" className="text-sm font-medium text-bottle-green-solid hover:text-emerald-700">Contact</Link>
          </nav>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <button onClick={() => setIsMenuOpen(!isMenuOpen)} className="text-bottle-green-solid focus:outline-none">
              {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="md:hidden bg-white px-4 pb-4 pt-2 shadow-md">
          <Link to="/" className="block py-2 text-sm font-medium text-bottle-green-solid hover:text-emerald-700">Home</Link>
          <Link to="/products" className="block py-2 text-sm font-medium text-bottle-green-solid hover:text-emerald-700">Products</Link>
          <Link to="/services" className="block py-2 text-sm font-medium text-bottle-green-solid hover:text-emerald-700">Services</Link>
          <Link to="/contact" className="block py-2 text-sm font-medium text-bottle-green-solid hover:text-emerald-700">Contact</Link>
        </div>
      )}
    </header>
  );
};

export default Header;

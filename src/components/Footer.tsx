import React from 'react';
import { Link } from 'react-router-dom';
import { Phone, Mail, MapPin, Clock } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-pearlescent-subtle border-t border-gray-200/50 text-bottle-green-solid relative overflow-hidden">
      <div className="absolute top-0 left-0 w-full h-full opacity-5 bg-cover bg-center" style={{ backgroundImage: 'url(/bg-texture.png)' }}></div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Company Info */}
          <div className="space-y-6">
            <img src="/logo.jpg" alt="Peak Elevator Group Logo" className="h-12 w-auto" />
            <p className="text-bottle-green-solid/70 text-sm leading-relaxed">
              Elevating lives, one lift at a time. Delivering luxury, safety, and innovation across Delhi/NCR.
            </p>
            <div className="flex space-x-3">
              <a 
                href="https://www.instagram.com/peakelevatorgroup?igsh=MXB5bmcybGJ6aXY2MA%3D%3D&utm_source=qr" 
                target="_blank" 
                rel="noopener noreferrer"
                className="w-8 h-8 bg-bottle-green-solid/10 hover:bg-pink-500 text-bottle-green-solid hover:text-white rounded-full flex items-center justify-center transition-colors duration-300"
              >
                <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
                </svg>
              </a>
              <a 
                href="https://facebook.com/peakelevatorgroup" 
                target="_blank" 
                rel="noopener noreferrer"
                className="w-8 h-8 bg-bottle-green-solid/10 hover:bg-blue-600 text-bottle-green-solid hover:text-white rounded-full flex items-center justify-center transition-colors duration-300"
              >
                <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
                </svg>
              </a>
              <a 
                href="https://linkedin.com/company/peakelevatorgroup" 
                target="_blank" 
                rel="noopener noreferrer"
                className="w-8 h-8 bg-bottle-green-solid/10 hover:bg-blue-700 text-bottle-green-solid hover:text-white rounded-full flex items-center justify-center transition-colors duration-300"
              >
                <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                </svg>
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold text-bottle-green mb-4">Quick Links</h3>
            <nav aria-label="Quick Links">
              <ul className="flex flex-col gap-1 pl-0">
                <li>
                  <Link to="/" className="flex items-center gap-2 px-4 py-1.5 rounded-lg hover:bg-bottle-green-solid/10 hover:text-bottle-green transition-colors">
                    Home
                  </Link>
                </li>
                <li>
                  <Link to="/products" className="flex items-center gap-2 px-4 py-1.5 rounded-lg hover:bg-bottle-green-solid/10 hover:text-bottle-green transition-colors">
                    Products
                  </Link>
                </li>
                <li>
                  <Link to="/services" className="flex items-center gap-2 px-4 py-1.5 rounded-lg hover:bg-bottle-green-solid/10 hover:text-bottle-green transition-colors">
                    Services
                  </Link>
                </li>
                <li>
                  <Link to="/contact" className="flex items-center gap-2 px-4 py-1.5 rounded-lg hover:bg-bottle-green-solid/10 hover:text-bottle-green transition-colors">
                    Contact
                  </Link>
                </li>
              </ul>
            </nav>
          </div>

          {/* Products */}
          <div>
            <h3 className="text-lg font-semibold text-bottle-green mb-4">Our Products</h3>
            <nav aria-label="Product Links">
              <ul className="flex flex-col gap-1 pl-0">
                <li>
                  <Link to="/machine-room-lift" className="flex items-center gap-2 px-4 py-1.5 rounded-lg hover:bg-bottle-green-solid/10 hover:text-bottle-green transition-colors">
                    Machine Room Elevator
                  </Link>
                </li>
                <li>
                  <Link to="/mrl-elevator" className="flex items-center gap-2 px-4 py-1.5 rounded-lg hover:bg-bottle-green-solid/10 hover:text-bottle-green transition-colors">
                    MRL Elevator
                  </Link>
                </li>
                <li>
                  <Link to="/hydraulic-passenger-lift" className="flex items-center gap-2 px-4 py-1.5 rounded-lg hover:bg-bottle-green-solid/10 hover:text-bottle-green transition-colors">
                    Passenger Lifts
                  </Link>
                </li>
                <li>
                  <Link to="/car-lift" className="flex items-center gap-2 px-4 py-1.5 rounded-lg hover:bg-bottle-green-solid/10 hover:text-bottle-green transition-colors">
                    Car Lifts
                  </Link>
                </li>
                <li>
                  <Link to="/hydraulic-goods-lift" className="flex items-center gap-2 px-4 py-1.5 rounded-lg hover:bg-bottle-green-solid/10 hover:text-bottle-green transition-colors">
                    Goods Lifts
                  </Link>
                </li>
              </ul>
            </nav>
          </div>

          {/* Contact Info */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold text-bottle-green">Contact Info</h3>
            <div className="space-y-4 text-sm text-bottle-green-solid/70">
              <div className="flex items-center space-x-3">
                <Phone className="w-5 h-5 text-bottle-green" />
                <span>+91 9990858886</span>
              </div>
              <div className="flex items-center space-x-3">
                <Mail className="w-5 h-5 text-bottle-green" />
                <span>info@peakelevator.com</span>
              </div>
              <div className="flex items-start space-x-3">
                <MapPin className="w-5 h-5 text-bottle-green mt-1" />
                <span>Delhi/NCR, India</span>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-bottle-green-solid/20 mt-12 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0 text-sm text-bottle-green-solid/60">
            <p>© 2024 Peak Elevator Group. All rights reserved.</p>
            <div className="flex space-x-6">
              <Link to="/privacy" className="hover:text-bottle-green transition-colors">Privacy Policy</Link>
              <Link to="/terms" className="hover:text-bottle-green transition-colors">Terms of Service</Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

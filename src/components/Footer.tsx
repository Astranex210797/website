import React from 'react';
import { Link } from 'react-router-dom';
import { Phone, Mail, MapPin, Clock } from 'lucide-react';
import { FaInstagram, FaFacebookF, FaLinkedinIn } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="bg-pearlescent-subtle border-t border-gray-200/40 text-bottle-green-solid">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 grid grid-cols-1 md:grid-cols-4 gap-10 text-sm md:text-base">
        {/* Logo & About */}
        <div className="space-y-4">
          <img
            src="/logo.jpg"
            alt="Peak Elevator Group Logo"
            className="h-12 w-auto object-contain"
          />
          <p className="text-bottle-green/80 max-w-xs leading-relaxed">
            Elevating excellence. We deliver high-performance elevator systems
            blending safety, innovation, and class.
          </p>
        </div>

        {/* Quick Links */}
        <div>
          <h3 className="font-semibold text-bottle-green mb-3 tracking-wide uppercase">Quick Links</h3>
          <ul className="space-y-2 text-bottle-green-solid/90">
            <li><Link to="/" className="hover:text-gold transition-colors">Home</Link></li>
            <li><Link to="/products" className="hover:text-gold transition-colors">Products</Link></li>
            <li><Link to="/services" className="hover:text-gold transition-colors">Services</Link></li>
            <li><Link to="/contact" className="hover:text-gold transition-colors">Contact</Link></li>
          </ul>
        </div>

        {/* Contact Info */}
        <div className="space-y-3">
          <h3 className="font-semibold text-bottle-green mb-3 tracking-wide uppercase">Contact</h3>
          <ul className="space-y-3 text-bottle-green-solid/90">
            <li className="flex items-center space-x-2">
              <Phone className="w-4 h-4 text-gold" />
              <span className="leading-none">+91 99908 58886</span>
            </li>
            <li className="flex items-center space-x-2">
              <Mail className="w-4 h-4 text-gold" />
              <span className="leading-none">admin@peakelevatorgroup.com</span>
            </li>
            <li className="flex items-center space-x-2">
              <MapPin className="w-4 h-4 text-gold" />
              <span className="leading-tight">
                Plot No. 915, Krishna Apra Business Square, NSP, Delhi - 110034
              </span>
            </li>
          </ul>

          {/* Social Media */}
          <div className="pt-4 flex space-x-4">
            <a
              href="https://www.instagram.com/peakelevatorgroup?igsh=MXB5bmcybGJ6aXY2MA%3D%3D&utm_source=qr"
              target="_blank"
              rel="noopener noreferrer"
              className="text-bottle-green hover:text-gold transition-colors"
            >
              <FaInstagram className="w-5 h-5" />
            </a>
            <a
              href="https://www.facebook.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-bottle-green hover:text-gold transition-colors"
            >
              <FaFacebookF className="w-5 h-5" />
            </a>
            <a
              href="https://www.linkedin.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-bottle-green hover:text-gold transition-colors"
            >
              <FaLinkedinIn className="w-5 h-5" />
            </a>
          </div>
        </div>

        {/* Timings */}
        <div>
          <h3 className="font-semibold text-bottle-green mb-3 tracking-wide uppercase">Service Hours</h3>
          <div className="flex items-center space-x-2 text-bottle-green-solid/90">
            <Clock className="w-4 h-4 text-gold" />
            <span className="leading-none">Mon - Sat: 10:00 AM - 6:00 PM</span>
          </div>
        </div>
      </div>

      <div className="text-center text-xs py-4 border-t border-gray-200/30 text-bottle-green/70">
        © {new Date().getFullYear()} Peak Elevator Group. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;

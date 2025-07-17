// components/Footer.tsx
import React from 'react';
import { Link } from 'react-router-dom';
import { Phone, Mail, MapPin, Clock } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-[#0e1a16] text-white px-6 md:px-16 py-10 border-t border-green-800 text-sm">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
        {/* Company Info */}
        <div className="space-y-4">
          <h2 className="text-2xl font-bold text-gold">Peak Elevator Group</h2>
          <p className="text-gray-300">We elevate experiences. Premium lift solutions tailored to your needs.</p>
          <div className="space-y-1 text-gray-400 text-sm">
            <p className="flex items-start gap-2">
              <MapPin size={16} className="mt-0.5" />
              Plot No. 915, Krishna Apra Business Square,<br /> NSP, Delhi - 110034
            </p>
            <p className="flex items-center gap-2">
              <Mail size={16} />
              <a href="mailto:Admin@peakelevatorgroup.com" className="hover:underline">Admin@peakelevatorgroup.com</a>
            </p>
            <p className="flex items-center gap-2">
              <Phone size={16} />
              <a href="tel:+919990858886" className="hover:underline">+91 9990858886</a>
            </p>
          </div>
        </div>

        {/* Quick Links */}
        <div>
          <h3 className="text-lg font-semibold text-gold mb-2">Quick Links</h3>
          <ul className="space-y-1 text-sm text-gray-300">
            <li><Link to="/" className="hover:text-gold transition-colors">Home</Link></li>
            <li><Link to="/about" className="hover:text-gold transition-colors">About Us</Link></li>
            <li><Link to="/services" className="hover:text-gold transition-colors">Services</Link></li>
            <li><Link to="/products" className="hover:text-gold transition-colors">Products</Link></li>
            <li><Link to="/contact" className="hover:text-gold transition-colors">Contact</Link></li>
          </ul>
        </div>

        {/* Service Hours */}
        <div>
          <h3 className="text-lg font-semibold text-gold mb-2">Service Area & Hours</h3>
          <ul className="space-y-1 text-sm text-gray-300">
            <li className="flex items-center gap-2">
              <Clock size={16} /> Mon - Sat: 9:00 AM - 6:00 PM
            </li>
            <li className="flex items-start gap-2">
              <MapPin size={16} className="mt-0.5" />
              Delhi NCR, India
            </li>
          </ul>
        </div>
      </div>
      <div className="mt-10 border-t border-green-800 pt-4 text-center text-gray-500 text-xs">
        &copy; {new Date().getFullYear()} Peak Elevator Group. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;

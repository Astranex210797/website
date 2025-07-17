import React from 'react';
import { Link } from 'react-router-dom';
import { Phone, Mail, MapPin, Clock } from 'lucide-react';
import { FaInstagram, FaFacebookF, FaLinkedinIn } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="bg-pearlescent-subtle border-t border-gray-200 text-bottle-green-solid py-10 px-4 md:px-12">
      <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-10">

        {/* Logo Section */}
        <div className="space-y-4">
          <img src="/logo.jpg" alt="Peak Elevator Group" className="w-40 rounded-xl" />
          <p className="text-sm text-bottle-green-solid/80 leading-relaxed">
            Elevating expectations with quality, safety, and innovation — one lift at a time.
          </p>
        </div>

        {/* Quick Links */}
        <div>
          <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
          <ul className="space-y-2 text-sm">
            <li><Link to="/" className="hover:text-brand transition">Home</Link></li>
            <li><Link to="/about" className="hover:text-brand transition">About Us</Link></li>
            <li><Link to="/products" className="hover:text-brand transition">Products</Link></li>
            <li><Link to="/services" className="hover:text-brand transition">Services</Link></li>
            <li><Link to="/contact" className="hover:text-brand transition">Contact</Link></li>
          </ul>
        </div>

        {/* Contact Info */}
        <div>
          <h3 className="text-lg font-semibold mb-4">Contact</h3>
          <ul className="space-y-3 text-sm">
            <li className="flex items-center gap-2"><Phone className="w-4 h-4" /> +91-9999999999</li>
            <li className="flex items-center gap-2"><Mail className="w-4 h-4" /> info@peakelevator.in</li>
            <li className="flex items-center gap-2"><MapPin className="w-4 h-4" /> Delhi, India</li>
            <li className="flex items-center gap-2"><Clock className="w-4 h-4" /> Mon–Sat: 9AM–6PM</li>
          </ul>
        </div>

        {/* Social Icons */}
        <div>
          <h3 className="text-lg font-semibold mb-4">Follow Us</h3>
          <div className="flex space-x-4">
            <a
              href="https://www.instagram.com/peakelevatorgroup?igsh=MXB5bmcybGJ6aXY2MA%3D%3D&utm_source=qr"
              target="_blank"
              rel="noopener noreferrer"
              className="w-10 h-10 rounded-full bg-brand text-white flex items-center justify-center hover:bg-brand-dark transition"
            >
              <FaInstagram className="w-5 h-5" />
            </a>
            <a
              href="https://www.facebook.com" // Replace with real link
              target="_blank"
              rel="noopener noreferrer"
              className="w-10 h-10 rounded-full bg-brand text-white flex items-center justify-center hover:bg-brand-dark transition"
            >
              <FaFacebookF className="w-5 h-5" />
            </a>
            <a
              href="https://www.linkedin.com" // Replace with real link
              target="_blank"
              rel="noopener noreferrer"
              className="w-10 h-10 rounded-full bg-brand text-white flex items-center justify-center hover:bg-brand-dark transition"
            >
              <FaLinkedinIn className="w-5 h-5" />
            </a>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="mt-10 border-t border-gray-300 pt-6 text-center text-xs text-bottle-green-solid/60">
        &copy; {new Date().getFullYear()} Peak Elevator Group. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;

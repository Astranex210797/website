import React from 'react';
import { Link } from 'react-router-dom';
import { Phone, Mail, MapPin, Clock } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-gradient-to-br from-black via-[#0f1f1b] to-[#122219] text-white relative overflow-hidden">
      <div className="absolute top-0 left-0 w-full h-full opacity-10 bg-cover bg-center" style={{ backgroundImage: 'url(/bg-texture.png)' }}></div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Company Info */}
          <div className="space-y-6">
            <img src="/logo.jpg" alt="Peak Elevator Group Logo" className="h-12 w-auto" />
            <p className="text-gray-400 text-sm leading-relaxed">
              Elevating lives, one lift at a time. Delivering luxury, safety, and innovation across Delhi/NCR.
            </p>
            <div className="flex space-x-4">
              {['f', 'in', 'tw'].map((icon, idx) => (
                <div
                  key={idx}
                  className="w-9 h-9 bg-white/5 hover:bg-green-500 hover:text-black text-white rounded-full flex items-center justify-center transition-colors duration-300 cursor-pointer"
                >
                  <span className="text-sm font-bold uppercase">{icon}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold text-white">Quick Links</h3>
            <div className="space-y-2 text-gray-400 text-sm">
              <Link to="/" className="hover:text-white transition-colors">Home</Link>
              <Link to="/products" className="hover:text-white transition-colors">Products</Link>
              <Link to="/services" className="hover:text-white transition-colors">Services</Link>
              <Link to="/contact" className="hover:text-white transition-colors">Contact</Link>
            </div>
          </div>

          {/* Products */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold text-white">Our Products</h3>
            <div className="space-y-2 text-gray-400 text-sm">
              <Link to="/machine-room-lift" className="hover:text-white transition-colors">Machine Room Elevator</Link>
              <Link to="/mrl-elevator" className="hover:text-white transition-colors">MRL Elevator</Link>
              <Link to="/hydraulic-passenger-lift" className="hover:text-white transition-colors">Passenger Lifts</Link>
              <Link to="/car-lift" className="hover:text-white transition-colors">Car Lifts</Link>
              <Link to="/hydraulic-goods-lift" className="hover:text-white transition-colors">Goods Lifts</Link>
            </div>
          </div>

          {/* Contact Info */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold text-white">Contact Info</h3>
            <div className="space-y-4 text-sm text-gray-400">
              <div className="flex items-center space-x-3">
                <Phone className="w-5 h-5 text-green-400" />
                <span>+91 9990858886</span>
              </div>
              <div className="flex items-center space-x-3">
                <Mail className="w-5 h-5 text-green-400" />
                <span>info@peakelevator.com</span>
              </div>
              <div className="flex items-start space-x-3">
                <MapPin className="w-5 h-5 text-green-400 mt-1" />
                <span>Delhi/NCR, India</span>
              </div>
              <div className="flex items-center space-x-3">
                <Clock className="w-5 h-5 text-green-400" />
                <span>24/7 Emergency Support</span>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-white/10 mt-12 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0 text-sm text-gray-500">
            <p>© 2024 Peak Elevator Group. All rights reserved.</p>
            <div className="flex space-x-6">
              <Link to="/privacy" className="hover:text-white transition-colors">Privacy Policy</Link>
              <Link to="/terms" className="hover:text-white transition-colors">Terms of Service</Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

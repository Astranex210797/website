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
          <div>
            <h3 className="text-lg font-semibold text-white mb-4">Quick Links</h3>
            <nav aria-label="Quick Links">
              <ul className="flex flex-col gap-2 pl-0">
                <li>
                  <Link to="/" className="flex items-center gap-2 px-4 py-2 rounded-lg hover:bg-[#1ABC9C]/10 hover:text-white transition-colors">
                    Home
                  </Link>
                </li>
                <li>
                  <Link to="/products" className="flex items-center gap-2 px-4 py-2 rounded-lg hover:bg-[#1ABC9C]/10 hover:text-white transition-colors">
                    Products
                  </Link>
                </li>
                <li>
                  <Link to="/services" className="flex items-center gap-2 px-4 py-2 rounded-lg hover:bg-[#1ABC9C]/10 hover:text-white transition-colors">
                    Services
                  </Link>
                </li>
                <li>
                  <Link to="/contact" className="flex items-center gap-2 px-4 py-2 rounded-lg hover:bg-[#1ABC9C]/10 hover:text-white transition-colors">
                    Contact
                  </Link>
                </li>
              </ul>
            </nav>
          </div>

          {/* Products */}
          <div>
            <h3 className="text-lg font-semibold text-white mb-4">Our Products</h3>
            <nav aria-label="Product Links">
              <ul className="flex flex-col gap-2 pl-0">
                <li>
                  <Link to="/machine-room-lift" className="flex items-center gap-2 px-4 py-2 rounded-lg hover:bg-[#1ABC9C]/10 hover:text-white transition-colors">
                    Machine Room Elevator
                  </Link>
                </li>
                <li>
                  <Link to="/mrl-elevator" className="flex items-center gap-2 px-4 py-2 rounded-lg hover:bg-[#1ABC9C]/10 hover:text-white transition-colors">
                    MRL Elevator
                  </Link>
                </li>
                <li>
                  <Link to="/hydraulic-passenger-lift" className="flex items-center gap-2 px-4 py-2 rounded-lg hover:bg-[#1ABC9C]/10 hover:text-white transition-colors">
                    Passenger Lifts
                  </Link>
                </li>
                <li>
                  <Link to="/car-lift" className="flex items-center gap-2 px-4 py-2 rounded-lg hover:bg-[#1ABC9C]/10 hover:text-white transition-colors">
                    Car Lifts
                  </Link>
                </li>
                <li>
                  <Link to="/hydraulic-goods-lift" className="flex items-center gap-2 px-4 py-2 rounded-lg hover:bg-[#1ABC9C]/10 hover:text-white transition-colors">
                    Goods Lifts
                  </Link>
                </li>
              </ul>
            </nav>
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

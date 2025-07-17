import React from 'react';
import { Link } from 'react-router-dom';
import { Phone, Mail, MapPin, Clock } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-pearlescent-subtle border-t border-gray-200/70 text-sm text-bottle-green">
      <div className="max-w-7xl mx-auto px-4 py-8 grid grid-cols-1 md:grid-cols-4 gap-6">
        
        {/* Company Info */}
        <div>
          <h3 className="text-lg font-semibold text-bottle-green mb-3">Lovable Lifts</h3>
          <p className="mb-2 text-sm">Elevating Spaces, Empowering Futures.</p>
          <ul className="space-y-1">
            <li className="flex items-start gap-2">
              <Phone className="w-4 h-4 mt-[2px]" />
              <span className="leading-tight">Call us: <strong>+91 99908 58886</strong></span>
            </li>
            <li className="flex items-start gap-2">
              <Mail className="w-4 h-4 mt-[2px]" />
              <span className="leading-tight">Email us: <strong>lovablelifts@gmail.com</strong></span>
            </li>
            <li className="flex items-start gap-2">
              <MapPin className="w-4 h-4 mt-[2px]" />
              <span className="leading-tight">Service Area: Delhi NCR & PAN India</span>
            </li>
            <li className="flex items-start gap-2">
              <Clock className="w-4 h-4 mt-[2px]" />
              <span className="leading-tight">Hours: Mon - Sat, 9:00AM - 6:00PM</span>
            </li>
          </ul>
        </div>

        {/* Quick Links */}
        <div>
          <h3 className="text-base font-semibold text-bottle-green mb-3">Quick Links</h3>
          <ul className="flex flex-col gap-[3px]">
            {['Home', 'Products', 'Services', 'Contact'].map((item, index) => (
              <li key={index}>
                <Link
                  to={`/${item.toLowerCase() === 'home' ? '' : item.toLowerCase()}`}
                  className="px-3 py-1 rounded hover:bg-bottle-green/10 hover:text-bottle-green transition-colors"
                >
                  {item}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Products */}
        <div>
          <h3 className="text-base font-semibold text-bottle-green mb-3">Our Products</h3>
          <ul className="flex flex-col gap-[3px]">
            <li><Link to="/machine-room-lift" className="px-3 py-1 hover:bg-bottle-green/10 hover:text-bottle-green rounded transition">Machine Room Lift</Link></li>
            <li><Link to="/mrl-elevator" className="px-3 py-1 hover:bg-bottle-green/10 hover:text-bottle-green rounded transition">MRL Elevator</Link></li>
            <li><Link to="/hydraulic-passenger-lift" className="px-3 py-1 hover:bg-bottle-green/10 hover:text-bottle-green rounded transition">Hydraulic Passenger Lift</Link></li>
            <li><Link to="/car-lift" className="px-3 py-1 hover:bg-bottle-green/10 hover:text-bottle-green rounded transition">Car Lift</Link></li>
            <li><Link to="/hydraulic-goods-lift" className="px-3 py-1 hover:bg-bottle-green/10 hover:text-bottle-green rounded transition">Hydraulic Goods Lift</Link></li>
          </ul>
        </div>

        {/* Services */}
        <div>
          <h3 className="text-base font-semibold text-bottle-green mb-3">Our Services</h3>
          <ul className="flex flex-col gap-[3px]">
            <li><Link to="/amc-services" className="px-3 py-1 hover:bg-bottle-green/10 hover:text-bottle-green rounded transition">Annual Maintenance Contract (AMC)</Link></li>
            <li><Link to="/lift-modernization" className="px-3 py-1 hover:bg-bottle-green/10 hover:text-bottle-green rounded transition">Lift Modernization</Link></li>
          </ul>
        </div>

      </div>

      <div className="text-center text-xs text-gray-600 py-4 border-t border-gray-200">
        &copy; {new Date().getFullYear()} Lovable Lifts. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;

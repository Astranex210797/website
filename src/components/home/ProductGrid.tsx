import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import { motion } from 'framer-motion';

const ProductGrid = () => {
  const products = [
    {
      id: 1,
      title: 'Machine Room Elevator',
      subtitle: 'Traditional power meets modern precision',
      image: '/serious-focused-mature-business-owner-talking-cell.jpg',
      link: '/machine-room-lift'
    },
    {
      id: 2,
      title: 'MRL Elevator',
      subtitle: 'Space-saving innovation without compromise',
      image: '/pexels-cottonbro-8453049.jpg',
      link: '/mrl-elevator'
    },
    {
      id: 3,
      title: 'Hydraulic Passenger Lift',
      subtitle: 'Smooth journeys, silent operation',
      image: '/WhatsApp Image 2025-07-11 at 12.04.28_02dceda6.jpg',
      link: '/hydraulic-passenger-lift'
    },
    {
      id: 4,
      title: 'Car Lift',
      subtitle: 'Vertical mobility for urban spaces',
      image: '/WhatsApp Image 2025-07-11 at 11.57.25_2ca2df59.jpg',
      link: '/car-lift'
    },
    {
      id: 5,
      title: 'Hydraulic Goods Lift',
      subtitle: 'Heavy-duty performance, reliable results',
      image: '/WhatsApp Image 2025-07-11 at 12.10.03_3d6771cc.jpg',
      link: '/hydraulic-goods-lift'
    }
  ];

  return (
    <section className="py-24" style={{ background: 'linear-gradient(120deg, #0D3B2E 0%, #0f1f17 100%)' }}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <motion.h2
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-5xl md:text-6xl font-extrabold text-white mb-6 tracking-tight leading-tight drop-shadow-xl"
          >
            Our Product Range
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
            className="text-xl text-gray-300 max-w-2xl mx-auto"
          >
            Residential elegance to industrial might — discover lifts that redefine elevation.
          </motion.p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-12">
          {products.map((product, index) => (
            <motion.div
              key={product.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: index * 0.15 }}
              viewport={{ once: true }}
            >
              <Link to={product.link} className="group block">
                <div className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-black via-[#0D3B2E] to-[#111] border border-[#1ABC9C]/20 shadow-[0_20px_80px_rgba(0,0,0,0.5)] transition-transform duration-500 group-hover:scale-[1.03]">
                  <motion.div
                    className="aspect-[4/3] overflow-hidden rounded-t-3xl"
                    whileHover={{ scale: 1.05 }}
                    transition={{ duration: 0.6 }}
                  >
                    <img
                      src={product.image}
                      alt={`Image of ${product.title}`}
                      className="w-full h-full object-cover"
                      onError={(e) => { e.currentTarget.src = '/placeholder.jpg'; }}
                    />
                  </motion.div>
                  <div className="p-6">
                    <h3 className="text-2xl font-semibold text-white group-hover:text-[#1ABC9C] transition-colors duration-300">
                      {product.title}
                    </h3>
                    <p className="text-gray-400 italic mt-2 text-sm">
                      {product.subtitle}
                    </p>
                  </div>
                  <motion.div
                    className="absolute top-5 right-5 w-11 h-11 bg-[#0D3B2E]/80 backdrop-blur-lg rounded-full flex items-center justify-center border border-[#1ABC9C] shadow-md"
                    initial={{ opacity: 0, scale: 0.6 }}
                    whileHover={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.3 }}
                  >
                    <ArrowRight className="w-5 h-5 text-[#1ABC9C]" />
                  </motion.div>
                </div>
              </Link>
            </motion.div>
          ))}
        </div>

        <motion.div
          className="text-center mt-20"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          viewport={{ once: true }}
        >
          <Link
            to="/products"
            className="inline-flex items-center bg-[#1ABC9C] hover:bg-[#0D3B2E] text-black hover:text-white px-10 py-5 rounded-full font-semibold text-lg transition-all duration-300 group shadow-xl border border-[#1ABC9C] hover:border-white"
          >
            View All Products
            <ArrowRight className="ml-3 w-5 h-5 group-hover:translate-x-1 transition-transform" />
          </Link>
        </motion.div>
      </div>
    </section>
  );
};

export default ProductGrid;
import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';

const ProductGrid = () => {
  const products = [
    {
      id: 1,
      title: 'Machine Room Elevator',
      subtitle: 'Traditional power meets modern precision',
      image: 'https://images.pexels.com/photos/1267338/pexels-photo-1267338.jpeg?auto=compress&cs=tinysrgb&w=800',
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
    <section className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Our Product Range
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            From residential comfort to industrial strength, we have the perfect lift solution for every need.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          {products.map((product, index) => (
            <motion.div
              key={product.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="group cursor-pointer"
            >
              <Link to={product.link}>
                <div className="relative overflow-hidden rounded-2xl bg-white shadow-lg hover:shadow-2xl transition-all duration-500 group-hover:-translate-y-2">
                  <div className="aspect-[4/3] overflow-hidden">
                    <img
                      src={product.image}
                      alt={product.title}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  </div>
                  <div className="p-6">
                    <h3 className="text-xl font-bold text-gray-900 mb-2 group-hover:text-blue-600 transition-colors">
                      {product.title}
                    </h3>
                    <p className="text-gray-600 italic">
                      {product.subtitle}
                    </p>
                  </div>
                  <div className="absolute top-4 right-4 w-10 h-10 bg-white/90 rounded-full flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-300 transform translate-x-4 group-hover:translate-x-0">
                    <ArrowRight className="w-5 h-5 text-blue-600" />
                  </div>
                </div>
              </Link>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <Link
            to="/products"
            className="inline-flex items-center bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 rounded-lg font-semibold text-lg transition-all duration-300 group"
          >
            View All Products
            <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
          </Link>
        </motion.div>
      </div>
    </section>
  );
};

export default ProductGrid;
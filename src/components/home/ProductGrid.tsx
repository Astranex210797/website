import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';

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
    <section
      className="py-20"
      style={{
        background: 'linear-gradient(120deg, #145943 0%, #1ABC9C 60%, #F2FCF9 100%)',
      }}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Title */}
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-extrabold text-brand-text mb-4 drop-shadow-lg">
            Our Product Range
          </h2>
          <p className="text-xl text-brand-gray max-w-3xl mx-auto">
            From residential comfort to industrial strength, we have the perfect lift solution for every need.
          </p>
        </div>

        {/* Simple Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
          {products.map((product) => (
            <Link to={product.link} key={product.id}>
              <div className="relative overflow-hidden rounded-3xl bg-white/30 backdrop-blur-md shadow-xl border border-brand-dark group transition-all duration-500 hover:scale-105 hover:border-brand">
                <div className="aspect-[4/3] overflow-hidden rounded-t-3xl">
                  <img
                    src={product.image}
                    alt={`Image of ${product.title}`}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                    onError={(e) => { e.currentTarget.src = '/placeholder.jpg'; }}
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-2xl font-bold text-brand-text group-hover:text-brand transition-colors duration-300">
                    {product.title}
                  </h3>
                  <p className="text-brand-gray italic mt-2">{product.subtitle}</p>
                </div>
                <div className="absolute top-5 right-5 w-11 h-11 bg-white/80 rounded-full flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-300 border border-brand shadow-md">
                  <ArrowRight className="w-6 h-6 text-brand" />
                </div>
              </div>
            </Link>
          ))}
        </div>

        {/* CTA Button */}
        <div className="text-center mt-16">
          <Link
            to="/products"
            className="inline-flex items-center bg-brand hover:bg-brand-dark text-white px-10 py-5 rounded-xl font-semibold text-xl transition-all duration-300 group shadow-xl"
          >
            View All Products
            <ArrowRight className="ml-3 w-6 h-6 group-hover:translate-x-1 transition-transform" />
          </Link>
        </div>
      </div>
    </section>
  );
};

export default ProductGrid;

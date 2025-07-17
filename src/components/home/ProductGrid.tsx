// ProductGrid.tsx
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
    <section className="bg-pearlescent m-0">
      <div className="max-w-7xl mx-auto px-0">
        <div className="text-center mb-10">
          <h2 className="text-4xl md:text-5xl font-bold text-bottle-green mb-4 tracking-tight">
            Our Product Range
          </h2>
          <p className="text-lg text-bottle-green-solid/80 max-w-2xl mx-auto">
            Residential elegance to industrial might — discover lifts that redefine elevation.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {products.map((product) => (
            <div key={product.id}>
              <Link to={product.link} className="group block">
                <div className="relative overflow-hidden rounded-2xl bg-pearlescent-subtle border border-gray-200/50 shadow-lg">
                  <div className="aspect-[4/3] overflow-hidden rounded-t-2xl">
                    <img
                      src={product.image}
                      alt={`Image of ${product.title}`}
                      className="w-full h-full object-cover"
                      loading="lazy"
                      onError={(e) => { e.currentTarget.src = '/placeholder.jpg'; }}
                    />
                  </div>
                  <div className="p-5">
                    <h3 className="text-xl font-semibold text-bottle-green">
                      {product.title}
                    </h3>
                    <p className="text-bottle-green-solid/70 italic mt-2 text-sm">
                      {product.subtitle}
                    </p>
                  </div>
                  <div className="absolute top-4 right-4 w-10 h-10 bg-white/90 backdrop-blur-sm rounded-full flex items-center justify-center border border-gray-200/50 shadow-lg opacity-0 group-hover:opacity-100 transition-opacity duration-200">
                    <ArrowRight className="w-4 h-4 text-bottle-green-solid" />
                  </div>
                </div>
              </Link>
            </div>
          ))}
        </div>

        <div className="text-center mt-10">
          <Link
            to="/products"
            className="inline-flex items-center btn-bottle-green px-8 py-4 rounded-full font-semibold text-lg shadow-lg"
          >
            View All Products
            <ArrowRight className="ml-3 w-5 h-5" />
          </Link>
        </div>
      </div>
    </section>
  );
};

export default ProductGrid;

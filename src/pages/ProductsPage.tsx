import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';

const ProductsPage = () => {
  const products = [
    {
      id: 1,
      title: 'Machine Room Elevator',
      subtitle: 'Traditional power meets modern precision',
      description: 'Proven elevator technology for high-rise buildings, delivering exceptional performance and reliability with dedicated machine room systems.',
      image: '/serious-focused-mature-business-owner-talking-cell.jpg', // updated image path
      link: '/machine-room-lift',
      features: ['272–1632 kg capacity', 'Up to 15 floors', 'Energy efficient', 'Advanced safety']
    },
    {
      id: 2,
      title: 'MRL Elevator',
      subtitle: 'Space-saving innovation without compromise',
      description: 'Machine Room-Less technology that maximizes building space while delivering superior performance and modern aesthetics.',
      image: '/pexels-cottonbro-8453049.jpg',
      link: '/mrl-elevator',
      features: ['320–1600 kg capacity', 'Up to 20 floors', 'No machine room', 'Space efficient']
    },
    {
      id: 3,
      title: 'Hydraulic Passenger Lift',
      subtitle: 'Smooth journeys, silent operation',
      description: 'Perfect for homes and low-rise buildings, offering exceptional comfort and whisper-quiet performance.',
      image: '/WhatsApp Image 2025-07-11 at 12.04.28_02dceda6.jpg',
      link: '/hydraulic-passenger-lift',
      features: ['0.5–1.0 m/s speed', 'Up to 5 floors', 'Silent operation', 'Cost-effective']
    },
    {
      id: 4,
      title: 'Car Lift',
      subtitle: 'Vertical mobility for urban spaces',
      description: 'Innovative solutions for moving vehicles between floors, maximizing parking efficiency in limited space.',
      image: '/WhatsApp Image 2025-07-11 at 11.57.25_2ca2df59.jpg',
      link: '/car-lift',
      features: ['Up to 3000 kg', 'Customizable platform', 'Space optimization', 'Reliable operation']
    },
    {
      id: 5,
      title: 'Hydraulic Goods Lift',
      subtitle: 'Heavy-duty performance, reliable results',
      description: 'Engineered for industrial applications where moving substantial loads with confidence is essential.',
      image: '/WhatsApp Image 2025-07-11 at 12.10.03_3d6771cc.jpg',
      link: '/hydraulic-goods-lift',
      features: ['500–5000 kg capacity', 'Heavy-duty construction', 'Industrial grade', 'Enhanced safety']
    }
  ];

  return (
    <div className="pt-16">
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-r from-[#145943] via-[#1ABC9C] to-[#E6FAF4] text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="text-5xl md:text-6xl font-bold mb-6 text-[#E6FAF4] drop-shadow-xl">
              Our Product Range
            </h1>
            <p className="text-xl text-[#C3E7DF] max-w-3xl mx-auto">
              Discover our comprehensive range of elevator solutions, each engineered 
              for specific applications and designed to exceed expectations.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Products Grid */}
      <section className="py-20 bg-[#F2FCF9]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-20">
            {products.map((product, index) => (
              <motion.div
                key={product.id}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                viewport={{ once: true }}
                className={`grid grid-cols-1 lg:grid-cols-2 gap-12 items-center ${
                  index % 2 === 1 ? 'lg:grid-flow-col-dense' : ''
                }`}
              >
                <div className={index % 2 === 1 ? 'lg:col-start-2' : ''}>
                  <div className="space-y-6">
                    <div>
                      <h2 className="text-4xl font-bold text-[#145943] mb-4">
                        {product.title}
                      </h2>
                      <p className="text-xl text-[#1ABC9C] italic mb-6">
                        {product.subtitle}
                      </p>
                      <p className="text-lg text-[#0D3B2E] leading-relaxed">
                        {product.description}
                      </p>
                    </div>

                    <div className="grid grid-cols-2 gap-4">
                      {product.features.map((feature, featureIndex) => (
                        <div key={featureIndex} className="flex items-center space-x-2">
                          <div className="w-2 h-2 bg-[#1ABC9C] rounded-full"></div>
                          <span className="text-[#145943]">{feature}</span>
                        </div>
                      ))}
                    </div>

                    <Link
                      to={product.link}
                      className="inline-flex items-center bg-[#1ABC9C] hover:bg-[#145943] text-white px-8 py-4 rounded-xl font-semibold text-lg transition-all duration-300 group shadow-lg"
                    >
                      Learn More
                      <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
                    </Link>
                  </div>
                </div>

                <div className={index % 2 === 1 ? 'lg:col-start-1' : ''}>
                  <div className="relative group">
                    <img
                      src={product.image}
                      alt={product.title}
                      className="w-full h-96 object-cover rounded-2xl shadow-2xl border-4 border-[#1ABC9C]/30 group-hover:shadow-3xl transition-shadow duration-500"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#145943]/30 to-transparent rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-[#1ABC9C] to-[#145943] text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl font-bold mb-6 text-[#E6FAF4] drop-shadow-xl">
              Need Help Choosing?
            </h2>
            <p className="text-xl text-[#C3E7DF] mb-8">
              Our experts are here to help you select the perfect elevator solution 
              for your specific requirements and budget.
            </p>
            <button className="bg-[#E6FAF4] hover:bg-[#1ABC9C] text-[#145943] hover:text-white px-8 py-4 rounded-xl font-semibold text-lg transition-all duration-300 flex items-center mx-auto group shadow-lg">
              Book a Free Consultation
              <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </button>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default ProductsPage;
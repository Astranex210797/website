<motion.div
  key={service.id}
  initial={{ opacity: 0, y: 50 }}
  whileInView={{ opacity: 1, y: 0 }}
  transition={{ duration: 0.8, delay: index * 0.1 }}
  viewport={{ once: true }}
  className={`grid grid-cols-1 lg:grid-cols-2 gap-12 items-center ${
    index % 2 === 1 ? 'lg:grid-flow-col-dense' : ''
  }`}
>
  {/* Text Section */}
  <div className={`${index % 2 === 1 ? 'lg:col-start-2' : ''}`}>
    <div className="space-y-6 max-w-md">
      <div className="flex items-center space-x-4 mb-6">
        <div className="w-16 h-16 bg-[#1ABC9C]/10 rounded-full flex items-center justify-center">
          <service.icon className="w-8 h-8 text-[#1ABC9C]" />
        </div>
        <div>
          <h2 className="text-4xl font-bold text-[#145943]">{service.title}</h2>
          <p className="text-lg text-[#1ABC9C] italic">{service.subtitle}</p>
        </div>
      </div>

      <p className="text-lg text-[#0D3B2E] leading-relaxed">{service.description}</p>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {service.features.map((feature, featureIndex) => (
          <div key={featureIndex} className="flex items-center space-x-3">
            <div className="w-2 h-2 bg-[#1ABC9C] rounded-full" />
            <span className="text-[#145943]">{feature}</span>
          </div>
        ))}
      </div>

      <Link
        to={service.link}
        className="inline-flex items-center bg-[#1ABC9C] hover:bg-[#145943] text-white px-8 py-4 rounded-xl font-semibold text-lg transition-all duration-300 group shadow-md"
      >
        Learn More
        <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
      </Link>
    </div>
  </div>

  {/* Image Section */}
  <div className={`${index % 2 === 1 ? 'lg:col-start-1' : ''}`}>
    <div className="relative group transition-all hover:-translate-y-1">
      <motion.img
        src={service.image}
        alt={service.title}
        className="w-full h-96 object-cover rounded-2xl border-4 border-[#1ABC9C]/30 shadow-md"
        loading="lazy"
        initial={{ opacity: 0.7, scale: 1.05 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.8 }}
      />
      <div className="absolute inset-0 bg-gradient-to-t from-[#145943]/40 to-transparent rounded-2xl backdrop-blur-sm transition-opacity duration-300 opacity-0 group-hover:opacity-100" />
    </div>
  </div>
</motion.div>

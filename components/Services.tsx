import React from 'react';
import { motion } from 'framer-motion';
import { SERVICES } from '../constants';

// كومبوننت الخدمات
const Services: React.FC = () => {
  return (
    <section id="services" className="py-24 px-4 md:px-12 bg-surface/50 relative overflow-hidden scroll-mt-24">
      {/* خلفيات ملونة مموهة (Blur blobs) للديكور */}
      <div className="absolute top-0 right-0 w-64 h-64 bg-secondary/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-secondary/5 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto">
        <motion.h2 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }} // الانيميشن يشتغل لما نوصل للسكشن ده بالسكرول
          viewport={{ once: true }} // يشتغل مرة واحدة بس
          className="text-4xl md:text-5xl font-bold text-center mb-16 text-secondary font-sans"
        >
          خدماتنا المتميزة
        </motion.h2>

        {/* شبكة عرض الخدمات */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {SERVICES.map((service, index) => (
            <motion.div
              key={service.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1, duration: 0.5 }}
              whileHover={{ y: -8, scale: 1.02 }}
              className="group relative overflow-hidden rounded-2xl h-96 bg-primary border border-white/5 shadow-lg cursor-default"
            >
              {/* صورة الخلفية */}
              <div className="absolute inset-0 z-0">
                <img 
                  src={service.image} 
                  alt={service.title} 
                  className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-110 opacity-70 group-hover:opacity-50"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black via-black/60 to-transparent" />
              </div>
              
              {/* المحتوى */}
              <div className="absolute bottom-0 left-0 right-0 p-6 z-10 translate-y-2 group-hover:translate-y-0 transition-transform duration-300">
                <h3 className="text-2xl font-bold text-white mb-2 group-hover:text-secondary transition-colors duration-300">
                  {service.title}
                </h3>
                <div className="h-0 group-hover:h-auto overflow-hidden transition-all duration-300">
                   <p className="text-gray-300 text-sm leading-relaxed opacity-0 group-hover:opacity-100 transition-opacity duration-500 delay-100">
                    {service.description}
                  </p>
                  <div className="w-12 h-1 bg-secondary mt-4 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-500 delay-200" />
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
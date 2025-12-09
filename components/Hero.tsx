import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { HERO_SLIDES } from '../constants';

// كومبوننت الهيرو (أول حاجة بتظهر في الموقع)
const Hero: React.FC<{ onBookNow: () => void }> = ({ onBookNow }) => {
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % HERO_SLIDES.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  const particles = Array.from({ length: 25 }).map((_, i) => ({
    id: i,
    x: Math.random() * 100,
    y: Math.random() * 100,
    size: Math.random() * 3 + 2,
    duration: Math.random() * 15 + 10,
  }));

  return (
    <section id="home" className="relative h-screen w-full overflow-hidden flex items-center justify-center">
      {/* خلفية الصور المتحركة */}
      <AnimatePresence mode='wait'>
        <motion.div
          key={currentSlide}
          initial={{ opacity: 0, scale: 1.15 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 2, ease: "easeInOut" }}
          className="absolute inset-0 z-0"
        >
          <img
            src={HERO_SLIDES[currentSlide]}
            alt="Luxury Event Atmosphere"
            className="w-full h-full object-cover"
          />
          {/* طبقة تظليل أقوى لزيادة وضوح النص */}
          <div className="absolute inset-0 bg-gradient-to-t from-black via-black/70 to-black/30" />
          <div className="absolute inset-0 bg-black/20" /> {/* طبقة إضافية عامة */}
        </motion.div>
      </AnimatePresence>

      {/* الجزيئات الذهبية */}
      <div className="absolute inset-0 z-10 pointer-events-none">
        {particles.map((p) => (
          <motion.div
            key={p.id}
            className="absolute rounded-full bg-secondary blur-[1px]"
            style={{
              left: `${p.x}%`,
              top: `${p.y}%`,
              width: p.size,
              height: p.size,
              opacity: 0.4,
            }}
            animate={{
              y: [0, -150],
              opacity: [0, 0.6, 0],
            }}
            transition={{
              duration: p.duration,
              repeat: Infinity,
              ease: "linear",
            }}
          />
        ))}
      </div>

      {/* محتوى النص والزرار */}
      <div className="relative z-20 flex flex-col justify-center items-center text-center px-6 max-w-5xl mx-auto">
        <motion.div
          initial={{ y: 30, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 1, delay: 0.2 }}
          className="mb-2"
        >
           <span className="text-secondary tracking-[0.3em] uppercase text-sm md:text-base font-bold">Luxury Events Egypt</span>
        </motion.div>

        <motion.h1
          initial={{ y: 50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 1, delay: 0.4 }}
          className="text-6xl md:text-8xl font-black mb-8 text-white drop-shadow-2xl font-sans leading-tight tracking-tight"
        >
          سعادتٌنا,<span className="text-transparent bg-clip-text bg-gradient-to-r from-secondary via-[#FCD34D] to-secondary">من سعادتك</span>
        </motion.h1>
        
        <motion.p
          initial={{ y: 30, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 1, delay: 0.6 }}
          className="text-xl md:text-3xl text-gray-200 max-w-3xl mb-12 font-light leading-normal"
        >
          نصنع من مناسباتكم ذكريات خالدة بلمسات من الفخامة والإتقان
        </motion.p>

        <motion.div
          initial={{ scale: 0.9, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.8 }}
        >
          <button
            onClick={onBookNow}
            className="group relative px-12 py-5 bg-secondary overflow-hidden rounded-full shadow-[0_0_30px_rgba(212,175,55,0.4)] transition-all duration-300 hover:shadow-[0_0_50px_rgba(212,175,55,0.6)]"
          >
            <div className="absolute inset-0 w-full h-full bg-gradient-to-r from-transparent via-white/40 to-transparent -translate-x-full group-hover:animate-[shimmer_1s_infinite]" />
            <span className="relative text-primary font-bold text-xl tracking-wide">احجز مناسبتك الآن</span>
          </button>
        </motion.div>
      </div>

      {/* مؤشر السكرول */}
      <motion.div 
        className="absolute bottom-12 left-1/2 transform -translate-x-1/2 z-20 cursor-pointer"
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 2, repeat: Infinity }}
        onClick={() => document.getElementById('services')?.scrollIntoView({ behavior: 'smooth' })}
      >
        <div className="w-6 h-10 border-2 border-white/30 rounded-full flex justify-center pt-2 backdrop-blur-sm">
            <div className="w-1 bg-secondary rounded-full h-3" />
        </div>
      </motion.div>
    </section>
  );
};

export default Hero;
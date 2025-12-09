import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

// النافبار اللي فوق
const Navbar: React.FC<{ onBook: () => void }> = ({ onBook }) => {
  // state عشان نعرف احنا عملنا سكرول ولا لسه فوق
  const [scrolled, setScrolled] = useState(false);

  // useEffect عشان نراقب حركة السكرول
  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // دالة عشان تعمل سكرول ناعم لما ندوس على اللينكات
  const scrollToSection = (e: React.MouseEvent<HTMLAnchorElement>, id: string) => {
    e.preventDefault(); // بنمنع السلوك الافتراضي للينك عشان السكرول يكون بتحكمنا
    const element = document.getElementById(id);
    if (element) {
      // scrollIntoView دي فنكش جاهزة في المتصفح، بنقولها تتحرك بنعومة
      element.scrollIntoView({ 
        behavior: 'smooth',
        block: 'start' // يضمن ان بداية السكشن تيجي في اول الشاشة
      });
    }
  };

  return (
    <motion.nav
      initial={{ y: -100 }} // بيبدأ مخفي فوق الشاشة
      animate={{ y: 0 }} // بينزل مكانه
      // كلاسات بتغير شكل النافبار (لون وضل) لما نعمل سكرول
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? 'py-4 bg-primary/90 backdrop-blur-md shadow-lg border-b border-white/5' : 'py-6 bg-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 flex justify-between items-center">
        {/* اللوجو - لما ندوس عليه نرجع للهوم */}
        <a 
          href="#home" 
          onClick={(e) => scrollToSection(e, 'home')}
          className="text-2xl font-bold font-sans tracking-tighter cursor-pointer"
        >
          <span className="text-white">LUXURY</span>
          <span className="text-secondary">EVENTS</span>
        </a>
        
        {/* لينكات النافبار (مخفية في الموبايل) */}
        <div className="hidden md:flex gap-8 text-sm font-medium text-gray-300">
          <a 
            href="#home" 
            onClick={(e) => scrollToSection(e, 'home')} 
            className="hover:text-secondary transition-colors"
          >
            الرئيسية
          </a>
          <a 
            href="#services" 
            onClick={(e) => scrollToSection(e, 'services')} 
            className="hover:text-secondary transition-colors"
          >
            الخدمات
          </a>
          <a 
            href="#portfolio" 
            onClick={(e) => scrollToSection(e, 'portfolio')} 
            className="hover:text-secondary transition-colors"
          >
            المعرض
          </a>
          <a 
            href="#contact" 
            onClick={(e) => scrollToSection(e, 'contact')} 
            className="hover:text-secondary transition-colors"
          >
            اتصل بنا
          </a>
        </div>

        {/* زرار الحجز */}
        <button 
          onClick={onBook}
          className="px-6 py-2 rounded-full border border-secondary text-secondary hover:bg-secondary hover:text-primary transition-all duration-300 text-sm font-bold"
        >
          حجز
        </button>
      </div>
    </motion.nav>
  );
};

export default Navbar;
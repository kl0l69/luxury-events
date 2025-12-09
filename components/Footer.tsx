import React from "react";
import { FaWhatsapp } from "react-icons/fa"; // استيراد أيقونة واتساب من FontAwesome

// رابط واتساب مباشر مع رسالة جاهزة
const WHATSAPP_URL =
  "https://wa.me/201554600228?text=مرحبًا، أريد الاستفسار عن خدمة Luxury Events";

// رابط favicon خارجي
const FAVICON_URL =
  "https://ik.imagekit.io/rn0uichl8o/loly-creation-1765303316215%20(1).png";

const Footer: React.FC = () => {
  return (
    <footer
      id="contact"
      className="bg-surface pt-20 pb-10 border-t border-white/5 scroll-mt-24 relative overflow-hidden"
    >
      {/* خط ذهبي ديكوري أعلى الفوتر */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-32 h-1 bg-gradient-to-r from-transparent via-secondary to-transparent opacity-50" />

      <div className="max-w-4xl mx-auto px-4 text-center">

        {/* ===== اللوجو + Favicon ===== */}
        <div className="mb-10 flex flex-col items-center gap-4">

          <div className="flex items-center gap-4 hover:scale-105 transition-transform duration-500">
            {/* favicon أكبر */}
            <img
              src={FAVICON_URL}
              alt="Brand Icon"
              className="w-16 h-16 md:w-20 md:h-20 object-contain drop-shadow-[0_0_8px_#D4AF37]"
            />
            <h1 className="text-4xl md:text-6xl font-bold tracking-tighter">
              <span className="text-white">LUXURY</span>
              <span className="text-secondary">EVENTS</span>
            </h1>
          </div>

          {/* الوصف */}
          <p className="text-gray-400 text-xl md:text-2xl leading-relaxed max-w-2xl mx-auto font-light italic mt-4">
            "نحن نصنع التفاصيل الصغيرة التي تحدث الفرق الكبير. التميز هو معيارنا الوحيد."
          </p>
        </div>

        {/* ===== زر واتساب + نص ===== */}
        <div className="flex justify-center mt-6">
          <a
            href={WHATSAPP_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-3 px-5 py-3 bg-secondary text-primary rounded-full shadow hover:shadow-lg transition text-lg md:text-xl font-semibold"
            title="تواصل عبر واتساب"
          >
            <FaWhatsapp className="w-6 h-6 md:w-8 md:h-8" />
            استفسر عن خدمتنا
          </a>
        </div>

        {/* ===== حقوق الملكية ===== */}
        <div className="text-gray-600 text-sm md:text-base pt-8 border-t border-white/5 font-medium tracking-wide mt-10">
          © {new Date().getFullYear()} Luxury Events Egypt. All rights reserved.
        </div>
      </div>
    </footer>
  );
};

export default Footer;

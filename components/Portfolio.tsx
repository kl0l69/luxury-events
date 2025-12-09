import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { PORTFOLIO } from '../constants';
import { FilterState } from '../types';
import FilterSection from './FilterSection';

// كومبوننت المعرض
const Portfolio: React.FC = () => {
  // الـ state اللي فيها الصور اللي هتتعرض (بعد الفلترة)
  const [filteredItems, setFilteredItems] = useState(PORTFOLIO);

  // الدالة اللي بتشتغل لما نغير أي فلتر
  const handleFilterChange = (filters: FilterState) => {
    // منطق الفلترة: بنبدأ بالداتا كلها
    // وللتبسيط هنا بنفلتر بس بنوع المناسبة (category)
    let items = PORTFOLIO;
    if (filters.eventType !== 'all') {
      items = items.filter(item => item.category === filters.eventType);
    }
    // ممكن نضيف هنا منطق لباقي الفلاتر (الميزانية، الموقع، الخ)
    setFilteredItems(items);
  };

  return (
    <section className="py-20 px-4 bg-primary relative scroll-mt-24" id="portfolio">
      <div className="max-w-7xl mx-auto">
        {/* عنوان السكشن */}
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-secondary mb-4">معرض أعمالنا</h2>
          <p className="text-gray-400">لقطات من مناسبات قمنا بتنفيذها بكل حب</p>
        </div>

        {/* استدعاء كومبوننت الفلاتر */}
        <FilterSection onFilterChange={handleFilterChange} />

        {/* شبكة الصور مع الأنيميشن */}
        <motion.div 
          layout // خاصية بتخلي ترتيب العناصر يتحرك بنعومة
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          <AnimatePresence>
            {filteredItems.map((item) => (
              <motion.div
                layout
                key={item.id}
                initial={{ opacity: 0, scale: 0.8 }} // بداية ظهور العنصر
                animate={{ opacity: 1, scale: 1 }}   // شكله وهو ظاهر
                exit={{ opacity: 0, scale: 0.8 }}    // شكله لما يختفي (يتفلتر)
                whileHover={{ scale: 1.03 }}         // تكبير بسيط عند الهوفر
                className="group relative rounded-2xl overflow-hidden cursor-pointer"
              >
                {/* تأثير توهج (Glow) حول الكارت عند الهوفر */}
                <div className="absolute -inset-1 bg-gradient-to-r from-secondary to-yellow-600 rounded-2xl blur opacity-0 group-hover:opacity-40 transition duration-500" />
                
                <div className="relative h-72 rounded-2xl overflow-hidden bg-surface">
                  <img 
                    src={item.image} 
                    alt={item.title} 
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                  {/* طبقة تظليل عشان الكلام يبان */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black via-black/20 to-transparent opacity-80" />
                  
                  {/* بيانات الصورة في الأسفل */}
                  <div className="absolute bottom-0 p-6 w-full">
                    <span className="text-secondary text-xs font-bold uppercase tracking-wider mb-2 block">
                      {/* ترجمة الكاتجوري للعربي */}
                      {item.category === 'wedding' ? 'زفاف' : 
                       item.category === 'birthday' ? 'عيد ميلاد' : 
                       item.category === 'graduation' ? 'تخرج' : item.category}
                    </span>
                    <h3 className="text-xl font-bold text-white mb-1">{item.title}</h3>
                    <p className="text-gray-400 text-sm">{item.date}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>

        {/* رسالة بتظهر لو مفيش نتايج */}
        {filteredItems.length === 0 && (
          <div className="text-center py-20 text-gray-500">
            لا توجد نتائج مطابقة لهذه الفلاتر
          </div>
        )}
      </div>
    </section>
  );
};

export default Portfolio;
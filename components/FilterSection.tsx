// أرســــــــــــيــــــــــــنكك كان هنــــــــــــــــا //

import React, { useState } from 'react';
import { FilterState } from '../types';
import { SlidersHorizontal, MapPin, Palette, DollarSign, ChevronDown } from 'lucide-react';

interface FilterSectionProps {
  onFilterChange: (filters: FilterState) => void;
}

const FilterSection: React.FC<FilterSectionProps> = ({ onFilterChange }) => {
  const [filters, setFilters] = useState<FilterState>({
    eventType: 'all',
    location: 'all',
    budget: 50,
    guests: 'all',
    theme: 'all',
    venueType: 'all',
    colorPalette: 'all',
  });

  const [isOpen, setIsOpen] = useState(false);

  const handleFilterChange = (key: keyof FilterState, value: any) => {
    const newFilters = { ...filters, [key]: value };
    setFilters(newFilters);
    onFilterChange(newFilters);
  };

  const chipClass = (active: boolean) => 
    `px-5 py-2.5 rounded-full text-sm transition-all duration-300 border backdrop-blur-sm ${
      active 
      ? 'bg-secondary text-primary border-secondary font-bold scale-105 shadow-[0_0_15px_rgba(212,175,55,0.3)]' 
      : 'bg-white/5 text-gray-400 border-white/10 hover:border-secondary/50 hover:text-white font-medium'
    }`;

  return (
    <div className="w-full max-w-7xl mx-auto px-4 mb-16">
      <div className="flex justify-between items-center mb-8">
        <h3 className="text-2xl text-secondary flex items-center gap-3 font-bold">
          <SlidersHorizontal size={24} />
          <span>تصفية المعرض</span>
        </h3>
        <button 
          onClick={() => setIsOpen(!isOpen)}
          className="md:hidden text-secondary border border-secondary/30 px-4 py-2 rounded-lg"
        >
          {isOpen ? 'إخفاء الفلاتر' : 'إظهار الفلاتر'}
        </button>
      </div>

      <div className={`space-y-8 ${isOpen ? 'block' : 'hidden md:block'}`}>
        {/* Chips for Event Type */}
        <div className="flex flex-wrap gap-3 justify-center md:justify-start">
          {['all', 'wedding', 'birthday', 'graduation', 'baby_shower'].map((type) => (
            <button
              key={type}
              onClick={() => handleFilterChange('eventType', type)}
              className={chipClass(filters.eventType === type)}
            >
              {type === 'all' ? 'عرض الكل' : 
               type === 'wedding' ? 'حفلات زفاف' :
               type === 'birthday' ? 'أعياد ميلاد' :
               type === 'graduation' ? 'حفلات تخرج' : 'استقبال مواليد'}
            </button>
          ))}
        </div>

        {/* Detailed Filters Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 p-8 bg-[#111] rounded-3xl border border-white/5 shadow-2xl">
          {/* Budget Slider */}
          <div className="space-y-4">
            <div className="flex items-center gap-2 text-secondary font-bold mb-2">
              <DollarSign size={18} />
              <label className="text-sm">نطاق الميزانية</label>
            </div>
            <div className="relative pt-2">
              <input
                type="range"
                min="0"
                max="100"
                value={filters.budget}
                onChange={(e) => handleFilterChange('budget', parseInt(e.target.value))}
                className="w-full h-1.5 bg-gray-800 rounded-lg appearance-none cursor-pointer accent-secondary"
              />
              <div className="flex justify-between text-xs text-gray-500 mt-2 font-mono">
                <span>اقتصادي</span>
                <span>متوسط</span>
                <span>فاخر</span>
              </div>
            </div>
          </div>

          {/* Location Select */}
          <div className="space-y-2 relative">
            <div className="flex items-center gap-2 text-secondary font-bold mb-2">
              <MapPin size={18} />
              <label className="text-sm">الموقع</label>
            </div>
            <div className="relative">
              <select
                value={filters.location}
                onChange={(e) => handleFilterChange('location', e.target.value)}
                className="w-full bg-surface border border-white/10 rounded-xl pl-4 pr-10 py-3 text-white appearance-none focus:border-secondary focus:ring-1 focus:ring-secondary/50 outline-none transition-all cursor-pointer"
              >
                <option value="all">جميع المواقع</option>
                <option value="cairo">القاهرة الكبرى</option>
                <option value="alex">الإسكندرية</option>
                <option value="gouna">الجونة والساحل</option>
                <option value="luxor">الأقصر وأسوان</option>
              </select>
              <ChevronDown className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-500 pointer-events-none" size={16} />
            </div>
          </div>

          {/* Theme Select */}
          <div className="space-y-2 relative">
            <div className="flex items-center gap-2 text-secondary font-bold mb-2">
              <Palette size={18} />
              <label className="text-sm">النمط (Theme)</label>
            </div>
             <div className="relative">
              <select
                value={filters.theme}
                onChange={(e) => handleFilterChange('theme', e.target.value)}
                className="w-full bg-surface border border-white/10 rounded-xl pl-4 pr-10 py-3 text-white appearance-none focus:border-secondary focus:ring-1 focus:ring-secondary/50 outline-none transition-all cursor-pointer"
              >
                <option value="all">جميع الأنماط</option>
                <option value="classic">كلاسيكي فخم</option>
                <option value="modern">مودرن عصري</option>
                <option value="boho">بوهيمي (Boho)</option>
                <option value="royal">ملكي (Royal)</option>
                <option value="outdoor">حدائق مفتوحة</option>
              </select>
              <ChevronDown className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-500 pointer-events-none" size={16} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FilterSection;

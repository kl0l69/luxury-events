// أرســــــــــــيــــــــــــنكك كان هنــــــــــــــــا //

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, User, Phone, Calendar, Users, Wallet, MapPin, FileText } from 'lucide-react';
import { BookingFormData } from '../types';

interface BookingModalProps {
  isOpen: boolean;
  onClose: () => void;
}

// مودال الحجز (النافذة المنبثقة) 
const BookingModal: React.FC<BookingModalProps> = ({ isOpen, onClose }) => {
  // state بتتحكم في قيم الفورم
  const [formData, setFormData] = useState<BookingFormData>({
    name: '',
    phone: '',
    eventType: 'wedding',
    guests: '',
    budget: '',
    city: '',
    notes: ''
  });

  // تحديث القيم عند الكتابة
  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    setFormData(prev => ({ ...prev, [e.target.name]: e.target.value }));
  };

  // دالة إرسال الفورم (هنا مجرد console log بدل واتساب)
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('بيانات الفورم:', formData);
    onClose();
  };

  // مكون مساعد لحقول الإدخال مع أيقونة
  const InputWrapper = ({ icon: Icon, children }: { icon: any, children: React.ReactNode }) => (
    <div className="relative group">
      <div className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-500 group-focus-within:text-secondary transition-colors duration-300">
        <Icon size={18} />
      </div>
      {children}
    </div>
  );

  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-[60] flex items-center justify-center p-4">
          {/* الخلفية السوداء نصف شفافة */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="absolute inset-0 bg-black/90 backdrop-blur-md"
          />

          {/* المودال نفسه */}
          <motion.div
            initial={{ scale: 0.95, opacity: 0, y: 20 }}
            animate={{ scale: 1, opacity: 1, y: 0 }}
            exit={{ scale: 0.95, opacity: 0, y: 20 }}
            className="relative bg-[#111] w-full max-w-2xl rounded-3xl border border-secondary/20 shadow-[0_0_50px_rgba(212,175,55,0.15)] overflow-hidden flex flex-col max-h-[90vh]"
          >
            {/* الهيدر */}
            <div className="bg-gradient-to-r from-surface to-[#0a0a0a] p-6 flex justify-between items-center border-b border-white/5">
              <div>
                <h2 className="text-2xl font-bold text-secondary mb-1">حجز موعد استشارة</h2>
                <p className="text-xs text-gray-400">املأ النموذج وسنتواصل معك فوراً</p>
              </div>
              <button 
                onClick={onClose} 
                className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center text-gray-400 hover:text-white hover:bg-white/10 transition-all"
              >
                <X size={20} />
              </button>
            </div>

            {/* الفورم */}
            <form onSubmit={handleSubmit} className="p-6 space-y-5 overflow-y-auto custom-scrollbar">
              
              {/* الاسم بالكامل */}
              <div className="space-y-2">
                <label className="text-xs font-bold text-secondary uppercase tracking-wider">الاسم بالكامل</label>
                <InputWrapper icon={User}>
                  <input
                    required
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    className="w-full bg-white/5 border border-white/10 rounded-xl pr-12 pl-4 py-4 text-white placeholder-gray-600 focus:border-secondary focus:bg-white/10 focus:ring-1 focus:ring-secondary/50 outline-none transition-all"
                    placeholder="الاسم الثلاثي"
                  />
                </InputWrapper>
              </div>

              {/* رقم الهاتف + نوع المناسبة */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                <div className="space-y-2">
                  <label className="text-xs font-bold text-secondary uppercase tracking-wider">رقم الهاتف</label>
                  <InputWrapper icon={Phone}>
                    <input
                      required
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      className="w-full bg-white/5 border border-white/10 rounded-xl pr-12 pl-4 py-4 text-white placeholder-gray-600 focus:border-secondary focus:bg-white/10 outline-none transition-all"
                      placeholder="01xxxxxxxxx"
                    />
                  </InputWrapper>
                </div>

                <div className="space-y-2">
                  <label className="text-xs font-bold text-secondary uppercase tracking-wider">نوع المناسبة</label>
                  <InputWrapper icon={Calendar}>
                    <select
                      name="eventType"
                      value={formData.eventType}
                      onChange={handleChange}
                      className="w-full bg-white/5 border border-white/10 rounded-xl pr-12 pl-4 py-4 text-white focus:border-secondary focus:bg-white/10 outline-none appearance-none"
                    >
                      <option value="wedding" className="bg-surface text-gray-300">حفل زفاف</option>
                      <option value="birthday" className="bg-surface text-gray-300">عيد ميلاد</option>
                      <option value="graduation" className="bg-surface text-gray-300">حفل تخرج</option>
                      <option value="baby_shower" className="bg-surface text-gray-300">استقبال مولود</option>
                      <option value="corporate" className="bg-surface text-gray-300">حدث شركات</option>
                    </select>
                  </InputWrapper>
                </div>
              </div>

              {/* عدد الضيوف + المدينة */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                <div className="space-y-2">
                  <label className="text-xs font-bold text-secondary uppercase tracking-wider">عدد الضيوف</label>
                  <InputWrapper icon={Users}>
                    <input
                      name="guests"
                      type="number"
                      value={formData.guests}
                      onChange={handleChange}
                      className="w-full bg-white/5 border border-white/10 rounded-xl pr-12 pl-4 py-4 text-white placeholder-gray-600 focus:border-secondary focus:bg-white/10 outline-none transition-all"
                      placeholder="مثال: 150"
                    />
                  </InputWrapper>
                </div>

                <div className="space-y-2">
                  <label className="text-xs font-bold text-secondary uppercase tracking-wider">المدينة</label>
                  <InputWrapper icon={MapPin}>
                    <input
                      name="city"
                      value={formData.city}
                      onChange={handleChange}
                      className="w-full bg-white/5 border border-white/10 rounded-xl pr-12 pl-4 py-4 text-white placeholder-gray-600 focus:border-secondary focus:bg-white/10 outline-none transition-all"
                      placeholder="القاهرة، الجونة..."
                    />
                  </InputWrapper>
                </div>
              </div>

              {/* الميزانية */}
              <div className="space-y-2">
                <label className="text-xs font-bold text-secondary uppercase tracking-wider">الميزانية المقترحة</label>
                <InputWrapper icon={Wallet}>
                  <input
                    name="budget"
                    value={formData.budget}
                    onChange={handleChange}
                    className="w-full bg-white/5 border border-white/10 rounded-xl pr-12 pl-4 py-4 text-white placeholder-gray-600 focus:border-secondary focus:bg-white/10 outline-none transition-all"
                    placeholder="مثال: 50,000 - 100,000 جنية"
                  />
                </InputWrapper>
              </div>

              {/* ملاحظات إضافية */}
              <div className="space-y-2">
                <label className="text-xs font-bold text-secondary uppercase tracking-wider">ملاحظات إضافية</label>
                <InputWrapper icon={FileText}>
                  <textarea
                    name="notes"
                    value={formData.notes}
                    onChange={handleChange}
                    className="w-full bg-white/5 border border-white/10 rounded-xl pr-12 pl-4 py-4 text-white placeholder-gray-600 focus:border-secondary focus:bg-white/10 outline-none h-24 resize-none transition-all"
                    placeholder="تفاصيل عن الثيم المفضل، التاريخ المقترح، الخ..."
                  />
                </InputWrapper>
              </div>

              {/* زر الإرسال */}
              <button
                type="submit"
                className="w-full py-4 bg-gradient-to-r from-secondary to-gold-dark text-primary font-bold text-lg rounded-xl shadow-lg hover:shadow-[0_0_25px_rgba(212,175,55,0.5)] transform hover:-translate-y-1 transition-all duration-300 mt-2"
              >
                إرسال الطلب
              </button>

            </form>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
};

export default BookingModal;

import { LucideIcon } from 'lucide-react';

// دي عشان نعرف شكل الداتا بتاعت لينكات السوشيال ميديا
export interface SocialLink {
  icon: LucideIcon; // الايقونة نفسها
  url: string;      // اللينك اللي هنروح عليه
  label: string;    // اسم اللينك (للسكرين ريدرز)
  color?: string;   // لون اختياري لو حبينا نلونه
}

// شكل الداتا بتاعت كل خدمة بنقدمها
export interface ServiceItem {
  id: string;
  title: string;       // عنوان الخدمة
  image: string;       // صورة الخدمة
  description: string; // وصف بسيط ليها
}

// تعريف للعناصر اللي هتتعرض في البورتفوليو (سابقة الأعمال)
export interface PortfolioItem {
  id: string;
  title: string;
  category: string; // التصنيف (فرح، عيد ميلاد، الخ)
  image: string;
  date: string;
}

// دي الحالة بتاعت الفلتر، بتشيل كل الاختيارات اللي اليوزر اختارها
export interface FilterState {
  eventType: string;   // نوع المناسبة
  location: string;    // المكان
  budget: number;      // الميزانية (رقم من 0 لـ 100)
  guests: string;      // عدد الضيوف
  theme: string;       // الستايل او الثيم
  venueType: string;   // نوع القاعة
  colorPalette: string; // الالوان المفضلة
}

// البيانات اللي بناخدها من اليوزر في فورم الحجز
export interface BookingFormData {
  name: string;
  phone: string;
  eventType: string;
  guests: string;
  budget: string;
  city: string;
  notes: string;
}
import { Send, MessageCircle } from 'lucide-react';
import { SocialLink, ServiceItem, PortfolioItem } from './types';

// بيانات الاتصال، حاطينها هنا عشان لو اتغيرت نغيرها في مكان واحد بس

export const WHATSAPP_RECEIVER = "201554600228";



export const SOCIAL_LINKS: SocialLink[] = [
  { icon: MessageCircle, url: `https://wa.me/${WHATSAPP_RECEIVER}`, label: "WhatsApp" },
];

// صور السلايدر اللي في الهيرو سكشن (اول حاجة بتظهر)
export const HERO_SLIDES = [
  "https://images.unsplash.com/photo-1519167758481-83f550bb49b3?q=80&w=2098&auto=format&fit=crop", // قاعة
  "https://ik.imagekit.io/rn0uichl8o/jeremy-wong-weddings-464ps_nOflw-unsplash.jpg", // فرح
  "https://ik.imagekit.io/rn0uichl8o/danny-howe-bn-D2bCvpik-unsplash.jpg", // حفلة
  "https://ik.imagekit.io/rn0uichl8o/cole-keister-vEgVWRBr2VY-unsplash.jpg", // تخرج
  "https://images.unsplash.com/photo-1556125574-d7f27ec36a06?q=80&w=2070&auto=format&fit=crop", // عيد ميلاد

];

// الداتا بتاعت الخدمات اللي بنقدمها
export const SERVICES: ServiceItem[] = [
  { 
    id: "wedding", 
    title: "حفلات الزفاف", 
    image: "https://ik.imagekit.io/rn0uichl8o/jeremy-wong-weddings-464ps_nOflw-unsplash.jpg",
    description: "تخطيط متكامل لليلة العمر بأرقى التفاصيل."
  },
  { 
    id: "birthday", 
    title: "أعياد الميلاد", 
    image: "https://ik.imagekit.io/rn0uichl8o/long-truong-Y5PXVs1LpY4-unsplash.jpg",
    description: "أجواء احتفالية مميزة وتصاميم عصرية."
  },
  { 
    id: "graduation", 
    title: "حفلات التخرج", 
    image: "https://ik.imagekit.io/rn0uichl8o/cole-keister-vEgVWRBr2VY-unsplash.jpg",
    description: "نحتفل بنجاحكم بطريقة لا تُنسى."
  },
  { 
    id: "baby_shower", 
    title: "استقبال المواليد", 
    image: "https://ik.imagekit.io/rn0uichl8o/helena-lopes-GZTeTIS0ibU-unsplash.jpg",
    description: "ديكورات لطيفة ومميزة لاستقبال مولودكم."
  },
];

// داتا البورتفوليو (الصور اللي في المعرض)
export const PORTFOLIO: PortfolioItem[] = [
  { id: "1", title: "زفاف ملكي بالقاهرة", category: "wedding", image: "https://ik.imagekit.io/rn0uichl8o/917.jpg", date: "2025" },
  { id: "2", title: "حفل تخرج الدفعة 20", category: "graduation", image: "https://images.unsplash.com/photo-1541339907198-e08756dedf3f?q=80&w=800", date: "2023" },
  { id: "3", title: "عيد ميلاد ذهبي", category: "birthday", image: "https://images.unsplash.com/photo-1464349153735-7db50ed83c84?q=80&w=800", date: "2023" },
  { id: "4", title: "مؤتمر ريادة الأعمال", category: "corporate", image: "https://images.unsplash.com/photo-1515187029135-18ee286d815b?q=80&w=800", date: "2024" },
  { id: "5", title: "خطوبة خاصة", category: "wedding", image: "https://ik.imagekit.io/rn0uichl8o/efff093d3f03bcd3b307175f97e6b34f.jpg", date: "2023" },
  { id: "6", title: "استقبال مولود", category: "baby_shower", image: "https://ik.imagekit.io/rn0uichl8o/helena-lopes-GZTeTIS0ibU-unsplash.jpg", date: "2024" },
];
// أرســــــــــــيــــــــــــنكك كان هنــــــــــــــــا //
// state بتتحكم في فتح وقفل مودال الحجز
// الخلفية العامة للصفحة وتحديد الفونت
// النافبار
// المحتوى الرئيسي
// الفوتر والبار الجانبي

import React, { useState } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Services from './components/Services';
import Portfolio from './components/Portfolio';
import BookingModal from './components/BookingModal';
import ContactBar from './components/ContactBar';
import Footer from './components/Footer';

function App() {
  // state بتتحكم في فتح وقفل مودال الحجز
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    // الخلفية العامة للصفحة وتحديد الفونت
    <div className="min-h-screen bg-primary text-text font-sans selection:bg-secondary selection:text-primary">
      
      {/* النافبار */}
      <Navbar onBook={() => setIsModalOpen(true)} />
      
      {/* المحتوى الرئيسي */}
      <main>
        <Hero onBookNow={() => setIsModalOpen(true)} />
        <Services />
        <Portfolio />
      </main>

      {/* الفوتر والبار الجانبي */}
      <Footer />

      {/* مودال الحجز (مخفي لحد ما الحالة بتاعته تتغير) */}
      <BookingModal 
        isOpen={isModalOpen} 
        onClose={() => setIsModalOpen(false)} 
      />
    </div>
  );
}

export default App;

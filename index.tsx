import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';

// بنمسك العنصر اللي واخد id="root" من ملف الـ HTML
const rootElement = document.getElementById('root');

// لو ملقناش العنصر ده، بنطلع ايرور عشان نعرف المشكلة فين
if (!rootElement) {
  throw new Error("Could not find root element to mount to");
}

// هنا بنعمل الـ Root بتاع الرياكت وبنبدأ نرندر الابلكيشن كله جواه
const root = ReactDOM.createRoot(rootElement);
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
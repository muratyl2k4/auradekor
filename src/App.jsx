import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import HomePage from './pages/HomePage';
import ProjectsPage from './pages/ProjectsPage';
import ProjectDetailPage from './pages/ProjectDetailPage';
import ContactPage from './pages/ContactPage';
import ServicesPage from './pages/ServicesPage';

const App = () => {
  return (
    <div className="min-h-screen flex flex-col bg-surface overflow-x-hidden">
      <Navbar />
      
      <div className="flex-grow">
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/projeler" element={<ProjectsPage />} />
          <Route path="/hizmetler" element={<ServicesPage />} />
          <Route path="/proje-detay/:id" element={<ProjectDetailPage />} />
          <Route path="/iletisim" element={<ContactPage />} />
        </Routes>
      </div>

      <Footer />

      {/* Floating Social Media Buttons */}
      <div className="fixed bottom-6 right-6 z-50 flex flex-col gap-3">
        <a 
          href="https://www.tiktok.com/@aura.dekorasyon?_r=1&_t=ZS-95vLQeFVxkC" 
          target="_blank" 
          rel="noopener noreferrer"
          className="w-12 h-12 bg-black text-white rounded-full flex items-center justify-center shadow-lg hover:scale-110 hover:shadow-xl transition-all duration-300"
          aria-label="TikTok"
        >
          <svg width="22" height="22" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg"><path d="M19.589 6.686a4.793 4.793 0 0 1-3.97-3.998h-3.83v15.012a3.156 3.156 0 1 1-3.157-3.16c.163 0 .321.02.474.054V10.7a6.973 6.973 0 0 0-.474-.016 6.985 6.985 0 1 0 6.985 6.985V9.458a8.618 8.618 0 0 0 3.972 1.341V6.686Z"/></svg>
        </a>
        <a 
          href="https://www.instagram.com/auradekorasyon34?igsh=dHBjam9qMWdnM2xt" 
          target="_blank" 
          rel="noopener noreferrer"
          className="w-12 h-12 bg-gradient-to-tr from-[#f09433] via-[#e6683c] to-[#bc1888] text-white rounded-full flex items-center justify-center shadow-lg hover:scale-110 hover:shadow-xl transition-all duration-300"
          aria-label="Instagram"
        >
          <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect width="20" height="20" x="2" y="2" rx="5" ry="5"/><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/><line x1="17.5" x2="17.51" y1="6.5" y2="6.5"/></svg>
        </a>
      </div>
    </div>
  );
};

export default App;

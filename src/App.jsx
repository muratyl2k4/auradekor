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
          <Route path="/proje-detay" element={<ProjectDetailPage />} />
          <Route path="/iletisim" element={<ContactPage />} />
        </Routes>
      </div>

      <Footer />
    </div>
  );
};

export default App;

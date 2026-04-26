import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    handleScroll();
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Ana Sayfa', path: '/' },
    { name: 'Projeler', path: '/projeler' },
    { name: 'Hizmetlerimiz', path: '/hizmetler' },
    { name: 'İletişim', path: '/iletisim' }
  ];

  return (
    <>
      <header className={`fixed top-0 w-full z-50 transition-all duration-300 font-serif tracking-tight leading-relaxed ${scrolled ? 'bg-[#fafaf5]/90 backdrop-blur-xl border-b border-outline-variant/20 shadow-sm' : 'bg-[#fafaf5]/70 backdrop-blur-md'}`}>
        <nav className="max-w-7xl mx-auto px-8 py-6 flex justify-between items-center w-full">
          <div className="flex items-center gap-12">
            <Link to="/" onClick={() => setIsOpen(false)} className="text-2xl font-serif uppercase tracking-widest text-[#56642b] hover:opacity-80 transition-opacity">
              Aura Dekor
            </Link>
            <div className="hidden md:flex items-center gap-8">
              {navLinks.map(link => {
                const isActive = location.pathname === link.path || (location.pathname.startsWith('/proje-detay') && link.path === '/projeler');
                return (
                  <Link 
                    key={link.name} 
                    to={link.path}
                    className={`transition-all duration-300 hover:text-[#56642b] hover:opacity-70 ${isActive ? 'text-[#56642b] border-b border-[#56642b] pb-1' : 'text-[#2e342d]/60'}`}
                  >
                    {link.name}
                  </Link>
                );
              })}
            </div>
          </div>
          <div className="flex items-center gap-6 text-[#56642b]">
            <button className="hidden md:block hover:opacity-70 transition-all duration-300 scale-95 hover:scale-100">
              <span className="material-symbols-outlined">search</span>
            </button>
            <button className="hidden md:block hover:opacity-70 transition-all duration-300 scale-95 hover:scale-100">
              <span className="material-symbols-outlined">shopping_bag</span>
            </button>
            <button className="md:hidden hover:opacity-70 transition-all flex items-center justify-center p-2" onClick={() => setIsOpen(!isOpen)}>
               <span className="material-symbols-outlined text-2xl">{isOpen ? 'close' : 'menu'}</span>
            </button>
          </div>
        </nav>
      </header>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div 
            initial={{ opacity: 0, y: -20, filter: 'blur(10px)' }}
            animate={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
            exit={{ opacity: 0, y: -20, filter: 'blur(10px)' }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 z-40 bg-[#fafaf5]/95 backdrop-blur-3xl flex flex-col items-center justify-center gap-8 md:hidden"
          >
            {navLinks.map((item) => (
              <Link
                key={item.name} 
                to={item.path} 
                onClick={() => setIsOpen(false)}
                className="text-3xl font-serif uppercase tracking-widest text-[#56642b] hover:opacity-70 transition-opacity"
              >
                {item.name}
              </Link>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default Navbar;

import React from 'react';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className="w-full py-24 mt-32 bg-[#f3f4ee] font-sans text-sm tracking-wide uppercase">
      <div className="max-w-7xl mx-auto px-8 grid grid-cols-1 md:grid-cols-3 gap-16 items-start">
        <div className="space-y-6">
          <Link to="/" className="font-serif italic text-xl text-[#2e342d] block">Aura Dekor</Link>
          <p className="normal-case text-[#2e342d]/50 leading-relaxed font-body tracking-normal max-w-xs">
            Seçkin evler için bilinçli atmosferler tasarlıyoruz. Stüdyomuz, geleneksel zanaatkarlık ile modern minimalizm arasında bir köprü kuruyor.
          </p>
          <div className="flex gap-4">
            <span className="material-symbols-outlined cursor-pointer hover:text-[#7b5832] transition-colors">share</span>
            <span className="material-symbols-outlined cursor-pointer hover:text-[#7b5832] transition-colors">mail</span>
          </div>
        </div>
        
        <div className="grid grid-cols-2 gap-8">
          <div className="flex flex-col gap-4">
            <h4 className="font-bold text-[#56642b]">Kurumsal</h4>
            <Link to="/iletisim" className="text-[#2e342d]/50 hover:text-[#7b5832] transition-colors cursor-pointer ease-in-out">Hakkımızda</Link>
            <Link to="/projeler" className="text-[#2e342d]/50 hover:text-[#7b5832] transition-colors cursor-pointer ease-in-out">Projeler</Link>
            <span className="text-[#2e342d]/50 hover:text-[#7b5832] transition-colors cursor-pointer ease-in-out">Sürdürülebilirlik</span>
          </div>
          <div className="flex flex-col gap-4">
            <h4 className="font-bold text-[#56642b]">Destek</h4>
            <Link to="/iletisim" className="text-[#2e342d]/50 hover:text-[#7b5832] transition-colors cursor-pointer ease-in-out">İletişim</Link>
            <span className="text-[#2e342d]/50 hover:text-[#7b5832] transition-colors cursor-pointer ease-in-out">KVKK</span>
            <span className="text-[#2e342d]/50 hover:text-[#7b5832] transition-colors cursor-pointer ease-in-out">Gizlilik</span>
          </div>
        </div>

        <div className="space-y-6">
          <h4 className="font-bold text-[#56642b]">Konum & Bülten</h4>
          <p className="normal-case text-[#2e342d]/50 leading-relaxed font-body tracking-normal">
             Başakşehir, Şahintepe Mahallesi<br/>İstanbul
          </p>
          <div className="relative mt-4">
            <input 
              className="w-full bg-transparent border-0 border-b border-[#2e342d]/20 py-2 font-sans text-xs uppercase tracking-widest focus:ring-0 focus:border-[#56642b] placeholder-[#2e342d]/30 outline-none" 
              placeholder="E-posta Adresi" 
              type="email" 
            />
            <button className="absolute right-0 top-1/2 -translate-y-1/2 text-[#56642b] hover:opacity-70 transition-opacity">
              <span className="material-symbols-outlined text-lg">east</span>
            </button>
          </div>
          <p className="text-[10px] text-[#2e342d]/30 mt-8">© 2024 Aura Dekor. Bilinçli atmosferler tasarlıyoruz.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

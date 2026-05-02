import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';

const HomePage = () => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  
  const heroImages = [
    '/hero1.jpeg',
    '/hero2.jpeg',
    '/hero3.jpeg'
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prev) => (prev + 1) % heroImages.length);
    }, 5000);
    return () => clearInterval(interval);
  }, [heroImages.length]);

  return (
    <main className="pt-20">
      {/* Hero Section with Sliding Carousel */}
      <section className="relative h-[80vh] min-h-[600px] flex items-center overflow-hidden px-8">
        <div className="absolute inset-0 z-0 bg-slate-100">
          <AnimatePresence initial={false}>
            <motion.img 
              key={currentImageIndex}
              alt="Aura Dekor Carousel" 
              className="w-full h-full object-cover absolute inset-0" 
              src={heroImages[currentImageIndex]}
              initial={{ x: '100%', opacity: 0.8 }}
              animate={{ x: '0%', opacity: 1 }}
              exit={{ x: '-100%', opacity: 0.8 }}
              transition={{ duration: 1.2, ease: [0.4, 0, 0.2, 1] }}
            />
          </AnimatePresence>
          <div className="absolute inset-0 bg-gradient-to-r from-surface via-surface/30 to-transparent z-10 pointer-events-none"></div>
        </div>
        
        <div className="relative z-20 max-w-7xl mx-auto w-full">
          <div className="max-w-2xl">
            <span className="font-label text-xs uppercase tracking-[0.2em] text-secondary mb-6 block">Kuruluş 2024</span>
            <motion.h1 
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="font-headline text-[2.75rem] md:text-[3.5rem] leading-[1.1] tracking-[-0.02em] text-on-surface mb-4"
            >
                Bilinçli yaşamın <br/><span className="italic font-normal">sanatı.</span>
            </motion.h1>
            <motion.p 
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.1 }}
              className="font-body text-lg text-on-surface-variant leading-[1.6] mb-8 max-w-lg"
            >
                Mekanları sığınaklara dönüştürüyoruz. Evinize hayat katmak için tasarlanmış, özenle seçilmiş el yapımı mobilya ve butik dekorasyon koleksiyonumuzu keşfedin.
            </motion.p>
            <motion.div 
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="flex items-center gap-8"
            >
              <a href="https://wa.me/905367881775?text=Merhaba,%20Aura%20Dekor%20hakkinda%20bilgi%20almak%20istiyorum." target="_blank" rel="noopener noreferrer" className="bg-primary text-on-primary px-10 py-5 rounded-full font-label uppercase tracking-widest text-xs hover:opacity-90 transition-all editorial-shadow flex items-center gap-2 w-fit">
                <span className="material-symbols-outlined text-lg" style={{ fontVariationSettings: "'FILL' 1, 'wght' 400, 'GRAD' 0, 'opsz' 24" }}>chat</span>
                <span>Fiyat Al</span>
              </a>
              <Link to="/iletisim" className="font-label text-xs uppercase tracking-widest border-b border-on-surface pb-1 hover:text-primary hover:border-primary transition-colors">
                Hikayemiz
              </Link>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Featured Projects - Bento Grid */}
      <section className="max-w-7xl mx-auto px-8 py-32">
        <div className="flex justify-between items-end mb-16">
          <div>
            <h2 className="font-headline text-[1.75rem] text-on-surface mb-4">Öne Çıkan Projeler</h2>
            <p className="font-body text-on-surface-variant max-w-md">Her bir parça, uyumlu ve ruhu olan bir atmosfer yaratmak için özenle seçilmiştir.</p>
          </div>
          <Link to="/projeler" className="font-label text-xs uppercase tracking-widest text-secondary hover:underline">Tüm Projeleri Görüntüle</Link>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <Link to="/proje-detay/geometrik-yansimalar" className="relative group overflow-hidden rounded-lg cursor-pointer block aspect-[4/3]">
            <img 
              className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" 
              src="/projects/resim5.jpeg"
              alt="Aura Geometrisi"
            />
            <div className="absolute inset-0 bg-black/10 group-hover:bg-black/20 transition-all"></div>
            <div className="absolute bottom-8 left-8 text-surface-container-lowest">
              <p className="font-label text-[10px] uppercase tracking-[0.2em] mb-2">Proje 01</p>
              <h3 className="font-headline text-2xl">Aura Geometrisi</h3>
            </div>
          </Link>
          
          <Link to="/proje-detay/antrasit-karsilama" className="relative group overflow-hidden rounded-lg cursor-pointer block aspect-[4/3]">
            <img 
              className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" 
              src="/projects/resim1.jpeg"
              alt="Antrasit Karşılama"
            />
            <div className="absolute inset-0 bg-black/10 group-hover:bg-black/20 transition-all"></div>
            <div className="absolute bottom-8 left-8 text-surface-container-lowest">
              <p className="font-label text-[10px] uppercase tracking-[0.2em] mb-2">Proje 02</p>
              <h3 className="font-headline text-2xl">Antrasit Karşılama</h3>
            </div>
          </Link>

          <Link to="/proje-detay/kozmik-somine" className="relative group overflow-hidden rounded-lg cursor-pointer block aspect-[4/3]">
            <img 
              className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" 
              src="/projects/resim4.jpeg"
              alt="Kozmik Şömine"
            />
            <div className="absolute inset-0 bg-black/10 group-hover:bg-black/20 transition-all"></div>
            <div className="absolute bottom-8 left-8 text-surface-container-lowest">
              <p className="font-label text-[10px] uppercase tracking-[0.2em] mb-2">Proje 03</p>
              <h3 className="font-headline text-2xl">Kozmik Şömine</h3>
            </div>
          </Link>
        </div>
      </section>

      {/* Services Section */}
      <section className="max-w-7xl mx-auto px-8 py-32 bg-surface">
        <div className="text-center mb-16">
          <span className="font-label text-xs uppercase tracking-[0.2em] text-secondary mb-4 block">Uzmanlık Alanlarımız</span>
          <h2 className="font-headline text-[2rem] text-on-surface">Hizmetlerimiz</h2>
          <div className="w-12 h-px bg-primary mx-auto mt-6"></div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-12 gap-y-8">
          <div className="flex items-start gap-4 p-6 border border-outline-variant/30 rounded-lg hover:border-primary/50 transition-colors">
            <span className="material-symbols-outlined text-primary text-2xl" style={{ fontVariationSettings: "'wght' 200" }}>format_paint</span>
            <div>
              <h3 className="font-headline text-lg text-on-surface mb-2">Dekoratif Çekim</h3>
              <p className="font-body text-sm text-on-surface-variant">Mekanlarınıza estetik dokunuşlar katıyoruz.</p>
            </div>
          </div>
          <div className="flex items-start gap-4 p-6 border border-outline-variant/30 rounded-lg hover:border-primary/50 transition-colors">
            <span className="material-symbols-outlined text-primary text-2xl" style={{ fontVariationSettings: "'wght' 200" }}>brush</span>
            <div>
              <h3 className="font-headline text-lg text-on-surface mb-2">Dekoratif Boya</h3>
              <p className="font-body text-sm text-on-surface-variant">Özgün desenler ve dokularla duvarlarınızı canlandırıyoruz.</p>
            </div>
          </div>
          <div className="flex items-start gap-4 p-6 border border-outline-variant/30 rounded-lg hover:border-primary/50 transition-colors">
            <span className="material-symbols-outlined text-primary text-2xl" style={{ fontVariationSettings: "'wght' 200" }}>imagesearch_roller</span>
            <div>
              <h3 className="font-headline text-lg text-on-surface mb-2">İtalyan Boya</h3>
              <p className="font-body text-sm text-on-surface-variant">Lüks ve sofistike İtalyan boya uygulamaları.</p>
            </div>
          </div>
        </div>
        <div className="mt-16 text-center">
          <Link to="/projeler" className="inline-block font-label text-xs uppercase tracking-widest text-secondary border-b border-transparent hover:border-secondary pb-1 transition-all duration-300">
              Tüm Hizmetleri Gör
          </Link>
        </div>
      </section>

      {/* Our Philosophy */}
      <section className="bg-surface-container-low py-32 overflow-hidden">
        <div className="max-w-7xl mx-auto px-8 grid grid-cols-1 md:grid-cols-2 items-center gap-24">
          <div className="relative">
            <div className="aspect-[4/5] bg-surface-container-highest rounded-lg overflow-hidden editorial-shadow">
              <img 
                className="w-full h-full object-cover opacity-90 mix-blend-multiply" 
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuAn-vpxDJBKfyRNbaCxpKMeNUgd-Yy4M3rUHWHRo31SgFJCKutnDmuSo1fOhFl-UYVyAvORazwT92mnmt3RzfNGebOFQjKrxWcedP9RUhTxcZhDo7czUbHh_cSS0krKN7OkeTnMuyoElEIGJoKyfmihsJnGY2maADqCd53jmma2IyVmyK2WIlUAQYpypq2SFVyACnSIDdTCm8ADCiR5JxmT3rpE9mETJoziEK5Em1v9sdjTENXqN7vVljiN2P8ikRZIPHZVRAsXfDQ"
                alt="Philosophy"
              />
            </div>
            <div className="absolute -bottom-12 -right-12 w-64 h-64 bg-tertiary-container rounded-lg -z-10"></div>
          </div>
          <div>
            <span className="font-label text-xs uppercase tracking-[0.2em] text-secondary mb-8 block">Felsefemiz</span>
            <h2 className="font-headline text-[2.5rem] leading-tight text-on-surface mb-10">Estetiğin Ötesinde, <br/><span className="italic font-normal">Atmosfer İnşası.</span></h2>
            <div className="space-y-8">
              <p className="font-body text-lg text-on-surface-variant leading-[1.8]">
                  Bir evin sadece nesnelerin toplamından ibaret olmadığına inanıyoruz. Eviniz, iç dünyanızın canlı bir yansımasıdır. Tasarım anlayışımızın merkezinde, küratörlüğünü yaptığımız sadelik yoluyla yeniden doğuş fikri yatıyor.
              </p>
              <p className="font-body text-lg text-on-surface-variant leading-[1.8]">
                  Tedarik ettiğimiz her malzeme, ekolojik ayak izi ve dokunsal kalitesi açısından denetlenir. Geri dönüştürülmüş Avrupa meşesinden el eğirmesi ketene kadar her unsurun duyusal deneyimine öncelik veriyoruz.
              </p>
            </div>
            <div className="mt-12 pt-12 border-t border-outline-variant/20 flex gap-12">
              <div>
                <p className="font-headline text-2xl text-primary">100%</p>
                <p className="font-label text-[10px] uppercase tracking-widest text-on-surface-variant">Sürdürülebilir Kaynak</p>
              </div>
              <div>
                <p className="font-headline text-2xl text-primary">12+</p>
                <p className="font-label text-[10px] uppercase tracking-widest text-on-surface-variant">Zanaatkar Ortak</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Newsletter */}
      <section className="max-w-7xl mx-auto px-8 py-48 text-center">
        <div className="max-w-xl mx-auto">
          <h2 className="font-headline text-[2rem] text-on-surface mb-6 italic">Atölyeye Katılın</h2>
          <p className="font-body text-on-surface-variant mb-12">İç tasarım, yavaş yaşam ve yeni proje önizlemeleri hakkında haftalık bültenimize abone olun.</p>
          <form className="flex gap-4 max-w-md mx-auto" onSubmit={(e) => e.preventDefault()}>
            <input className="flex-1 bg-surface-container-low border-none rounded-lg px-6 py-4 focus:ring-1 focus:ring-primary text-sm font-body outline-none" placeholder="E-posta Adresiniz" type="email" />
            <button className="bg-primary text-on-primary px-8 py-4 rounded-lg font-label text-xs uppercase tracking-widest hover:opacity-90 transition-all">
                Abone Ol
            </button>
          </form>
        </div>
      </section>
    </main>
  );
};

export default HomePage;

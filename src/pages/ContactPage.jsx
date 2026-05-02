import React, { useEffect } from 'react';

const ContactPage = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <main className="pt-32 pb-16">
      {/* Hero Section */}
      <header className="max-w-7xl mx-auto px-8 mb-24">
        <div className="flex flex-col md:flex-row gap-16 items-end">
          <div className="md:w-1/2">
            <span className="font-label text-xs uppercase tracking-[0.2em] text-secondary mb-4 block">Bizimle iletişime geçin</span>
            <h1 className="font-headline text-5xl md:text-7xl -tracking-[0.02em] leading-tight text-on-surface">
                Hayalinizdeki <br/> <span className="italic text-primary">atmosferi tasarlayalım.</span>
            </h1>
          </div>
          <div className="md:w-1/2">
            <p className="text-on-surface-variant text-lg leading-relaxed max-w-md">
                İster tek bir ikonik parça ister tam bir iç mekan kürasyonu arıyor olun, stüdyomuz bilinçli yaşam yolculuğunuzda size rehberlik etmek için burada.
            </p>
          </div>
        </div>
      </header>

      {/* Main Content: Bento Grid Layout */}
      <section className="max-w-7xl mx-auto px-8">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8">
          {/* Contact Form Section (Left Large Column) */}
          <div className="md:col-span-7 bg-surface-container-low p-12 lg:p-16 rounded-lg">
            <h2 className="font-headline text-2xl mb-12">Bize Mesaj Gönder</h2>
            <form className="space-y-10" onSubmit={e => e.preventDefault()}>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
                <div className="relative">
                  <label className="font-label text-xs uppercase tracking-widest text-on-surface-variant block mb-2">Ad Soyad</label>
                  <input 
                    className="w-full bg-surface-container px-3 py-3 rounded border border-outline-variant/30 focus:border-primary focus:ring-0 transition-all duration-300 placeholder-on-surface-variant/40 outline-none" 
                    placeholder="Evelyn Thorne" 
                    type="text" 
                  />
                </div>
                <div className="relative">
                  <label className="font-label text-xs uppercase tracking-widest text-on-surface-variant block mb-2">E-posta</label>
                  <input 
                    className="w-full bg-surface-container px-3 py-3 rounded border border-outline-variant/30 focus:border-primary focus:ring-0 transition-all duration-300 placeholder-on-surface-variant/40 outline-none" 
                    placeholder="merhaba@ornek.com" 
                    type="email" 
                  />
                </div>
              </div>
              
              <div className="relative">
                <label className="font-label text-xs uppercase tracking-widest text-on-surface-variant block mb-2">Konu</label>
                <select className="w-full bg-surface-container px-3 py-3 rounded border border-outline-variant/30 focus:border-primary focus:ring-0 transition-all duration-300 outline-none">
                  <option>Genel Bilgi</option>
                  <option>İç Mimari Danışmanlık</option>
                  <option>Kurumsal Ortaklık</option>
                  <option>Basın ve Medya</option>
                </select>
              </div>
              
              <div className="relative">
                <label className="font-label text-xs uppercase tracking-widest text-on-surface-variant block mb-2">Mesajınız</label>
                <textarea 
                  className="w-full bg-surface-container px-3 py-3 rounded border border-outline-variant/30 focus:border-primary focus:ring-0 transition-all duration-300 placeholder-on-surface-variant/40 resize-none outline-none" 
                  placeholder="Projeniz hakkında bize bilgi verin..." 
                  rows="4"
                ></textarea>
              </div>
              
              <button className="group flex items-center justify-center gap-4 bg-primary text-on-primary px-10 py-5 rounded-full hover:bg-primary-dim transition-all duration-300" type="submit">
                <span className="font-label text-sm uppercase tracking-widest">Gönder</span>
                <span className="material-symbols-outlined text-xl group-hover:translate-x-1 transition-transform">arrow_right_alt</span>
              </button>
            </form>
          </div>

          {/* Showroom & Info (Right Columns) */}
          <div className="md:col-span-5 space-y-8">
            {/* Address Card */}
            <div className="bg-surface-container-highest p-12 rounded-lg relative overflow-hidden group h-64">
              <div className="relative z-10 hidden md:block">
                <span className="font-label text-xs uppercase tracking-widest text-secondary mb-4 block">Atölyemiz</span>
                <h3 className="font-headline text-3xl mb-6">İstanbul</h3>
                <p className="text-on-surface-variant leading-relaxed mb-8">
                    Levent, Büyükdere Cd. No:185<br/>
                    Beşiktaş / İstanbul
                </p>
                <div className="flex flex-col gap-2 font-label text-xs tracking-widest uppercase">
                  <span className="flex items-center gap-3"><span className="material-symbols-outlined text-lg">call</span> 0536 788 17 75</span>
                  <span className="flex items-center gap-3"><span className="material-symbols-outlined text-lg">mail</span> Sinanyakisan1907@gmail.com</span>
                </div>
              </div>
              {/* Abstract Background Decoration */}
              <div className="absolute -bottom-10 -right-10 w-48 h-48 bg-primary/5 rounded-full blur-3xl group-hover:bg-primary/10 transition-colors"></div>
            </div>

            {/* Google Map Container */}
            <div className="relative h-80 rounded-lg overflow-hidden ambient-card-shadow">
              <iframe 
                src="https://www.google.com/maps/embed?pb=!1m17!1m12!1m3!1d3007.882180416762!2d28.732277076043587!3d41.071567971341715!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m2!1m1!2zNDHCsDA0JzE3LjYiTiAyOMKwNDQnMDUuNSJF!5e0!3m2!1str!2str!4v1777712970738!5m2!1str!2str" 
                className="w-full h-full"
                style={{ border: 0 }} 
                allowFullScreen="" 
                loading="lazy" 
                referrerPolicy="no-referrer-when-downgrade"
                title="Aura Dekor Konum"
              ></iframe>
            </div>
          </div>
        </div>
      </section>

      {/* Social Media Grid */}
      <section className="max-w-7xl mx-auto px-8 mt-32">
        <div className="flex flex-col md:flex-row justify-between items-center border-t border-outline-variant/20 pt-16">
          <div className="mb-8 md:mb-0 text-center md:text-left">
            <h4 className="font-headline text-xl mb-2">Seçkilerimizi takip edin</h4>
            <p className="text-on-surface-variant text-sm">Yeni koleksiyonlar ve tasarımcı vitrinleri hakkında güncellemeler.</p>
          </div>
          <div className="flex gap-8">
            <a href="#" className="group flex flex-col items-center">
              <span className="font-label text-xs uppercase tracking-widest mb-3 group-hover:text-primary transition-colors">Instagram</span>
              <div className="w-12 h-12 rounded-full bg-surface-container-low flex items-center justify-center group-hover:bg-primary-container transition-all">
                <span className="material-symbols-outlined">photo_camera</span>
              </div>
            </a>
            <a href="#" className="group flex flex-col items-center">
              <span className="font-label text-xs uppercase tracking-widest mb-3 group-hover:text-primary transition-colors">Pinterest</span>
              <div className="w-12 h-12 rounded-full bg-surface-container-low flex items-center justify-center group-hover:bg-primary-container transition-all">
                <span className="material-symbols-outlined">collections</span>
              </div>
            </a>
            <a href="#" className="group flex flex-col items-center">
              <span className="font-label text-xs uppercase tracking-widest mb-3 group-hover:text-primary transition-colors">LinkedIn</span>
              <div className="w-12 h-12 rounded-full bg-surface-container-low flex items-center justify-center group-hover:bg-primary-container transition-all">
                <span className="material-symbols-outlined">work</span>
              </div>
            </a>
          </div>
        </div>
      </section>
    </main>
  );
};

export default ContactPage;

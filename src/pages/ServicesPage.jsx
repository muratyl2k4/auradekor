import React, { useEffect } from 'react';

const ServicesPage = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <main className="pt-32">
      {/* Hero Header */}
      <header className="py-24 px-8 md:px-16 max-w-screen-2xl mx-auto flex flex-col items-start">
        <p className="font-label text-primary uppercase tracking-[0.1em] text-sm mb-6">Uzmanlık Alanlarımız</p>
        <h1 className="font-display text-5xl md:text-7xl lg:text-8xl text-on-surface tracking-[-0.02em] leading-[1.1] mb-12">
            Zanaatın <br/>
            <span className="italic text-primary-dim">Estetikle</span> Buluşması
        </h1>
        <p className="font-body text-lg md:text-xl text-on-surface-variant max-w-2xl leading-[1.6]">
            Yaşam alanlarınızı yeniden tanımlamak için geleneksel işçiliği modern tasarım anlayışıyla harmanlıyoruz. İnce detaylardan büyük dönüşümlere kadar geniş bir yelpazede hizmet sunuyoruz.
        </p>
      </header>

      {/* Comprehensive Services Bento Grid */}
      <section className="bg-surface-container-low py-32 px-8 md:px-16">
        <div className="max-w-screen-2xl mx-auto">
          <h3 className="font-headline text-3xl md:text-4xl text-on-surface mb-16 text-center">Tüm Hizmetlerimiz</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Card 1 */}
            <div className="bg-surface-container-lowest rounded-lg p-10 shadow-[0px_12px_32px_rgba(46,52,45,0.06)] hover:bg-surface transition-colors duration-500 group flex flex-col justify-between min-h-[300px]">
              <div>
                <span className="material-symbols-outlined text-primary text-4xl mb-6 font-light">imagesmode</span>
                <h4 className="font-headline text-2xl text-on-surface mb-4 group-hover:text-primary transition-colors">Dekoratif Çekimi</h4>
                <p className="font-body text-on-surface-variant leading-relaxed text-sm">Mekanlarınızın son dokunuşlarını mükemmelleştiren estetik yüzey hazırlama ve ince işçilik uygulamaları.</p>
              </div>
            </div>
            {/* Card 2 */}
            <div className="bg-surface-container-lowest rounded-lg p-10 shadow-[0px_12px_32px_rgba(46,52,45,0.06)] hover:bg-surface transition-colors duration-500 group flex flex-col justify-between min-h-[300px]">
              <div>
                <span className="material-symbols-outlined text-primary text-4xl mb-6 font-light">format_paint</span>
                <h4 className="font-headline text-2xl text-on-surface mb-4 group-hover:text-primary transition-colors">Dekoratif Boya</h4>
                <p className="font-body text-on-surface-variant leading-relaxed text-sm">Standart renklerin ötesinde, mekanın ruhuna uygun dokulu ve efektli özel boya uygulamaları.</p>
              </div>
            </div>
            {/* Card 3 */}
            <div className="bg-surface-container-lowest rounded-lg p-10 shadow-[0px_12px_32px_rgba(46,52,45,0.06)] hover:bg-surface transition-colors duration-500 group flex flex-col justify-between min-h-[300px]">
              <div>
                <span className="material-symbols-outlined text-primary text-4xl mb-6 font-light">deck</span>
                <h4 className="font-headline text-2xl text-on-surface mb-4 group-hover:text-primary transition-colors">Ahşap Boya</h4>
                <p className="font-body text-on-surface-variant leading-relaxed text-sm">Ahşap yüzeylerin doğal dokusunu koruyarak renklendirme, koruma ve yenileme işlemleri.</p>
              </div>
            </div>
            {/* Card 4 */}
            <div className="bg-surface-container-lowest rounded-lg p-10 shadow-[0px_12px_32px_rgba(46,52,45,0.06)] hover:bg-surface transition-colors duration-500 group flex flex-col justify-between min-h-[300px]">
              <div>
                <span className="material-symbols-outlined text-primary text-4xl mb-6 font-light">brush</span>
                <h4 className="font-headline text-2xl text-on-surface mb-4 group-hover:text-primary transition-colors">Yağlı Boya</h4>
                <p className="font-body text-on-surface-variant leading-relaxed text-sm">Ahşap ve metal yüzeyler için uzun ömürlü, dayanıklı ve parlak/mat seçenekleriyle klasik boya çözümleri.</p>
              </div>
            </div>
            {/* Card 5 */}
            <div className="bg-surface-container-lowest rounded-lg p-10 shadow-[0px_12px_32px_rgba(46,52,45,0.06)] hover:bg-surface transition-colors duration-500 group flex flex-col justify-between min-h-[300px]">
              <div>
                <span className="material-symbols-outlined text-primary text-4xl mb-6 font-light">architecture</span>
                <h4 className="font-headline text-2xl text-on-surface mb-4 group-hover:text-primary transition-colors">Alçıpan İşleri ve Benzeri</h4>
                <p className="font-body text-on-surface-variant leading-relaxed text-sm">Asma tavan, bölme duvar, niş ve ışık bandı gibi mekanı yeniden boyutlandıran yapısal alçıpan çözümleri.</p>
              </div>
            </div>
            {/* Card 6 */}
            <div className="bg-surface-container-lowest rounded-lg p-10 shadow-[0px_12px_32px_rgba(46,52,45,0.06)] hover:bg-surface transition-colors duration-500 group flex flex-col justify-between min-h-[300px]">
              <div>
                <span className="material-symbols-outlined text-primary text-4xl mb-6 font-light">foundation</span>
                <h4 className="font-headline text-2xl text-on-surface mb-4 group-hover:text-primary transition-colors">Alçı İç Cephe Dış Cephe</h4>
                <p className="font-body text-on-surface-variant leading-relaxed text-sm">Kusursuz yüzeyler için sıva altı ve üstü profesyonel alçı uygulamaları, pürüzsüz bitiş garantisi.</p>
              </div>
            </div>
            {/* Card 7 */}
            <div className="bg-surface-container-lowest rounded-lg p-10 shadow-[0px_12px_32px_rgba(46,52,45,0.06)] hover:bg-surface transition-colors duration-500 group flex flex-col justify-between min-h-[300px]">
              <div>
                <span className="material-symbols-outlined text-primary text-4xl mb-6 font-light">home_repair_service</span>
                <h4 className="font-headline text-2xl text-on-surface mb-4 group-hover:text-primary transition-colors">Montalama İç Dış İzolasyon</h4>
                <p className="font-body text-on-surface-variant leading-relaxed text-sm">Enerji verimliliğini artıran, mekanın iklimini koruyan profesyonel ısı ve ses yalıtımı sistemleri.</p>
              </div>
            </div>
            {/* Card 8 */}
            <div className="bg-surface-container-lowest rounded-lg p-10 shadow-[0px_12px_32px_rgba(46,52,45,0.06)] hover:bg-surface transition-colors duration-500 group flex flex-col justify-between min-h-[300px]">
              <div>
                <span className="material-symbols-outlined text-primary text-4xl mb-6 font-light">wallpaper</span>
                <h4 className="font-headline text-2xl text-on-surface mb-4 group-hover:text-primary transition-colors">Duvar Kağıdı</h4>
                <p className="font-body text-on-surface-variant leading-relaxed text-sm">Özenli işçilikle uygulanan, mekana anında karakter katan yerli ve ithal duvar kağıdı kaplamaları.</p>
              </div>
            </div>
            {/* Decorative Filler Card */}
            <div className="bg-primary/5 rounded-lg p-10 flex flex-col justify-center items-center min-h-[300px] border border-primary/10">
              <p className="font-headline text-xl text-primary text-center italic">"Detaylar tasarımı oluşturmaz, tasarımı yapan detaylardır."</p>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
};

export default ServicesPage;

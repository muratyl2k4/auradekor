import React from 'react';
import { Link } from 'react-router-dom';

const ProjectsPage = () => {
  return (
    <main className="pt-32 pb-24">
      {/* Hero Header */}
      <header className="px-8 md:px-12 mb-20 max-w-7xl mx-auto">
        <div className="max-w-4xl">
          <span className="font-label text-xs uppercase tracking-[0.2em] text-secondary mb-4 block">Koleksiyon 2024</span>
          <h1 className="font-headline text-[3.5rem] leading-tight text-on-background -ml-1 tracking-tight">Atmosfer Galerisi</h1>
          <p className="mt-6 font-body text-lg text-on-surface-variant max-w-xl leading-relaxed">
            Sessizliğin estetiğiyle tasarlanan, zamansız mekanlar. Her proje, bir yaşam tarzının küratörlüğünü üstlenen özgün bir hikayedir.
          </p>
        </div>
      </header>

      {/* Project Filter */}
      <div className="px-8 md:px-12 mb-16 flex gap-4 overflow-x-auto no-scrollbar max-w-7xl mx-auto">
        <span className="px-6 py-2 bg-secondary text-on-secondary rounded-full text-xs font-label uppercase tracking-wider cursor-pointer">Tümü</span>
        <span className="px-6 py-2 bg-surface-container-high text-on-surface rounded-full text-xs font-label uppercase tracking-wider cursor-pointer hover:bg-surface-container-highest transition-colors">Konut</span>
        <span className="px-6 py-2 bg-surface-container-high text-on-surface rounded-full text-xs font-label uppercase tracking-wider cursor-pointer hover:bg-surface-container-highest transition-colors">Restorasyon</span>
        <span className="px-6 py-2 bg-surface-container-high text-on-surface rounded-full text-xs font-label uppercase tracking-wider cursor-pointer hover:bg-surface-container-highest transition-colors">Minimalist</span>
      </div>

      {/* Portfolio Grid: Intentional Asymmetry */}
      <section className="px-8 md:px-12 max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-12 gap-y-24 gap-x-12">
        {/* Large Focus Project */}
        <Link to="/proje-detay" className="md:col-span-8 group cursor-crosshair focus:outline-none block">
          <div className="overflow-hidden rounded-lg bg-surface-container-low aspect-[16/9]">
            <img 
              className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" 
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuCIJMA7AMOXckfcQobU2QIdFbWrlAUrpkhQcJX7209VsjZk-X1NJtW-GlWzEncg49izOoTejDpc3FmpwTFgagczLnIzYMGnFQZ-IyxE1CSKRH0eaOdESa3I7jhsD_BeHdQ3nq_im-x3i70Wg0TkjJdrmt8E64Gn-YER0yIgSZBNTs3sIKGQuu9NsOLStvQMDB2jBqYMh3uv2BCPtmbBiGU3e8V_pz3t3h9D9a-xIAT7_A1mkZsAVRHGaQM8gsSp4mG4LMHzPVmVR4g"
              alt="Ege Rezidans"
            />
          </div>
          <div className="mt-8 flex justify-between items-baseline pr-0 md:pr-12">
            <h3 className="font-headline text-2xl text-on-surface">Ege Rezidans</h3>
            <p className="font-label text-sm text-outline tracking-widest">2024</p>
          </div>
          <p className="mt-2 text-on-surface-variant text-sm font-body tracking-wide max-w-md italic">Dinginliğin ve deniz ışığının mimari ile buluştuğu modern sığınak.</p>
        </Link>

        {/* Small Detail Project */}
        <Link to="/proje-detay" className="md:col-span-4 mt-12 md:mt-32 group cursor-crosshair focus:outline-none block">
          <div className="overflow-hidden rounded-lg bg-surface-container-low aspect-[3/4]">
            <img 
              className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" 
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuD-C5DePek__xzl7PJ3z-Cu6B7x_9qd-YMrv8aBYazGZ9jAUEqjGGDdXYBMfpPs3YOLeWoEoF_u3fowSs5DcyuxAeuAVj5UUZhUcp8G283VsAP31UaScCvP7VFLXvZxgI53zYZpSIOtmBcLEbi1_sDQi-nq0TDM-Y_5e3BJawjD5J51eABUMm6fsc7tlyfSub8tQ0n1NSfZI5BMuxHA2ENkW6guKbG_WOKDTnQIsIgKou5mEt85_TalSri4Snv6Gugsv6kcz4GIegU"
              alt="Kütüphane Köşesi"
            />
          </div>
          <div className="mt-8">
            <h3 className="font-headline text-xl text-on-surface">Kütüphane Köşesi</h3>
            <p className="mt-2 font-label text-sm text-outline tracking-widest uppercase">2023</p>
          </div>
        </Link>

        {/* Asymmetric Grid Row */}
        <Link to="/proje-detay" className="md:col-span-5 group cursor-crosshair block">
          <div className="overflow-hidden rounded-lg bg-surface-container-low aspect-square">
            <img 
              className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" 
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuCAQw0VJ_t5amzFYmzZ6fqlQbT8geMkYHKKmqD1_JYXAwlNpd714Y9hfWlpOiO4ig4JxsyycDQpyJZdYpOQHRIqdj9nDqC9dxdkb9ixaMy9SZeLEoVXbpzSzyr9FHH9I16pyoWjrj13_viC4zzKvdCMcZZgqGky376VDhW-PJvszsAtOBjdJXZK7TX1oK03ug3hLi9Tf3fxNwQJgWlTDzS6Q5NkjN6MgjbOWY0xsjbpfRACzvjRhKYReXe0HJSk_6QFHs7PKUTNYcE"
              alt="Atölye Mutfak"
            />
          </div>
          <div className="mt-8">
            <h3 className="font-headline text-xl text-on-surface">Atölye Mutfak</h3>
            <p className="mt-2 font-label text-sm text-outline tracking-widest uppercase">2024</p>
          </div>
        </Link>
        <Link to="/proje-detay" className="md:col-span-7 md:mt-24 group cursor-crosshair block">
          <div className="overflow-hidden rounded-lg bg-surface-container-low aspect-[4/3]">
            <img 
              className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" 
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuDZ4O7_x597cPhOaeXeqvLPVT6AmGz8ile1VrE2LJ88kMo59NhxHJfGbLBe1idwsJ7KSLbR8qVfFoKen8LpmWzA7Qv8DqMtjtI_7jJXVk5gE1xEEiiPtlp7NtnT73BeHdtfvT34wmjVJfhdlF2GtuU7WOjGqs-GSjNWb4LxrDWSQnKAuhG_7V9UkNb4UUykYGsSs5tEVlZ-N9amzdM0aSA7SDkqwnQImPpJP6oPgW7vzzZldkP5ofQfm_tBsEmg9KoeYmJ2kOBk4io"
              alt="Sakin Uyku"
            />
          </div>
          <div className="mt-8 flex justify-between items-baseline">
            <h3 className="font-headline text-2xl text-on-surface">Sakin Uyku</h3>
            <p className="font-label text-sm text-outline tracking-widest">2023</p>
          </div>
        </Link>

        {/* Full Width Bleed Experience */}
        <Link to="/proje-detay" className="md:col-span-12 my-12 block group">
          <div className="relative h-[400px] md:h-[716px] w-full overflow-hidden rounded-lg">
            <img 
              className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-105" 
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuCA7rZMFmSi86yaBlZOSCVQmDIguy3OcekPZqJAAzcOKmI2xXt-dtf1_HHwkfCNvA46-ePKVfWBsi474xDOfImwvatRKldc37lTkqvd9v3QERH2DBDZOvomHRawHPoIVR55kdSyRQoTSZ2zRHGCPIwtGO12nVuF0BrRXJuCELhlJwRZStaCTjozlPKs289cwbAARSHBuI3yT49xmkR3tlmUvgl-Q7iCUmEA_LLKi_NdJO5nDELBmEW6xB5s4GwmbvorHItMgL0gt5I"
              alt="Gölge ve Işık Evi"
            />
            <div className="absolute inset-0 bg-[#2e342d]/30 flex items-center justify-center transition-colors group-hover:bg-[#2e342d]/20">
              <div className="text-center md:transform md:translate-y-4 md:group-hover:translate-y-0 transition-transform duration-500">
                <span className="font-label text-white text-xs uppercase tracking-[0.4em]">Özel Seçki</span>
                <h2 className="font-headline text-4xl mt-4 italic text-white drop-shadow-xl">Gölge ve Işık Evi</h2>
              </div>
            </div>
          </div>
          <div className="mt-8 flex justify-end">
            <p className="font-label text-sm text-outline tracking-widest uppercase">Proje No. 442 • 2024</p>
          </div>
        </Link>

        {/* Tertiary Row */}
        <Link to="/proje-detay" className="md:col-span-4 group cursor-crosshair block">
          <div className="overflow-hidden rounded-lg bg-surface-container-low aspect-square">
            <img 
              className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" 
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuAySyINOVqzpu4axPyhKAo85IiQS_qmJ4GQwejb46BSnLnCBnb9a562rHIOqHW7SdHnx-MQTzBqJMnofB4CVmPcPvYQayaaVEpGdR7FTZQplF1BAwmzqCZOSFohLC5mYQnaRUiRtiSlLyLA-Oh6118NPPihSORy18X5rlCmqZ6IIZRtk_SeH0JTFByI-XeZtMR9ZKFFF8c0fB808_kiqUXJe-cMBMCxblwl7sKg0Xqv6gc2r3GGbRA1oYTfkPmqQMfUqmAZut4glEY"
              alt="Zümrüt Banyo"
            />
          </div>
          <div className="mt-8">
            <h3 className="font-headline text-xl text-on-surface">Zümrüt Banyo</h3>
            <p className="mt-2 font-label text-sm text-outline tracking-widest uppercase">2022</p>
          </div>
        </Link>
        <Link to="/proje-detay" className="md:col-span-4 group cursor-crosshair block">
          <div className="overflow-hidden rounded-lg bg-surface-container-low aspect-square">
            <img 
              className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" 
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuAJ625qMWq9D5OL6wIngCbRu-Xu-exUbQHsgRq5A_BlGpzPDjmh3px8OnYGTJOCPPxT92TcrUrgUPd7xBAvWZEus-Vp7m7XjO5vCDlo0KP0_MMtCG0txumiAelyD5vPkVaxPibMBWBSeIUA5-QgWil_VlT4IUoPmMX48uOqIk_kpJ7FRGtDpFfCN9UlfD7a8U5VGbwtLOS1YVZ8OKW9yUXot6fRcOQGgJHDydcDugLmk3p06mkgDaGHNpMgidbJE9aejtmqwaUieD0"
              alt="Giriş Seremonisi"
            />
          </div>
          <div className="mt-8">
            <h3 className="font-headline text-xl text-on-surface">Giriş Seremonisi</h3>
            <p className="mt-2 font-label text-sm text-outline tracking-widest uppercase">2023</p>
          </div>
        </Link>
        <Link to="/proje-detay" className="md:col-span-4 group cursor-crosshair block">
          <div className="overflow-hidden rounded-lg bg-surface-container-low aspect-square">
            <img 
              className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" 
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuAcp2iPgzjafr9O43Iik0IaMNHqiDdY20iELMNRdz2ZKMFGxmWMnQbKmD0O70g2q9H0BKlG0qUBHkZFQYZlH2P7GaXitSluz_0_vVDPhXjPigk9fVgLF6mPPulnL8HPB5j1ar4f3clUKttOJdXoC0V4gsC8qVrUZRV5nlXH2uyrnthyYJcZqXpdg5tnWnPqXTKnhqEo1hq893wuv3l7JINcQgC0wQ795uJkwu_9CdXibMSTWeZ7_tVXUsdVaq1QQM3uhHjGusywGgE"
              alt="Öğle Güneşi"
            />
          </div>
          <div className="mt-8">
            <h3 className="font-headline text-xl text-on-surface">Öğle Güneşi</h3>
            <p className="mt-2 font-label text-sm text-outline tracking-widest uppercase">2024</p>
          </div>
        </Link>
      </section>

      {/* CTA Section */}
      <section className="mt-40 px-12 text-center max-w-7xl mx-auto">
        <div className="max-w-2xl mx-auto py-24 border-t border-outline-variant/20">
          <h2 className="font-headline text-3xl text-on-surface mb-8">Kendi atmosferinizi kurgulayalım.</h2>
          <Link to="/iletisim" className="inline-block px-10 py-4 bg-primary text-on-primary rounded-full font-label text-xs uppercase tracking-widest hover:bg-primary-dim transition-all editorial-shadow">
            İletişime Geçin
          </Link>
        </div>
      </section>
    </main>
  );
};

export default ProjectsPage;

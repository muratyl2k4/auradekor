import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';

const ProjectDetailPage = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <main className="pt-32">
      {/* Project Section: Editorial Asymmetry */}
      <section className="max-w-7xl mx-auto px-8 grid grid-cols-1 lg:grid-cols-12 gap-16 items-start">
        {/* Left: High-Res Image Column (7 cols) */}
        <div className="lg:col-span-7 space-y-8">
          <div className="aspect-[4/5] bg-surface-container-low overflow-hidden rounded-lg">
            <img 
              alt="The Sculptural Vessel" 
              className="w-full h-full object-cover mix-blend-multiply opacity-90 hover:opacity-100 transition-opacity duration-700" 
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuD8gJFQc1AXzwhmKCguFpkuq22P7n94NwAltgbS4_EaxBVTjArun1KdPweQvwfsq51SRiALVbLQ8ojzgEPrI5W1Zv-JMvFGK1h9MOiE_TRMdaimfIUtcUmz-8M--3T1c5yRwErY-pfBB7piBHA0Z_-fA7AQYctE9_3SfdLG098tlSO4YQLhQ7IVDkkUfzwY1QADsfhm7orve4zPegx0HF6xno-gykUJJDtMq6RkwoX_zJ6mFzE__XgERHI8rfbD79YCTaKVSLMMVJ8"
            />
          </div>
          <div className="grid grid-cols-2 gap-8">
            <div className="aspect-square bg-surface-container-low rounded-lg overflow-hidden">
              <img 
                alt="Material detail" 
                className="w-full h-full object-cover opacity-80" 
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuB2XJDD9woJcCO6ANoZ_6FVT4BiURMsjvNhCM4ZnpAQ273izYdtkQb23NDNtRGeuQH66zczZtpwb4c7FVg_bQvCq8HObU6RvQzBHAGdp89jsp3p5mwMkbSFWLoLfIjINT6Z2jChazSsGsA5aKyWmLNDKix6w7tYntsJItSWVWrpz1xkBHGOcJaqXtEhmHEGeuPB-pfdVEvj1z4z5Ti-65VcBziUJ6plO3dKjHAa2J2mnx4DxLVjE-AdJYdzzWBg0zWH9d1bPzBc2Hs"
              />
            </div>
            <div className="aspect-square bg-surface-container-low rounded-lg overflow-hidden">
              <img 
                alt="Styling detail" 
                className="w-full h-full object-cover opacity-80" 
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuBb2th4JPpMz0ufdEGG9aymLQVUKChmQFKKjpVtxKj34x5P4BsPKV-kFeXaB0Ae5u8iLyonuLuMFcaKOVdS-ghxsn7Wh_3uAITAridNg-jF803JVi0pT-W3qnNZReueYgHFpTliJZd8HpN_QaFGR9SOiTo6o6sdO-vNDEe_7cOxscNkq8zNEJ4N7PQIJzwWuHmh0C8Ln8h4s-CTr9RyiD1AAGG8Ut29U7Ge-dpkPvBqznm9R4Uk3YxBEy-vpjr-yCFwXS-8HD7sDMk"
              />
            </div>
          </div>
        </div>

        {/* Right: Project Details (5 cols) */}
        <div className="lg:col-span-5 lg:sticky lg:top-40 space-y-12">
          <header className="space-y-4">
            <div className="flex items-center space-x-3">
              <span className="bg-tertiary-container text-on-tertiary-container px-3 py-1 rounded-full text-[0.65rem] font-bold uppercase tracking-widest font-label">Atölye Serisi</span>
              <span className="text-outline-variant text-xs uppercase tracking-widest font-label">Tamamlanan Proje</span>
            </div>
            <h1 className="text-5xl font-serif text-on-background tracking-tight leading-none">Heykelsi Alabaster Formu</h1>
          </header>
          
          <div className="space-y-6">
            <h3 className="text-sm font-bold font-label uppercase tracking-wider text-primary">Proje Hikayesi</h3>
            <p className="text-on-surface-variant leading-relaxed text-lg font-sans">
                Organik minimalizmin bir çalışması olan bu proje, Kopenhag stüdyomuzda "mükemmel kusurluluk" kavramını kutlamak için tasarlandı. Her bir kıvrım, doğal ışıkla etkileşime giren dokulu bir yüzey oluşturmak amacıyla volkanik kum ve özel bir taş karışımıyla şekillendirildi.
            </p>
            <ul className="space-y-4 border-t border-outline-variant/10 pt-8">
              <li className="flex items-start space-x-4">
                <span className="material-symbols-outlined text-primary text-sm mt-1">architecture</span>
                <div>
                  <span className="block text-sm font-bold font-label uppercase tracking-wider text-on-surface">Tasarım Süreci</span>
                  <span className="text-sm text-on-surface-variant">4 haftalık bir prototipleme ve form arayışı sonucu ortaya çıkan özgün silüet.</span>
                </div>
              </li>
              <li className="flex items-start space-x-4">
                <span className="material-symbols-outlined text-primary text-sm mt-1">texture</span>
                <div>
                  <span className="block text-sm font-bold font-label uppercase tracking-wider text-on-surface">Materyal Seçimi</span>
                  <span className="text-sm text-on-surface-variant">Sürdürülebilir İskandinav kili ve mat mineral sır ile elde edilen dokunsal derinlik.</span>
                </div>
              </li>
              <li className="flex items-start space-x-4">
                <span className="material-symbols-outlined text-primary text-sm mt-1">brush</span>
                <div>
                  <span className="block text-sm font-bold font-label uppercase tracking-wider text-on-surface">Zanaatkarlık</span>
                  <span className="text-sm text-on-surface-variant">48 saatlik pişirim süreci ve her parçada sanatçının özgün imzası.</span>
                </div>
              </li>
            </ul>
          </div>
          
          <div className="pt-8">
            <Link to="/projeler" className="inline-flex items-center space-x-3 text-on-surface border-b border-on-surface pb-1 hover:text-primary hover:border-primary transition-all font-label uppercase text-xs tracking-widest">
              <span>Tüm Projeleri İncele</span>
              <span className="material-symbols-outlined text-sm">arrow_right_alt</span>
            </Link>
          </div>
          
          <footer className="pt-8 flex flex-col sm:flex-row sm:justify-between items-start sm:items-center gap-4 text-[0.7rem] uppercase tracking-widest font-label text-outline border-t border-outline-variant/10 mt-8">
            <span className="flex items-center gap-2"><span className="material-symbols-outlined text-sm">location_on</span> Kopenhag Atölyesi</span>
            <span className="flex items-center gap-2"><span className="material-symbols-outlined text-sm">calendar_today</span> 2024 Koleksiyonu</span>
          </footer>
        </div>
      </section>

      {/* Bento Grid: Secondary Details */}
      <section className="mt-40 bg-surface-container-low py-32">
        <div className="max-w-7xl mx-auto px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="md:col-span-2 bg-surface-container-lowest p-12 rounded-lg flex flex-col justify-center space-y-6">
              <h2 className="text-3xl font-serif text-on-background">Bilinçli Kusur</h2>
              <p className="text-on-surface-variant text-lg leading-relaxed max-w-xl">
                  Nesnelerin bir hikaye anlatması gerektiğine inanıyoruz. Sır ve formdaki hafif varyasyonlar kusur değil, üreticinin parmak izleridir; Aura Dekor'un hiçbir parçasının bir diğeriyle tamamen aynı olmamasını sağlar. Bu proje, hem alanı hem de sükuneti aynı zarafetle taşımak üzere tasarlandı.
              </p>
            </div>
            <div className="aspect-square rounded-lg overflow-hidden relative group">
              <img 
                alt="Process" 
                className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-700" 
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuCUNGKSXbUocmmE9dvo6hj6iUXspOzOVC-AuV0UAY7fSpHcJ-AWgaC3KJbvH8yhADO0w4ChV54iRsHS45R9oUav0I8FVJSwbRj26bFCfYs-YvgJrZLHzPQp8WwMqI1kieQn8ZkhXtQ_EW-IkY-5kNRA2UAo3vS60DIqqgtYw43OE1xilFw_vSNDLip_UXqKtkj4JZRQt38SIsjekoZlnHkdh9jCKCwB1JYVZXJaB1enrUKS7WkBo-8zOAiMPlKCPCVVpy_fYA6OoVw"
              />
              <div className="absolute inset-0 bg-primary/20 opacity-0 group-hover:opacity-100 transition-opacity"></div>
            </div>
          </div>
        </div>
      </section>

      {/* Other Projects: Horizontal Scroll / Cards */}
      <section className="max-w-7xl mx-auto px-8 mt-40">
        <div className="flex justify-between items-end mb-16">
          <div>
            <h2 className="text-4xl font-serif text-on-background tracking-tight">Diğer Projeler</h2>
            <p className="text-on-surface-variant mt-2 font-body">Aynı atmosferik ruhu paylaşan diğer çalışmalarımız.</p>
          </div>
          <div className="hidden sm:flex space-x-4">
            <button className="w-12 h-12 rounded-full border border-outline-variant flex items-center justify-center hover:bg-surface-container-high transition-colors">
              <span className="material-symbols-outlined">chevron_left</span>
            </button>
            <button className="w-12 h-12 rounded-full border border-outline-variant flex items-center justify-center hover:bg-surface-container-high transition-colors">
              <span className="material-symbols-outlined">chevron_right</span>
            </button>
          </div>
        </div>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Card 1 */}
          <Link to="/proje-detay" className="group cursor-pointer block">
            <div className="aspect-[3/4] bg-surface-container-low rounded-lg overflow-hidden mb-6">
              <img 
                alt="Dusk Candle" 
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" 
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuC9nNi_TX8lxjl9WacFBIrVl0FBR6YG4INUytoQRO8a0H2cXqmn6qT2t_5JnpYZ47_nlSO3gCu3F3g3srH3Wr41R2Cc-9q7VIJa7tLNRiEeN3kAs5kJI_BBYDs2xy_WV5ePc7_kNoy4dsZRhb2dTw63JZHNYzos8_G8LiRybGKzzCjAaNEj8G6Tt51-o9VUtiNI8ufjJBTcpceL2VENW4w6hQentK8gkiMDOLp0aM6DeoHSVpyjpcceHw3jzrOZSVTl7wZh2Ej7zEU"
              />
            </div>
            <h3 className="font-serif text-lg text-on-background">Alacakaranlık Mum Serisi</h3>
            <p className="text-secondary font-body text-xs mt-1 uppercase tracking-widest">İç Mekan / 2023</p>
          </Link>
          
          {/* Card 2 */}
          <Link to="/proje-detay" className="group cursor-pointer block">
            <div className="aspect-[3/4] bg-surface-container-low rounded-lg overflow-hidden mb-6">
              <img 
                alt="Travertine Coasters" 
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" 
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuBuiRHBG78F9zDH31aXCoReNDfdAFlQtRGmlzD_ttSgfUv6me7EmjuYAAzg3PmX7NXubimbN8ZBQETVNVxgMz__BnRzZNw0CRhi-50HolH4XTZr8HR-4kBt5-sQE0p4WJR4-GqpvzznH8HLPAwPh3MMSBOdDcmboIrGGkbwCDRTI3GTcNJiNXWLAyV01Z24HKwBsvEhq2E7dCUwLuwiCFiLUobAsOE04K0OdeCp1PUl4gNBw2ydmcM0Oi18ITNjimravN1Wbq4T9xs"
              />
            </div>
            <h3 className="font-serif text-lg text-on-background">Traverten Tepsi Seti</h3>
            <p className="text-secondary font-body text-xs mt-1 uppercase tracking-widest">Ürün Tasarımı / 2024</p>
          </Link>
          
          {/* Card 3 */}
          <Link to="/proje-detay" className="group cursor-pointer block">
            <div className="aspect-[3/4] bg-surface-container-low rounded-lg overflow-hidden mb-6">
              <img 
                alt="Linen Throw" 
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" 
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuDB4MO4WswzxXtzkOIL4Y6w2XyyNWuYYA6QOOyap2udmZ2T4VNGBT-Wnr9ezPfrMhmerayMh1FIZduJllxSpq6coS9J9x_hmeeqsYC5WlF46I7C47Mk8QtfkNWMUAqEEPUa_5c6tOeojNq21tVgZ--xas709mkCf9O7ewmWyum6GIUF5QLpMAQJ9UHDz1x6QGt-8MVbJBdQQNEitwi5Oy53elnvCxWUrxMCWSNw1vtNOkSdPPf-RZ7C6qe9GNvsCrOwVQQkRSqEDYM"
              />
            </div>
            <h3 className="font-serif text-lg text-on-background">Belçika Keten Serisi</h3>
            <p className="text-secondary font-body text-xs mt-1 uppercase tracking-widest">Tekstil / 2024</p>
          </Link>
          
          {/* Card 4 */}
          <Link to="/proje-detay" className="group cursor-pointer block">
            <div className="aspect-[3/4] bg-surface-container-low rounded-lg overflow-hidden mb-6">
              <img 
                alt="Art Print" 
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" 
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuCWlHzgq6KVdhGZqdD_K848_sl_1XpLzEDgXM2FtBw_XgAIFXIDUubtpF8jPv9IZE3YhMwyYE40mxBTSu508jjjEoDzX7ny2tMFszJQx89kHB0GPE3x5zln_JTHfgNQdPqLjRElCipRTBmp0hJs864rTm0yPp8fhy6GeTNWdykFsq_juJkkQmQWY4ur4rqXoUV4XWZlbtVpgPTBhiAJ07ECTqgx2fy8J4R-L4q1RctLoqEO4FHhxwJGl0ojgQhRVJSny9-NL1MUbNo"
              />
            </div>
            <h3 className="font-serif text-lg text-on-background">Ethereal Form No. 04</h3>
            <p className="text-secondary font-body text-xs mt-1 uppercase tracking-widest">Görsel Sanatlar / 2023</p>
          </Link>
        </div>
      </section>
    </main>
  );
};

export default ProjectDetailPage;

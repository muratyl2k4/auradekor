import React from 'react';
import { Link } from 'react-router-dom';
import { projects } from '../data/projects';

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

      {/* Portfolio Grid: Uniform Format to prevent 'tasma' */}
      <section className="px-8 md:px-12 max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-y-24 gap-x-12">
        {projects.map((project, index) => (
          <Link 
            key={project.id} 
            to={`/proje-detay/${project.id}`} 
            className={`group cursor-crosshair focus:outline-none block ${index === 0 ? 'md:col-span-2 lg:col-span-2' : ''}`}
          >
            <div className={`overflow-hidden rounded-lg bg-surface-container-low ${index === 0 ? 'aspect-[16/9]' : 'aspect-[4/3]'}`}>
              <img 
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" 
                src={project.image}
                alt={project.title}
              />
            </div>
            <div className="mt-8 flex justify-between items-baseline">
              <h3 className="font-headline text-xl text-on-surface">{project.title}</h3>
              <p className="font-label text-sm text-outline tracking-widest uppercase">{project.year}</p>
            </div>
            <p className="mt-2 text-on-surface-variant text-sm font-body tracking-wide max-w-md line-clamp-2 italic">{project.description}</p>
          </Link>
        ))}
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

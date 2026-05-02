import React, { useEffect } from 'react';
import { Link, useParams } from 'react-router-dom';
import { projects } from '../data/projects';

const ProjectDetailPage = () => {
  const { id } = useParams();
  const project = projects.find(p => p.id === id);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  if (!project) {
    return (
      <main className="pt-40 pb-20 text-center">
        <h1 className="font-headline text-3xl mb-8">Proje bulunamadı.</h1>
        <Link to="/projeler" className="text-primary underline">Galeriye Dön</Link>
      </main>
    );
  }

  return (
    <main className="pt-32">
      {/* Project Section: Editorial Asymmetry */}
      <section className="max-w-7xl mx-auto px-8 grid grid-cols-1 lg:grid-cols-12 gap-16 items-start">
        {/* Left: High-Res Image Column (7 cols) */}
        <div className="lg:col-span-7 space-y-8">
          <div className="aspect-[4/5] bg-surface-container-low overflow-hidden rounded-lg">
            <img 
              alt={project.title} 
              className="w-full h-full object-cover mix-blend-multiply opacity-90 hover:opacity-100 transition-opacity duration-700" 
              src={project.image}
            />
          </div>
          <div className="grid grid-cols-2 gap-8">
            <div className="aspect-square bg-surface-container-low rounded-lg overflow-hidden">
              <img 
                alt="Detail" 
                className="w-full h-full object-cover opacity-80" 
                src={project.image}
              />
            </div>
            <div className="aspect-square bg-surface-container-low rounded-lg overflow-hidden">
              <img 
                alt="Context" 
                className="w-full h-full object-cover opacity-80" 
                src={project.image}
              />
            </div>
          </div>
        </div>

        {/* Right: Project Details (5 cols) */}
        <div className="lg:col-span-5 lg:sticky lg:top-40 space-y-12">
          <header className="space-y-4">
            <div className="flex items-center space-x-3">
              <span className="bg-tertiary-container text-on-tertiary-container px-3 py-1 rounded-full text-[0.65rem] font-bold uppercase tracking-widest font-label">{project.category}</span>
              <span className="text-outline-variant text-xs uppercase tracking-widest font-label">Tamamlanan Proje</span>
            </div>
            <h1 className="text-5xl font-serif text-on-background tracking-tight leading-none">{project.title}</h1>
          </header>
          
          <div className="space-y-6">
            <h3 className="text-sm font-bold font-label uppercase tracking-wider text-primary">Proje Hikayesi</h3>
            <p className="text-on-surface-variant leading-relaxed text-lg font-sans">
                {project.longDescription}
            </p>
            <ul className="space-y-4 border-t border-outline-variant/10 pt-8">
              {project.details.map((detail, idx) => (
                <li key={idx} className="flex items-start space-x-4">
                  <span className="material-symbols-outlined text-primary text-sm mt-1">
                    {detail.label.includes("Süreç") ? "architecture" : detail.label.includes("Materyal") ? "texture" : "brush"}
                  </span>
                  <div>
                    <span className="block text-sm font-bold font-label uppercase tracking-wider text-on-surface">{detail.label}</span>
                    <span className="text-sm text-on-surface-variant">{detail.value}</span>
                  </div>
                </li>
              ))}
            </ul>
          </div>
          
          <div className="pt-8">
            <Link to="/projeler" className="inline-flex items-center space-x-3 text-on-surface border-b border-on-surface pb-1 hover:text-primary hover:border-primary transition-all font-label uppercase text-xs tracking-widest">
              <span>Tüm Projeleri İncele</span>
              <span className="material-symbols-outlined text-sm">arrow_right_alt</span>
            </Link>
          </div>
          
          <footer className="pt-8 flex flex-col sm:flex-row sm:justify-between items-start sm:items-center gap-4 text-[0.7rem] uppercase tracking-widest font-label text-outline border-t border-outline-variant/10 mt-8">
            <span className="flex items-center gap-2"><span className="material-symbols-outlined text-sm">location_on</span> Aura Dekor Stüdyo</span>
            <span className="flex items-center gap-2"><span className="material-symbols-outlined text-sm">calendar_today</span> {project.year} Koleksiyonu</span>
          </footer>
        </div>
      </section>

      {/* Other Projects: Horizontal Scroll / Cards */}
      <section className="max-w-7xl mx-auto px-8 mt-40 pb-20">
        <div className="flex justify-between items-end mb-16">
          <div>
            <h2 className="text-4xl font-serif text-on-background tracking-tight">Diğer Projeler</h2>
            <p className="text-on-surface-variant mt-2 font-body">Aynı atmosferik ruhu paylaşan diğer çalışmalarımız.</p>
          </div>
        </div>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {projects.filter(p => p.id !== project.id).slice(0, 4).map(p => (
            <Link key={p.id} to={`/proje-detay/${p.id}`} className="group cursor-pointer block">
              <div className="aspect-[3/4] bg-surface-container-low rounded-lg overflow-hidden mb-6">
                <img 
                  alt={p.title} 
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" 
                  src={p.image}
                />
              </div>
              <h3 className="font-serif text-lg text-on-background">{p.title}</h3>
              <p className="text-secondary font-body text-xs mt-1 uppercase tracking-widest">{p.category} / {p.year}</p>
            </Link>
          ))}
        </div>
      </section>
    </main>
  );
};

export default ProjectDetailPage;

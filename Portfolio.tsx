
import React, { useState } from 'react';
import { ExternalLink, Tag } from 'lucide-react';
import { PROJECTS } from '../constants';

const Portfolio: React.FC = () => {
  const [filter, setFilter] = useState('All');
  const categories = ['All', ...new Set(PROJECTS.map(p => p.category))];

  const filteredProjects = filter === 'All' 
    ? PROJECTS 
    : PROJECTS.filter(p => p.category === filter);

  return (
    <div className="pt-32 pb-24 animate-in fade-in slide-in-from-bottom-8 duration-700">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-16 text-center">
          <h1 className="text-4xl lg:text-5xl font-black mb-6 uppercase tracking-tighter">Nos Réalisations</h1>
          <p className="text-slate-600 max-w-2xl mx-auto text-lg leading-relaxed">
            Découvrez une sélection de nos travaux en peinture industrielle et traitement de surface pour divers secteurs d'activité.
          </p>
        </div>

        {/* Filter */}
        <div className="flex flex-wrap justify-center gap-3 mb-16">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setFilter(cat)}
              className={`px-8 py-3 rounded-full text-xs font-black uppercase tracking-widest transition-all ${
                filter === cat 
                  ? 'bg-[#DB8247] text-white shadow-xl shadow-[#DB8247]/20' 
                  : 'bg-white text-slate-500 border border-slate-200 hover:border-[#DB8247] hover:text-[#DB8247]'
              }`}
            >
              {cat === 'All' ? 'Tous' : cat}
            </button>
          ))}
        </div>

        {/* Project Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
          {filteredProjects.map((project) => (
            <div key={project.id} className="group bg-white rounded-3xl overflow-hidden shadow-sm border border-slate-100 hover:shadow-2xl hover:-translate-y-2 transition-all duration-500">
              <div className="aspect-[4/3] overflow-hidden relative">
                <img 
                  src={project.image} 
                  alt={project.title} 
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-1000" 
                />
                <div className="absolute top-6 left-6">
                  <span className="px-4 py-1 bg-black text-white rounded-lg text-[10px] font-black uppercase tracking-widest shadow-xl">
                    {project.category}
                  </span>
                </div>
              </div>
              <div className="p-10">
                <h3 className="text-xl font-black mb-3 group-hover:text-[#DB8247] transition-colors uppercase tracking-tight">{project.title}</h3>
                <p className="text-slate-500 text-sm mb-8 leading-relaxed">
                  {project.description}
                </p>
                <div className="flex flex-wrap gap-2 mb-8">
                  {project.seoKeywords.map((kw, i) => (
                    <span key={i} className="inline-flex items-center text-[9px] font-black text-slate-400 uppercase tracking-tighter">
                      <Tag size={10} className="mr-1 text-[#DB8247]" /> {kw}
                    </span>
                  ))}
                </div>
                <button className="flex items-center text-xs font-black uppercase tracking-widest text-slate-900 group-hover:text-[#DB8247] transition-colors border-b-2 border-slate-900 group-hover:border-[#DB8247] pb-1">
                  Détails du projet <ExternalLink size={14} className="ml-2" />
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* SEO CTA */}
        <div className="mt-24 p-16 bg-black rounded-[3rem] text-center relative overflow-hidden">
          <div className="absolute top-0 left-0 w-64 h-64 bg-[#DB8247] rounded-full blur-[120px] opacity-10"></div>
          <h2 className="text-3xl font-black mb-4 text-white uppercase tracking-tight">Confiez-nous vos pièces métalliques</h2>
          <p className="text-slate-400 mb-10 max-w-xl mx-auto font-medium">
            Nous transformons n'importe quelle structure en un élément durable et esthétique grâce à nos procédés industriels de pointe.
          </p>
          <button className="px-10 py-4 bg-[#DB8247] text-white rounded-xl font-black uppercase tracking-widest hover:bg-[#c6743d] transition-all">
            Nous contacter
          </button>
        </div>
      </div>
    </div>
  );
};

export default Portfolio;

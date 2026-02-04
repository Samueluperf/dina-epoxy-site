
import React from 'react';
import { ArrowRight, CheckCircle, Shield, Factory, Settings, Info, MapPin } from 'lucide-react';

interface HomeProps {
  setPage: (page: string) => void;
}

const Home: React.FC<HomeProps> = ({ setPage }) => {
  return (
    <div className="animate-in fade-in duration-700">
      {/* Hero Section */}
      <section className="relative pt-32 pb-20 overflow-hidden bg-black text-white">
        <div className="absolute inset-0 opacity-25 pointer-events-none">
          <img src="https://images.unsplash.com/photo-1513828583688-c52646db42da?auto=format&fit=crop&q=80&w=1600" alt="Industrial Background" className="w-full h-full object-cover" />
        </div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="inline-flex items-center px-4 py-2 rounded-full bg-[#DB8247]/10 text-[#DB8247] text-sm font-semibold mb-6 border border-[#DB8247]/20">
                <Factory size={16} className="mr-2" /> Expert Île-de-France (95, 93, 60)
              </div>
              <h1 className="text-4xl lg:text-6xl font-black leading-tight mb-6 uppercase tracking-tight">
                Entreprise de <span className="text-[#DB8247]">peinture industrielle</span> & traitement de surface en <span className="text-[#DB8247]">Île-de-France</span>
              </h1>
              <p className="text-lg text-slate-300 mb-8 max-w-lg leading-relaxed">
                DinaEpoxy est spécialisée dans le traitement de surface des métaux. Nous accompagnons les professionnels dans la protection, la finition et la durabilité de leurs pièces métalliques.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <button 
                  onClick={() => setPage('contact')}
                  className="px-8 py-4 bg-[#DB8247] hover:bg-[#c6743d] text-white rounded-lg font-bold transition-all shadow-lg shadow-[#DB8247]/20 flex items-center justify-center"
                >
                  Demander un devis <ArrowRight size={20} className="ml-2" />
                </button>
                <button 
                  onClick={() => setPage('portfolio')}
                  className="px-8 py-4 bg-transparent border border-white/20 hover:bg-white/10 text-white rounded-lg font-bold transition-all flex items-center justify-center"
                >
                  Nos réalisations
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Intro Text / Description */}
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <p className="text-lg text-slate-600 leading-relaxed mb-6">
            Nous intervenons principalement en Val-d’Oise (95), Seine-Saint-Denis (93) et dans l’Oise (60). 
            Nous accompagnons les entreprises, industriels et professionnels du bâtiment dans la protection, 
            la finition et la durabilité de leurs pièces métalliques, en atelier, avec des procédés maîtrisés et des prestations sur mesure.
          </p>
          <div className="flex items-center justify-center text-[#DB8247] font-bold uppercase tracking-wider text-sm">
            <CheckCircle size={20} className="mr-2" />
            Objectif : garantir des traitements fiables et durables.
          </div>
        </div>
      </section>

      {/* H2 – Solutions de protection */}
      <section className="py-24 bg-slate-50 border-y border-slate-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-3xl font-black mb-6 uppercase tracking-tight text-slate-900">Des solutions complètes de protection et de finition des métaux</h2>
              <p className="text-slate-600 mb-6 leading-relaxed">
                La peinture industrielle ne se limite pas à l’application d’un revêtement. Elle s’inscrit dans une chaîne de traitement globale, allant de la préparation de surface jusqu’à la protection finale contre l’usure et la corrosion.
              </p>
              
              <h3 className="text-xl font-bold mb-4 text-slate-800">Pourquoi choisir DinaEpoxy pour vos pièces ?</h3>
              <ul className="space-y-4">
                {[
                  "Protection durable contre la corrosion et l'humidité",
                  "Amélioration esthétique et finitions homogènes",
                  "Allongement de la durée de vie des structures",
                  "Adaptation aux contraintes d'usage (intérieur, extérieur)"
                ].map((item, i) => (
                  <li key={i} className="flex items-start">
                    <Shield size={18} className="text-[#DB8247] mr-3 mt-1 shrink-0" />
                    <span className="text-slate-700 font-medium">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div className="rounded-2xl overflow-hidden shadow-2xl border-4 border-white">
              <img src="https://images.unsplash.com/photo-1581092160562-40aa08e78837?auto=format&fit=crop&q=80&w=800" alt="Process Industriel" className="w-full h-full object-cover" />
            </div>
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h3 className="text-2xl font-black mb-4 uppercase">Un process industriel maîtrisé de A à Z</h3>
            <p className="text-slate-500 max-w-2xl mx-auto">Nous intervenons en atelier avec un process structuré garantissant la qualité des traitements.</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-5 gap-4">
            {[
              { title: "Analyse", text: "Étude technique" },
              { title: "Préparation", text: "Surface nettoyée" },
              { title: "Application", text: "Poudre ou liquide" },
              { title: "Cuisson", text: "Polymérisation" },
              { title: "Contrôle", text: "Qualité totale" }
            ].map((step, i) => (
              <div key={i} className="p-8 bg-slate-50 rounded-2xl border border-slate-100 text-center flex flex-col items-center group hover:border-[#DB8247] transition-all">
                <div className="w-12 h-12 bg-black text-white rounded-full flex items-center justify-center font-bold mb-4 group-hover:bg-[#DB8247] transition-colors shadow-lg">{i + 1}</div>
                <h4 className="font-bold mb-2 uppercase text-xs tracking-widest">{step.title}</h4>
                <p className="text-xs text-slate-500">{step.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Préparation de surface */}
      <section className="py-24 bg-black text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-black mb-4 uppercase">Préparation de surface : l’étape clé</h2>
            <p className="text-slate-400 max-w-3xl mx-auto">La performance d’un revêtement dépend directement de la qualité de la préparation. Cette étape conditionne l’adhérence et la tenue dans le temps.</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <div className="p-10 bg-slate-900 rounded-3xl border border-white/5 hover:border-[#DB8247]/30 transition-all">
              <h3 className="text-xl font-bold mb-4 flex items-center uppercase tracking-tight text-[#DB8247]">
                <Settings className="mr-3" /> Sablage et grenaillage
              </h3>
              <p className="text-slate-400 leading-relaxed text-sm">
                Permet d’éliminer les impuretés, anciennes peintures et oxydations, tout en créant une rugosité contrôlée favorisant l’adhérence des revêtements.
              </p>
            </div>
            <div className="p-10 bg-slate-900 rounded-3xl border border-white/5 hover:border-[#DB8247]/30 transition-all">
              <h3 className="text-xl font-bold mb-4 flex items-center uppercase tracking-tight text-[#DB8247]">
                <Info className="mr-3" /> Dégraissage et traitements
              </h3>
              <p className="text-slate-400 leading-relaxed text-sm">
                Selon la nature des pièces (acier, aluminium, métaux non ferreux), pour assurer une surface propre et prête à recevoir le revêtement.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Techniques Section */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-black text-center mb-16 uppercase">Nos techniques d’application</h2>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <div className="group">
              <div className="aspect-[16/10] rounded-3xl overflow-hidden mb-6 shadow-xl">
                <img src="https://images.unsplash.com/photo-1590846083693-f23fdede3a7e?auto=format&fit=crop&q=80&w=800" alt="Thermolaquage" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" />
              </div>
              <h3 className="text-2xl font-black mb-4 uppercase text-slate-900">Le thermolaquage (peinture poudre)</h3>
              <p className="text-slate-600 mb-6 leading-relaxed">
                Idéal pour les pièces nécessitant une excellente tenue dans le temps. Résistance et finition durable de haute qualité, sans solvant.
              </p>
              <ul className="grid grid-cols-2 gap-3 text-xs font-bold text-slate-700 uppercase tracking-wider">
                <li className="flex items-center"><CheckCircle size={14} className="text-[#DB8247] mr-2" /> Homogène & résistant</li>
                <li className="flex items-center"><CheckCircle size={14} className="text-[#DB8247] mr-2" /> Esthétique premium</li>
                <li className="flex items-center"><CheckCircle size={14} className="text-[#DB8247] mr-2" /> Procédé écologique</li>
                <li className="flex items-center"><CheckCircle size={14} className="text-[#DB8247] mr-2" /> Acier & Aluminium</li>
              </ul>
            </div>
            <div className="group">
              <div className="aspect-[16/10] rounded-3xl overflow-hidden mb-6 shadow-xl">
                <img src="https://images.unsplash.com/photo-1562408590-e32931084e23?auto=format&fit=crop&q=80&w=800" alt="Peinture Liquide" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" />
              </div>
              <h3 className="text-2xl font-black mb-4 uppercase text-slate-900">Peinture liquide & époxy</h3>
              <p className="text-slate-600 mb-6 leading-relaxed">
                Permet de traiter des pièces complexes ou de grandes dimensions ne pouvant pas passer en four. Protection anticorrosion renforcée.
              </p>
              <ul className="grid grid-cols-1 gap-3 text-xs font-bold text-slate-700 uppercase tracking-wider">
                <li className="flex items-center"><CheckCircle size={14} className="text-[#DB8247] mr-2" /> Flexibilité pour pièces hors-gabarit</li>
                <li className="flex items-center"><CheckCircle size={14} className="text-[#DB8247] mr-2" /> Systèmes anticorrosion renforcés</li>
                <li className="flex items-center"><CheckCircle size={14} className="text-[#DB8247] mr-2" /> Adapté aux environnements agressifs</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Secteurs d'intervention */}
      <section className="py-24 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-black text-center mb-16 uppercase">Secteurs d’activité</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-white p-10 rounded-3xl shadow-sm border border-slate-200 hover:border-[#DB8247] transition-all">
              <h3 className="text-xl font-bold mb-4 uppercase tracking-tighter">Industrie & Serrurerie</h3>
              <p className="text-slate-500 text-sm">Protection de charpentes, escaliers, garde-corps et structures métalliques du bâtiment.</p>
            </div>
            <div className="bg-white p-10 rounded-3xl shadow-sm border border-slate-200 hover:border-[#DB8247] transition-all">
              <h3 className="text-xl font-bold mb-4 uppercase tracking-tighter">Machinisme & Mobilier</h3>
              <p className="text-slate-500 text-sm">Équipements techniques, mobilier de voirie et pièces en série pour l'industrie mécanique.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-24 bg-[#DB8247] text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-black mb-6 uppercase tracking-tight">Un projet de peinture industrielle ?</h2>
          <p className="text-xl text-white/90 mb-10 max-w-2xl mx-auto font-medium">
            Nos équipes vous accompagnent dans la définition de la solution la plus adaptée à vos besoins techniques.
          </p>
          <button 
            onClick={() => setPage('contact')}
            className="px-12 py-5 bg-black text-white rounded-xl font-black uppercase tracking-widest shadow-2xl hover:bg-slate-900 transition-all flex items-center justify-center mx-auto"
          >
            Contactez-nous pour un devis <ArrowRight className="ml-2" />
          </button>
        </div>
      </section>
    </div>
  );
};

export default Home;

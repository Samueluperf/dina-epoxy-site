
import React from 'react';
import { CheckCircle, Info, ArrowRight, Shield, Zap, Flame, Droplets, ThermometerSun, Leaf, Clock } from 'lucide-react';

const Thermolaquage: React.FC = () => {
  return (
    <div className="pt-32 pb-24 animate-in fade-in duration-700">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* H1 Section */}
        <div className="mb-20">
          <div className="inline-flex items-center px-4 py-2 rounded-full bg-[#DB8247]/10 text-[#DB8247] text-xs font-black uppercase tracking-widest mb-6 border border-[#DB8247]/20">
            <Zap size={14} className="mr-2" /> Expertise 15 ans
          </div>
          <h1 className="text-4xl lg:text-6xl font-black uppercase tracking-tighter leading-tight mb-8">
            Thermolaquage <span className="text-[#DB8247]">Val-d'Oise</span> : Peinture Poudre Haute Performance
          </h1>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
            <p className="text-lg text-slate-600 leading-relaxed font-medium">
              Spécialiste du thermolaquage depuis plus de 15 ans, DINA EPOXY met son savoir-faire au service des professionnels et des particuliers en Île-de-France. Notre atelier de Goussainville (95) dispose d'équipements de peinture poudre modernes permettant de traiter vos pièces métalliques avec une finition professionnelle et une protection anticorrosion durable.
            </p>
            <div className="bg-slate-50 p-8 rounded-[2rem] border border-slate-100">
              <p className="text-slate-600 mb-6 text-sm">
                Nous intervenons dans tout le Val-d'Oise (95), la Seine-Saint-Denis (93) et l'Oise (60). Nous garantissons un résultat conforme à vos exigences de qualité et d'esthétique, du mobilier design aux structures industrielles lourdes.
              </p>
              <button className="flex items-center text-[#DB8247] font-black uppercase tracking-widest text-xs border-b-2 border-[#DB8247] pb-1 hover:text-[#a85d2e] hover:border-[#a85d2e] transition-colors">
                Demander un devis thermolaquage <ArrowRight size={14} className="ml-2" />
              </button>
            </div>
          </div>
        </div>

        {/* What is Thermolaquage? */}
        <section className="mb-24 grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div className="relative">
            <div className="aspect-square rounded-[3rem] overflow-hidden shadow-2xl">
              <img src="https://images.unsplash.com/photo-1590846083693-f23fdede3a7e?auto=format&fit=crop&q=80&w=1000" alt="Processus de thermolaquage" className="w-full h-full object-cover" />
            </div>
            <div className="absolute -bottom-6 -right-6 bg-black p-8 rounded-3xl text-white shadow-xl max-w-xs">
              <div className="flex items-center gap-4 mb-2">
                <ThermometerSun className="text-[#DB8247]" size={32} />
                <span className="text-2xl font-black">200°C</span>
              </div>
              <p className="text-[10px] uppercase font-bold text-slate-400 tracking-widest">Température de polymérisation pour une adhérence parfaite.</p>
            </div>
          </div>
          <div className="space-y-6">
            <h2 className="text-3xl font-black uppercase tracking-tight">Qu'est-ce que le thermolaquage ?</h2>
            <p className="text-slate-600 leading-relaxed">
              Le thermolaquage est un procédé de peinture industrielle qui consiste à appliquer une poudre thermodurcissable sur une pièce métallique, puis à la cuire dans un four à haute température. Contrairement à la peinture liquide, cette technique utilise une poudre sèche projetée par pistolet électrostatique.
            </p>
            <p className="text-slate-600 leading-relaxed">
              Lors de la cuisson, la poudre fond et se polymérise pour former un film protecteur homogène de 60 à 120 microns. Ce revêtement offre une résistance exceptionnelle aux chocs, aux rayures, à la corrosion et aux UV, avec une durée de vie pouvant dépasser 20 ans.
            </p>
            <div className="flex gap-4 pt-4">
              <div className="flex items-center gap-2 px-4 py-2 bg-green-50 text-green-700 rounded-full text-[10px] font-black uppercase tracking-tight border border-green-100">
                <Leaf size={14} /> 100% Sans Solvant
              </div>
              <div className="flex items-center gap-2 px-4 py-2 bg-blue-50 text-blue-700 rounded-full text-[10px] font-black uppercase tracking-tight border border-blue-100">
                <Zap size={14} /> Zéro Émission COV
              </div>
            </div>
          </div>
        </section>

        {/* Benefits Grid */}
        <section className="mb-24 py-20 bg-slate-50 rounded-[3rem] px-10">
          <h2 className="text-3xl font-black uppercase tracking-tight text-center mb-16">Les avantages du thermolaquage</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            <div className="text-center group">
              <div className="w-16 h-16 bg-white rounded-3xl flex items-center justify-center text-[#DB8247] mx-auto mb-6 shadow-xl group-hover:bg-black group-hover:text-white transition-all">
                <Shield size={32} />
              </div>
              <h3 className="font-black uppercase text-sm mb-4">Protection Anticorrosion</h3>
              <p className="text-slate-500 text-xs leading-relaxed">Résiste à plus de 1000h de brouillard salin. Idéal pour l'exposition extérieure sévère.</p>
            </div>
            <div className="text-center group">
              <div className="w-16 h-16 bg-white rounded-3xl flex items-center justify-center text-[#DB8247] mx-auto mb-6 shadow-xl group-hover:bg-black group-hover:text-white transition-all">
                <Droplets size={32} />
              </div>
              <h3 className="font-black uppercase text-sm mb-4">Nuancier RAL Illimité</h3>
              <p className="text-slate-500 text-xs leading-relaxed">+200 teintes disponibles : mat, satiné, brillant, sablé, grainé ou métallisé.</p>
            </div>
            <div className="text-center group">
              <div className="w-16 h-16 bg-white rounded-3xl flex items-center justify-center text-[#DB8247] mx-auto mb-6 shadow-xl group-hover:bg-black group-hover:text-white transition-all">
                <Clock size={32} />
              </div>
              <h3 className="font-black uppercase text-sm mb-4">Durabilité Exceptionnelle</h3>
              <p className="text-slate-500 text-xs leading-relaxed">Une longévité de 15 à 25 ans. Un investissement économique et écologique sur le long terme.</p>
            </div>
          </div>
        </section>

        {/* Comparison Table */}
        <section className="mb-24">
          <h2 className="text-3xl font-black uppercase tracking-tight text-center mb-12">Thermolaquage vs Peinture liquide</h2>
          <div className="overflow-x-auto rounded-[2rem] border border-slate-200">
            <table className="w-full text-left text-sm">
              <thead className="bg-slate-900 text-white border-b border-slate-800">
                <tr>
                  <th className="px-6 py-5 font-black uppercase tracking-widest text-[#DB8247]">Critère</th>
                  <th className="px-6 py-5 font-black uppercase tracking-widest">Thermolaquage</th>
                  <th className="px-6 py-5 font-black uppercase tracking-widest">Peinture liquide</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-100">
                <tr>
                  <td className="px-6 py-5 font-bold text-slate-900">Épaisseur</td>
                  <td className="px-6 py-5">60-120 µm (1 couche)</td>
                  <td className="px-6 py-5">20-30 µm par couche</td>
                </tr>
                <tr className="bg-slate-50/50">
                  <td className="px-6 py-5 font-bold text-slate-900">Brouillard salin</td>
                  <td className="px-6 py-5 text-green-600 font-bold">&gt; 1000h</td>
                  <td className="px-6 py-5">200-500h</td>
                </tr>
                <tr>
                  <td className="px-6 py-5 font-bold text-slate-900">Résistance chocs</td>
                  <td className="px-6 py-5 font-bold text-[#DB8247]">Excellente</td>
                  <td className="px-6 py-5">Moyenne</td>
                </tr>
                <tr className="bg-slate-50/50">
                  <td className="px-6 py-5 font-bold text-slate-900">Émissions COV</td>
                  <td className="px-6 py-5 font-bold text-green-600">Zéro</td>
                  <td className="px-6 py-5 text-red-600">Élevées</td>
                </tr>
                <tr>
                  <td className="px-6 py-5 font-bold text-slate-900">Durée de vie (Ext)</td>
                  <td className="px-6 py-5 font-bold">15-25 ans</td>
                  <td className="px-6 py-5">5-10 ans</td>
                </tr>
              </tbody>
            </table>
          </div>
        </section>

        {/* Metals Section */}
        <section className="mb-24 grid grid-cols-1 md:grid-cols-2 gap-12">
          <div className="p-12 bg-black text-white rounded-[3rem] shadow-2xl">
            <h2 className="text-3xl font-black uppercase tracking-tight mb-8">Supports éligibles</h2>
            <ul className="space-y-6">
              <li className="flex items-center gap-4">
                <div className="w-10 h-10 rounded-full bg-[#DB8247]/20 flex items-center justify-center text-[#DB8247] font-black">1</div>
                <div>
                  <h4 className="font-bold uppercase text-sm">Acier (Brut, Galva, EZ)</h4>
                  <p className="text-xs text-slate-400">Protection anticorrosion maximale après sablage.</p>
                </div>
              </li>
              <li className="flex items-center gap-4">
                <div className="w-10 h-10 rounded-full bg-[#DB8247]/20 flex items-center justify-center text-[#DB8247] font-black">2</div>
                <div>
                  <h4 className="font-bold uppercase text-sm">Aluminium</h4>
                  <p className="text-xs text-slate-400">Traitement de conversion chimique pour adhérence parfaite.</p>
                </div>
              </li>
              <li className="flex items-center gap-4">
                <div className="w-10 h-10 rounded-full bg-[#DB8247]/20 flex items-center justify-center text-[#DB8247] font-black">3</div>
                <div>
                  <h4 className="font-bold uppercase text-sm">Fonte & Zinc</h4>
                  <p className="text-xs text-slate-400">Restauration de radiateurs et éléments décoratifs.</p>
                </div>
              </li>
            </ul>
          </div>
          <div className="p-12 bg-[#DB8247]/5 rounded-[3rem] border border-[#DB8247]/10">
            <h2 className="text-3xl font-black uppercase tracking-tight mb-8">Processus Qualité</h2>
            <div className="space-y-8">
              <div>
                <span className="text-[10px] font-black uppercase text-[#DB8247] tracking-widest block mb-2">Phase 1</span>
                <h4 className="font-bold mb-2">Préparation (80% du résultat)</h4>
                <p className="text-sm text-slate-500">Sablage, microbillage, dégraissage ou phosphatation selon le support.</p>
              </div>
              <div>
                <span className="text-[10px] font-black uppercase text-[#DB8247] tracking-widest block mb-2">Phase 2</span>
                <h4 className="font-bold mb-2">Poudrage Électrostatique</h4>
                <p className="text-sm text-slate-500">Application uniforme par attraction électrique des poudres.</p>
              </div>
              <div>
                <span className="text-[10px] font-black uppercase text-[#DB8247] tracking-widest block mb-2">Phase 3</span>
                <h4 className="font-bold mb-2">Polymérisation au four</h4>
                <p className="text-sm text-slate-500">Cuisson à 200°C pour une réticulation chimique indestructible.</p>
              </div>
            </div>
          </div>
        </section>

        {/* FAQ Section */}
        <section className="py-20 bg-slate-50 rounded-[3rem] px-10">
          <h2 className="text-3xl font-black uppercase tracking-tight text-center mb-16">Questions fréquentes</h2>
          <div className="max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-x-16 gap-y-10">
            <div>
              <h4 className="font-black uppercase text-xs tracking-widest text-[#DB8247] mb-2">Quel est le prix ?</h4>
              <p className="text-slate-600 text-sm">Entre 15€ et 40€/m² pour un traitement standard. Forfait minimum pour petites pièces.</p>
            </div>
            <div>
              <h4 className="font-black uppercase text-xs tracking-widest text-[#DB8247] mb-2">Durée de vie ?</h4>
              <p className="text-slate-600 text-sm">15 à 25 ans en extérieur. Pratiquement illimitée en intérieur.</p>
            </div>
            <div>
              <h4 className="font-black uppercase text-xs tracking-widest text-[#DB8247] mb-2">Sur de la rouille ?</h4>
              <p className="text-slate-600 text-sm">Impossible. La corrosion doit impérativement être éliminée par sablage au préalable.</p>
            </div>
            <div>
              <h4 className="font-black uppercase text-xs tracking-widest text-[#DB8247] mb-2">Délais ?</h4>
              <p className="text-slate-600 text-sm">3 à 5 jours ouvrés en moyenne. Service express disponible en cas d'urgence.</p>
            </div>
          </div>
        </section>

        {/* Final CTA */}
        <div className="mt-24 text-center">
          <div className="w-20 h-20 bg-black rounded-full flex items-center justify-center text-[#DB8247] mx-auto mb-8 shadow-2xl">
            <Flame size={32} className="animate-pulse" />
          </div>
          <h2 className="text-3xl font-black uppercase mb-4 tracking-tighter">Votre projet mérite une finition d'exception</h2>
          <p className="text-slate-500 max-w-xl mx-auto mb-10">Contactez DINA EPOXY à Goussainville (95) pour une étude gratuite de votre projet de thermolaquage.</p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <button className="px-12 py-5 bg-[#DB8247] text-white rounded-xl font-black uppercase tracking-widest shadow-xl shadow-[#DB8247]/20 hover:bg-[#c6743d] transition-all">
              Devis Gratuit sous 24h
            </button>
            <div className="px-8 py-5 bg-white border border-slate-200 rounded-xl flex items-center justify-center gap-4">
              <span className="text-[10px] font-black uppercase text-slate-400 tracking-widest">Ligne Directe</span>
              <span className="text-lg font-black">09 74 56 88 28</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Thermolaquage;

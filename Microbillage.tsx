
import React from 'react';
import { CheckCircle, Info, ArrowRight, Shield, Target, CircleDot, Zap, Wind, Hammer, Eraser } from 'lucide-react';

const Microbillage: React.FC = () => {
  return (
    <div className="pt-32 pb-24 animate-in fade-in duration-700">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* H1 Section */}
        <div className="mb-20">
          <div className="inline-flex items-center px-4 py-2 rounded-full bg-[#DB8247]/10 text-[#DB8247] text-xs font-black uppercase tracking-widest mb-6 border border-[#DB8247]/20">
            <CircleDot size={14} className="mr-2" /> Val-d'Oise (95)
          </div>
          <h1 className="text-4xl lg:text-6xl font-black uppercase tracking-tighter leading-tight mb-8">
            Microbillage : <span className="text-[#DB8247]">Nettoyage de Précision</span> et Finition Esthétique
          </h1>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
            <p className="text-lg text-slate-600 leading-relaxed font-medium">
              Le microbillage est une technique de traitement de surface par projection de microbilles qui permet de nettoyer, décaper et uniformiser l'aspect de vos pièces métalliques avec une grande précision. Chez DINA EPOXY, notre atelier de Goussainville (95) dispose d'équipements modernes pour réaliser le microbillage de tous types de métaux : aluminium, inox, acier, fonte et alliages spéciaux.
            </p>
            <div className="bg-slate-50 p-8 rounded-[2rem] border border-slate-100">
              <p className="text-slate-600 mb-6 text-sm">
                Nous intervenons dans tout le Val-d'Oise (95), la Seine-Saint-Denis (93) et l'Oise (60). Que vous soyez industriel, artisan ou particulier, confiez-nous vos pièces délicates nécessitant un nettoyage de précision.
              </p>
              <button className="flex items-center text-[#DB8247] font-black uppercase tracking-widest text-xs border-b-2 border-[#DB8247] pb-1 hover:text-[#a85d2e] hover:border-[#a85d2e] transition-colors">
                Demander un devis personnalisé <ArrowRight size={14} className="ml-2" />
              </button>
            </div>
          </div>
        </div>

        {/* Content Blocks */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-16 mb-24">
          <div className="lg:col-span-2 space-y-12">
            <section>
              <h2 className="text-3xl font-black uppercase tracking-tight mb-6">Qu'est-ce que le microbillage ?</h2>
              <p className="text-slate-600 leading-relaxed mb-4">
                Le microbillage est un procédé de traitement de surface mécanique qui consiste à projeter de fines billes (généralement en verre, céramique ou inox) sur une pièce métallique à l'aide d'air comprimé. Contrairement au sablage qui utilise des abrasifs anguleux et agressifs, le microbillage emploie des billes sphériques de très petit diamètre (40 à 200 microns) qui impactent la surface sans l'éroder.
              </p>
              <p className="text-slate-600 leading-relaxed">
                Cette technique permet d'obtenir une finition satinée uniforme tout en préservant les cotes et tolérances dimensionnelles de la pièce. Elle améliore également la résistance à la fatigue grâce au grenaillage de précontrainte (shot peening).
              </p>
            </section>

            <section>
              <h2 className="text-3xl font-black uppercase tracking-tight mb-6">Pourquoi choisir le microbillage ?</h2>
              <div className="space-y-6">
                <div className="flex items-start">
                  <div className="w-10 h-10 bg-[#DB8247]/5 text-[#DB8247] rounded-xl flex items-center justify-center mr-5 shrink-0 border border-[#DB8247]/10">
                    <Target size={20} />
                  </div>
                  <div>
                    <h3 className="font-bold text-slate-900 mb-1">Nettoyage sans altération dimensionnelle</h3>
                    <p className="text-slate-500 text-sm">Respecte les tolérances les plus strictes. Idéal pour pièces de précision, moules et outillages.</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <div className="w-10 h-10 bg-[#DB8247]/5 text-[#DB8247] rounded-xl flex items-center justify-center mr-5 shrink-0 border border-[#DB8247]/10">
                    <Shield size={20} />
                  </div>
                  <div>
                    <h3 className="font-bold text-slate-900 mb-1">Finition esthétique satinée</h3>
                    <p className="text-slate-500 text-sm">Aspect « brossé » uniforme qui masque les traces d'usinage et rayures légères.</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <div className="w-10 h-10 bg-[#DB8247]/5 text-[#DB8247] rounded-xl flex items-center justify-center mr-5 shrink-0 border border-[#DB8247]/10">
                    <CheckCircle size={20} />
                  </div>
                  <div>
                    <h3 className="font-bold text-slate-900 mb-1">Préparation idéale avant peinture</h3>
                    <p className="text-slate-500 text-sm">Crée une rugosité fine idéale pour l'adhérence du thermolaquage sur aluminium.</p>
                  </div>
                </div>
              </div>
            </section>
          </div>

          <aside className="bg-slate-900 rounded-[2.5rem] p-10 text-white sticky top-28 h-fit">
            <h3 className="text-xl font-black uppercase tracking-tight mb-6 text-[#DB8247]">Contact Direct</h3>
            <div className="space-y-6 mb-10">
              <div className="flex items-center">
                <div className="w-8 h-8 bg-white/10 rounded-lg flex items-center justify-center mr-3 text-[#DB8247]">
                  <CircleDot size={16} />
                </div>
                <span className="text-sm font-bold uppercase tracking-widest">Goussainville (95)</span>
              </div>
              <div className="text-2xl font-black tracking-tighter">09 74 56 88 28</div>
            </div>
            <button className="w-full py-4 bg-[#DB8247] hover:bg-[#c6743d] rounded-xl font-black uppercase tracking-widest transition-all">
              Devis en 24h
            </button>
          </aside>
        </div>

        {/* Comparison Table */}
        <section className="mb-24">
          <h2 className="text-3xl font-black uppercase tracking-tight text-center mb-12">Microbillage vs Sablage vs Grenaillage</h2>
          <div className="overflow-x-auto rounded-[2rem] border border-slate-200">
            <table className="w-full text-left text-sm">
              <thead className="bg-slate-50 border-b border-slate-200">
                <tr>
                  <th className="px-6 py-4 font-black uppercase tracking-widest text-[#DB8247]">Critère</th>
                  <th className="px-6 py-4 font-black uppercase tracking-widest">Microbillage</th>
                  <th className="px-6 py-4 font-black uppercase tracking-widest">Sablage</th>
                  <th className="px-6 py-4 font-black uppercase tracking-widest">Grenaillage</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-100">
                <tr>
                  <td className="px-6 py-4 font-bold text-slate-900">Abrasif</td>
                  <td className="px-6 py-4">Microbilles sphériques</td>
                  <td className="px-6 py-4">Sable / Corindon</td>
                  <td className="px-6 py-4">Grenaille métallique</td>
                </tr>
                <tr className="bg-slate-50/50">
                  <td className="px-6 py-4 font-bold text-slate-900">Agressivité</td>
                  <td className="px-6 py-4 text-[#DB8247] font-bold">Faible</td>
                  <td className="px-6 py-4">Moyenne à forte</td>
                  <td className="px-6 py-4">Forte</td>
                </tr>
                <tr>
                  <td className="px-6 py-4 font-bold text-slate-900">Respect cotes</td>
                  <td className="px-6 py-4 font-bold text-green-600">Excellent</td>
                  <td className="px-6 py-4">Moyen</td>
                  <td className="px-6 py-4 text-red-600">Faible</td>
                </tr>
                <tr className="bg-slate-50/50">
                  <td className="px-6 py-4 font-bold text-slate-900">Finition</td>
                  <td className="px-6 py-4">Satinée uniforme</td>
                  <td className="px-6 py-4">Rugueuse mate</td>
                  <td className="px-6 py-4">Rugueuse forte</td>
                </tr>
              </tbody>
            </table>
          </div>
        </section>

        {/* Materials */}
        <section className="mb-24">
          <h2 className="text-3xl font-black uppercase tracking-tight mb-12">Matériaux éligibles</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="p-10 bg-white rounded-3xl border border-slate-100 shadow-sm hover:border-[#DB8247] transition-all">
              <h3 className="font-black uppercase mb-4 tracking-tight">Microbillage Aluminium</h3>
              <p className="text-slate-500 text-sm leading-relaxed">Métal tendre nécessitant un traitement délicat. Recommandé pour jantes alu, carters moto et pièces design.</p>
            </div>
            <div className="p-10 bg-white rounded-3xl border border-slate-100 shadow-sm hover:border-[#DB8247] transition-all">
              <h3 className="font-black uppercase mb-4 tracking-tight">Microbillage Inox</h3>
              <p className="text-slate-500 text-sm leading-relaxed">Finition satinée uniforme pour équipements agroalimentaires, restauration et médical.</p>
            </div>
            <div className="p-10 bg-white rounded-3xl border border-slate-100 shadow-sm hover:border-[#DB8247] transition-all">
              <h3 className="font-black uppercase mb-4 tracking-tight">Métaux Spéciaux</h3>
              <p className="text-slate-500 text-sm leading-relaxed">Acier de précision, fonte (préparation), laiton et bronze (restauration décorative).</p>
            </div>
          </div>
        </section>

        {/* FAQ Section */}
        <section className="py-20 bg-slate-50 rounded-[3rem] px-10">
          <h2 className="text-3xl font-black uppercase tracking-tight text-center mb-16">Questions fréquentes</h2>
          <div className="max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-x-16 gap-y-10">
            <div>
              <h4 className="font-black uppercase text-xs tracking-widest text-[#DB8247] mb-2">Quel est le prix ?</h4>
              <p className="text-slate-600 text-sm">Comptez entre 20€ et 50€/pièce pour des éléments moyens (jante, carter). Devis gratuit sur mesure.</p>
            </div>
            <div>
              <h4 className="font-black uppercase text-xs tracking-widest text-[#DB8247] mb-2">Abîme-t-il les pièces ?</h4>
              <p className="text-slate-600 text-sm">Non, c'est une technique douce qui préserve les dimensions et les tolérances.</p>
            </div>
            <div>
              <h4 className="font-black uppercase text-xs tracking-widest text-[#DB8247] mb-2">Quels délais ?</h4>
              <p className="text-slate-600 text-sm">2 à 4 jours ouvrés pour les petites séries. Service express disponible.</p>
            </div>
            <div>
              <h4 className="font-black uppercase text-xs tracking-widest text-[#DB8247] mb-2">Sablage ou Microbillage ?</h4>
              <p className="text-slate-600 text-sm">Sablage pour décaper (agressif), Microbillage pour finir ou nettoyer avec précision (doux).</p>
            </div>
          </div>
        </section>

        {/* CTA Footer */}
        <div className="mt-24 text-center">
          <h3 className="text-2xl font-black uppercase mb-8">Découvrez nos autres services</h3>
          <div className="flex flex-wrap justify-center gap-4">
            <button className="flex items-center px-6 py-3 bg-white border border-slate-200 rounded-full text-[10px] font-black uppercase tracking-widest hover:border-[#DB8247] hover:text-[#DB8247] transition-all"><Zap size={14} className="mr-2"/> Thermolaquage</button>
            <button className="flex items-center px-6 py-3 bg-white border border-slate-200 rounded-full text-[10px] font-black uppercase tracking-widest hover:border-[#DB8247] hover:text-[#DB8247] transition-all"><Wind size={14} className="mr-2"/> Sablage</button>
            <button className="flex items-center px-6 py-3 bg-white border border-slate-200 rounded-full text-[10px] font-black uppercase tracking-widest hover:border-[#DB8247] hover:text-[#DB8247] transition-all"><Hammer size={14} className="mr-2"/> Grenaillage</button>
            <button className="flex items-center px-6 py-3 bg-white border border-slate-200 rounded-full text-[10px] font-black uppercase tracking-widest hover:border-[#DB8247] hover:text-[#DB8247] transition-all"><Eraser size={14} className="mr-2"/> Décapage</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Microbillage;

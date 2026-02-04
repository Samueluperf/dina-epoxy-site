
import React from 'react';
import { CheckCircle, Info, ArrowRight, Shield, Target, Wind, Hammer, Factory, Settings } from 'lucide-react';

const SablageGrenaillage: React.FC = () => {
  return (
    <div className="pt-32 pb-24 animate-in fade-in duration-700">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* H1 Section */}
        <div className="mb-20">
          <div className="inline-flex items-center px-4 py-2 rounded-full bg-[#DB8247]/10 text-[#DB8247] text-xs font-black uppercase tracking-widest mb-6 border border-[#DB8247]/20">
            <Wind size={14} className="mr-2" /> Val-d'Oise (95)
          </div>
          <h1 className="text-4xl lg:text-6xl font-black uppercase tracking-tighter leading-tight mb-8">
            Sablage et Grenaillage : <span className="text-[#DB8247]">Décapage Industriel</span> & Préparation de Surface
          </h1>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
            <p className="text-lg text-slate-600 leading-relaxed font-medium">
              Le sablage et le grenaillage sont deux techniques de préparation de surface essentielles pour décaper, nettoyer et préparer vos pièces métalliques avant tout traitement de finition. Chez DINA EPOXY, notre atelier de Goussainville (95) dispose d'équipements professionnels pour réaliser ces opérations sur tous types de métaux : acier, fonte, aluminium et alliages.
            </p>
            <div className="bg-slate-50 p-8 rounded-[2rem] border border-slate-100">
              <p className="text-slate-600 mb-6 text-sm">
                Nous intervenons dans tout le Val-d'Oise (95), la Seine-Saint-Denis (93) et l'Oise (60). Élimination de rouille, calamine, peintures ou préparation avant thermolaquage : notre équipe met son savoir-faire à votre service.
              </p>
              <button className="flex items-center text-[#DB8247] font-black uppercase tracking-widest text-xs border-b-2 border-[#DB8247] pb-1 hover:text-[#a85d2e] hover:border-[#a85d2e] transition-colors">
                Demander un devis rapide <ArrowRight size={14} className="ml-2" />
              </button>
            </div>
          </div>
        </div>

        {/* Core Concepts */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-24">
          <div className="p-10 bg-black text-white rounded-[2.5rem] relative overflow-hidden group">
            <div className="absolute top-0 right-0 w-32 h-32 bg-[#DB8247] opacity-10 rounded-full -mr-16 -mt-16 blur-2xl"></div>
            <Wind className="text-[#DB8247] mb-6" size={40} />
            <h2 className="text-2xl font-black uppercase mb-4 tracking-tight">Le Sablage</h2>
            <p className="text-slate-400 text-sm leading-relaxed mb-6">
              Traitement par abrasion consistant à projeter à haute pression un abrasif (corindon, grenat, billes de verre). Idéal pour éliminer rouille, calamine et anciennes peintures tout en créant un profil d'ancrage normalisé (Sa 1 à Sa 3).
            </p>
          </div>
          <div className="p-10 bg-slate-900 text-white rounded-[2.5rem] relative overflow-hidden group">
            <Hammer className="text-[#DB8247] mb-6" size={40} />
            <h2 className="text-2xl font-black uppercase mb-4 tracking-tight">Le Grenaillage</h2>
            <p className="text-slate-400 text-sm leading-relaxed mb-6">
              Utilise de la grenaille métallique projetée par turbine ou air comprimé. Plus agressif, il est parfait pour les structures de grande dimension, les charpentes et les séries industrielles importantes.
            </p>
          </div>
        </div>

        {/* Comparison Table */}
        <section className="mb-24">
          <h2 className="text-3xl font-black uppercase tracking-tight text-center mb-12">Sablage vs Grenaillage : le comparatif</h2>
          <div className="overflow-x-auto rounded-[2rem] border border-slate-200">
            <table className="w-full text-left text-sm">
              <thead className="bg-slate-50 border-b border-slate-200">
                <tr>
                  <th className="px-6 py-4 font-black uppercase tracking-widest text-[#DB8247]">Critère</th>
                  <th className="px-6 py-4 font-black uppercase tracking-widest">Sablage</th>
                  <th className="px-6 py-4 font-black uppercase tracking-widest">Grenaillage</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-100">
                <tr>
                  <td className="px-6 py-4 font-bold text-slate-900">Abrasif</td>
                  <td className="px-6 py-4">Sable, corindon, grenat, verre</td>
                  <td className="px-6 py-4">Grenaille acier/fonte</td>
                </tr>
                <tr className="bg-slate-50/50">
                  <td className="px-6 py-4 font-bold text-slate-900">Agressivité</td>
                  <td className="px-6 py-4">Moyenne à forte</td>
                  <td className="px-6 py-4 text-[#DB8247] font-bold">Forte à très forte</td>
                </tr>
                <tr>
                  <td className="px-6 py-4 font-bold text-slate-900">Productivité</td>
                  <td className="px-6 py-4">Moyenne</td>
                  <td className="px-6 py-4 font-bold text-green-600">Élevée</td>
                </tr>
                <tr className="bg-slate-50/50">
                  <td className="px-6 py-4 font-bold text-slate-900">Métaux</td>
                  <td className="px-6 py-4">Tous métaux</td>
                  <td className="px-6 py-4">Acier, fonte principalement</td>
                </tr>
                <tr>
                  <td className="px-6 py-4 font-bold text-slate-900">Rugosité (Ra)</td>
                  <td className="px-6 py-4">6 à 12 µm</td>
                  <td className="px-6 py-4">12 à 25 µm</td>
                </tr>
              </tbody>
            </table>
          </div>
        </section>

        {/* Why Blast? */}
        <section className="mb-24 py-20 bg-slate-50 rounded-[3rem] px-10">
          <h2 className="text-3xl font-black uppercase tracking-tight text-center mb-16">Pourquoi réaliser un sablage ?</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="space-y-4">
              <div className="w-12 h-12 bg-white rounded-2xl flex items-center justify-center text-[#DB8247] shadow-sm">
                <Shield size={24} />
              </div>
              <h4 className="font-black uppercase text-sm tracking-tight">Stop Corrosion</h4>
              <p className="text-slate-500 text-xs leading-relaxed">Élimine la rouille en profondeur, même dans les recoins inaccessibles au brossage.</p>
            </div>
            <div className="space-y-4">
              <div className="w-12 h-12 bg-white rounded-2xl flex items-center justify-center text-[#DB8247] shadow-sm">
                <Settings size={24} />
              </div>
              <h4 className="font-black uppercase text-sm tracking-tight">Décapage Total</h4>
              <p className="text-slate-500 text-xs leading-relaxed">Retire rapidement peintures, vernis et résines sans produits chimiques polluants.</p>
            </div>
            <div className="space-y-4">
              <div className="w-12 h-12 bg-white rounded-2xl flex items-center justify-center text-[#DB8247] shadow-sm">
                <Target size={24} />
              </div>
              <h4 className="font-black uppercase text-sm tracking-tight">Accroche Optimale</h4>
              <p className="text-slate-500 text-xs leading-relaxed">Crée la rugosité d'ancrage nécessaire pour garantir la tenue du thermolaquage.</p>
            </div>
            <div className="space-y-4">
              <div className="w-12 h-12 bg-white rounded-2xl flex items-center justify-center text-[#DB8247] shadow-sm">
                <Hammer size={24} />
              </div>
              <h4 className="font-black uppercase text-sm tracking-tight">Rénovation</h4>
              <p className="text-slate-500 text-xs leading-relaxed">Redonne vie aux portails, radiateurs fonte et mobiliers métalliques anciens.</p>
            </div>
          </div>
        </section>

        {/* Sectors */}
        <section className="mb-24">
          <h2 className="text-3xl font-black uppercase tracking-tight mb-12">Applications et Secteurs</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <div className="flex gap-6">
              <div className="w-16 h-16 bg-black text-[#DB8247] rounded-2xl flex items-center justify-center shrink-0">
                <Factory size={32} />
              </div>
              <div>
                <h3 className="text-xl font-bold uppercase mb-2 tracking-tight">Industrie & BTP</h3>
                <p className="text-slate-500 text-sm leading-relaxed">Structures métalliques, charpentes, réservoirs, cuves et tuyauteries. Degrés Sa 2½ et Sa 3 garantis.</p>
              </div>
            </div>
            <div className="flex gap-6">
              <div className="w-16 h-16 bg-black text-[#DB8247] rounded-2xl flex items-center justify-center shrink-0">
                <Settings size={32} />
              </div>
              <div>
                <h3 className="text-xl font-bold uppercase mb-2 tracking-tight">Auto & Moto</h3>
                <p className="text-slate-500 text-sm leading-relaxed">Décapage de carrosseries, châssis et jantes. Sablage doux pour les tôles fines, grenaillage pour les pièces massives.</p>
              </div>
            </div>
          </div>
        </section>

        {/* FAQ Section */}
        <section className="py-20 bg-black text-white rounded-[3rem] px-10 relative overflow-hidden">
          <div className="absolute bottom-0 right-0 w-64 h-64 bg-[#DB8247] opacity-10 rounded-full blur-[100px]"></div>
          <h2 className="text-3xl font-black uppercase tracking-tight text-center mb-16">Questions fréquentes</h2>
          <div className="max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-x-16 gap-y-10 relative z-10">
            <div>
              <h4 className="font-black uppercase text-xs tracking-widest text-[#DB8247] mb-2">Quel est le prix ?</h4>
              <p className="text-slate-400 text-sm">Entre 15€ et 40€/m² selon l'état de corrosion et la complexité de la pièce.</p>
            </div>
            <div>
              <h4 className="font-black uppercase text-xs tracking-widest text-[#DB8247] mb-2">Quel abrasif utiliser ?</h4>
              <p className="text-slate-400 text-sm">Corindon pour les aciers durs, billes de verre pour les métaux tendres. Nous n'utilisons plus de sable siliceux.</p>
            </div>
            <div>
              <h4 className="font-black uppercase text-xs tracking-widest text-[#DB8247] mb-2">Risque d'abîmer le métal ?</h4>
              <p className="text-slate-400 text-sm">Non, nous adaptons la pression et le type d'abrasif. Pour les pièces très fines, nous conseillons le microbillage.</p>
            </div>
            <div>
              <h4 className="font-black uppercase text-xs tracking-widest text-[#DB8247] mb-2">Délais de réalisation ?</h4>
              <p className="text-slate-600 text-sm">2 à 5 jours ouvrés en moyenne pour le cycle complet sablage + finition.</p>
            </div>
          </div>
        </section>

        {/* CTA Banner */}
        <div className="mt-24 bg-[#DB8247] rounded-[2.5rem] p-12 text-white flex flex-col md:flex-row items-center justify-between gap-8">
          <div className="text-center md:text-left">
            <h3 className="text-3xl font-black uppercase tracking-tight mb-2">Besoin d'un décapage ?</h3>
            <p className="font-medium text-white/80">Recevez votre devis personnalisé sous 24 heures.</p>
          </div>
          <div className="flex flex-col sm:flex-row gap-4">
            <button className="px-10 py-4 bg-black text-white rounded-xl font-black uppercase tracking-widest hover:bg-slate-900 transition-all">
              Demander un devis
            </button>
            <div className="flex flex-col items-center justify-center px-6">
              <span className="text-[10px] font-black uppercase tracking-widest text-white/60">Ligne directe</span>
              <span className="text-xl font-black">09 74 56 88 28</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SablageGrenaillage;

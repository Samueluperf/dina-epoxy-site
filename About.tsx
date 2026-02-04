
import React from 'react';
import { Target, ShieldCheck, Zap, Factory } from 'lucide-react';

const About: React.FC = () => {
  return (
    <div className="pt-32 pb-24 animate-in fade-in duration-700">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mb-20">
          <h1 className="text-5xl font-black mb-8 uppercase tracking-tighter">Savoir-faire <span className="text-[#DB8247]">Industriel</span>.</h1>
          <p className="text-xl text-slate-600 leading-relaxed font-medium">
            DinaEpoxy s'est construite sur une expertise pointue du traitement de surface. Notre mission : offrir aux pièces métalliques une protection infaillible et une finition parfaite.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center mb-24">
          <div className="relative">
            <img 
              src="https://images.unsplash.com/photo-1565193566173-7a0ee3dbe261?auto=format&fit=crop&q=80&w=800" 
              alt="Atelier DinaEpoxy" 
              className="rounded-[3rem] shadow-2xl w-full h-auto" 
            />
            <div className="absolute -bottom-8 -right-8 w-48 h-48 bg-[#DB8247] rounded-full -z-10 opacity-10 blur-2xl"></div>
          </div>
          <div className="space-y-10">
            <div className="flex items-start">
              <div className="w-14 h-14 bg-[#DB8247]/5 rounded-2xl flex items-center justify-center text-[#DB8247] mr-6 shrink-0 border border-[#DB8247]/10">
                <Target size={28} />
              </div>
              <div>
                <h3 className="text-xl font-black mb-2 uppercase tracking-tight text-slate-900">Notre Vision</h3>
                <p className="text-slate-600 text-sm leading-relaxed">Devenir le partenaire privilégié des industries d'Île-de-France pour tous leurs besoins en peinture industrielle haute performance.</p>
              </div>
            </div>
            <div className="flex items-start">
              <div className="w-14 h-14 bg-[#DB8247]/5 rounded-2xl flex items-center justify-center text-[#DB8247] mr-6 shrink-0 border border-[#DB8247]/10">
                <ShieldCheck size={28} />
              </div>
              <div>
                <h3 className="text-xl font-black mb-2 uppercase tracking-tight text-slate-900">Qualité & Durabilité</h3>
                <p className="text-slate-600 text-sm leading-relaxed">Chaque pièce traitée subit un contrôle qualité rigoureux pour garantir une résistance maximale aux agressions extérieures.</p>
              </div>
            </div>
            <div className="flex items-start">
              <div className="w-14 h-14 bg-[#DB8247]/5 rounded-2xl flex items-center justify-center text-[#DB8247] mr-6 shrink-0 border border-[#DB8247]/10">
                <Zap size={28} />
              </div>
              <div>
                <h3 className="text-xl font-black mb-2 uppercase tracking-tight text-slate-900">Réactivité</h3>
                <p className="text-slate-600 text-sm leading-relaxed">Nous comprenons les délais industriels. Notre process est optimisé pour traiter vos pièces dans les meilleurs délais.</p>
              </div>
            </div>
          </div>
        </div>

        <div className="bg-black rounded-[3rem] p-16 text-center text-white relative overflow-hidden">
          <div className="absolute top-0 right-0 w-80 h-80 bg-[#DB8247] rounded-full blur-[140px] opacity-10"></div>
          <Factory className="w-16 h-16 text-[#DB8247] mx-auto mb-8" />
          <h2 className="text-3xl font-black mb-6 uppercase tracking-tight">Atelier Haute Performance</h2>
          <p className="text-slate-500 max-w-2xl mx-auto leading-relaxed">
            Installés en région parisienne, nous disposons des équipements nécessaires pour le thermolaquage, la peinture liquide et le sablage sur une large gamme de dimensions.
          </p>
        </div>
      </div>
    </div>
  );
};

export default About;

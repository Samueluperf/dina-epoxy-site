
import React, { useState } from 'react';
import { Mail, MapPin, Phone, Send } from 'lucide-react';

const Contact: React.FC = () => {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => setSubmitted(false), 5000);
  };

  return (
    <div className="pt-32 pb-24 animate-in fade-in duration-700">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20">
          <div>
            <h1 className="text-5xl font-black mb-8 leading-tight uppercase tracking-tighter">Votre projet <span className="text-[#DB8247]">commence</span> ici.</h1>
            <p className="text-xl text-slate-600 mb-12 font-medium">
              Transmettez-nous vos contraintes techniques et nous vous proposerons la solution de traitement de surface la plus adaptée.
            </p>
            
            <div className="space-y-8">
              <div className="flex items-center group">
                <div className="w-14 h-14 bg-slate-100 group-hover:bg-[#DB8247] group-hover:text-white rounded-2xl flex items-center justify-center text-slate-900 mr-5 transition-all">
                  <Mail size={24} />
                </div>
                <div>
                  <p className="text-[10px] text-slate-400 font-black uppercase tracking-widest">Email</p>
                  <p className="text-lg font-bold">contact@dinaepoxy.fr</p>
                </div>
              </div>
              <div className="flex items-center group">
                <div className="w-14 h-14 bg-slate-100 group-hover:bg-[#DB8247] group-hover:text-white rounded-2xl flex items-center justify-center text-slate-900 mr-5 transition-all">
                  <MapPin size={24} />
                </div>
                <div>
                  <p className="text-[10px] text-slate-400 font-black uppercase tracking-widest">Studio</p>
                  <p className="text-lg font-bold">Île-de-France (95, 93, 60)</p>
                </div>
              </div>
              <div className="flex items-center group">
                <div className="w-14 h-14 bg-slate-100 group-hover:bg-[#DB8247] group-hover:text-white rounded-2xl flex items-center justify-center text-slate-900 mr-5 transition-all">
                  <Phone size={24} />
                </div>
                <div>
                  <p className="text-[10px] text-slate-400 font-black uppercase tracking-widest">Tél</p>
                  <p className="text-lg font-bold">01 23 45 67 89</p>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-white rounded-[2.5rem] p-10 lg:p-14 shadow-2xl border border-slate-100 relative overflow-hidden">
            {submitted ? (
              <div className="h-full flex flex-col items-center justify-center text-center animate-in zoom-in">
                <div className="w-24 h-24 bg-green-50 text-green-600 rounded-full flex items-center justify-center mb-6 shadow-xl shadow-green-100">
                  <Send size={32} />
                </div>
                <h3 className="text-2xl font-black mb-2 uppercase tracking-tight">Message Envoyé !</h3>
                <p className="text-slate-500 font-medium">Nous reviendrons vers vous sous 24h avec un devis personnalisé.</p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6 relative z-10">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-[10px] font-black uppercase tracking-widest text-slate-500 mb-2">Nom / Société</label>
                    <input type="text" required className="w-full px-5 py-4 rounded-xl bg-slate-50 border border-slate-200 focus:ring-2 focus:ring-[#DB8247] focus:border-transparent outline-none transition-all font-medium text-sm" placeholder="Ex: Dina Ind." />
                  </div>
                  <div>
                    <label className="block text-[10px] font-black uppercase tracking-widest text-slate-500 mb-2">Email</label>
                    <input type="email" required className="w-full px-5 py-4 rounded-xl bg-slate-50 border border-slate-200 focus:ring-2 focus:ring-[#DB8247] focus:border-transparent outline-none transition-all font-medium text-sm" placeholder="contact@pro.fr" />
                  </div>
                </div>
                <div>
                  <label className="block text-[10px] font-black uppercase tracking-widest text-slate-500 mb-2">Description du projet</label>
                  <textarea required rows={4} className="w-full px-5 py-4 rounded-xl bg-slate-50 border border-slate-200 focus:ring-2 focus:ring-[#DB8247] focus:border-transparent outline-none transition-all resize-none font-medium text-sm" placeholder="Détails techniques, dimensions, quantité..."></textarea>
                </div>
                <button type="submit" className="w-full py-5 bg-[#DB8247] hover:bg-[#c6743d] text-white rounded-xl font-black uppercase tracking-widest shadow-xl shadow-[#DB8247]/20 transition-all transform active:scale-95">
                  Obtenir un Devis Gratuit
                </button>
                <p className="text-center text-[10px] text-slate-400 font-bold uppercase tracking-tight">
                  Traitement garanti sous 24h ouvrées.
                </p>
              </form>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;

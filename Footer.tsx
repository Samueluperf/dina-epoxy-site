
import React from 'react';
import { Mail, Phone, MapPin, Shield } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-black text-slate-400 pt-20 pb-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-16">
          <div className="col-span-1">
            <div className="flex items-center text-white mb-6">
              <Shield className="text-[#DB8247] mr-2" size={24} />
              <span className="text-2xl font-black uppercase">DINA<span className="text-[#DB8247]">EPOXY</span></span>
            </div>
            <p className="max-w-xs mb-6 text-slate-500 leading-relaxed">
              Expert en peinture industrielle et traitement de surface des métaux en Île-de-France. Protection durable et finitions de haute qualité.
            </p>
          </div>
          
          <div>
            <h4 className="text-white font-bold mb-6 text-sm uppercase tracking-widest">Prestations</h4>
            <ul className="space-y-3 text-sm">
              <li><a href="#" className="hover:text-[#DB8247] transition-colors">Thermolaquage</a></li>
              <li><a href="#" className="hover:text-[#DB8247] transition-colors">Peinture Liquide</a></li>
              <li><a href="#" className="hover:text-[#DB8247] transition-colors">Sablage & Grenaillage</a></li>
              <li><a href="#" className="hover:text-[#DB8247] transition-colors">Traitement Anticorrosion</a></li>
            </ul>
          </div>
          
          <div>
            <h4 className="text-white font-bold mb-6 text-sm uppercase tracking-widest">Contact</h4>
            <ul className="space-y-4 text-sm">
              <li className="flex items-center">
                <Mail size={16} className="text-[#DB8247] mr-3" />
                contact@dinaepoxy.fr
              </li>
              <li className="flex items-center">
                <Phone size={16} className="text-[#DB8247] mr-3" />
                01 23 45 67 89
              </li>
              <li className="flex items-center">
                <MapPin size={16} className="text-[#DB8247] mr-3" />
                Val-d’Oise (95), Île-de-France
              </li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-slate-900 pt-10 flex flex-col md:flex-row justify-between items-center text-xs text-slate-600">
          <p>© 2024 DinaEpoxy Peinture Industrielle. Tous droits réservés.</p>
          <div className="flex space-x-8 mt-4 md:mt-0">
            <a href="#" className="hover:text-white">Mentions Légales</a>
            <a href="#" className="hover:text-white">Politique de Confidentialité</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

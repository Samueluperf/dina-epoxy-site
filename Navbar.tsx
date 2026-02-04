
import React, { useState } from 'react';
import { Menu, X, Shield, ChevronDown } from 'lucide-react';
import { SERVICES } from '../constants';

interface NavbarProps {
  activePage: string;
  setPage: (page: string) => void;
}

const Navbar: React.FC<NavbarProps> = ({ activePage, setPage }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);

  // Only show the 3 completed services as requested
  const visibleServices = SERVICES.filter(s => 
    ['microbillage', 'thermolaquage', 'sablage'].includes(s.id)
  );

  const navItems = [
    { label: 'Accueil', id: 'home' },
    { label: 'À propos', id: 'about' },
    { label: 'Réalisations', id: 'portfolio' },
    { label: 'Contact', id: 'contact' },
  ];

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 glass border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-20 items-center">
          <div className="flex items-center cursor-pointer" onClick={() => {setPage('home'); setServicesOpen(false);}}>
            <div className="w-10 h-10 bg-[#DB8247] rounded-lg flex items-center justify-center text-white mr-3 shadow-lg shadow-[#DB8247]/20">
              <Shield size={24} />
            </div>
            <span className="text-xl font-black tracking-tighter text-slate-950 uppercase">DINA<span className="text-[#DB8247]">EPOXY</span></span>
          </div>

          <div className="hidden md:flex items-center space-x-8">
            <button
              onClick={() => setPage('home')}
              className={`text-xs font-bold uppercase tracking-widest transition-colors hover:text-[#DB8247] ${activePage === 'home' ? 'text-[#DB8247]' : 'text-slate-600'}`}
            >
              Accueil
            </button>

            {/* Dropdown Services */}
            <div className="relative group">
              <button 
                onMouseEnter={() => setServicesOpen(true)}
                className={`flex items-center text-xs font-bold uppercase tracking-widest transition-colors hover:text-[#DB8247] ${activePage.startsWith('service') ? 'text-[#DB8247]' : 'text-slate-600'}`}
              >
                Prestations <ChevronDown size={14} className={`ml-1 transition-transform ${servicesOpen ? 'rotate-180' : ''}`} />
              </button>
              
              <div 
                onMouseLeave={() => setServicesOpen(false)}
                className={`absolute left-0 mt-2 w-72 bg-white shadow-2xl rounded-2xl border border-slate-100 overflow-hidden transition-all duration-300 origin-top ${servicesOpen ? 'opacity-100 scale-100' : 'opacity-0 scale-95 pointer-events-none'}`}
              >
                <div className="py-2">
                  {visibleServices.map((s) => (
                    <button
                      key={s.id}
                      onClick={() => { setPage(`service-${s.id}`); setServicesOpen(false); }}
                      className="flex items-center w-full px-6 py-4 text-left hover:bg-slate-50 transition-colors group"
                    >
                      <span className="text-slate-900 group-hover:text-[#DB8247] font-bold text-xs uppercase tracking-tight">
                        {s.id === 'sablage' ? 'Sablage & Grenaillage' : s.title}
                      </span>
                    </button>
                  ))}
                </div>
              </div>
            </div>

            {navItems.slice(1).map((item) => (
              <button
                key={item.id}
                onClick={() => {setPage(item.id); setServicesOpen(false);}}
                className={`text-xs font-bold uppercase tracking-widest transition-colors hover:text-[#DB8247] ${
                  activePage === item.id ? 'text-[#DB8247]' : 'text-slate-600'
                }`}
              >
                {item.label}
              </button>
            ))}
          </div>

          <div className="md:hidden">
            <button onClick={() => setIsOpen(!isOpen)} className="text-slate-900 p-2">
              {isOpen ? <X size={28} /> : <Menu size={28} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      {isOpen && (
        <div className="md:hidden glass border-b border-slate-200 animate-in fade-in slide-in-from-top-4 overflow-y-auto max-h-screen">
          <div className="px-4 pt-4 pb-8 space-y-1">
            <button onClick={() => {setPage('home'); setIsOpen(false);}} className="block w-full px-4 py-4 rounded-xl text-left text-sm font-bold uppercase text-slate-900">Accueil</button>
            
            <div className="px-4 py-2 border-l-2 border-[#DB8247]/20 ml-4 space-y-1">
              <p className="text-[10px] font-black text-slate-400 uppercase tracking-widest mb-2">Nos Prestations</p>
              {visibleServices.map(s => (
                <button 
                  key={s.id}
                  onClick={() => {setPage(`service-${s.id}`); setIsOpen(false);}}
                  className="block w-full py-2 text-left text-xs font-bold text-slate-600 hover:text-[#DB8247]"
                >
                  {s.id === 'sablage' ? 'Sablage & Grenaillage' : s.title}
                </button>
              ))}
            </div>

            {navItems.slice(1).map((item) => (
              <button
                key={item.id}
                onClick={() => {
                  setPage(item.id);
                  setIsOpen(false);
                }}
                className={`block w-full px-4 py-4 rounded-xl text-left text-sm font-bold uppercase ${
                  activePage === item.id ? 'text-[#DB8247]' : 'text-slate-900'
                }`}
              >
                {item.label}
              </button>
            ))}
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
